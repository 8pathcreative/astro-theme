import { e as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate, r as renderComponent } from '../chunks/astro/server_DWG73qgy.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$MainLayout } from '../chunks/MainLayout_DfHo670R.mjs';
import { $ as $$ResourceCard } from '../chunks/ResourceCard_BcXGyGkR.mjs';
import 'clsx';
import { b as getAllResources, a as getAllCategories } from '../chunks/resources_BtsrPkd7.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("http://localhost:3000");
const $$SearchBar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SearchBar;
  const { placeholder = "Search resources...", value = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<form action="/resources" method="get" class="w-full"> <div class="relative"> <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-500 dark:text-gray-400"> <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path> </svg> </div> <input type="text" name="search"${addAttribute(placeholder, "placeholder")}${addAttribute(value, "value")} class="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"> <button type="submit" class="absolute inset-y-0 right-0 flex items-center px-4 text-white bg-indigo-600 rounded-r-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
Search
</button> </div> </form>`;
}, "/Users/neilhumphrey/Documents/GitHub/astro-theme/src/components/SearchBar.astro", void 0);

const $$Astro = createAstro("http://localhost:3000");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const resources = await getAllResources();
  const categories = await getAllCategories();
  const searchQuery = Astro2.url.searchParams.get("search") || "";
  const categoryFilter = Astro2.url.searchParams.get("category") || "";
  let filteredResources = resources;
  if (searchQuery) {
    filteredResources = resources.filter(
      (resource) => resource.name.toLowerCase().includes(searchQuery.toLowerCase()) || resource.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }
  if (categoryFilter) {
    filteredResources = filteredResources.filter(
      (resource) => resource.categories.slug === categoryFilter
    );
  }
  const sortOption = Astro2.url.searchParams.get("sort") || "newest";
  if (sortOption === "rating") {
    filteredResources = filteredResources.sort((a, b) => {
      const ratingA = a.average_rating || 0;
      const ratingB = b.average_rating || 0;
      if (ratingB !== ratingA) {
        return ratingB - ratingA;
      }
      const countA = a.ratings_count || 0;
      const countB = b.ratings_count || 0;
      return countB - countA;
    });
  }
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Resources" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-gray-50 dark:bg-gray-900 py-12"> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">Resources</h1> <div class="flex flex-col lg:flex-row gap-8"> <!-- Sidebar with filters --> <div class="w-full lg:w-1/4"> <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sticky top-24"> <h2 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Search</h2> <form> <div class="mb-6"> ${renderComponent($$result2, "SearchBar", $$SearchBar, { "value": searchQuery, "placeholder": "Search resources..." })} </div> <h2 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Categories</h2> <div class="space-y-2"> <div class="flex items-center"> <input type="radio" id="all-categories" name="category" value=""${addAttribute(categoryFilter === "", "checked")} class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 dark:border-gray-600"> <label for="all-categories" class="ml-2 text-gray-700 dark:text-gray-300">
All Categories
</label> </div> ${categories.map((category) => renderTemplate`<div class="flex items-center"> <input type="radio"${addAttribute(`category-${category.id}`, "id")} name="category"${addAttribute(category.slug, "value")}${addAttribute(categoryFilter === category.slug, "checked")} class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 dark:border-gray-600"> <label${addAttribute(`category-${category.id}`, "for")} class="ml-2 text-gray-700 dark:text-gray-300"> ${category.name} </label> </div>`)} </div> <h2 class="text-lg font-semibold text-gray-900 dark:text-white mb-4 mt-6">Sort By</h2> <div class="space-y-2"> <div class="flex items-center"> <input type="radio" id="sort-newest" name="sort" value="newest"${addAttribute(!Astro2.url.searchParams.get("sort") || Astro2.url.searchParams.get("sort") === "newest", "checked")} class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 dark:border-gray-600"> <label for="sort-newest" class="ml-2 text-gray-700 dark:text-gray-300">
Newest First
</label> </div> <div class="flex items-center"> <input type="radio" id="sort-rating" name="sort" value="rating"${addAttribute(Astro2.url.searchParams.get("sort") === "rating", "checked")} class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 dark:border-gray-600"> <label for="sort-rating" class="ml-2 text-gray-700 dark:text-gray-300">
Highest Rated
</label> </div> </div> <div class="mt-6"> <button type="submit" class="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md transition-colors">
Apply Filters
</button> </div> </form> </div> </div> <!-- Resource grid --> <div class="w-full lg:w-3/4"> ${filteredResources.length === 0 ? renderTemplate`<div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center"> <p class="text-gray-600 dark:text-gray-400">No resources found matching your criteria.</p> </div>` : renderTemplate`<div class="grid grid-cols-1 md:grid-cols-2 gap-8"> ${filteredResources.map((resource) => renderTemplate`${renderComponent($$result2, "ResourceCard", $$ResourceCard, { "resource": resource, "variant": "horizontal" })}`)} </div>`} </div> </div> </div> </div> ` })}`;
}, "/Users/neilhumphrey/Documents/GitHub/astro-theme/src/pages/resources/index.astro", void 0);

const $$file = "/Users/neilhumphrey/Documents/GitHub/astro-theme/src/pages/resources/index.astro";
const $$url = "/resources";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
