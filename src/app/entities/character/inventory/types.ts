import { INVENTORY_INITIAL_STATE } from "./inventory";

export type IInventory = Partial<typeof INVENTORY_INITIAL_STATE>
export interface InventoryItem {
  id: number;
  durability: number;
  stats: { [stat: string]: number };
  slot: string;
  type: 'gear';
  icon: number;
}