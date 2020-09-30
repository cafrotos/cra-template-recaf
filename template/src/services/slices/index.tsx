import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { wrapDispatch } from 'utils'
import { useSelector as _useSelector } from 'react-redux';

import { todosReducer, todoActions } from 'services/slices/todos'
import { TFunction } from 'types';

const reducer = combineReducers({
  todos: todosReducer
})

export type Reducer = ReturnType<typeof reducer>

export const useDispatch = wrapDispatch({
  todos: todoActions
})

export const useSelector = <T,>(fns: TFunction<Reducer, T>) => _useSelector<Reducer, T>(fns)

export default configureStore({
  reducer
})