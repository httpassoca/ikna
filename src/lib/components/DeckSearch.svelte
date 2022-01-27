<script>
  export let value = "";
  // this will be react to any data that changes that are inside of it -- James Q Quick.
</script>

<div class="search">
  <input
    autocomplete="off"
    name="search"
    type="text"
    placeholder="Search a deck"
    bind:value
  />
</div>

<style lang="sass">
.search
  display: flex
  align-items: center
</style>
