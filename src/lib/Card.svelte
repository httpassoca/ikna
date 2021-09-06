<script>
  let show = false;
</script>

<div class={`card ${show ? "show" : ""}`} on:click={() => (show = !show)}>
  <div class="front">front</div>
  <div class="back">back</div>
</div>

<style lang="scss">
  @mixin mobile($size: 640px) {
    @media screen and (max-width: $size) {
      @content;
    }
  }

  .card {
    color: inherit;
    cursor: pointer;
    width: calc(33% - 2rem);
    min-width: calc(33% - 2rem);
    height: 400px;
    min-height: 400px;
    perspective: 1000px;
    margin: 1rem;
    position: relative;
    @include mobile(800px) {
      width: calc(50% - 2rem);
    }
    @include mobile(500px) {
      width: 100%;
    }
  }

  .front,
  .back {
    font-weight: 600;
    font-size: 1.618rem;
    display: flex;
    border-radius: 6px;
    background-position: center;
    background-size: cover;
    text-align: center;
    justify-content: center;
    align-items: center;
    position: absolute;
    height: 400px;
    width: 400px;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    transform-style: preserve-3d;
    transition: ease-in-out 600ms;
    padding: 1rem;
    // overflow: hidden;
  }

  .front {
    color: #fff;
    &:before {
      position: absolute;
      display: block;
      content: "";
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: black;
      border-radius: 6px;
      opacity: 0.45;
      z-index: -1;
    }
    .card.show & {
      transform: rotateY(180deg);
    }
  }

  .back {
    background: pink;
    transform: rotateY(-180deg);

    .card.show & {
      transform: rotateY(0deg);
    }
  }
</style>
