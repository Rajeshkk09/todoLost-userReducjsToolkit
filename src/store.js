import { configureStore } from "@reduxjs/toolkit";
import counterReducers from './reducers/counter'; // Corrected spelling
import todoReducers from './reducers/todoSlice';

const store = configureStore({
    reducer: {
        counter: counterReducers, // Correct spelling
        todos: todoReducers
    },
});

export default store;
