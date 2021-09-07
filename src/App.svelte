<script lang="ts">
  import Counter from "./lib/Counter.svelte";
  import Card from "./lib/Card.svelte";
  import Button from "./lib/Button.svelte";
</script>

<svelte:head>
  <title>Ikna</title>
</svelte:head>

<main>
  <div class="flex">
    <h1>Svelte Ikna!</h1>
  </div>
  <Card />
  <Button>asda</Button>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    height: 10rem;
    width: 10rem;
  }
  .flex {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 2rem auto;
    max-width: 14rem;
  }

  p {
    max-width: 14rem;
    margin: 1rem auto;
    line-height: 1.35;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }

    p {
      max-width: none;
    }
  }
</style>
