import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: '/songs',
  }),
  endpoints: (builder) => ({
    getSongs: builder.query({
      query: () => '/posts',
    }),
  }),
})
export const { useGetPostsQuery } = apiSlice