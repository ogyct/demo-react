import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import type {PageDTO, Pagination, PostDTO} from './types'

// Define a service using a base URL and expected endpoints
export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8080/posts'}),
    endpoints: (builder) => ({
        getPosts: builder.query<PageDTO<PostDTO>, Pagination>({
            query: ({pageNumber = 0, pageSize = 10}) =>
                `?pageSize=${pageSize}&pageNumber=${pageNumber}`,
        }),
    }),
})

export const {useGetPostsQuery} = postsApi

