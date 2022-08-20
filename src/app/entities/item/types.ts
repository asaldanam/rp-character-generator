import { Stats, StatValue } from "../character/stats/types";
import { GEAR_ITEM_SLOT_SUBTYPES } from "./config";

export type ItemState = {
  item: Item | null;
  error: null | string;
}

export type Item = GearItem | ConsumableItem

export interface GearItem extends ItemBase {
  durability: number;
  stats: GearItemStats[];
  slot: keyof typeof GearItemSlot;
  slotSubtype?: GearItemSlotSubtype;
  type: 'gear';
}

export type GearItemSeed = Pick<GearItem, 'slot' | 'stats' | 'slotSubtype'>

export type GearItemStats = keyof Stats;

export type GearItemStatValue = StatValue;

export interface ConsumableItem extends ItemBase {
  type: 'consumable';
}

export interface ItemBase {
  type: keyof typeof ItemTypes;
}

export enum GearItemSlot {
  head = 'head',
  legs = 'legs',
  chest = 'chest',
  boots = 'boots',
  mainhand = 'mainhand',
  offhand = 'offhand',
}

type GearItemSlotSubtype = keyof typeof GEAR_ITEM_SLOT_SUBTYPES;

export enum ItemTypes {
  gear = 'gear',
  consumable = 'consumable'
}