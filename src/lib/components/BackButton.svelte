<script lang="ts">
  import Button from "$lib/components/base/Button.svelte";
  const click = () => {
    window.history.back();
  };
</script>

<Button on:click={click}><slot /></Button>
