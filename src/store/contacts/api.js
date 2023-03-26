import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://641af78f1f5d999a4457bdae.mockapi.io";

export const fetchContacts = createAsyncThunk('contacts/fetchAll',
	async (_, thunkApi) => {
		try {
            const response = await axios.get('/contacts/all');
            console.log(response.data.result);
			return response.data.result;
		} catch (e) {
			return thunkApi.rejectWithValue(e.message);
		}
	}
);
