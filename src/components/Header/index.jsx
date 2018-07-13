import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { action } from 'mobx';

import UIStore from '../../stores/ui-store';
import './header.css';

@observer
class Header extends Component {
  @action hideAddNew = () => {
    UIStore.addNew = false;
  }

  render() {
    const { name } = this.props;
    return (
      <header className='header'>
        {
          UIStore.addNew && name !== 'Студенты' ?
            <div type='button' className='header__last-button' onClick={this.hideAddNew}/>
          : ''
        }
        <div className='header__name'>
          {name}
        </div>
      </header>
    );
  }
}

export default Header;
