import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { faker } from '@faker-js/faker';

const albumsApi = createApi({
  reducerPath: 'albums',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3005',
    //-> The way redux toolkit query works, it's gonna make the use of fetch function that is built directly into the browser to make request.
    //>> IN some cases you might want to overwrite that fetch function
    //! VERY RARE
    //_ So to allow you to override that function and replace it with whatever kind of fetching mechanism you want to put in, you can define the fetchFn
    fetchFn: async (...args) => {
      // TESTING - REMOVE FOR PRODUCTION
      await pause(1000);
      return fetch(...args);
    },
  }),
  endpoints(builder) {
    return {
      fetchAlbums: builder.query({
        // third argument is whatever we pass through useQuery hook
        providesTags: (result, error, user) => {
          // console.log(result);
          const tags = result.map((album) => {
            return { type: 'Album', id: album.id };
          });
          tags.push({ type: 'UsersAlbums', id: user.id });
          return tags;
        },
        query: (user) => {
          return {
            url: '/albums',
            params: {
              userId: user.id,
            },
            method: 'GET',
          };
        },
      }),
      addAlbum: builder.mutation({
        // third argument is whatever we pass through useMutation hook
        invalidatesTags: (result, error, user) => [
          { type: 'UsersAlbums', id: user.id },
        ],
        query: (user) => {
          return {
            url: '/albums',
            method: 'POST',
            body: {
              userId: user.id,
              title: faker.commerce.productName(),
            },
          };
        },
      }),
      removeAlbum: builder.mutation({
        invalidatesTags: (result, error, album) => {
          console.log(album);
          return [{ type: 'Album', id: album.id }];
        },
        query: (album) => {
          return {
            url: `/albums/${album.id}`,
            method: 'DELETE',
          };
        },
      }),
    };
  },
});

//TESTING
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

export const {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  useRemoveAlbumMutation,
} = albumsApi;
export { albumsApi };
