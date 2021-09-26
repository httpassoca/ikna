<script>
  let input;
</script>

<input {...$$restProps} bind:this={input} />

<style lang="sass">
:global(input)
  color: black
  padding: 5px 10px
  margin: 5px 
  background-color: #eee
  border: none
  border-radius: 4px
  font-size: 1.125rem
  box-shadow: 0 0 8px 0px rgba(0,0,0, .5)
</style>
