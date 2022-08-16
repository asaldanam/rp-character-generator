export function createEntity<
  State extends Object,
  Reducers extends {
    [key: string]: (state: State, payload: any) => State
  },
  Effect extends (state: State) => Promise<{type: any, payload: any} | void>,
  Effects extends {
    [key in keyof Partial<Reducers>]: Effect
  },
  >(
    entity: {
      name: string,
      initialState: State,
      reducers: Reducers,
      effects?: Effects,
    },
  ) {
  return entity;
}