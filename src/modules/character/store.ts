import { Character } from "src/app/character";
import { createEntity } from "src/app/core/createEntity";
import createContextStore from "src/libs/createContextStore";

export const CharacterStore = createContextStore({
  name: 'Pokemon',
  initialState: {
    data: [] as any[],
    loading: false,
    query: {},
  },
  reducers: {
    requestPokemon(pokemon, query: { offset: 5, limit: 5 }) {
      pokemon.query = query;
      return pokemon;
    },
    setPokemon(pokemon, data: any[]) {
      pokemon.data = data;
      return pokemon;
    }
  },
  effects: {
    async requestPokemon(state: any) {
      console.log({ state });
      const { results } = await fetch('https://pokeapi.co/api/v2/pokemon').then(r => r.json());
      return { type: 'setPokemon', payload: results };
    }
  }
})