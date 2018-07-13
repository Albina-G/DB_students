import React, { Component } from 'react';
import { observer } from 'mobx-react';

import StudentsStore from '../../stores/students-store';
import './ItemList.css';

@observer
class ItemList extends Component {
  clickOnDelete = () => {
    StudentsStore.deleteStudent(this.props.student._id);
  };

  widthStar(rating) {
    return Math.round(rating * 24 / 10);
  }

  render() {
    const { student } = this.props;

    return (
      <div className='item-list'>
        <div className='item-list__names'>
          <div className='item-list__first-name'>{student.firstName}</div>
          <div className='item-list__last-name'>{student.lastName}</div>
        </div>
        <div className='item-list__option'>
          <div className='item-list__rating'>
            <div className='item-list__rating__fill' style={{ width: this.widthStar(student.rating) + 'px' }}/>
            <div className='item-list__rating__stars'/>
          </div>
          <div className='item-list__delete' onClick={this.clickOnDelete}/>
        </div>
      </div>
    );
  }
}

export default ItemList;
