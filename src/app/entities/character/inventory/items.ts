import { createDraft } from "src/app/helpers/createDraft";
import { InventoryState, InventoryItem, InventoryGearItemId, InventoryGearSlots } from "./types";

export const INVENTORY_INITIAL_STATE: InventoryState = {
  inventory: {
    bag: {},
    gear: {
      boots: null,
      chest: null,
      head: null,
      legs: null,
      mainhand: null,
      offhand: null,
    }
  }
}

export const Inventory = {
  initialState: INVENTORY_INITIAL_STATE,
  reducers: {
    addItemToInventory(state: InventoryState, payload: { item: Omit<InventoryItem, 'id'> }) {
      const draft = createDraft(state);
      const [ lastId ] = Object.keys(draft.inventory.bag || {}).sort().reverse();
      const id = lastId ? parseInt(lastId) + 1 : 1;

      const item = { id, ...payload.item }
      draft.inventory.bag = { ...draft.inventory.bag, [id]: item }
      return draft;
    },
    equipItemFromInventory(state: InventoryState, payload: { itemId: InventoryGearItemId, slot: keyof typeof InventoryGearSlots }) {
      const draft = createDraft(state);
      const item = draft.inventory.bag[payload.itemId];
      if (item?.type !== 'gear') return draft;
      
      draft.inventory.gear[payload.slot] = payload.itemId;
      return draft;
    }
  },
}