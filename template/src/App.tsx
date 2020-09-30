import React from 'react';
import { Button, Row, Spin } from 'antd';
import { useDispatch, useSelector } from 'services/slices';
import { TTodo, TTodos } from 'types/todos';

const ButtonAdd = () => {
  const dispatch = useDispatch();

  const _onClick = () => {
    dispatch((actions) => actions.todos.createThunk({
      name: "asdfasdf",
      status: "New"
    }))
  }

  return (
    <Button type="primary" onClick={_onClick}>
      {"Add Todo Test"}
    </Button>
  )
}

const LoadingL = () => {
  const loading = useSelector<boolean>(state => state.todos.loading);
  return (
    <>
    {console.log("Loading Render")}
    {loading ? <span>Loading</span> : null}
    </>
  )
}

const ListTodo = () => {
  const todos = useSelector<Array<TTodo>>(state => state.todos.data)
  return (
    <>
      <Spin spinning={false}>
        {console.log("List Todo Render")}
        {
          todos.map((todo, index) => (
            <Row key={index}>
              {todo.name}
            </Row>
          ))
        }
      </Spin>
      <LoadingL />
    </>
  )
}

export default () => {
  return (
    <>
      {console.log("App Render")}
      <ListTodo />
      <ButtonAdd />
    </>
  )
}