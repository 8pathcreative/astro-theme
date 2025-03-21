import { e as createAstro, c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate, d as addAttribute, b as renderScript } from '../../chunks/astro/server_DWG73qgy.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$MainLayout } from '../../chunks/MainLayout_DfHo670R.mjs';
import { $ as $$ResourceCard, a as $$StarRating } from '../../chunks/ResourceCard_BcXGyGkR.mjs';
import { b as getAllResources } from '../../chunks/resources_BtsrPkd7.mjs';
import 'clsx';
import { s as supabase } from '../../chunks/supabase_DplbVH3Z.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$3 = createAstro("http://localhost:3000");
const $$RelatedResources = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$RelatedResources;
  const { currentResourceId, categoryId, limit = 3 } = Astro2.props;
  const allResources = await getAllResources();
  const relatedResources = allResources.filter(
    (resource) => resource.id !== currentResourceId && resource.categories?.id === categoryId
  ).slice(0, limit);
  return renderTemplate`${relatedResources.length > 0 && renderTemplate`${maybeRenderHead()}<div class="mt-12"><h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Related Resources</h2><div class="grid grid-cols-1 md:grid-cols-3 gap-6">${relatedResources.map((resource) => renderTemplate`${renderComponent($$result, "ResourceCard", $$ResourceCard, { "resource": resource })}`)}</div></div>`}`;
}, "/Users/neilhumphrey/Documents/GitHub/astro-theme/src/components/RelatedResources.astro", void 0);

const $$Astro$2 = createAstro("http://localhost:3000");
const $$RatingForm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$RatingForm;
  const { resourceId, userRating = 0, userComment = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mt-8"> <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Rate this Resource</h3> <form id="rating-form" class="space-y-4"> <input type="hidden" name="resourceId"${addAttribute(resourceId, "value")}> <div> <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
Your Rating
</label> <div class="flex items-center" id="rating-stars"> <div class="flex"> ${[1, 2, 3, 4, 5].map((star) => renderTemplate`<button type="button"${addAttribute(`w-8 h-8 ${star <= userRating ? "text-yellow-400" : "text-gray-300"} focus:outline-none`, "class")}${addAttribute(star, "data-rating")}> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"> <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path> </svg> </button>`)} </div> <input type="hidden" name="rating" id="rating-input"${addAttribute(userRating, "value")}> </div> </div> <div> <label for="comment" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
Your Review (Optional)
</label> <textarea id="comment" name="comment" rows="3" class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white">${userComment}</textarea> </div> <div> <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
Your Email *
</label> <input type="email" id="email" name="email" required class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"> <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
Your email won't be displayed publicly
</p> </div> <div> <button type="submit" class="px-4 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors">
Submit Rating
</button> </div> </form> </div> ${renderScript($$result, "/Users/neilhumphrey/Documents/GitHub/astro-theme/src/components/RatingForm.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/neilhumphrey/Documents/GitHub/astro-theme/src/components/RatingForm.astro", void 0);

const $$Astro$1 = createAstro("http://localhost:3000");
const $$ResourceRatings = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ResourceRatings;
  const { resourceId } = Astro2.props;
  const { data: ratings, error } = await supabase.from("ratings").select("*").eq("resource_id", resourceId).order("created_at", { ascending: false });
  if (error) {
    console.error("Error fetching ratings:", error);
  }
  const totalRatings = ratings?.length || 0;
  const averageRating = totalRatings > 0 ? ratings.reduce((sum, rating) => sum + rating.rating, 0) / totalRatings : 0;
  return renderTemplate`${maybeRenderHead()}<div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mt-8"> <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">User Ratings & Reviews</h3> <div class="flex items-center mb-6"> <div class="mr-4"> <span class="text-3xl font-bold text-gray-900 dark:text-white">${averageRating.toFixed(1)}</span> <span class="text-sm text-gray-500 dark:text-gray-400">/ 5</span> </div> <div> ${renderComponent($$result, "StarRating", $$StarRating, { "rating": averageRating, "size": "lg" })} <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
Based on ${totalRatings} ${totalRatings === 1 ? "rating" : "ratings"} </p> </div> </div> ${totalRatings === 0 ? renderTemplate`<p class="text-gray-600 dark:text-gray-400 text-center py-4">
No ratings yet. Be the first to rate this resource!
</p>` : renderTemplate`<div class="space-y-6"> ${ratings.map((rating) => renderTemplate`<div class="border-t border-gray-200 dark:border-gray-700 pt-4"> <div class="flex items-center mb-2"> ${renderComponent($$result, "StarRating", $$StarRating, { "rating": rating.rating, "size": "sm" })} <span class="ml-2 text-sm text-gray-500 dark:text-gray-400"> ${new Date(rating.created_at).toLocaleDateString()} </span> </div> ${rating.comment && renderTemplate`<p class="text-gray-600 dark:text-gray-400 text-sm"> ${rating.comment} </p>`} </div>`)} </div>`} </div>`;
}, "/Users/neilhumphrey/Documents/GitHub/astro-theme/src/components/ResourceRatings.astro", void 0);

