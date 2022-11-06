import { createSlice } from '@reduxjs/toolkit';

const filtersInitialState = {
  filter: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: filtersInitialState,

  reducers: {
    filteredContacts: {
      reducer(state, action) {
        state.filter = action.payload;
      },
    },
  },
});

export const { filteredContacts } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
