<script>
  // @ts-nocheck
  import MoneyInput from "$lib/MoneyInput.svelte";
  import { inputVal } from "../store";
  let inputValue = 0;
  let show = false;
  let inputValues = [];
  let result = 0;
  let isResult = false;

  $: inputAmount = Array.from({ length: inputValue }, (_, index) => index);
  const handleMoneyInputChange = (index, value) => {
    inputValues[index] = value;
  };

  function calculate() {
    console.log(inputValues);
    console.log(inputValues.length);
    isResult = true;
    const max = Math.max(...inputValues);
    const min = Math.min(...inputValues);
    result = (max - min) / inputValues.length;
  }

  $: $inputVal = inputValue;
  $: if (inputValue > 0) {
    show = true;
  } else {
    show = false;
  }
  $: result;
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Sharing-calc" />
</svelte:head>

<div
  class="md:p-10 p-6 text-center text-4xl text-white bg-orange-300 mt-4 rounded-xl md:mx-40 shadow-2xl"
>
  <div class="flex items-center justify-center">
    <img src="/owl-svg-logo.svg" alt="owl-logo" />
    <p>ღალტერია</p>
  </div>
</div>
<div class="mt-20 text-center md:mx-40">
  <div class="flex flex-col items-center">
    <label for="input"> რამდენი ჯგუფი/ადამიანი იყავით?</label>
    <input
      type="number"
      bind:value={inputValue}
      required
      class="mt-4 w-1/2 md:w-1/6 bg-white border-orange-300 shadow-2xl border-2 rounded-md focus-visible:outline-none"
    />
    <p class="mt-4">
      სულ იყავით: {inputValue === null || inputValue === 0 ? 0 : inputValue}
    </p>
    {#if show}
      <p class="mt-4">შეიყვანე თანხები</p>
      <div class="grid grid-cols-2 items-center">
        {#each inputAmount as index}
          <MoneyInput
            onInputChange={(value) => handleMoneyInputChange(index, value)}
          />
        {/each}
      </div>
      <button
        on:click={() => {
          calculate();
        }}
        class="mt-4 bg-gray-500 text-center p-1 rounded-lg text-white shadow-2xl"
      >
        დაიანგარიშე</button
      >
      {#if isResult}
        <p class="mt-6">
          ვინც ნაკლები გადაიხადა, მან უნდა გადაურიცხოს <span
            class="text-2xl bg-gray-300 rounded-lg p-2 text-white"
          >
            {result}
          </span> მას, ვინც მეტი გადაიხადა, რათა გათანაბრდეს ხარჯები
        </p>
      {/if}
    {/if}
  </div>
</div>
