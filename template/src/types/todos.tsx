export type TTodoStatus = "New" | "Doing" | "Complete"; 

export type TTodo = {
  status: TTodoStatus,
  name: string,
  createdAt?: Date,
  updatedAt?: Date,
  estimate?: string
}

export type TTodos = {
  loading: boolean,
  data: Array<TTodo>
}