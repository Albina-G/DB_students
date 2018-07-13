import { action, observable } from 'mobx';
import Api from '../api';
import UIStore from './ui-store';

class StudentsStore {
  @observable students = [];

  @action getListStudents() {
    Api.getAllStudents().then(answer => {
      this.students = [];
      answer.forEach(student => {
        this.students.push(student);
      });
    });
  }

  @action addStudent = (firstName, lastName, rating) => {
    Api.addStudent({
      firstName: firstName,
      lastName: lastName,
      rating: rating
    }).then(student => {
      this.students.push(student);
      UIStore.addNew = false;
    });
  };

  @action deleteStudent = (id) => {
    Api.deleteStudent(id).then(student => {
      if (student === 'OK') {
        for (let index = 0; index < this.students.length; index++) {
          if (this.students[index]._id === id) {
            this.students.splice(index, 1);
          }
        }
      }
    });
  };
}

export default new StudentsStore();
