import { CharacterState } from "src/app/entities/character/types";

export const CharacterService = {
  async save(state: CharacterState) {
    console.log('effect', state)
    if (!state.id) return;
    const KEY = 'characters';
    const characters = JSON.parse(localStorage.getItem(KEY) || '{}');
    localStorage.setItem(KEY, JSON.stringify({ ...characters, [state.id]: state }));
  }
}