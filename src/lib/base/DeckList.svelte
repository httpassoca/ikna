<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import FaTrash from "svelte-icons/fa/FaTrash.svelte";
  import FaPencil from "svelte-icons/fa/FaPencilAlt.svelte";

  const dispatch = createEventDispatcher();
  const emitRemove = (id: Number) => dispatch("remove", id);
  const emitEdit = (id: Number) => dispatch("edit", id);
  const emitClick = (name: String) => dispatch("click", name);

  export let items = [];
</script>

<ul>
  {#each items as item}
    <li on:click={() => emitClick(item.name)}>
      {item.name}
      <div class="buttons">
        <div class="icon" on:click|stopPropagation={() => emitEdit(item.id)}>
          <FaPencil />
        </div>
        <div class="icon" on:click|stopPropagation={() => emitRemove(item.id)}>
          <FaTrash />
        </div>
      </div>
    </li>
  {/each}
</ul>

<style lang="sass">
li
  font-family: 'Merriweather Sans', sans-serif
  font-weight: 600
  text-transform: capitalize
  display: flex
  padding: 10px
  margin: 5px 0px 
  background-color: #ff3e00
  border: none
  border-radius: 2px
  font-size: 1rem
  box-shadow: 0 0 8px 0px #ff3e00
  justify-content: space-between
  min-width: 300px
  .buttons
    margin-left: 20px
    display: flex
    gap: 10px
    .icon
      height: 18px
      width: 18px
</style>
