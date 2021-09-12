import { writable } from "svelte/store";

export const decks = writable([]);
decks.set([
  {id: 1, name: 'Card 1'},
  {id: 2, name: 'Card 2'},
  {id: 3, name: 'Card 3'},
  {id: 4, name: 'Card 5'},
])
