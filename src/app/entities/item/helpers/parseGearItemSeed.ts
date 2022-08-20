import { GEAR_ITEM_ATTRIBUTES } from "../config";
import { GearItemSeed } from "../types";

export function parseGearItemSeed(serializedSeed: string): GearItemSeed | null {
  try {
    const [stats, slot, slotSubtype] = JSON.parse(atob(serializedSeed) || '') as any[];
    return {
      stats: stats.map((stat: keyof typeof GEAR_ITEM_ATTRIBUTES) => GEAR_ITEM_ATTRIBUTES[stat]),
      slot,
      slotSubtype
    };
  } catch {
    return null;
  }
}