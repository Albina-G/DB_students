import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { action } from 'mobx';

import UIStore from '../../stores/ui-store';

import './buttonAddNew.css';

@observer
class ButtonAddNew extends Component {
  @action showAddNew = () => {
    UIStore.addNew = true;
  }

  render() {
    return (
      <div className='addNew-button ripple' onClick={this.showAddNew}>
        <div className='addNew-button__icon'/>
      </div>
    );
  }
}

export default ButtonAddNew;
