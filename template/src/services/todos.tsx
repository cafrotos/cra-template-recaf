import { TFunction } from "types";
import { TTodo } from "types/todos";

export const createTodo = (todo: TTodo) => new Promise((resolve:TFunction<TTodo, void>, reject: Function) => {
  setTimeout(() => {
    resolve(todo)
  }, 1000);
})