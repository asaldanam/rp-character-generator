import createContextSlice from "src/libs/createContextSlice";
import { LocalStorageCharacterService } from "./services/localStorage";
import App from "src/app";

export const CharacterStore = createContextSlice({
  name: 'Character',
  ...App.Character,
  effects: {
    save: LocalStorageCharacterService.save,
    async load(state, payload) {
      const characterData = await LocalStorageCharacterService.load(payload);
      if (!characterData) return;
      return { type: 'set', payload: characterData };
    },
  }
})