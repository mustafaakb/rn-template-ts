import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_URL} from '../api.config';

export interface Todo {
  id: number;
  text: string;
}

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({baseUrl: API_URL}),
  tagTypes: ['Todos'],
  endpoints: builder => ({
    getAll: builder.query<Todo[], void>({
      query: () => `todos`,
      providesTags: [{type: 'Todos', id: 'LISTS'}],
    }),
    updateTodo: builder.mutation<Todo, Todo>({
      query(todo) {
        return {
          url: `todos/${todo.id}`,
          method: 'PUT',
          body: todo,
        };
      },
      invalidatesTags: [{type: 'Todos', id: 'LIST'}],
    }),
  }),
});
