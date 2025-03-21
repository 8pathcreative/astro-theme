import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DWG73qgy.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$MainLayout } from '../chunks/MainLayout_DfHo670R.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "About" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-gray-50 dark:bg-gray-900 py-12"> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> <div class="max-w-3xl mx-auto"> <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">About DesignDev Resources</h1> <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-8"> <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Our Mission</h2> <p class="text-gray-600 dark:text-gray-400 mb-6">
DesignDev Resources is a curated collection of the best tools, assets, and resources for designers and developers. 
            Our mission is to help creative professionals discover high-quality resources that will improve their workflow, 
            boost productivity, and inspire great work.
</p> <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">What We Offer</h2> <p class="text-gray-600 dark:text-gray-400 mb-6">
We provide a comprehensive library of resources across various categories including design tools, development frameworks,
            UI/UX resources, fonts, icons, illustrations, and much more. All resources are carefully curated and regularly updated 
            to ensure they meet our quality standards.
</p> <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Community Driven</h2> <p class="text-gray-600 dark:text-gray-400">
DesignDev Resources is community-driven, and we encourage submissions from our users. If you know of a great resource 
            that isn't listed on our site, please submit it through our <a href="/submit" class="text-indigo-600 dark:text-indigo-400 hover:underline">submission form</a>.
            We review all submissions to maintain the quality of our library.
</p> </div> <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8"> <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Get in Touch</h2> <p class="text-gray-600 dark:text-gray-400 mb-6">
Have questions, suggestions, or feedback? We'd love to hear from you! Reach out to us at
<a href="mailto:hello@designdev.com" class="text-indigo-600 dark:text-indigo-400 hover:underline">hello@designdev.com</a>.
</p> <div class="flex space-x-4"> <a href="https://twitter.com/designdev" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"> <span class="sr-only">Twitter</span> <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path> </svg> </a> <a href="https://github.com/designdev" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"> <span class="sr-only">GitHub</span> <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path> </svg> </a> </div> </div> </div> </div> </div> ` })}`;
}, "/Users/neilhumphrey/Documents/GitHub/astro-theme/src/pages/about.astro", void 0);

const $$file = "/Users/neilhumphrey/Documents/GitHub/astro-theme/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
