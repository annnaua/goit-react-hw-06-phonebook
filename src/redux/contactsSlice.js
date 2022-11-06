import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const phonebookInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: phonebookInitialState,

  reducers: {
    addContact: {
      reducer(state, action) {
        console.log('Add');

        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact: {
      reducer(state, action) {
        console.log('Delete');

        const deleted = state.findIndex(
          contact => contact.id === action.payload
        );
        state.splice(deleted, 1);
      },
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
