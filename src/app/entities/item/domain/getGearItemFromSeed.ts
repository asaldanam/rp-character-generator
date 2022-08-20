import { GEAR_ITEM_SLOT_SUBTYPES } from "../config";
import { GearItem, GearItemSeed } from "../types";

export function getGearItemFromSeed(seed: GearItemSeed) {
  const error = (!isGearItemSlotSubtypeValid(seed) && `El subtipo '${seed.slotSubtype}' no es válido para el el slot '${seed.slot}'`) || null
  const item: GearItem = {
    ...seed,
    type: 'gear',
    durability: 1,
  }
  return { item, error };
}

function isGearItemSlotSubtypeValid({slotSubtype, slot}: GearItemSeed) {
  if (!slotSubtype) return true;
  const isValid = GEAR_ITEM_SLOT_SUBTYPES[slotSubtype].slot === slot;
  return isValid;
}