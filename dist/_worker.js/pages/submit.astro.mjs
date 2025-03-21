globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderComponent, b as renderScript, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_fvBuh_oR.mjs';
import { $ as $$MainLayout } from '../chunks/MainLayout_Rnro5wxf.mjs';
import { a as getAllCategories } from '../chunks/resources_DgLtZqMy.mjs';
export { renderers } from '../renderers.mjs';

const $$Submit = createComponent(async ($$result, $$props, $$slots) => {
  const categories = await getAllCategories();
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Submit Resource" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-gray-50 dark:bg-gray-900 py-12"> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> <div class="max-w-2xl mx-auto"> <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">Submit a Resource</h1> <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8"> <p class="text-gray-600 dark:text-gray-400 mb-6">
Know a great resource that designers and developers would love? Submit it here and share it with the community!
</p> <form id="resource-form" class="space-y-6"> <div> <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
Resource Name *
</label> <input type="text" id="name" name="name" required class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"> </div> <div> <label for="url" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
Resource URL *
</label> <input type="url" id="url" name="url" required class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"> </div> <div> <label for="category" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
Category *
</label> <select id="category" name="category_id" required class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"> <option value="">Select a category</option> ${categories.map((category) => renderTemplate`<option${addAttribute(category.id, "value")}>${category.name}</option>`)} </select> </div> <div> <label for="description" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
Description *
</label> <textarea id="description" name="description" rows="4" required class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"></textarea> </div> <div> <label for="image_url" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
Image URL
</label> <input type="url" id="image_url" name="image_url" class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"> <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
Provide a URL to an image that represents this resource (optional)
</p> </div> <div> <label for="tags" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
Tags
</label> <input type="text" id="tags" name="tags" class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="CSS, JavaScript, UI Design, etc."> <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
Separate tags with commas
</p> </div> <div> <label for="pricing" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
Pricing
</label> <select id="pricing" name="pricing" class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"> <option value="Free">Free</option> <option value="Freemium">Freemium</option> <option value="Paid">Paid</option> <option value="Free Trial">Free Trial</option> </select> </div> <div> <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
Your Email *
</label> <input type="email" id="email" name="email" required class="w-full px-4 py-2 border border-gray
                name=" email" required class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"> <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
We'll only use this to contact you about your submission
</p> </div> <div> <button type="submit" class="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md transition-colors">
Submit Resource
</button> </div> </form> </div> </div> </div> </div> ` })} ${renderScript($$result, "/Users/neilhumphrey/Documents/GitHub/astro-theme/src/pages/submit.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/neilhumphrey/Documents/GitHub/astro-theme/src/pages/submit.astro", void 0);

const $$file = "/Users/neilhumphrey/Documents/GitHub/astro-theme/src/pages/submit.astro";
const $$url = "/submit";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Submit,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
