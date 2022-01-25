<script lang="ts">
  import DeckSearch from "$lib/DeckSearch.svelte";
  import DeckList from "$lib/base/DeckList.svelte";
  import PageTitle from "$lib/base/PageTitle.svelte";
  import { decks } from "../lib/stores/decks";

  let search = "";
  let filteredDecks;
  let tipMessage = "Select a deck to train...";
  $: {
    if (search) {
      filteredDecks = $decks.filter((deck) =>
        deck.name.toUpperCase().includes(search.toUpperCase())
      );
    } else {
      filteredDecks = [...$decks];
    }
    if (filteredDecks.length === 0) tipMessage = "No decks matched!";
    else tipMessage = "Select a deck to train...";
  }
  const removeItem = ({ detail }) => {
    console.log(`removing item ${detail}`);
  };

  const clickItem = ({ detail }) => {
    console.log(`name: ${detail}`);
  };
</script>

<svelte:head>
  <title>Decks | Ikna</title>
</svelte:head>

<PageTitle>Decks</PageTitle>

<DeckSearch bind:value={search} />
<p class="info">{tipMessage}</p>

<DeckList
  items={filteredDecks}
  on:click={(e) => clickItem(e)}
  on:remove={(e) => removeItem(e)}
/>
