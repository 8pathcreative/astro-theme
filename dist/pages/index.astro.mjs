import { c as createComponent, m as maybeRenderHead, a as renderTemplate, e as createAstro, d as addAttribute, b as renderScript, r as renderComponent } from '../chunks/astro/server_DWG73qgy.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$MainLayout } from '../chunks/MainLayout_DfHo670R.mjs';
import 'clsx';
import { $ as $$ResourceCard } from '../chunks/ResourceCard_BcXGyGkR.mjs';
import { $ as $$CategoryCard } from '../chunks/CategoryCard_DVNvf-8Y.mjs';
import { b as getAllResources, a as getAllCategories } from '../chunks/resources_BtsrPkd7.mjs';
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-gradient-to-b from-purple-600 to-indigo-700 text-white py-20"> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center"> <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
Designer & Developer Resources
</h1> <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
Discover the best tools, assets, and resources to level up your design and development workflow.
</p> <div class="flex justify-center space-x-4"> <a href="/resources" class="px-6 py-3 bg-white text-indigo-700 font-medium rounded-lg hover:bg-gray-100 transition-colors">
Browse Resources
</a> <a href="/categories" class="px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-indigo-700 transition-colors">
View Categories
</a> </div> </div> </div> </section>`;
}, "/Users/neilhumphrey/Documents/GitHub/astro-theme/src/components/Hero.astro", void 0);

const $$Astro = createAstro("http://localhost:3000");
const $$FeaturedResource = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FeaturedResource;
  const { resource } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-gradient-to-r from-purple-600 to-indigo-700 rounded-xl overflow-hidden shadow-xl"> <div class="md:flex"> <div class="md:w-1/2 p-8 md:p-12 flex flex-col justify-center"> ${resource.categories && renderTemplate`<span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/20 text-white mb-4 w-fit"> ${resource.categories.name} </span>`} <h3 class="text-2xl md:text-3xl font-bold text-white mb-4">${resource.name}</h3> <p class="text-purple-100 mb-6">${resource.description}</p> <a${addAttribute(`/resources/${resource.slug}`, "href")} class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-gray-100 w-fit">
View Resource
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 ml-2"> <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path> </svg> </a> </div> <div class="md:w-1/2 bg-gray-200 dark:bg-gray-700"> <img${addAttribute(resource.image_url || "/placeholder.svg?height=400&width=600", "src")}${addAttribute(resource.name, "alt")} class="w-full h-full object-cover"> </div> </div> </div>`;
}, "/Users/neilhumphrey/Documents/GitHub/astro-theme/src/components/FeaturedResource.astro", void 0);

const $$Newsletter = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-white dark:bg-gray-800 py-12 rounded-lg shadow-md"> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center"> <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Stay Updated</h2> <p class="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
Subscribe to our newsletter to get the latest resources and updates delivered directly to your inbox.
</p> <form id="newsletter-form" class="max-w-md mx-auto"> <div class="flex flex-col sm:flex-row gap-2"> <input type="email" id="email" name="email" placeholder="Enter your email" required class="flex-grow px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"> <button type="submit" class="px-6 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors">
Subscribe
</button> </div> <p class="text-xs text-gray-500 dark:text-gray-400 mt-2">
We respect your privacy. Unsubscribe at any time.
</p> </form> </div> </div> </section> ${renderScript($$result, "/Users/neilhumphrey/Documents/GitHub/astro-theme/src/components/Newsletter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/neilhumphrey/Documents/GitHub/astro-theme/src/components/Newsletter.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const featuredResources = await getAllResources();
  const categories = await getAllCategories();
  const featuredResource = featuredResources[0];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Home" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${maybeRenderHead()}<section class="py-16 bg-white dark:bg-gray-900"> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">Featured Resource</h2> ${featuredResource && renderTemplate`${renderComponent($$result2, "FeaturedResource", $$FeaturedResource, { "resource": featuredResource })}`} <div class="mt-16"> <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">Latest Resources</h2> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"> ${featuredResources.slice(0, 6).map((resource) => renderTemplate`${renderComponent($$result2, "ResourceCard", $$ResourceCard, { "resource": resource })}`)} </div> <div class="mt-12 text-center"> <a href="/resources" class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
View All Resources
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 ml-2"> <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path> </svg> </a> </div> </div> </div> </section> <section class="py-16 bg-gray-50 dark:bg-gray-800"> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">Top Rated Resources</h2> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"> ${featuredResources.filter((resource) => resource.average_rating > 0).sort((a, b) => (b.average_rating || 0) - (a.average_rating || 0)).slice(0, 3).map((resource) => renderTemplate`${renderComponent($$result2, "ResourceCard", $$ResourceCard, { "resource": resource })}`)} </div> </div> </section> <section class="py-16 bg-gray-50 dark:bg-gray-800"> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">Categories</h2> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"> ${categories.map((category) => renderTemplate`${renderComponent($$result2, "CategoryCard", $$CategoryCard, { "category": category })}`)} </div> </div> </section> <section class="py-16 bg-white dark:bg-gray-900"> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> ${renderComponent($$result2, "Newsletter", $$Newsletter, {})} </div> </section> <section class="py-16 bg-white dark:bg-gray-900"> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> <div class="bg-gradient-to-r from-purple-600 to-indigo-700 rounded-xl p-8 md:p-12"> <div class="md:flex md:items-center md:justify-between"> <div class="md:max-w-2xl"> <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">
Want to contribute?
</h2> <p class="text-purple-100 text-lg mb-6 md:mb-0">
Know a great resource that's not listed yet? Submit it to our library and help fellow designers and developers!
</p> </div> <div class="flex flex-shrink-0"> <a href="/submit" class="px-6 py-3 bg-white text-indigo-700 font-medium rounded-lg hover:bg-gray-100 transition-colors">
Submit a Resource
</a> </div> </div> </div> </div> </section> ` })}`;
}, "/Users/neilhumphrey/Documents/GitHub/astro-theme/src/pages/index.astro", void 0);

const $$file = "/Users/neilhumphrey/Documents/GitHub/astro-theme/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
