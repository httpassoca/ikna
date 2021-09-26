<script lang="ts">
  import DeckSearch from "$lib/DeckSearch.svelte";
  import List from "$lib/base/DeckList.svelte";
  import { decks } from "../stores/decks";

  let search = "";
  let filteredDecks;
  $: {
    if (search) {
      filteredDecks = $decks.filter((deck) =>
        deck.name.toUpperCase().includes(search.toUpperCase())
      );
    } else {
      filteredDecks = [...$decks];
    }
  }
  const removeItem = ({ detail }) => {
    console.log(`removing item ${detail}`);
  };

  const clickItem = ({ detail }) => {
    console.log(`name: ${detail}`);
  };
</script>

<svelte:head>
  <title>Ikna | Decks</title>
</svelte:head>

<DeckSearch bind:value={search} />

<List
  items={filteredDecks}
  on:click={(e) => clickItem(e)}
  on:remove={(e) => removeItem(e)}
/>
