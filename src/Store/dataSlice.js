import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk(
    "data/fetchData",
    async function(){
        const response = await fetch("http://localhost:5001/posts");
        const data = await response.json();
        return data
    }
)

const dataSlice = createSlice({
    name: "data",
    initialState: {
        data: [],
        search: "",
        status: null,
        error: null
    },
    reducers: {
        searchData(state, action){
            state.search = action.payload;
        }
    },
    extraReducers: {
        [fetchData.pending]: (state) =>{
            state.status = "Loading ...";
            state.error = null
        },
        [fetchData.fulfilled]: (state, action) =>{
            state.status = "Success ...";
            state.data = action.payload;
        },
        [fetchData.rejected]: (state) =>{
            state.error = "Something went wrong";
        }
    }
});

export const {searchData} = dataSlice.actions;

export default dataSlice.reducer;