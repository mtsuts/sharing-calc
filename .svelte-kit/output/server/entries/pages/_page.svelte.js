import { c as create_ssr_component, b as createEventDispatcher, a as subscribe, d as set_store_value, f as add_attribute, h as each, v as validate_component, e as escape } from "../../chunks/ssr.js";
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
const inputVal = writable();
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let inputAmount;
  let $inputVal, $$unsubscribe_inputVal;
  $$unsubscribe_inputVal = subscribe(inputVal, (value) => $inputVal = value);
  let inputValue;
  let show = false;
  let inputValues = [];
  let result = 0;
  let isResult = false;
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
      inputValues = [];
      isResult = false;
      show = false;
    }
  }
  $$unsubscribe_inputVal();
  return `${$$result.head += `<!-- HEAD_svelte-12i1g14_START -->${$$result.title = `<title>Home</title>`, ""}<meta name="description" content="Sharing-calc"><!-- HEAD_svelte-12i1g14_END -->`, ""} <div class="md:p-10 p-6 text-center text-4xl text-white bg-orange-300 mt-4 rounded-xl md:mx-40 shadow-2xl" data-svelte-h="svelte-u3fxre"><div class="flex items-center justify-center"><img src="./owl-svg-logo.svg" alt="owl-logo"> <p>ღალტერია</p></div></div> <div class="mt-10 text-center md:mx-40"><div class="flex flex-col items-center"><label for="input" data-svelte-h="svelte-gw2qaj">რამდენი ჯგუფი/ადამიანი იყავით?</label> <input min="0" type="number" required class="mt-4 w-1/2 md:w-1/6 bg-white border-orange-300 shadow-2xl border-2 rounded-md focus-visible:outline-none"${add_attribute("value", inputValue, 0)}>  ${show ? `<p class="mt-4" data-svelte-h="svelte-1eqr6y4">შეიყვანეთ თანხები</p> <div class="grid grid-cols-2 items-center">${each(inputAmount, (index) => {
    return `${validate_component(MoneyInput, "MoneyInput").$$render(
      $$result,
      {
        onInputChange: (value) => handleMoneyInputChange(index, value)
      },
      {},
      {}
    )}`;
  })}</div> ${validate_component(Button, "Button").$$render($$result, {}, {}, {
    default: () => {
      return `დაიანგარიშე`;
    }
  })} ${isResult ? `${inputAmount.length === 2 ? `<p class="mt-6 mx-4">ვინც ნაკლები გადაიხადა, მან უნდა გადაურიცხოს <span class="text-xl bg-gray-300 rounded-lg p-1 text-white">${escape(Math.round(result))} ლარი</span> მას, ვინც მეტი გადაიხადა, რათა გათანაბრდეს ხარჯები</p> ${validate_component(Button, "Button").$$render($$result, {}, {}, {
    default: () => {
      return `დაიწყე თავიდან`;
    }
  })}` : `<p class="mt-6 mx-4">საშუალოდ თითოეულს უნდა გადაგეხადათ <span class="text-xl bg-gray-300 rounded-lg p-1 text-white">${escape(Math.round(result))} ლარი
            </span>, შევსებული მონაცემების მიხედვით, ვინც საშუალოზე ნაკლები
            გადაიხადა მან უნდა გადარიცხოს შესაბამისად (მიყოლებით)
            <span class="text-xl bg-gray-300 rounded-lg p-1 text-white">${escape(newArr.filter((d) => d >= 0).map((d) => {
    return Math.round(d);
  }))} ლარი</span>
            ხოლო ვინც საშუალოზე მეტი გადაიხადა, მათ უნდა ჩაერიცხოთ შესაბამისად (მიყოლებით)
            <span class="text-xl bg-gray-300 rounded-lg p-1 text-white">${escape(newArr.filter((d) => d < 0).map((d) => {
    return Math.abs(Math.round(d));
  }))} ლარი</span></p> ${validate_component(Button, "Button").$$render($$result, {}, {}, {
    default: () => {
      return `დაიწყე თავიდან`;
    }
  })}`}` : ``} ${``}` : ``}</div></div>`;
});
export {
  Page as default
};
