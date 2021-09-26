<script lang="ts">
  export let link = "";
  export let goBack = false;
  const click = (e) => {
    e.preventDefault;
    if (link) {
      window.location.href = link;
    } else if (goBack) {
      window.history.back();
    }
  };
</script>

<button on:click={click}> <slot /> </button>

<style lang="sass">
button
  color: white
  padding: 5px 10px
  margin: 5px 
  background-color: #ff3e00
  border: none
  border-radius: 4px
  font-size: 1.125rem
</style>
