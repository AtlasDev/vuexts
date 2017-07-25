import Vue from 'vue';

import { Store } from './store';

import Main from './component/index.vue';

/**
 * Create the VueJS instance.
 */
// tslint:disable-next-line:no-unused-variable
const app = new Vue({
  el: '#app',
  render: h => h(Main),
  store: new Store(),
});
