<script lang="ts">
  import DeckSearch from "$lib/DeckSearch.svelte";
  import Button from "$lib/base/Button.svelte";
  import List from "$lib/base/DeckList.svelte";
  import { decks } from "../stores/decks";

  let search = "";
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

<DeckSearch value={search} />

<List
  items={$decks}
  on:click={(e) => clickItem(e)}
  on:remove={(e) => removeItem(e)}
/>
<Button link="/cards">Go to cards</Button>
