import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://641af78f1f5d999a4457bdae.mockapi.io/contacts";

export const fetchContacts = createAsyncThunk('contacts/fetchAll',
	async (_, thunkApi) => {
		try {
            const response = await axios.get('/contacts');
			return response.data;
		} catch (e) {
			console.log(e);
			return thunkApi.rejectWithValue(e.message);
		}
	}
);

export const addContact = createAsyncThunk(
	'contacts/addItem',
	async (newContact, thunkApi) => {
		try {
			const response = await axios.post('/contacts', newContact);
			return response.data.result;
		} catch (e) {
			console.log(e.message);
			return thunkApi.rejectWithValue(e.message);
		}
	}
);

export const deleteContact = createAsyncThunk(
	'contacts/deleteItem',
	async (id, thunkApi) => {
		try {
			const response = await axios.delete(`/contacts/${id}`);
			return {
				id,
				message: response.data.result,
			};
		} catch (e) {
			console.log(e.message);
			return thunkApi.rejectWithValue(e.message);
		}
	}
);
