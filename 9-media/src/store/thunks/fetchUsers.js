import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//-> When we create an async thunk it ll have the following three properties
//_ fetchUsers.pending === 'users/fetch/pending'
//_ fetchUsers.fulfilled === 'users/fetch/fulfilled'
//_ fetchUsers.rejected === 'users/fetch/rejected'
// const fetchUsersTwo = createAsyncThunk('users/fetch', async () => {
//   const response = await axios.get(
//     'https://jsonplaceholder.typicode.com/users'
//   );

//   return response.data;
// });

const fetchUsers = createAsyncThunk('users/fetch', async () => {
  const response = await axios.get('http://localhost:3005/users');

  // DEV ONLY
  await pause(1000);

  return response.data;
});

// DEV ONLY !!!
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

export { fetchUsers };
