import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './features/counter/counterSlice';
import todoSlice from './features/todo/todoSlice';
import queryReducer from './features/query/querySlice'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    todo: todoSlice,
    query: queryReducer, 
     
  },
});