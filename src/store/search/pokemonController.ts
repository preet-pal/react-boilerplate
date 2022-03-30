import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiURI } from "../../service/apiPaths";
import { instance } from "../../service/service";

interface pokemonInterface {
  pokemonName: string;
}

export const searchController = createAsyncThunk(
  "search/pokemon",
  async (formData: pokemonInterface, { rejectWithValue }) => {
    try {
      const response = await instance.get(
        `${apiURI.searchPokemon}${formData.pokemonName}`
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
