<script>
  // @ts-nocheck
  import { onMount } from "svelte";
  import { drawBarchart } from "./Barchart";

  let barchartContainer;

  export let data = [
    { side: 1, value: 1 },
    {
      side: 2,
      value: 2,
    },
  ];
  export let averageData = 49;
  onMount(() => {
    drawBarchart(barchartContainer, data, averageData);
  });
</script>

<div bind:this={barchartContainer}></div>
