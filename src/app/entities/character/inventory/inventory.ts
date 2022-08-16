import { createEntity } from "../../helpers/createEntity";
import { InventoryItem } from "./types";

export const Inventory = createEntity({
  name: 'Inventory',
  initialState: {
    inventory: {} as { [id:string]: InventoryItem },
  },
  reducers: {
    addItemToInventory(state, payload: { item: Omit<InventoryItem, 'id'> }) {
      const [ lastId ] = Object.keys(state.inventory).sort().reverse();
      const id = lastId ? parseInt(lastId) + 1 : 1;

      const item = { id, ...payload.item }
      state.inventory = { ...state.inventory, [id]: item }
      return state;
    },
  }
})