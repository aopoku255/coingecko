import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { fetchSearch } from "../thunks/fetchSearch";

export const fetchSearchThunk = createAsyncThunk(
  "search/fetchSearch",
  async () => {
    const results = await fetchSearch();

    return results;
  }
);

const initialState = {
  data: fetchSearchThunk(),
};

export const searchSlice = createSlice({
  name: "search",
  initialState: initialState,
  reducers: {
    searchText: (state, action) => {
      console.log(state.data);
    },
  },
});

export default searchSlice.reducer;
