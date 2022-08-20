import { Item } from "src/app/entities/item";
import createContextSlice from "src/libs/createContextSlice";

export const ItemCreatorStore = createContextSlice({ name: 'Item', ...Item });