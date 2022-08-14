import { useReducer } from "react";
import { createContext, ReactNode, useContext, useMemo } from "react";

/** Creates a simple store with React Context */
export default function createContextStore<
  State extends Object,
  Reducers extends {
    [key: string]: (state: State, payload: any) => State
  },
  ActionTypes extends keyof Reducers,
  Effect extends (state: State) => Promise<{type: any, payload: any}>,
  Effects extends {
    [key in keyof Partial<Reducers>]: Effect
  },
  // EffectTypes extends keyof Store['effects'],
  >(
    store: {
      name: string,
      initialState: State,
      reducers: Reducers,
      effects?: Effects,
    },
) {
  const { initialState, name, reducers, effects = {} } = store;

  type Dispatch = <
    ActionType extends ActionTypes,
    Payload extends Parameters<Reducers[ActionType]>[1],
  >(params: { type: ActionType, payload: Payload }) => void;

  type Value = [State, Dispatch];
  
  function reducer(prevState: any, action: { type: any, payload: any }) {
    const actionReducer = reducers[action.type] as (state: State, payload: any) => State;
    const draft = actionReducer(prevState, action.payload);
    const nextState = {...draft};
    
    console.log(`${name}/${action.type}`, prevState, nextState);

    return nextState;
  }

  const Context = createContext<Value>([initialState as State, () => {}]);

  const Provider = (props: { children: ReactNode }) => {
    const [state, _dispatch] = useReducer(reducer, initialState as State);

    const dispatch: Dispatch = (params) => {
      _dispatch(params);
      //@ts-ignore
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

type Action<
  Reducers extends {
    [key: string]: (state: any, payload: any) => any
  },
  Type extends keyof Reducers = keyof Reducers,
  Payload extends Parameters<Reducers[Type]>[1] = Parameters<Reducers[Type]>[1]
  > = {
    type: Type,
    payload?: Payload
}