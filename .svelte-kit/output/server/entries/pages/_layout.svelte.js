import { c as create_ssr_component } from "../../chunks/ssr.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const prerender = true;
  if ($$props.prerender === void 0 && $$bindings.prerender && prerender !== void 0)
    $$bindings.prerender(prerender);
  return `<div class="app"><main>${slots.default ? slots.default({}) : ``}</main> <footer class="text-gray-500 fixed bottom-2 md:bottom-10 md:left-40 left-5" data-svelte-h="svelte-ci8sul">© Mariam Tsutskiridze 2023</footer> </div>`;
});
export {
  Layout as default
};
