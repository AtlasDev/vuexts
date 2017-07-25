import { State, Store as VuexStore } from '../../../src';

// @VuexStore({
//   state: 'hellow',
// })
export class Store extends VuexStore {
  @State public isLoggedin: boolean = true;

  constructor() {
    super();
    // console.log(this, 'hello world');
    // this.isLoggedin = false;
    console.log(this.isLoggedin);
  }
}
