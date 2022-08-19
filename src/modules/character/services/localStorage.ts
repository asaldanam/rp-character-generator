import { CharacterState } from "src/app/entities/character/types";
import { CharacterService } from "./types";

const KEY = 'characters';

export const LocalStorageCharacterService: CharacterService = {
  async save(character) {
    if (!character.id) return;
    const characters = JSON.parse(localStorage.getItem(KEY) || '{}');
    localStorage.setItem(KEY, JSON.stringify({ ...characters, [character.id]: character }));
  },
  async load({ id }) {
    const characters = JSON.parse(localStorage.getItem(KEY) || '{}') as { [id: string]: CharacterState };
    const character = characters[id];
    return character || null;
  }
}