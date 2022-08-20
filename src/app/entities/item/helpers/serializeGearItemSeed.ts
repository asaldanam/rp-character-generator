import { GEAR_ITEM_ATTRIBUTES_REVERSED } from "../config";
import { GearItemSeed } from "../types";

export function serializeGearItemSeed(seed: GearItemSeed) {
  const { slot, slotSubtype } = seed;
  const stats = seed.stats.map((stat: string) => (GEAR_ITEM_ATTRIBUTES_REVERSED as any)[stat])
  const item = [stats, slot, slotSubtype];
  return btoa(JSON.stringify(item))
}