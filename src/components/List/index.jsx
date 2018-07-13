import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';

import StudentsStore from '../../stores/students-store';
import SortStore from '../../stores/sort-store';
import UIStore from '../../stores/ui-store';
import ItemList from './ItemList.jsx';
import './List.css';

StudentsStore.getListStudents();

@observer
class List extends Component {
  @observable sortType = SortStore.sortBy;

  @action
  toogleTypeList = () => {
    UIStore.isShowTypeList = !UIStore.isShowTypeList;
  }

  @action
  choiseOrder = () => {
    SortStore.order = !SortStore.order;
    SortStore.sortList();
  }

  @action
  choiseTypeSort = (sort) => {
    SortStore.sortBy = sort;
    SortStore.sortList();
  }

  render() {
    return (
      <div className='list'>
        <div className='list__choiseSort'>
          { UIStore.isShowTypeList ?
            <div className='choiseSort__typeList'>
              {SortStore.sortingTypes.map(sort =>
                <div key={sort.code} className='choiseSort__typeItem'
                  onClick={this.choiseTypeSort.bind(this, sort)}
                >
                  {sort.name}
                </div>)}
            </div>
            : ''
          }
          <div className='choiseSort__type' onClick={this.toogleTypeList}>{SortStore.sortBy.name}</div>
          <div className='choiseSort__order' onClick={this.choiseOrder}>
            { SortStore.order ?
              <div className='order__up'/>
              : <div className='order__down'/>
            }
          </div>
        </div>
        {StudentsStore.students.map(student => <ItemList key={student._id} student={student} />)}
      </div>
    );
  }
}

export default List;
