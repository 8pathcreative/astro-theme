import { c as createComponent, r as renderComponent, b as renderScript, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_DWG73qgy.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$MainLayout } from '../chunks/MainLayout_DfHo670R.mjs';
import { s as supabase } from '../chunks/supabase_DplbVH3Z.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const { data: pendingResources, error } = await supabase.from("pending_resources").select("*, categories(name)").order("created_at", { ascending: false });
  if (error) {
    console.error("Error fetching pending resources:", error);
  }
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Admin Dashboard" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-gray-50 dark:bg-gray-900 py-12"> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">Admin Dashboard</h1> <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8"> <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Pending Resources</h2> ${!pendingResources || pendingResources.length === 0 ? renderTemplate`<p class="text-gray-600 dark:text-gray-400">No pending resources to review.</p>` : renderTemplate`<div class="overflow-x-auto"> <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700"> <thead class="bg-gray-50 dark:bg-gray-700"> <tr> <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Name</th> <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Category</th> <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Submitted By</th> <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Date</th> <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Actions</th> </tr> </thead> <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700"> ${pendingResources.map((resource) => renderTemplate`<tr> <td class="px-6 py-4 whitespace-nowrap"> <div class="text-sm font-medium text-gray-900 dark:text-white">${resource.name}</div> <div class="text-sm text-gray-500 dark:text-gray-400 truncate max-w-xs">${resource.description}</div> </td> <td class="px-6 py-4 whitespace-nowrap"> <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200"> ${resource.categories?.name} </span> </td> <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"> ${resource.submitter_email} </td> <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"> ${new Date(resource.created_at).toLocaleDateString()} </td> <td class="px-6 py-4 whitespace-nowrap text-sm font-medium"> <div class="flex space-x-2"> <button${addAttribute(resource.id, "data-id")} data-action="approve" class="text-green-600 hover:text-green-900 dark:text-green-400 dark:hover:text-green-300">
Approve
</button> <button${addAttribute(resource.id, "data-id")} data-action="reject" class="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300">
Reject
</button> </div> </td> </tr>`)} </tbody> </table> </div>`} </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-6"> <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"> <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Total Resources</h3> <p class="text-3xl font-bold text-indigo-600 dark:text-indigo-400"> ${pendingResources ? pendingResources.length : 0} </p> </div> <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"> <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Pending Approval</h3> <p class="text-3xl font-bold text-yellow-600 dark:text-yellow-400"> ${pendingResources ? pendingResources.filter((r) => r.status === "pending").length : 0} </p> </div> <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"> <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Categories</h3> <p class="text-3xl font-bold text-green-600 dark:text-green-400"> 
10
</p> </div> </div> </div> </div> ` })} ${renderScript($$result, "/Users/neilhumphrey/Documents/GitHub/astro-theme/src/pages/admin/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/neilhumphrey/Documents/GitHub/astro-theme/src/pages/admin/index.astro", void 0);

const $$file = "/Users/neilhumphrey/Documents/GitHub/astro-theme/src/pages/admin/index.astro";
const $$url = "/admin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
