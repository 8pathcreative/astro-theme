import { e as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate } from './astro/server_DWG73qgy.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro("http://localhost:3000");
const $$CategoryCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CategoryCard;
  const { category } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/categories/${category.slug}`, "href")} class="group block h-full"> <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow h-full"> <div class="mb-4 bg-indigo-100 dark:bg-indigo-900 rounded-full w-16 h-16 flex items-center justify-center"> <span class="text-indigo-600 dark:text-indigo-300 text-2xl font-bold"> ${category.name.charAt(0)} </span> </div> <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400"> ${category.name} </h3> <p class="text-gray-600 dark:text-gray-400 text-sm mb-4"> ${category.description || `Explore resources related to ${category.name}`} </p> <div class="flex items-center justify-between"> <span class="text-gray-500 dark:text-gray-400"> ${category.resources_count || 0} resources
</span> <span class="text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition-transform inline-flex items-center">
View all
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 ml-1"> <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path> </svg> </span> </div> </div> </a>`;
}, "/Users/neilhumphrey/Documents/GitHub/astro-theme/src/components/CategoryCard.astro", void 0);

export { $$CategoryCard as $ };
