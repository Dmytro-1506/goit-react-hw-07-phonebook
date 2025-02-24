import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.filter;

export const findedContacts = createSelector([selectContacts, selectFilter], (contacts, filter) => {
    return contacts.filter( element => element.name.toLowerCase().includes(filter.toLowerCase()))
})
