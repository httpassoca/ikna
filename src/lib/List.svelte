<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  export let items = [];
</script>

<ul>
  {#each items as item}
    <li on:click={() => dispatch("emitted", { text: `click on ${item.name}` })}>
      {item.name}
    </li>
  {/each}
</ul>

<style lang="sass">
li
  display: flex
  padding: 15px 10px
  margin: 5px 0px 
  background-color: #ff3e00
  border: none
  border-radius: 2px
  font-size: 1rem
  box-shadow: 0 0 8px 0px #ff3e00
</style>
