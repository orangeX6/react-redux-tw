import { configureStore, createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
  name: 'movie',
  initialState: [],
  reducers: {
    addMovie(state, action) {
      state.push(action.payload);
    },
    removeMovie(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
    reset(state, action) {
      return [];
    },
  },
});

const songsSlice = createSlice({
  name: 'song',
  initialState: [],
  reducers: {
    // 'song' + '/' + 'addSong' = 'song/addSong'
    // state here is only the piece of state that is managed by this reducer slice. IT IS NOT THE BIG STATE OBJECT IN THE STORE
    addSong(state, action) {
      state.push(action.payload);
    },
    removeSong(state, action) {
      //action.payload === string, the song name
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
  },
  //_ extraReducers(builder){}
  //-> OR
  extraReducers: (builder) => {
    builder.addCase(moviesSlice.actions.reset, (state, action) => {
      // OR
      // builder.addCase(moviesSlice.actions.reset.toString(), (state, action) => {
      return [];
    });
  },
});

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
    movies: moviesSlice.reducer,
  },
});

// console.log(songsSlice.actions);
// console.log(songsSlice.actions.addSong('ss'));

// console.log(store);
// const startingState = store.getState();
// console.log(startingState);

// store.dispatch({
//   type: 'song/addSong',
//   payload: 'New Song!!!',
// });
// store.dispatch(songsSlice.actions.addSong('New Song!!!'));

// console.log(store.getState());
// console.log(songsSlice.actions.addSong.type);
// console.log(songsSlice.actions.addSong.toString());

export { store };
export const { addSong, removeSong } = songsSlice.actions;
export const { addMovie, removeMovie, reset } = moviesSlice.actions;
