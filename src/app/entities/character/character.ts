import slugify from "slugify";
import { createDraft } from "src/app/helpers/createDraft";
import { Info } from "./info";
import { Inventory } from "./Inventory";
import { Stats } from "./stats";
import { CharacterState } from "./types";

export const CHARACTER_INITIAL_STATE = {
  id: '',
  ...Info.initialState,
  ...Stats.initialState,
  ...Inventory.initialState,
}

export const Character = {
  initialState: CHARACTER_INITIAL_STATE,
  reducers: {
    set(_: CharacterState, payload: CharacterState) {
      return payload;
    },
    save(state: CharacterState, payload: null) {
      const draft = createDraft(state);
      if (!draft.info.name) return draft;
      draft.id = slugify(draft.info.name.toLocaleLowerCase());
      return draft;
    },
    load(state: CharacterState, payload: Pick<CharacterState, 'id'>) {
      return state;
    },
    ...Info.reducers,
    ...Stats.reducers,
    ...Inventory.reducers,
  },
}
