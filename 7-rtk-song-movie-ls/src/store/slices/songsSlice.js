import { createSlice } from '@reduxjs/toolkit';
import { reset } from '../actions';

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
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return [];
    });
  },
});

export const { addSong, removeSong } = songsSlice.actions;
export const songsReducer = songsSlice.reducer;
