export type Method = "POST" | "PATCH" | "GET" | "DELETE"

export type TApi = {
  path: string,
  query?: Object,
  method: Method,
  header?: Object,
  body?: Object,
  isAuth?: boolean
}

export type TAction<T> = {
  payload: T
}

export type TFunction<T, R> = (t: T) => R