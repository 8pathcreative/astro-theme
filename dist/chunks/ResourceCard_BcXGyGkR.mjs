import { e as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate, f as defineScriptVars, r as renderComponent } from './astro/server_DWG73qgy.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("http://localhost:3000");
const $$StarRating = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$StarRating;
  const {
    rating = 0,
    size = "md",
    interactive = false
  } = Astro2.props;
  const roundedRating = Math.round(rating * 2) / 2;
  const fullStars = Math.floor(roundedRating);
  const hasHalfStar = roundedRating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6"
  };
  const starClass = sizeClasses[size];
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`flex items-center ${interactive ? "cursor-pointer" : ""}`, "class")} id="star-rating-container"> ${[...Array(fullStars)].map((_, i) => renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"${addAttribute(`${starClass} text-yellow-400`, "class")}${addAttribute(i + 1, "data-rating")}> <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path> </svg>`)} ${hasHalfStar && renderTemplate`<div class="relative"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"${addAttribute(`${starClass} text-gray-300`, "class")}${addAttribute(fullStars + 1, "data-rating")}> <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path> </svg> <div class="absolute inset-0 overflow-hidden"${addAttribute(`width: 50%`, "style")}> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"${addAttribute(`${starClass} text-yellow-400`, "class")}> <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path> </svg> </div> </div>`} ${[...Array(emptyStars)].map((_, i) => renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"${addAttribute(`${starClass} text-gray-300`, "class")}${addAttribute(fullStars + (hasHalfStar ? 1 : 0) + i + 1, "data-rating")}> <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path> </svg>`)} ${rating > 0 && renderTemplate`<span class="ml-1 text-sm font-medium text-gray-600 dark:text-gray-400"> ${rating.toFixed(1)} </span>`} </div> ${interactive && renderTemplate(_a || (_a = __template(["<script>(function(){", "\n    if (interactive) {\n      const container = document.getElementById('star-rating-container');\n      const stars = container.querySelectorAll('svg');\n      \n      // Highlight stars on hover\n      stars.forEach(star => {\n        star.addEventListener('mouseenter', () => {\n          const rating = parseInt(star.getAttribute('data-rating'));\n          highlightStars(rating);\n        });\n      });\n      \n      // Reset stars when mouse leaves container\n      container.addEventListener('mouseleave', () => {\n        const currentRating = parseInt(container.getAttribute('data-current-rating') || '0');\n        highlightStars(currentRating);\n      });\n      \n      // Set rating on click\n      stars.forEach(star => {\n        star.addEventListener('click', () => {\n          const rating = parseInt(star.getAttribute('data-rating'));\n          container.setAttribute('data-current-rating', rating.toString());\n          highlightStars(rating);\n          \n          // Dispatch custom event\n          const event = new CustomEvent('rating-changed', { detail: { rating } });\n          container.dispatchEvent(event);\n        });\n      });\n      \n      function highlightStars(rating) {\n        stars.forEach(star => {\n          const starRating = parseInt(star.getAttribute('data-rating'));\n          if (starRating <= rating) {\n            star.classList.remove('text-gray-300');\n            star.classList.add('text-yellow-400');\n          } else {\n            star.classList.remove('text-yellow-400');\n            star.classList.add('text-gray-300');\n          }\n        });\n      }\n    }\n  })();<\/script>"])), defineScriptVars({ interactive }))}`;
}, "/Users/neilhumphrey/Documents/GitHub/astro-theme/src/components/StarRating.astro", void 0);

const $$Astro = createAstro("http://localhost:3000");
const $$ResourceCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ResourceCard;
  const { resource, variant = "default" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/resources/${resource.slug}`, "href")} class="group block h-full"> <div${addAttribute(`bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md transition-transform transform group-hover:scale-[1.02] h-full ${variant === "horizontal" ? "md:flex" : ""}`, "class")}> <div${addAttribute(`bg-gray-200 dark:bg-gray-700 ${variant === "horizontal" ? "md:w-1/3" : "aspect-video"}`, "class")}> <img${addAttribute(resource.image_url || "/placeholder.svg?height=200&width=400", "src")}${addAttribute(resource.name, "alt")} class="w-full h-full object-cover"> </div> <div${addAttribute(`p-6 ${variant === "horizontal" ? "md:w-2/3" : ""}`, "class")}> <div class="flex items-center mb-2"> ${resource.categories && renderTemplate`<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200"> ${resource.categories.name} </span>`} </div> <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400"> ${resource.name} </h3> ${resource.average_rating > 0 && renderTemplate`<div class="mb-2"> ${renderComponent($$result, "StarRating", $$StarRating, { "rating": resource.average_rating, "size": "sm" })} </div>`} <p class="text-gray-600 dark:text-gray-400 line-clamp-2"> ${resource.description} </p> <div class="mt-4 flex items-center justify-between"> <span class="text-gray-500 dark:text-gray-400 text-sm">
Added on ${new Date(resource.created_at).toLocaleDateString()} </span> <span class="text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition-transform inline-flex items-center">
View details
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 ml-1"> <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path> </svg> </span> </div> </div> </div> </a>`;
}, "/Users/neilhumphrey/Documents/GitHub/astro-theme/src/components/ResourceCard.astro", void 0);

export { $$ResourceCard as $, $$StarRating as a };
