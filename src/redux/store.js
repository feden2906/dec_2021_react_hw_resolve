import { combineReducers, configureStore } from '@reduxjs/toolkit';

import catsReducer from './slices/cat.slice';
import dogsReducer from './slices/dog.slice';

const rootReducer = combineReducers({
  cats: catsReducer,
  dogs: dogsReducer
});

export const store = configureStore({
  reducer: rootReducer
})
