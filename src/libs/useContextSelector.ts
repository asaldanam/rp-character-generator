import createContextSlice from "./createContextSlice";

export function useContextSelector<Store extends ReturnType<typeof createContextSlice>>(store: Store) {
  const withSelector = <DerivedState extends any>(selector: (state: ReturnType<Store['useContext']>[0]) => DerivedState) => {
    const [state, dispatch] = store.useContext();
    const derivedState = selector(state);
    const result: [DerivedState, typeof dispatch] = [derivedState, dispatch];
    return result;
  }

  return withSelector;
}