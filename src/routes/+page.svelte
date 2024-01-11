<script>
  // @ts-nocheck
  import MoneyInput from "$lib/MoneyInput.svelte";
  import Button from "$lib/Button.svelte";
  import Piechart from "$lib/pieChart/Piechart.svelte";
  import { inputVal } from "../store";
  let inputValue;
  let show = false;
  let inputValues = [];
  let result = 0;
  let isResult = false;
  let noResult = false;
  let sum = 0;
  let newArr = [];

  $: inputAmount = Array.from({ length: inputValue }, (_, index) => index);
  const handleMoneyInputChange = (index, value) => {
    if (value.includes("-")) {
      value = value.replace("-", "");
    }
    inputValues[index] = Number(value);
  };

  function calculate() {
    if (inputAmount.length === 2) {
      if (
        inputValues.includes(undefined) ||
        inputValues.length !== inputAmount.length ||
        inputValues.includes("")
      ) {
        isResult = false;
        noResult = true;
      } else {
        isResult = true;
        noResult = false;
      }
      const max = Math.max(...inputValues);
      const min = Math.min(...inputValues);
      result = (max - min) / inputValues.length;
    } else {
      if (
        inputValues.includes(undefined) ||
        inputValues.length !== inputAmount.length ||
        inputValues.includes("")
      ) {
        isResult = false;
        noResult = true;
      } else {
        isResult = true;
        noResult = false;

        for (let i = 0; i < inputValues.length; i++) {
          sum += inputValues[i];
          result = sum / inputValues.length;
        }
        for (let i = 0; i < inputValues.length; i++) {
          newArr[i] = result - inputValues[i];
        }
      }
    }
  }

  function reloadPage() {
    window.location.reload();
  }

  $: $inputVal = inputValue;
  $: if (inputValue > 0) {
    show = true;
  } else {
    result = 0;
    sum = 0;
    newArr = [];
    inputValues = [];
    isResult = false;
    show = false;
  }

  $: result;
  $: sum;
  $: newArr;
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Sharing-calc" />
</svelte:head>

<div
  class="md:p-10 p-6 text-center text-4xl text-white bg-orange-300 mt-4 rounded-xl md:mx-40 shadow-2xl"
>
  <div class="flex items-center justify-center">
    <a href="./">
      <img src="./owl-svg-logo.svg" alt="owl-logo" />
    </a>
    <p>ღალტერია</p>
  </div>
</div>
<div class="mt-10 text-center md:mx-40">
  <div class="flex flex-col items-center">
    <label for="input"> რამდენი ჯგუფი/ადამიანი იყავით?</label>
    <input
      min="0"
      type="number"
      bind:value={inputValue}
      required
      class="mt-4 w-1/2 md:w-1/6 bg-white border-orange-300 shadow-2xl border-2 rounded-md focus-visible:outline-none"
    />
    <!-- <p class="mt-4">
      სულ იყავით: {inputValue === null || inputValue === 0 ? 0 : inputValue}
    </p> -->
    {#if show}
      <p class="mt-4">შეიყვანეთ თანხები</p>
      <div class="grid grid-cols-2 items-center">
        {#each inputAmount as index}
          <div>
            <MoneyInput
              onInputChange={(value) => handleMoneyInputChange(index, value)}
            />
            {#if isResult}
              {#if inputAmount.length !== 2}
                <div>
                  {Math.round(newArr[index]) >= 0
                    ? `გადარიცხოს ${Math.round(newArr[index])} ლარი`
                    : `გადაურიცხონ ${Math.abs(Math.round(newArr[index]))} ლარი`}
                </div>
              {/if}
            {/if}
          </div>
        {/each}
      </div>
      <Button
        on:click={() => {
          calculate();
        }}
      >
        დაიანგარიშე</Button
      >
      {#if isResult}
        {#if inputAmount.length === 2}
          <p class="mt-6 mx-4">
            ვინც ნაკლები გადაიხადა, მან უნდა გადაურიცხოს <span
              class="text-xl bg-gray-300 rounded-lg p-1 text-white"
            >
              {Math.round(result)} ლარი
            </span> მას, ვინც მეტი გადაიხადა, რათა გათანაბრდეს ხარჯები
          </p>
          <Button on:click={reloadPage}>დაიწყე თავიდან</Button>
        {:else}
          <p class="mt-6 mx-4">
            საშუალოდ თითოეულს უნდა გადაგეხადათ <span
              class="text-xl bg-gray-300 rounded-lg p-1 text-white"
            >
              {Math.round(result)} ლარი.
            </span>
          </p>

          <Button on:click={reloadPage}>დაიწყე თავიდან</Button>
        {/if}
        <Piechart data={inputValues} />
      {/if}
      {#if noResult}
        <p class="text-red-400 mt-4">
          შეავსეთ ყველა ველი და შეიყვანეთ ყველა მონაცემი
        </p>
      {/if}
    {/if}
  </div>
</div>
