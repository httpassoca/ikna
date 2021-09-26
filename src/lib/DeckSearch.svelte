<script>
  import IoIosSearch from "svelte-icons/io/IoIosSearch.svelte";
  import Input from "$lib/base/Input.svelte";
  import Button from "$lib/base/Button.svelte";

  export let search = "";
  // this will be react to any data that changes that are inside of it -- James Q Quick.
  $: {
    console.log(search);
  }
</script>

<div class="search">
  <input
    name="search"
    type="text"
    placeholder="Search deck"
    bind:value={search}
  />
  <Button>
    <div class="icon">
      <IoIosSearch />
    </div>
  </Button>
</div>

<style lang="sass">
.search
  margin: 20px 0
  display: flex
  align-items: center
.icon
  height: 28px
  width: 28px
</style>
