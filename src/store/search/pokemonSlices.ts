import { createSlice } from "@reduxjs/toolkit";
import { searchController } from "./pokemonController";

interface initalStateInterface {
  resultLoading: boolean;
  isLoaded: boolean;
  result_error: any;
  result: null | {
    name: string;
    weight: number;
    abilities: { ability: [] };
  };
}

const initialState: initalStateInterface = {
  resultLoading: false,
  isLoaded: false,
  result_error: null,
  result: null,
};

const pokemonSlice = createSlice({
  name: "search/pokemon",
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder
      .addCase(searchController.pending, (state: any, action: any) => {
        state.resultLoading = true;
      })
      .addCase(searchController.fulfilled, (state: any, action: any) => {
        state.resultLoading = false;
        state.result = action.payload;
      })
      .addCase(searchController.rejected, (state: any, action: any) => {
        state.result_error = action.payload;
        state.resultLoading = false;
      });
  },
});

export default pokemonSlice.reducer;
