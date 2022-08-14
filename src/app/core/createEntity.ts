export function createEntity<
  State extends any,
  Reducers extends {
    [key: string]: (state: State, payload: any) => State
  },
  >(entity: {
    name: string,
    initialState: State,
    reducers: Reducers,
    effects?: any,
  }) {
  return entity;
}