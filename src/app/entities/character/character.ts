import { Info } from "./info";
import { Inventory } from "./inventory";
import { Stats } from "./stats";
import { ICharacter } from "./types";

export const CHARACTER_INITIAL_STATE = {
  id: '',
  ...Stats.initialState,
  ...Info.initialState,
  ...Inventory.initialState,
}

export const Character = {
  name: 'Character',
  initialState: CHARACTER_INITIAL_STATE,
  reducers: {
    set(_: ICharacter, payload: ICharacter) {
      return payload;
    },
    save(state: ICharacter) {
      if (!state.info.name) return state;
      const draft = { ...state };
      draft.id = btoa(state.info.name);
      console.log('save', draft);
      return draft;
    },
    ...Stats.reducers,
    ...Info.reducers,
    ...Inventory.reducers,
  },
  effects: {
    async save(state: ICharacter) {
      console.log('effect', state)
      if (!state.id) return;
      const KEY = 'characters';
      const characters = JSON.parse(localStorage.getItem(KEY) || '{}');
      localStorage.setItem(KEY, JSON.stringify({ ...characters, [state.id]: state }));
    }
  }
}
