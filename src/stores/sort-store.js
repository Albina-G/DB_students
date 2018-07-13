import { observable, action } from 'mobx';
import arraySort from 'array-sort';

import StudentsStore from './students-store';

class SortStore {
  sortingTypes = [
    {
      name: 'По наименованию',
      code: 'firstName'
    },
    {
      name: 'По дате изменения',
      code: 'date'
    },
    {
      name: 'По рейтингу',
      code: 'rating'
    }
  ];

  @observable sortBy = this.sortingTypes[1];

  @observable order = true;

  @action
  sortList = () => {
    StudentsStore.students.replace(arraySort(StudentsStore.students.slice(), this.sortBy.code, { reverse: !this.order }));
  }
}

export default new SortStore();
