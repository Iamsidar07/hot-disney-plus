import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  movies: [],
  user: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setSignOut:(state)=>{
      state.user=null;
    }
  },
});

export const { setMovies, setUser,setSignOut } = movieSlice.actions;

export const selectMovies = (state) =>state.movie.movies;


  
export const selectUser = (state) =>  state.movie.user;

export default movieSlice.reducer;
