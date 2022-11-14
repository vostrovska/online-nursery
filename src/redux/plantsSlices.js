import { createSlice } from '@reduxjs/toolkit';

export const plantsSlices = createSlice({
    name: 'plants',
    initialState:{
        selectedCategory: "TREES"
    },
    reducers:{
        filterCategory: (state, action) => {
            state.selectedCategory = action.payload;
        }
    }
})

export const getSelectedCategory = state => state.plants.selectedCategory;
export const { filterCategory } = plantsSlices.actions;
export default plantsSlices.reducer;