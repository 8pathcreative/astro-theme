import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { o as NOOP_MIDDLEWARE_HEADER, p as decodeKey } from './chunks/astro/server_DWG73qgy.mjs';
import 'cookie';
import 'es-module-lexer';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/neilhumphrey/Documents/GitHub/astro-theme/","cacheDir":"file:///Users/neilhumphrey/Documents/GitHub/astro-theme/node_modules/.astro/","outDir":"file:///Users/neilhumphrey/Documents/GitHub/astro-theme/dist/","srcDir":"file:///Users/neilhumphrey/Documents/GitHub/astro-theme/src/","publicDir":"file:///Users/neilhumphrey/Documents/GitHub/astro-theme/public/","buildClientDir":"file:///Users/neilhumphrey/Documents/GitHub/astro-theme/dist/client/","buildServerDir":"file:///Users/neilhumphrey/Documents/GitHub/astro-theme/dist/server/","adapterName":"","routes":[{"file":"file:///Users/neilhumphrey/Documents/GitHub/astro-theme/dist/404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/neilhumphrey/Documents/GitHub/astro-theme/dist/about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/neilhumphrey/Documents/GitHub/astro-theme/dist/admin/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/admin","isIndex":true,"type":"page","pattern":"^\\/admin\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/admin/index.astro","pathname":"/admin","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/neilhumphrey/Documents/GitHub/astro-theme/dist/api/approve-resource","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/approve-resource","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/approve-resource\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"approve-resource","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/approve-resource.js","pathname":"/api/approve-resource","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/neilhumphrey/Documents/GitHub/astro-theme/dist/api/submit-rating","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/submit-rating","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/submit-rating\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"submit-rating","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/submit-rating.js","pathname":"/api/submit-rating","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/neilhumphrey/Documents/GitHub/astro-theme/dist/api/submit-resource","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/submit-resource","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/submit-resource\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"submit-resource","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/submit-resource.js","pathname":"/api/submit-resource","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/neilhumphrey/Documents/GitHub/astro-theme/dist/categories/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/categories","isIndex":true,"type":"page","pattern":"^\\/categories\\/?$","segments":[[{"content":"categories","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/categories/index.astro","pathname":"/categories","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/neilhumphrey/Documents/GitHub/astro-theme/dist/contact/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/neilhumphrey/Documents/GitHub/astro-theme/dist/resources/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/resources","isIndex":true,"type":"page","pattern":"^\\/resources\\/?$","segments":[[{"content":"resources","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/resources/index.astro","pathname":"/resources","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/neilhumphrey/Documents/GitHub/astro-theme/dist/submit/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/submit","isIndex":false,"type":"page","pattern":"^\\/submit\\/?$","segments":[[{"content":"submit","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/submit.astro","pathname":"/submit","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/neilhumphrey/Documents/GitHub/astro-theme/dist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"http://localhost:3000","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/neilhumphrey/Documents/GitHub/astro-theme/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/Users/neilhumphrey/Documents/GitHub/astro-theme/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/Users/neilhumphrey/Documents/GitHub/astro-theme/src/pages/admin/index.astro",{"propagation":"none","containsHead":true}],["/Users/neilhumphrey/Documents/GitHub/astro-theme/src/pages/categories/[slug].astro",{"propagation":"none","containsHead":true}],["/Users/neilhumphrey/Documents/GitHub/astro-theme/src/pages/categories/index.astro",{"propagation":"none","containsHead":true}],["/Users/neilhumphrey/Documents/GitHub/astro-theme/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/Users/neilhumphrey/Documents/GitHub/astro-theme/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/neilhumphrey/Documents/GitHub/astro-theme/src/pages/resources/[slug].astro",{"propagation":"none","containsHead":true}],["/Users/neilhumphrey/Documents/GitHub/astro-theme/src/pages/resources/index.astro",{"propagation":"none","containsHead":true}],["/Users/neilhumphrey/Documents/GitHub/astro-theme/src/pages/submit.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/admin/index@_@astro":"pages/admin.astro.mjs","\u0000@astro-page:src/pages/api/approve-resource@_@js":"pages/api/approve-resource.astro.mjs","\u0000@astro-page:src/pages/api/submit-rating@_@js":"pages/api/submit-rating.astro.mjs","\u0000@astro-page:src/pages/api/submit-resource@_@js":"pages/api/submit-resource.astro.mjs","\u0000@astro-page:src/pages/categories/[slug]@_@astro":"pages/categories/_slug_.astro.mjs","\u0000@astro-page:src/pages/categories/index@_@astro":"pages/categories.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/resources/[slug]@_@astro":"pages/resources/_slug_.astro.mjs","\u0000@astro-page:src/pages/resources/index@_@astro":"pages/resources.astro.mjs","\u0000@astro-page:src/pages/submit@_@astro":"pages/submit.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_Ci9v99BZ.mjs","/Users/neilhumphrey/Documents/GitHub/astro-theme/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DRammV43.mjs","/Users/neilhumphrey/Documents/GitHub/astro-theme/src/pages/admin/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.CXUv3573.js","/Users/neilhumphrey/Documents/GitHub/astro-theme/src/pages/contact.astro?astro&type=script&index=0&lang.ts":"_astro/contact.astro_astro_type_script_index_0_lang.BrXDfigx.js","/Users/neilhumphrey/Documents/GitHub/astro-theme/src/pages/submit.astro?astro&type=script&index=0&lang.ts":"_astro/submit.astro_astro_type_script_index_0_lang.ZTyLnU0e.js","/Users/neilhumphrey/Documents/GitHub/astro-theme/src/pages/resources/[slug].astro?astro&type=script&index=0&lang.ts":"_astro/_slug_.astro_astro_type_script_index_0_lang.CBDZGe9R.js","/Users/neilhumphrey/Documents/GitHub/astro-theme/src/layouts/MainLayout.astro?astro&type=script&index=0&lang.ts":"_astro/MainLayout.astro_astro_type_script_index_0_lang.C9lEY0lm.js","/Users/neilhumphrey/Documents/GitHub/astro-theme/src/components/Newsletter.astro?astro&type=script&index=0&lang.ts":"_astro/Newsletter.astro_astro_type_script_index_0_lang.D5EGHF9L.js","/Users/neilhumphrey/Documents/GitHub/astro-theme/src/components/RatingForm.astro?astro&type=script&index=0&lang.ts":"_astro/RatingForm.astro_astro_type_script_index_0_lang.Z09fxsxO.js","/Users/neilhumphrey/Documents/GitHub/astro-theme/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.BgEWZmo6.js","/Users/neilhumphrey/Documents/GitHub/astro-theme/src/components/ThemeToggle.astro?astro&type=script&index=0&lang.ts":"_astro/ThemeToggle.astro_astro_type_script_index_0_lang.BBEYadBj.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/neilhumphrey/Documents/GitHub/astro-theme/src/pages/admin/index.astro?astro&type=script&index=0&lang.ts","document.querySelectorAll(\"[data-action]\").forEach(r=>{r.addEventListener(\"click\",async()=>{const o=r.getAttribute(\"data-id\"),e=r.getAttribute(\"data-action\");if(!(!o||!e))try{console.log(`${e} resource with ID: ${o}`),alert(`Resource ${e===\"approve\"?\"approved\":\"rejected\"} successfully!`),window.location.reload()}catch(t){console.error(`Error ${e}ing resource:`,t),alert(`Error ${e}ing resource. Please try again.`)}})});"],["/Users/neilhumphrey/Documents/GitHub/astro-theme/src/pages/contact.astro?astro&type=script&index=0&lang.ts","document.getElementById(\"contact-form\")?.addEventListener(\"submit\",async e=>{e.preventDefault();const t=e.target,r=new FormData(t),a=Object.fromEntries(r.entries());try{console.log(\"Contact form data:\",a),t.reset(),alert(\"Your message has been sent! We'll get back to you soon.\")}catch(o){console.error(\"Error sending message:\",o),alert(\"There was an error sending your message. Please try again.\")}});"],["/Users/neilhumphrey/Documents/GitHub/astro-theme/src/pages/submit.astro?astro&type=script&index=0&lang.ts","document.getElementById(\"resource-form\")?.addEventListener(\"submit\",async r=>{r.preventDefault();const t=r.target,o=new FormData(t),s=Object.fromEntries(o.entries());try{const{error:e}=await fetch(\"/api/submit-resource\",{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify(s)}).then(n=>n.json());if(e)throw new Error(e);t.reset(),alert(\"Resource submitted successfully! We'll review it shortly.\")}catch(e){console.error(\"Error submitting resource:\",e),alert(\"There was an error submitting your resource. Please try again.\")}});"],["/Users/neilhumphrey/Documents/GitHub/astro-theme/src/pages/resources/[slug].astro?astro&type=script&index=0&lang.ts","document.getElementById(\"share-button\")?.addEventListener(\"click\",async()=>{try{navigator.share?await navigator.share({title:document.title,url:window.location.href}):(await navigator.clipboard.writeText(window.location.href),alert(\"Link copied to clipboard!\"))}catch(r){console.error(\"Error sharing resource:\",r)}});"],["/Users/neilhumphrey/Documents/GitHub/astro-theme/src/layouts/MainLayout.astro?astro&type=script&index=0&lang.ts","const e=typeof localStorage<\"u\"&&localStorage.getItem(\"theme\")?localStorage.getItem(\"theme\"):window.matchMedia(\"(prefers-color-scheme: dark)\").matches?\"dark\":\"light\";e===\"dark\"?document.documentElement.classList.add(\"dark\"):document.documentElement.classList.remove(\"dark\");"],["/Users/neilhumphrey/Documents/GitHub/astro-theme/src/components/Newsletter.astro?astro&type=script&index=0&lang.ts","document.getElementById(\"newsletter-form\")?.addEventListener(\"submit\",async e=>{e.preventDefault();const r=e.target,t=r.email.value;try{console.log(\"Subscribing email:\",t),r.reset(),alert(\"Thanks for subscribing to our newsletter!\")}catch(s){console.error(\"Error subscribing to newsletter:\",s),alert(\"There was an error subscribing to the newsletter. Please try again.\")}});"],["/Users/neilhumphrey/Documents/GitHub/astro-theme/src/components/RatingForm.astro?astro&type=script&index=0&lang.ts","const i=document.querySelectorAll(\"#rating-stars button\"),s=document.getElementById(\"rating-input\");i.forEach(r=>{r.addEventListener(\"click\",()=>{const e=parseInt(r.getAttribute(\"data-rating\"));s.value=e,i.forEach(t=>{parseInt(t.getAttribute(\"data-rating\"))<=e?(t.classList.remove(\"text-gray-300\"),t.classList.add(\"text-yellow-400\")):(t.classList.remove(\"text-yellow-400\"),t.classList.add(\"text-gray-300\"))})})});const c=document.getElementById(\"rating-form\");c?.addEventListener(\"submit\",async r=>{r.preventDefault();const e=r.target,t=new FormData(e),a=Object.fromEntries(t.entries());if(!a.rating||parseInt(a.rating)<1){alert(\"Please select a rating\");return}try{const o=await(await fetch(\"/api/submit-rating\",{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify(a)})).json();if(o.error)throw new Error(o.error);alert(\"Thank you for your rating!\"),window.location.reload()}catch(n){console.error(\"Error submitting rating:\",n),alert(\"There was an error submitting your rating. Please try again.\")}});"],["/Users/neilhumphrey/Documents/GitHub/astro-theme/src/components/Header.astro?astro&type=script&index=0&lang.ts","const e=document.getElementById(\"mobile-menu-button\"),t=document.getElementById(\"mobile-menu\");e&&t&&e.addEventListener(\"click\",()=>{t.classList.toggle(\"hidden\")});"],["/Users/neilhumphrey/Documents/GitHub/astro-theme/src/components/ThemeToggle.astro?astro&type=script&index=0&lang.ts","const o=document.getElementById(\"theme-toggle\"),e=document.getElementById(\"theme-toggle-dark-icon\"),t=document.getElementById(\"theme-toggle-light-icon\");localStorage.getItem(\"theme\")===\"dark\"||!(\"theme\"in localStorage)&&window.matchMedia(\"(prefers-color-scheme: dark)\").matches?(t?.classList.remove(\"hidden\"),document.documentElement.classList.add(\"dark\")):(e?.classList.remove(\"hidden\"),document.documentElement.classList.remove(\"dark\"));o?.addEventListener(\"click\",()=>{e?.classList.toggle(\"hidden\"),t?.classList.toggle(\"hidden\"),localStorage.getItem(\"theme\")?localStorage.getItem(\"theme\")===\"light\"?(document.documentElement.classList.add(\"dark\"),localStorage.setItem(\"theme\",\"dark\")):(document.documentElement.classList.remove(\"dark\"),localStorage.setItem(\"theme\",\"light\")):document.documentElement.classList.contains(\"dark\")?(document.documentElement.classList.remove(\"dark\"),localStorage.setItem(\"theme\",\"light\")):(document.documentElement.classList.add(\"dark\"),localStorage.setItem(\"theme\",\"dark\"))});"]],"assets":["/file:///Users/neilhumphrey/Documents/GitHub/astro-theme/dist/404.html","/file:///Users/neilhumphrey/Documents/GitHub/astro-theme/dist/about/index.html","/file:///Users/neilhumphrey/Documents/GitHub/astro-theme/dist/admin/index.html","/file:///Users/neilhumphrey/Documents/GitHub/astro-theme/dist/api/approve-resource","/file:///Users/neilhumphrey/Documents/GitHub/astro-theme/dist/api/submit-rating","/file:///Users/neilhumphrey/Documents/GitHub/astro-theme/dist/api/submit-resource","/file:///Users/neilhumphrey/Documents/GitHub/astro-theme/dist/categories/index.html","/file:///Users/neilhumphrey/Documents/GitHub/astro-theme/dist/contact/index.html","/file:///Users/neilhumphrey/Documents/GitHub/astro-theme/dist/resources/index.html","/file:///Users/neilhumphrey/Documents/GitHub/astro-theme/dist/submit/index.html","/file:///Users/neilhumphrey/Documents/GitHub/astro-theme/dist/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"NvaWStIA1zXxGx69hGuSl2wkJLjFaSVUoWPB/iWpC3Y="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
