import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from './slices/usersSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { albumsApi } from './apis/albumsApi';
import { photosApi } from './apis/photosApi';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    [albumsApi.reducerPath]: albumsApi.reducer,
    [photosApi.reducerPath]: photosApi.reducer,
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(albumsApi.middleware)
      .concat(photosApi.middleware);
  },
});

//-> TESTING
// window.store = store;
//>> in web console
// store.getState();
//_ check video - Some Internals of Redux Toolkit Query

setupListeners(store.dispatch);

export * from './thunks/fetchUsers';
export * from './thunks/createUser';
export * from './thunks/deleteUser';
export {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  useRemoveAlbumMutation,
} from './apis/albumsApi';
export {
  useFetchPhotosQuery,
  useAddPhotoMutation,
  useRemovePhotoMutation,
} from './apis/photosApi';
