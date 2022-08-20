import { Item } from "../../item/types";

export type InventoryItem = Item

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