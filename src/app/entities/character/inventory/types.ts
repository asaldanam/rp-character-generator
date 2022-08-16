
export interface InventoryItem {
  id: number;
  durability: number;
  stats: { [stat: string]: number };
  slot: string;
  type: 'gear';
  icon: number;
}