globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderComponent, b as renderScript, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_fvBuh_oR.mjs';
import { $ as $$MainLayout } from '../chunks/MainLayout_Rnro5wxf.mjs';
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Contact Us" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-gray-50 dark:bg-gray-900 py-12"> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> <div class="max-w-2xl mx-auto"> <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">Contact Us</h1> <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8"> <p class="text-gray-600 dark:text-gray-400 mb-6">
Have questions, suggestions, or feedback? We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.
</p> <form id="contact-form" class="space-y-6"> <div> <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
Your Name *
</label> <input type="text" id="name" name="name" required class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"> </div> <div> <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
Your Email *
</label> <input type="email" id="email" name="email" required class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"> </div> <div> <label for="subject" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
Subject *
</label> <input type="text" id="subject" name="subject" required class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"> </div> <div> <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
Message *
</label> <textarea id="message" name="message" rows="6" required class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"></textarea> </div> <div> <button type="submit" class="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md transition-colors">
Send Message
</button> </div> </form> </div> <div class="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-md p-8"> <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Other Ways to Reach Us</h2> <div class="space-y-4"> <div class="flex items-start"> <div class="flex-shrink-0 mt-1"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-indigo-600 dark:text-indigo-400"> <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"></path> </svg> </div> <div class="ml-3"> <h3 class="text-sm font-medium text-gray-900 dark:text-white">Email</h3> <p class="text-sm text-gray-600 dark:text-gray-400"> <a href="mailto:hello@designdev.com" class="text-indigo-600 dark:text-indigo-400 hover:underline">
hello@designdev.com
</a> </p> </div> </div> <div class="flex items-start"> <div class="flex-shrink-0 mt-1"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-indigo-600 dark:text-indigo-400"> <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"></path> </svg> </div> <div class="ml-3"> <h3 class="text-sm font-medium text-gray-900 dark:text-white">Social Media</h3> <div class="flex space-x-4 mt-1"> <a href="https://twitter.com/designdev" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"> <span class="sr-only">Twitter</span> <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path> </svg> </a> <a href="https://github.com/designdev" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"> <span class="sr-only">GitHub</span> <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path> </svg> </a> </div> </div> </div> </div> </div> </div> </div> </div> ` })} ${renderScript($$result, "/Users/neilhumphrey/Documents/GitHub/astro-theme/src/pages/contact.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/neilhumphrey/Documents/GitHub/astro-theme/src/pages/contact.astro", void 0);

const $$file = "/Users/neilhumphrey/Documents/GitHub/astro-theme/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
