import { createSlice } from "@reduxjs/toolkit";

const querySlice = createSlice({
    name: 'query',
    initialState: {
        query: [] 
    },
    reducers: {
        addQuery: (state, action) => {
            state.query.push(action.payload); 
        },
        resloveQuery: (state, action) => {
            const index = state.query.findIndex(query => query.id === action.payload);
            if (index !== -1){
                state.query[index].resloved = true;
            }
        }
        
    }
});

export const { addQuery, resloveQuery } = querySlice.actions;
export default querySlice.reducer;

