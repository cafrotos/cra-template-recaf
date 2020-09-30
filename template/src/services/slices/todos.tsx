import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createTodo } from "services/todos";
import { TAction } from "types";
import { TTodo, TTodos } from 'types/todos'

const initialState: TTodos = {
  loading: false,
  data: []
}

const createThunk = createAsyncThunk(
  "createThunk",
  async (todo: TTodo) => {
    return await createTodo(todo)
  }
)

const { reducer, actions } = createSlice({
  name: "todos",
  initialState,
  reducers: {
    add: (state: TTodos, action: TAction<TTodo>) => {
      state.data.push(action.payload)
    },
  },
  extraReducers: {
    [`${createThunk.pending}`]: (state: TTodos) => {
      state.loading = true
    },
    [`${createThunk.fulfilled}`]: (state: TTodos, action: TAction<TTodo>) => {
      state.loading = false
      state.data.push(action.payload)
    },
  }
})

export const todoActions = {
  ...actions,
  createThunk
}
export const todosReducer = reducer