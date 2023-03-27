import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://641af78f1f5d999a4457bdae.mockapi.io/contacts/contacts";

export const fetchContacts = createAsyncThunk('contacts/fetchAll',
	async (_, thunkApi) => {
		try {
            console.log(axios.defaults.baseURL);
            const response = await axios.get('/contacts/all');
            console.log(response.data);
			return response.data.result;
		} catch (e) {
			console.log(e);
			return thunkApi.rejectWithValue(e.message);
		}
	}
);
