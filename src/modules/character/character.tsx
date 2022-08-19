import { useParams } from "react-router-dom";
// import { useQuery } from "src/libs/useQuery";
import { useEffect } from "react";
import { withStore } from "src/libs/withStore";
import styled, { css } from "styled-components";
import { CharacterStore } from "./store";

const Character = () => {
  const params = useParams();
  // const { edit } = useQuery();
  const [character, dispatch] = CharacterStore.useContext();

  useEffect(() => {
    if (!params?.id) return;
    dispatch({ type: 'load', payload: { id: params.id} })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
      <button onClick={() => dispatch({ type: 'updateInfo', payload: { avatar: 'imagen', name: 'Menzies Crâne', title: 'Señor de la muerte' } })}>
        Update info
      </button>
      <button onClick={() => dispatch({
        type: 'addItemToInventory', payload: {
          item: {
            slot: 'chest',
            durability: 1,
            icon: 1,
            stats: {},
            type: 'gear',
          }
        } })}>
        addItemToInventory
      </button>
      <button onClick={() => dispatch({type: 'equipItemFromInventory', payload: {slot: 'chest', itemId: 1} })}>
        equipGear
      </button>
      <button onClick={() => dispatch({ type: 'save', payload: null })}>
        Save
      </button>
    </Root>
  );
};

export default withStore(Character)(CharacterStore);

/** Styled components */

const Root = styled.div`
  ${({ theme }) => css``}
`;
