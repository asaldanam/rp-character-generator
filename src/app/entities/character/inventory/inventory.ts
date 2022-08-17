import { IInventory, InventoryItem } from "./types";

export const INVENTORY_INITIAL_STATE = {
  inventory: {} as { [id:string]: InventoryItem },
}

export const Inventory = {
  initialState: INVENTORY_INITIAL_STATE,
  reducers: {
    addItemToInventory(state: IInventory , payload: { item: Omit<InventoryItem, 'id'> }) {
      const [ lastId ] = Object.keys(state.inventory || {}).sort().reverse();
      const id = lastId ? parseInt(lastId) + 1 : 1;

      const item = { id, ...payload.item }
      state.inventory = { ...state.inventory, [id]: item }
      return state;
    },
  },
}