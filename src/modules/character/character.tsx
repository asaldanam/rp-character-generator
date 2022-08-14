import { withStore } from "src/libs/withStore";
import styled, { css } from "styled-components";
import { CharacterStore } from "./store";

const Character = () => {
  const [state, dispatch] = CharacterStore.useContext();

  const setHealth = () => dispatch({ type: 'setHealth', payload: { health: 5 } })

  return (
    <Root>
      <div>Character</div>
      <div>{JSON.stringify(state)}</div>
      <button onClick={setHealth}>
        set health
      </button>
    </Root>
  );
};

export default withStore(Character)(CharacterStore);

/** Styled components */

const Root = styled.div`
  ${({ theme }) => css``}
`;
