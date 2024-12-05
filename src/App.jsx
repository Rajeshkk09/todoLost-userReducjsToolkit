import React from 'react';
import { useSelector ,useDispatch } from 'react-redux';
import {inc,dec} from "./reducers/counter"
import AddTodo from './component/AddTodo';
import RemoveTodo from './component/RemoveTodo';
const App = () => {
    
    const dispatch =  useDispatch();
    const counter =  useSelector(store =>store.counter)
    return (
        <>
            <div className='w-[1200px] mx-auto min-h-[100vh] border border-black py-10 px-4'>
                <div className='h-[250px] w-full bg-blue-300 '>
                    <div className=' flex justify-center items-center h-[50%]'>
                        <span className='text-4xl font-bold text-blue-800'>Counter</span>
                    </div>
                    <div className='text-center'>
                        <h1>  {counter.value} n</h1>
                        <h1>{counter.price} ₹</h1>
                    </div>
                    <div className='text-center my-5'>
                        <button onClick={()=>dispatch(inc())} className='border m-1  border-black p-2 active:border-blue-700 active:bg-gray-400 rounded-[5px]'>inc</button>
                        <button onClick={()=>dispatch(dec())} className='border m-1 border-black p-2 active:border-blue-700 active:bg-gray-400 rounded-[5px]'>dec</button>
                    </div>
                </div>
                <AddTodo/>
                <RemoveTodo/>
            </div>
        </>
    );
}

export default App;
