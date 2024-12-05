import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addtodo } from '../reducers/todoSlice';

const AddTodo = () => {

    const [input, setInput] = useState('')
    const dispatch = useDispatch();


    const addTodoHandler = (e) => {
        // console.log(input)
        e.preventDefault()
        dispatch(addtodo(input));
        setInput("")

    }

    // controll componnent
    const inputHandler = (e) => {
        setInput(e.target.value)
    }


    return (
        <form onSubmit={addTodoHandler} className="space-x-3 mt-5">
            <div className='flex justify-center gap-5 bg-pink-100 py-12'>
                <input
                    type="text"
                    className="bg-gray-800 rounded w-[500px] max-w-[100vw] border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    placeholder="Enter a Todo..."
                    value={input}
                    onChange={inputHandler}
                />
                <button
                    type="submit"
                    className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                    Add Todo
                </button>
            </div>
        </form>
    );
}

export default AddTodo;
