import { c as create_ssr_component } from "../../chunks/index.js";
const app = "";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav></nav>

<div class="container mx-auto"><h1>Scalable Architecture Lab</h1>

    <p>The Scalable Architecture Lab is a research lab at the College of
        William and Mary, lead by<a href="https://syifan.github.io">Dr. Yifan Sun</a>.
    </p>

    <p><b>Mission:</b>
        Empower computer architecture developers designing large-scale computing
        systems with explainable computer architecture design methods and tools.
    </p>

    <h2>People</h2>
</div>`;
});
export {
  Page as default
};
