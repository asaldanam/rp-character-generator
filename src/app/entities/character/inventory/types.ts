export interface InventoryItem {
  id: number;
  durability: number;
  stats: { [stat: string]: number };
  slot: keyof typeof InventoryGearSlots;
  type: 'gear';
  icon: number;
}

export type InventoryState = {
  inventory: {
    bag: { [id: string]: InventoryItem },
    gear: {
      [Slot in InventoryGearSlots]: InventoryGearItemId | null;
    }
  }
};

export enum InventoryGearSlots {
  head = 'head',
  legs = 'legs',
  chest = 'chest',
  boots = 'boots',
  mainhand = 'mainhand',
  offhand = 'offhand',
}

export type InventoryGearItemId = number;