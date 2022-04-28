import {createSlice} from "@reduxjs/toolkit";

let initialState = {
    name:'Max'
};
const secondSlice = createSlice({
    name:'secondSlice',
    initialState,
});

export const {reducer} = secondSlice;
