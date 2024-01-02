<script>
  // @ts-nocheck
  export let onInputChange;
</script>

<div>
  <input
    type="number"
    required
    min="0"
    on:input={(event) => onInputChange(event.target.value)}
    class="mt-4 w-1/2 bg-white border-orange-300 shadow-2xl border-2 rounded-md focus-visible:outline-none"
  />
</div>
