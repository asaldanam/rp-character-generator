import { Character } from "src/app/entities/character";
import createContextSlice from "src/libs/createContextSlice";
import { LocalStorageCharacterService } from "./services/localStorage";

export const CharacterStore = createContextSlice({
  name: 'Character',
  ...Character,
  effects: {
    save: LocalStorageCharacterService.save,
    async load(state, payload) {
      const characterData = await LocalStorageCharacterService.load(payload);
      if (!characterData) return;
      return { type: 'set', payload: characterData };
    },
  }
})