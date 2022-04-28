import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";

const initialState = {
    cars: [],
    status: null,
    formErrors: {}
};

const getAll = createAsyncThunk(
    'getAllCars',
    async () => {
        const {data} = await carService.getAll();
        return data
    }
);

const createAsync = createAsyncThunk(
    'create',
    async ({car}, {getState, dispatch, rejectWithValue}) => {
        try {
            const {cars} = getState();
            console.log(cars);
            const {data} = await carService.create(car);
            dispatch(create({car: data}))
        } catch (e) {
            return rejectWithValue({status: e.message, formErrors: e.response.data})
        }
    }
)
const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        create: (state, action) => {
            state.cars.push(action.payload.car)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.status = 'completed'
                state.cars = action.payload
                console.log(action.type);
            })
            .addCase(createAsync.fulfilled, (state, action) => {
                console.log('completed');
                console.log(action.type);
            })
            .addCase(createAsync.rejected, (state, action) => {
                const {status, formErrors} = action.payload;
                state.status = status
                state.formErrors = formErrors
                console.log(action.type);
            })
    }
    // extraReducers: {
    //     [getAll.pending]: (state, action) => {
    //         state.status = 'loading'
    //     },
    //     [getAll.fulfilled]: (state, action) => {
    //         state.status = 'completed'
    //         state.cars = action.payload
    //     },
    //     [getAll.rejected]: (state, action) => {
    //         state.status = 'rejected'
    //     },
    //
    //     [createAsync.fulfilled]: (state, action) => {
    //         console.log('completed');
    //
    //     },
    //     [createAsync.rejected]: (state, action) => {
    //         const {status, formErrors} = action.payload;
    //         state.status = status
    //         state.formErrors = formErrors
    //     },
    //
    // }
});

const {reducer: carReducer, actions: {create}} = carSlice;

const carActions = {
    getAll,
    createAsync
}

export {
    carReducer,
    carActions
}
