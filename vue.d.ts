/**
 * Extends interfaces in Vue.js
 */

import Vue = require('vue');
import { Store } from './src/index';

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    store?: any;
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $store: any;
  }
}
