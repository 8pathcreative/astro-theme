globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_fvBuh_oR.mjs';
import { $ as $$MainLayout } from '../chunks/MainLayout_Rnro5wxf.mjs';
import { $ as $$CategoryCard } from '../chunks/CategoryCard_CNlYVAr9.mjs';
import { a as getAllCategories } from '../chunks/resources_DgLtZqMy.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const categories = await getAllCategories();
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Categories" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-gray-50 dark:bg-gray-900 py-12"> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">Categories</h1> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"> ${categories.map((category) => renderTemplate`${renderComponent($$result2, "CategoryCard", $$CategoryCard, { "category": category })}`)} </div> </div> </div> ` })}`;
}, "/Users/neilhumphrey/Documents/GitHub/astro-theme/src/pages/categories/index.astro", void 0);

const $$file = "/Users/neilhumphrey/Documents/GitHub/astro-theme/src/pages/categories/index.astro";
const $$url = "/categories";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
