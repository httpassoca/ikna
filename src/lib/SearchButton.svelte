<script lang="ts">
  import Button from "$lib/base/Button.svelte";
  const click = (e) => {
    e.preventDefault;
    window.history.back();
  };
</script>

<Button on:click={click}><slot /></Button>
