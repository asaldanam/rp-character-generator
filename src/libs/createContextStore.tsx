import { useReducer } from "react";
import { createContext, ReactNode, useContext, useMemo } from "react";

/** Creates a simple store with React Context */
export default function createContextStore<
  Store extends StoreBase,
  State extends Store['initialState'],
  ActionTypes extends keyof Store['reducers'],
  Reducers extends Store['reducers'],
  EffectTypes extends keyof Store['effects'],
  >(
    { initialState, name, reducers, effects = {} }: Store,
) {
  type Effect = <
    ActionType extends ActionTypes,
    Payload extends Parameters<Reducers[ActionType]>[1],
    >(state: State) => Promise<{ type: ActionType, payload: Payload }>;

  type Dispatch = <
    ActionType extends ActionTypes,
    Payload extends Parameters<Reducers[ActionType]>[1],
    >(params: { type: ActionType, payload: Payload }) => void;

  type Value = [State, Dispatch];
  
  function reducer(prevState: any, action: { type: any, payload: any }) {
    const actionReducer = reducers[action.type] as (state: State, payload: any) => State;
    const nextState = {...actionReducer(prevState, action.payload)};
    
    console.log(`${name}/${action.type}`, prevState, nextState);

    return nextState;
  }

  const Context = createContext<Value>([initialState as State, () => {}]);

  const Provider = (props: { children: ReactNode }) => {
    const [state, _dispatch] = useReducer(reducer, initialState as State);

    const dispatch: Dispatch = (params) => {
      _dispatch(params);
      const effect = effects[params.type] as Effect | null;
      
      if (effect) {
        effect(state).then((effectAction) => {
          _dispatch(effectAction)
        })
      }
    }

    const value = useMemo(() => ([state, dispatch]), [state]);
  
    return (
      <Context.Provider value={value as Value}>
        {props.children}
      </Context.Provider>
    );
  }

  return {
    Provider,
    useContext: () => useContext(Context),
  }
}

type StoreBase<State extends Object = {}> = {
  name: string;
  initialState: State;
  reducers: any;
  effects?: any;
}