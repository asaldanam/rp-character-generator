import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { STATS_CONFIG } from "src/app/entities/character/stats/config";
import { Stat } from "src/app/entities/character/stats/types";
import { parseGearItemSeed } from "src/app/entities/item/domain/parseGearItemSeed";

import { selectGearItemSeedSerialized } from "src/app/entities/item/selectors/selectGearItemSeedSerialized";
import { selectGearItemWithDescription } from "src/app/entities/item/selectors/selectGearItemWithDescription";
import { withStore } from "src/libs/withStore";
import styled, { css } from "styled-components";
import { ItemCreatorStore } from "./store";

const ItemCreator = () => {
  const [state, dispatch] = ItemCreatorStore.useContext();
  const { item, error } = state;
  const navigate = useNavigate();
  const serializedSeed = selectGearItemSeedSerialized(state);

  useEffect(() => {
    if (!serializedSeed) return;
    navigate(`/item/${serializedSeed}`)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [serializedSeed])

  function randomStat() { // min and max included 
    const number = Math.floor(Math.random() * (5 - 0 + 1) + 0);
    const stats = Object.keys(STATS_CONFIG);
    return stats[number] as Stat;
  }

  return (
    <Root>
      <div>Item creator</div>
      <pre>{JSON.stringify(selectGearItemSeedSerialized(state), null, 4)}</pre>
      <pre>{JSON.stringify(selectGearItemWithDescription(state), null, 4)}</pre>
      <pre>error {JSON.stringify(error, null, 4)}</pre>
      <pre>parseGearItemSeed {JSON.stringify(parseGearItemSeed(serializedSeed || '{}'), null, 4)}</pre>
      <button onClick={() => dispatch(
        {
          type: 'createGearItem',
          payload: {
            stats: [randomStat(), randomStat(), randomStat()],
            slot: 'mainhand',
            slotSubtype: 'sword',
          }
        }
      )}>
      createArmorItem
      </button>
    </Root>
  );
};

export default withStore(ItemCreator)(ItemCreatorStore);

/** Styled components */

const Root = styled.div`
  ${({ theme }) => css``}
`;
