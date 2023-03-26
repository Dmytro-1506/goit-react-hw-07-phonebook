import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts } from "./contacts/api";

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
    extraReducers: {
        [fetchContacts.pending](state) {
            state.isLoading = true;
        },
        [fetchContacts.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
            console.log(action.payload);
            console.log('bye-bye');
        },
        [fetchContacts.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
    // reducers: {
        
    //     addContact(state, action) {
    //         state.contacts.push(action.payload.newContact)
    //     },
    //     removeContact(state, action) {
    //         state.contacts = state.contacts.filter(contact => contact.id !== action.payload)
    //     },
    //     filterContacts(state, action) {
    //         state.filter = action.payload.trim()
    //     }
    // }
});

export const { addContact, removeContact, filterContacts } = phonebookSlice.actions;

export default phonebookSlice.reducer;