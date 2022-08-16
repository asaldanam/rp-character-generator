import { useParams } from "react-router-dom";
import { useQuery } from "src/libs/useQuery";
import { withStore } from "src/libs/withStore";
import styled, { css } from "styled-components";
import { CharacterStore } from "./store";

const Character = () => {
  const params = useParams();
  const { edit } = useQuery();
  const [character, dispatch] = CharacterStore.useContext();

  console.log(params, edit)

  return (
    <Root>
      <div>Character</div>
      <pre>{JSON.stringify(character, null, 4)}</pre>
      <button onClick={() => dispatch({ type: 'updateHealth', payload: { health: 100 } })}>
        updateHealth
      </button>
      <button onClick={() => dispatch({ type: 'updateStat', payload: { stat: 'attr_vitality', value: character.stats.attr_vitality + 1 } })}>
        increment vitality
      </button>
      <button onClick={() => dispatch({ type: 'updateStat', payload: { stat: 'attr_vitality', value: character.stats.attr_vitality - 1 } })}>
        decrement vitality
      </button>
      <button onClick={() => dispatch({ type: 'updateInfo', payload: { avatar: 'imagen', name: 'Menzies', title: 'Señor de la muerte' } })}>
        Update info
      </button>
      {/* <button onClick={() => dispatch({
        type: 'addItemToInventory', payload: {
          item: {
            icon: 1,
            durability: 1,
            slot: 'head',
            stats: {},
            type: 'gear'
          }
        }
      })}>
        Add item
      </button> */}
    </Root>
  );
};

export default withStore(Character)(CharacterStore);

/** Styled components */

const Root = styled.div`
  ${({ theme }) => css``}
`;
