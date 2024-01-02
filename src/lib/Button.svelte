<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  const handleClick = () => {
    dispatch("click");
  };
</script>

<button
  on:click={handleClick}
  class="mt-4 bg-gray-500 text-center p-1 rounded-lg text-white shadow-2xl"
>
  <slot />
</button>
