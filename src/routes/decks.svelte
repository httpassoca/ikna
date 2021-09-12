<script lang="ts">
  import Button from "$lib/base/Button.svelte";
  import List from "$lib/base/DeckList.svelte";
  import { decks } from "../stores/decks";

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

<List
  items={$decks}
  on:click={(e) => clickItem(e)}
  on:remove={(e) => removeItem(e)}
/>
<Button link="/cards">Go to cards</Button>
