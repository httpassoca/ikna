<script>
  import Button from "$lib/Button.svelte";
</script>

<header>
  <span>IKNA</span>
  <nav>
    <Button>Login</Button>
  </nav>
</header>
<main>
  <slot />
</main>
<footer>footer.</footer>

<style lang="sass">
:global(*)
  padding: 0
  margin: 0
  outline: 0
  box-sizing: border-box
  color: #eee
  font-family: 'IBM Plex Sans', 'Merriweather Sans', sans-serif
:global(html)
  background-color: #333
header
  background-color: #191919
  display: flex
  justify-content: space-between
  align-items: center
  height: 80px
  padding: 10px
  span
    font-size: 1.5rem
    color: #ff3e00
    font-weight: bolder   
main
  margin: 0 auto
  min-height: 100vh
  display: flex
  align-items: center
  justify-content: center
  flex-direction: column
</style>
