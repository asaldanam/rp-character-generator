import { useEffect, useReducer, useState } from "react";
import { createContext, ReactNode, useContext, useMemo } from "react";

/** Creates a simple store slice with React Context */
export default function createContextSlice<
  State extends Object,
  Reducers extends {
    [key: string]: (state: any, payload: any) => any
  },
  ActionTypes extends keyof Reducers,
  EffectFn extends (state: State, payload: any) => Promise<{type: ActionTypes, payload: any} | void>,
  Effects extends {
    [key in keyof Partial<Reducers>]: EffectFn
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
    const nextState = actionReducer(prevState, action.payload);
    
    // console.log(`${name}/${action.type}`, action.payload);
    console.log(`${name}/${action.type}`, action.payload)

    return nextState;
  }

  const Context = createContext<Value>([initialState as State, () => {}]);

  const Provider = (props: { children: ReactNode }) => {
    const [effect, dispatchEffect] = useState({ type: null as any, payload: null as any });
    const [state, dispatch] = useReducer(reducer, initialState as State);

    useEffect(() => {
      (async () => {
        const effectFn = (effects as any)[effect.type] as EffectFn | null;
        if (!effectFn) return;
        const effectAction = await effectFn(state, effect.payload);
        if (!effectAction) return;
        dispatch(effectAction);
      })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [effect])


    const dispatchWithEffect: Dispatch = (params) => {
      dispatch(params);
      dispatchEffect(params);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const value = useMemo(() => ([state, dispatchWithEffect]), [state]);
  
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