import { createDraft } from "src/app/helpers/createDraft";
import { getGearItemFromSeed } from "./helpers/getGearItemFromSeed";
import { GearItemSeed, ItemState } from "./types";

export const ITEM_INITIAL_STATE: ItemState = {
  item: null,
  error: null,
}

export const Item = {
  initialState: ITEM_INITIAL_STATE,
  reducers: {
    createGearItem(state: ItemState, payload: GearItemSeed) {
      const draft = createDraft(state);
      const { item, error } = getGearItemFromSeed(payload);
      
      if (error) {
        draft.error = error
        draft.item = null;
        return draft;
      }

      draft.item = item

      return draft;
    }
  } 
}