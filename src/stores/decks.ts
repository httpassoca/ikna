import { writable } from "svelte/store";

export const decks = writable([]);
decks.set([
  {id: 1, name: 'Deck 1'},
  {id: 2, name: 'Deck 2'},
  {id: 3, name: 'Deck 3'},
  {id: 4, name: 'Deck 4'},
])
