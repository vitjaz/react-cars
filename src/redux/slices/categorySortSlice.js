import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeCategory: 'cat_01',
  activeSort: 1
};

export const categorySortSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setActiveCategory (state, action) {
      state.activeCategory = action.payload;
    },
    setActiveSort (state, action) {
      state.activeSort = action.payload;
    },
    setFiltersFromUrl (state, action) {
      state.activeCategory = action.payload.category === '' ? 'cat_01' : action.payload.category;
      state.activeSort = action.payload.order === 'desc' ? 0 : 1;
    }
  }
});

export const { setActiveCategory, setActiveSort, setFiltersFromUrl } = categorySortSlice.actions;

export default categorySortSlice.reducer;
