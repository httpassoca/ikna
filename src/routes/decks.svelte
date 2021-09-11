<script>
  import Button from "$lib/Button.svelte";
  import List from "$lib/List.svelte";

  let decks = [
    { name: "deck 1", id: 1 },
    { name: "deck 2", id: 2 },
    { name: "deck 3", id: 3 },
    { name: "deck 4", id: 4 },
  ];
</script>

<svelte:head>
  <title>Ikna | Decks</title>
</svelte:head>

<Button link="/cards">Go to cards</Button>

<List items={decks} on:emitted={(e) => console.log(JSON.stringify(e.detail))} />
