import React, { Component } from 'react';

import Header from '../Header/index.jsx';
import StudentsStore from '../../stores/students-store';
import './AddNew.css';

class AddNew extends Component {
  createNewStudent = () => {
    const firstName = document.querySelector('.addNew__firstName__input').value.replace(/(^\s*)|(\s*)$/g, '');
    const lastName = document.querySelector('.addNew__lastName__input').value.replace(/(^\s*)|(\s*)$/g, '');
    const rating = document.querySelector('.addNew__ratingName__input').value.replace(/(^\s*)|(\s*)$/g, '');
    if (firstName && lastName && rating) {
      if (rating > 0 && rating < 11) {
        StudentsStore.addStudent(firstName, lastName, rating);
      }
    }
  };

  render() {
    return (
      <div className='addNew'>
        <div className='addNew__popap'>
          <Header name='Добавить студента'/>
          <form className='addNew__form' action={this.createNewStudent}>
            <div className='addNew__name-field'>Имя</div>
            <input className='addNew__firstName__input input' type='text'
              autoFocus required
            />
            <div className='addNew__name-field'>Фамилия</div>
            <input className='addNew__lastName__input input'  type='text' required/>
            <div className='addNew__name-field'>Рейтинг (1-10)</div>
            <input className='addNew__ratingName__input input'  type='number' required
              min='1' max='10' step='1'
            /><br/>
            <input className='addNew__form__submit ripple' type='submit'
              onClick={this.createNewStudent} value='Создать'
            />
          </form>
        </div>
      </div>
    );
  }
}

export default AddNew;
