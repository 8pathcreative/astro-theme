globalThis.process ??= {}; globalThis.process.env ??= {};
import { e as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_fvBuh_oR.mjs';
import { $ as $$MainLayout } from '../../chunks/MainLayout_Rnro5wxf.mjs';
import { $ as $$ResourceCard } from '../../chunks/ResourceCard_TKHPs8dc.mjs';
import { g as getResourcesByCategory, a as getAllCategories } from '../../chunks/resources_DgLtZqMy.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("http://localhost:3000");
async function getStaticPaths() {
  const categories = await getAllCategories();
  return categories.map((category) => ({
    params: { slug: category.slug },
    props: { category }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { category } = Astro2.props;
  const resources = await getResourcesByCategory(category.slug);
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": category.name, "description": `Explore ${category.name} resources for designers and developers.` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-gray-50 dark:bg-gray-900 py-12"> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> <div class="max-w-4xl mx-auto"> <nav class="flex mb-8" aria-label="Breadcrumb"> <ol class="inline-flex items-center space-x-1 md:space-x-3"> <li class="inline-flex items-center"> <a href="/" class="inline-flex items-center text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"> <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path> </svg>
Home
</a> </li> <li> <div class="flex items-center"> <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path> </svg> <a href="/categories" class="ml-1 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 md:ml-2">Categories</a> </div> </li> <li aria-current="page"> <div class="flex items-center"> <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path> </svg> <span class="ml-1 text-gray-500 dark:text-gray-400 md:ml-2 font-medium">${category.name}</span> </div> </li> </ol> </nav> <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-8"> <div class="flex items-center mb-4"> <div class="bg-indigo-100 dark:bg-indigo-900 rounded-full w-12 h-12 flex items-center justify-center mr-4"> <span class="text-indigo-600 dark:text-indigo-300 text-xl font-bold"> ${category.name.charAt(0)} </span> </div> <h1 class="text-3xl font-bold text-gray-900 dark:text-white">${category.name}</h1> </div> <p class="text-gray-600 dark:text-gray-400"> ${category.description || `Explore ${resources.length} resources related to ${category.name} for designers and developers.`} </p> </div> <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Resources (${resources.length})</h2> ${resources.length === 0 ? renderTemplate`<div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center"> <p class="text-gray-600 dark:text-gray-400">No resources found in this category yet.</p> </div>` : renderTemplate`<div class="grid grid-cols-1 gap-8"> ${resources.map((resource) => renderTemplate`${renderComponent($$result2, "ResourceCard", $$ResourceCard, { "resource": resource, "variant": "horizontal" })}`)} </div>`} </div> </div> </div> ` })}`;
}, "/Users/neilhumphrey/Documents/GitHub/astro-theme/src/pages/categories/[slug].astro", void 0);

const $$file = "/Users/neilhumphrey/Documents/GitHub/astro-theme/src/pages/categories/[slug].astro";
const $$url = "/categories/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
