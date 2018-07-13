import React, { Component } from 'react';
import { observer } from 'mobx-react';

import Header from '../Header/index.jsx';
import List from '../List/index.jsx';
import AddNew from '../AddNew/index.jsx';
import ButtonAddNew from '../AddNew/buttonAddNew.jsx';
import UIStore from '../../stores/ui-store';

import './App.css';
import './Ripple.css';

@observer
class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header name='Студенты'/>
        <div className='App_body'>
          <List />
          {UIStore.addNew ? <AddNew /> : <ButtonAddNew/>}
        </div>
      </div>
    );
  }
}

export default App;
