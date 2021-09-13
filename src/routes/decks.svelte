<script lang="ts">
  import Button from "$lib/base/Button.svelte";
  import Input from "$lib/base/Input.svelte";
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

<Input name="search" type="text" placeholder="Search deck" value={search} />
<List
  items={$decks}
  on:click={(e) => clickItem(e)}
  on:remove={(e) => removeItem(e)}
/>
<Button link="/cards">Go to cards</Button>
