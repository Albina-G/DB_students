import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { action } from 'mobx';

import SortStore from '../../stores/sort-store';
import UIStore from '../../stores/ui-store';
import './ChoiseSort.css';

@observer
class ChoiseSort extends Component {
  constructor(props) {
    super(props);

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      UIStore.isShowTypeList = false;
    }
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  @action
  choiseTypeSort = (sort) => {
    SortStore.sortBy = sort;
    SortStore.sortList();
  }

  render() {
    return (
      <div className='choiseSort__typeList' ref={this.setWrapperRef}>
        {SortStore.sortingTypes.map(sort =>
          <div key={sort.code} className='choiseSort__typeItem'
            onClick={this.choiseTypeSort.bind(this, sort)}
          >
            {sort.name}
          </div>)}
      </div>
    );
  }
}

export default ChoiseSort;
