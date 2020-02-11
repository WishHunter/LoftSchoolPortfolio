import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import user from './modules/user'
import categories from './modules/categories';
import works from './modules/works';

export default new Vuex.Store({
  modules: {
    categories,
    user,
    works
  }
});
