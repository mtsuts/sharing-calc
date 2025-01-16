import { c as create_ssr_component, b as createEventDispatcher, d as add_attribute, a as subscribe, f as set_store_value, h as each, v as validate_component, e as escape } from "../../chunks/ssr.js";
import "d3";
import { w as writable } from "../../chunks/index.js";
const MoneyInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { onInputChange } = $$props;
  if ($$props.onInputChange === void 0 && $$bindings.onInputChange && onInputChange !== void 0)
    $$bindings.onInputChange(onInputChange);
  return `<div><input type="number" required min="0" class="mt-4 w-1/2 bg-white border-orange-300 shadow-2xl border-2 rounded-md focus-visible:outline-none"></div>`;
});
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  return `<button class="mt-4 bg-gray-500 text-center p-1 rounded-lg text-white shadow-2xl">${slots.default ? slots.default({}) : ``}</button>`;
});
const Barchart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let barchartContainer;
  let { data = [{ side: 1, value: 1 }, { side: 2, value: 2 }] } = $$props;
  let { averageData = 49 } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.averageData === void 0 && $$bindings.averageData && averageData !== void 0)
    $$bindings.averageData(averageData);
  return `<div${add_attribute("this", barchartContainer, 0)}></div>`;
});
const inputVal = writable();
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let inputAmount;
  let barchartData;
  let $inputVal, $$unsubscribe_inputVal;
  $$unsubscribe_inputVal = subscribe(inputVal, (value) => $inputVal = value);
  let inputValue;
  let show = false;
  let inputValues = [];
  let result = 0;
  let isResult = false;
  let average;
  let newArr = [];
  const handleMoneyInputChange = (index, value) => {
    if (value.includes("-")) {
      value = value.replace("-", "");
    }
    inputValues[index] = Number(value);
  };
  inputAmount = Array.from({ length: inputValue }, (_, index) => index);
  set_store_value(inputVal, $inputVal = inputValue, $inputVal);
  {
    {
      result = 0;
      newArr = [];
      inputValues = [];
      isResult = false;
      show = false;
    }
  }
  barchartData = inputValues.map((d, i) => {
    return { side: i + 1, value: d };
  });
  $$unsubscribe_inputVal();
  return `${$$result.head += `<!-- HEAD_svelte-12i1g14_START -->${$$result.title = `<title>Home</title>`, ""}<meta name="description" content="Sharing-calc"><!-- HEAD_svelte-12i1g14_END -->`, ""} <div class="md:p-10 p-6 text-center text-4xl text-white bg-orange-300 mt-4 rounded-xl md:mx-40 shadow-2xl" data-svelte-h="svelte-16ghkhs"><div class="flex items-center justify-center"><a href="./"><img src="./owl-svg-logo.svg" alt="owl-logo"></a> <p>ღალტერია</p></div></div> <div class="mt-10 text-center md:mx-40"><div class="flex flex-col items-center"><label for="input" data-svelte-h="svelte-gw2qaj">რამდენი ჯგუფი/ადამიანი იყავით?</label> <input min="0" type="number" required class="mt-4 w-1/2 md:w-1/6 bg-white border-orange-300 shadow-2xl border-2 rounded-md focus-visible:outline-none"${add_attribute("value", inputValue, 0)}>  ${show ? `<p class="mt-4" data-svelte-h="svelte-1eqr6y4">შეიყვანეთ თანხები</p> <div class="grid grid-cols-2 items-center">${each(inputAmount, (index) => {
    return `<div>${validate_component(MoneyInput, "MoneyInput").$$render(
      $$result,
      {
        onInputChange: (value) => handleMoneyInputChange(index, value)
      },
      {},
      {}
    )} ${isResult ? `${inputAmount.length !== 2 ? `<div>${escape(Math.round(newArr[index]) >= 0 ? `გადარიცხოს ${Math.round(newArr[index])} ლარი` : `გადაურიცხონ ${Math.abs(Math.round(newArr[index]))} ლარი`)} </div>` : ``}` : ``} </div>`;
  })}</div> ${validate_component(Button, "Button").$$render($$result, {}, {}, {
    default: () => {
      return `დაიანგარიშე`;
    }
  })} ${isResult ? `${inputAmount.length === 2 ? `<p class="mt-6 mx-4">საშუალოდ უნდა გადაგეხადათ ${escape(average)} ლარი. ვინც ნაკლები გადაიხადა, მან
            უნდა გადაურიცხოს
            <span class="text-xl bg-gray-300 rounded-lg p-1 text-white">${escape(Math.round(result))} ლარი</span> მას, ვინც მეტი გადაიხადა, რათა გათანაბრდეს ხარჯები</p> ${validate_component(Button, "Button").$$render($$result, {}, {}, {
    default: () => {
      return `დაიწყე თავიდან`;
    }
  })}` : `<p class="mt-6 mx-4">საშუალოდ თითოეულს უნდა გადაგეხადათ <span class="text-xl bg-gray-300 rounded-lg p-1 text-white">${escape(Math.round(result))} ლარი.</span></p> ${validate_component(Button, "Button").$$render($$result, {}, {}, {
    default: () => {
      return `დაიწყე თავიდან`;
    }
  })}`}  <div class="mb-10">${validate_component(Barchart, "Barchart").$$render($$result, { data: barchartData, averageData: average }, {}, {})}</div>` : ``} ${``}` : ``}</div></div>`;
});
export {
  Page as default
};
