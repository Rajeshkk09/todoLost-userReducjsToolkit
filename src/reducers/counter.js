import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:0,
    price:0
}

const CounterSlice =  createSlice({
    name:"counter",
    initialState,
    reducers:{

        inc:(state) =>{
            state.value = state.value + 1;
            state.price = state.value * 500;
        },
        dec:(state)=>{
            state.value = state.value -1;
            state.price = state.value *500
        }
    }
})

export const {inc , dec } = CounterSlice.actions;
export default CounterSlice.reducer