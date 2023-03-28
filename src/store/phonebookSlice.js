import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contacts/api";

const handlePending = state => {
    state.isLoading = true;
};
const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

export const phonebookSlice = createSlice({
    name: 'phonebook',
    initialState: {
        contacts: {
            items: [],
            isLoading: false,
            error: null
        },
        filter: '',
    },

    reducers: {
        filterContacts(state, action) {
            state.filter = action.payload.trim()
        },
    },

    extraReducers: {
        [fetchContacts.pending]: handlePending,
        [fetchContacts.rejected]: handleRejected,
        [addContact.pending]: handlePending,
        [addContact.rejected]: handleRejected,
        [deleteContact.pending]: handlePending,
        [deleteContact.rejected]: handleRejected,
        [fetchContacts.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.contacts.items = action.payload;
        },
        [addContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.contacts.items.push(action.payload);
        },
        [deleteContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            const index = state.contacts.items.findIndex(
                contact => contact.id === action.payload.id
            );
            state.contacts.items.splice(index, 1);
        },
    },
});

export const { filterContacts } = phonebookSlice.actions;

export default phonebookSlice.reducer;