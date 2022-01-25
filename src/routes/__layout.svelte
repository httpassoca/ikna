<script lang="ts">
  import SVG from "svelte-inline-svg";
  import "../sass/global.sass";
</script>

<header>
  <a href="/">IKNA</a>
  <nav>
    <ul>
      <li><a href="/auth">Auth</a></li>
      <li><a href="/decks">Decks</a></li>
      <li><a href="/cards">Cards</a></li>
    </ul>
  </nav>
</header>
<main>
  <slot />
</main>
<footer>
  <i>Developed to not use Anki.</i>
  <a href="https://passoca.dev" class="passoca">
    <span> Passoca </span>
    <SVG src="/passoca.svg" width="30" height="30" />
  </a>
</footer>

<style lang="sass">
header, footer
  background-color: #191919
  display: flex
  justify-content: space-between
  align-items: center
  height: 60px
  padding: 10px 20px
header > a
  font-size: 1.5rem
  color: #ff3e00
  font-weight: bolder
  text-decoration: none
  cursor: pointer
.passoca
  text-decoration: none
  display: flex
  align-items: center
  height: 100%
  color: white
  font-weight: bolder
  gap: 10px
  span
    opacity: 0
    transition: all .35s
  &:hover
    span 
      opacity: 1  
main
  max-width: 1200px
  margin: 20px auto
  height: calc(100vh - 120px)
  overflow-y: auto
  display: flex
  flex-direction: column
  padding: 20px
nav
  ul
    display: flex
    list-style-type: none
    gap: 10px
    font-weight: 600
    font-size: 1.125rem
    a
      text-decoration: none
</style>
