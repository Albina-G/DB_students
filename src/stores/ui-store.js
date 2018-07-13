import { observable } from 'mobx';

class UIStore {
  @observable addNew = false;

  @observable isShowTypeList = false;
}

export default new UIStore();
