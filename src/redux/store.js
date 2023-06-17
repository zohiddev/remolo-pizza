import { createStore } from 'redux';
import productReducer from './reducer';

export const store = createStore(productReducer)