const $$Astro = createAstro("http://localhost:3000");
async function getStaticPaths() {
  const resources = await getAllResources();
  return resources.map((resource) => ({
    params: { slug: resource.slug },
    props: { resource }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { resource } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": resource.name, "description": resource.description }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-gray-50 dark:bg-gray-900 py-12"> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> <div class="max-w-4xl mx-auto"> <nav class="flex mb-8" aria-label="Breadcrumb"> <ol class="inline-flex items-center space-x-1 md:space-x-3"> <li class="inline-flex items-center"> <a href="/" class="inline-flex items-center text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"> <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path> </svg>
Home
</a> </li> <li> <div class="flex items-center"> <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path> </svg> <a href="/resources" class="ml-1 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 md:ml-2">Resources</a> </div> </li> <li aria-current="page"> <div class="flex items-center"> <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path> </svg> <span class="ml-1 text-gray-500 dark:text-gray-400 md:ml-2 font-medium">${resource.name}</span> </div> </li> </ol> </nav> <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"> <div class="aspect-video bg-gray-200 dark:bg-gray-700 relative"> <img${addAttribute(resource.image_url || "/placeholder.svg?height=400&width=800", "src")}${addAttribute(resource.name, "alt")} class="w-full h-full object-cover"> </div> <div class="p-8"> <div class="flex items-center mb-4"> <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200"> ${resource.categories?.name} </span> <span class="ml-2 text-gray-500 dark:text-gray-400">
Added on ${new Date(resource.created_at).toLocaleDateString()} </span> </div> <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">${resource.name}</h1> <p class="text-gray-600 dark:text-gray-400 mb-8">${resource.description}</p> <div class="mb-8"> <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Details</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> ${resource.pricing && renderTemplate`<div class="flex items-start"> <div class="flex-shrink-0 mt-1"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-500 dark:text-gray-400"> <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> </div> <div class="ml-3"> <h3 class="text-sm font-medium text-gray-900 dark:text-white">Pricing</h3> <p class="text-sm text-gray-600 dark:text-gray-400">${resource.pricing}</p> </div> </div>`} ${resource.tags && renderTemplate`<div class="flex items-start"> <div class="flex-shrink-0 mt-1"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-500 dark:text-gray-400"> <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path> <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path> </svg> </div> <div class="ml-3"> <h3 class="text-sm font-medium text-gray-900 dark:text-white">Tags</h3> <div class="flex flex-wrap gap-2 mt-1"> ${resource.tags.split(",").map((tag) => renderTemplate`<span class="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"> ${tag.trim()} </span>`)} </div> </div> </div>`} </div> </div> <div class="flex flex-col sm:flex-row gap-4"> <a${addAttribute(resource.url, "href")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors">
Visit Resource
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 ml-2"> <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"></path> </svg> </a> <button class="inline-flex items-center justify-center px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors" id="share-button">
Share
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 ml-2"> <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186z"></path> </svg> </button> </div> </div> </div> ${resource.categories && renderTemplate`${renderComponent($$result2, "RelatedResources", $$RelatedResources, { "currentResourceId": resource.id, "categoryId": resource.categories.id })}`} ${renderComponent($$result2, "ResourceRatings", $$ResourceRatings, { "resourceId": resource.id })} ${renderComponent($$result2, "RatingForm", $$RatingForm, { "resourceId": resource.id })} </div> </div> </div> ` })} ${renderScript($$result, "/Users/neilhumphrey/Documents/GitHub/astro-theme/src/pages/resources/[slug].astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/neilhumphrey/Documents/GitHub/astro-theme/src/pages/resources/[slug].astro", void 0);

const $$file = "/Users/neilhumphrey/Documents/GitHub/astro-theme/src/pages/resources/[slug].astro";
const $$url = "/resources/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
