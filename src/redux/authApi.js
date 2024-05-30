import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// import axios from 'axios';
// axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
// const axiosBaseQuery =
//   ({ baseUrl } = { baseUrl: '' }) =>
//   async ({ url, method, data, params, headers }) => {
//     try {
//       const result = await axios({
//         url: baseUrl + url,
//         method,
//         data,
//         params,
//         headers,
//       });
//       return { data: result.data };
//     } catch (axiosError) {
//       const err = axiosError;
//       return {
//         error: {
//           status: err.response?.status,
//           data: err.response?.data || err.message,
//         },
//       };
//     }
//   };

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://goit-task-manager.herokuapp.com/',
  prepareHeaders: (headers, { getState }) => {
    const token = localStorage.getItem('token') || '';

    console.log('token', token);
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const authApi = createApi({
  reducerPath: 'Auth',
  baseQuery: baseQuery,
  tagTypes: ['User'],
  endpoints: builder => ({
    registerUser: builder.mutation({
      query: user => ({
        url: `users/signup`,
        method: 'POST',
        body: user,
      }),
      invalidatesTags: ['User'],
    }),

    loginUser: builder.mutation({
      query: login => ({
        url: 'users/login',
        method: 'POST',
        body: login,
      }),
      invalidatesTags: ['User'],
    }),

    currentUser: builder.query({
      query: () => ({
        url: 'users/current',
      }),
      // invalidatesTags: ['User'],
    }),
  }),
});
export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useCurrentUserQuery,
} = authApi;
