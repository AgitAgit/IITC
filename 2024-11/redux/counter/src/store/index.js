import { createStore } from 'redux';

import counterReducer from "./counterReducer/counterReducer.js";

const store = createStore(counterReducer);

export default store;