<script lang="ts">
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
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 100 90"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M51.5 0L0 89H103L51.5 0ZM23.8643 80.151H87.6468L71.6884 52.5724L23.8643 80.151ZM65.5911 42.0354L60.7383 33.649L46.1956 42.0354H65.5911ZM56.14 25.7024L51.5 17.6837L42.2125 33.7339L56.14 25.7024ZM32.0977 51.2138L20.2949 71.6111L55.6656 51.2138H32.0977Z"
        fill="#66EF73"
      />
    </svg>
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
