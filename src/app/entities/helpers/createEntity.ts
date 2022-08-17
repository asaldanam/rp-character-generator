export function createEntity<
  State extends Object,
  Reducer extends (state: State, payload: any) => State,
  Reducers extends {
    [reducer: string]: Reducer
  },
  Effect extends (state: State) => Promise<{type: any, payload: any} | void>,
  Effects extends {
    [key in keyof Partial<Reducers>]: Effect
  },
  Mixins extends BaseEntity<any>[],
  >(
    entity: {
      name: string,
      initialState: State,
      reducers: Reducers,
      effects?: Effects,
      mixins?: Mixins
    },
) {
  if (!entity.mixins) return entity;

  return {
    ...entity,
  };
}

type BaseEntity<State extends { [key:string]: any } = any> = {
  name: string;
  initialState: State;
  reducers: {
    [key: string]: (state: State, payload: any) => State
  };
}

type AnyObject = { [key: string]: any };