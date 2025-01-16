<script>
  // @ts-nocheck
  import { onMount } from "svelte";
  import { drawPiechart } from "./Piechart";

  export let data = [1, 1, 2, 3, 5, 8, 13, 21];

  let piechartContainer;

  onMount(() => {
    drawPiechart(piechartContainer, data);
  });
</script>

<div bind:this={piechartContainer}></div>
