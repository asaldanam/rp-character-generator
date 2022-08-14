export function withStore<Props extends Object>(Component: React.ComponentType<Props>) {
  return (store: any) => {
    return (props: Props) => (
      <store.Provider>
        <Component {...props as Props} />
      </store.Provider>
    );
  }
}