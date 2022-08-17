import { Info } from "./info";
import { Inventory } from "./inventory";
import { Stats } from "./stats";
import { ICharacter } from "./types";

export const CHARACTER_INITIAL_STATE = {
  id: '',
  ...Stats.initialState,
  ...Info.initialState,
  ...Inventory.initialState,
}

export const Character = {
  name: 'Character',
  initialState: CHARACTER_INITIAL_STATE,
  reducers: {
    init(_: ICharacter, payload: ICharacter) {
      return payload;
    },
    ...Stats.reducers,
    ...Info.reducers,
    ...Inventory.reducers,
  },
}
