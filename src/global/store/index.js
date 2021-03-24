import Vue from 'vue';
import Vuex from 'vuex';

import { state, mutations } from './config'

Vue.use(Vuex);

const store = new Vuex.Store({
    state, mutations
});

export { store }