<script lang="ts">
  import Button from "$lib/base/Button.svelte";
  import List from "$lib/base/DeckList.svelte";

  let decks = [
    { name: "deck 1", id: 1 },
    { name: "deck 2", id: 2 },
    { name: "deck 3", id: 3 },
    { name: "deck 4", id: 4 },
  ];

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
  items={decks}
  on:click={(e) => clickItem(e)}
  on:remove={(e) => removeItem(e)}
/>
<Button link="/cards">Go to cards</Button>
