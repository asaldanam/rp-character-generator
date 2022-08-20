import { GEAR_ITEM_SLOT_SUBTYPES } from "../config";
import { GearItemSeed } from "../types";

export function isGearItemSlotSubtypeValid({slotSubtype, slot}: GearItemSeed) {
  if (!slotSubtype) return true;
  const isValid = GEAR_ITEM_SLOT_SUBTYPES[slotSubtype].slot === slot;
  return isValid;
}