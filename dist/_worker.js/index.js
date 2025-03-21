globalThis.process ??= {}; globalThis.process.env ??= {};
import { renderers } from './renderers.mjs';
import { a as actions } from './chunks/_noop-actions_Dk2yPKP3.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_ly9Wpm7-.mjs';
import { manifest } from './manifest_DnxWOFUd.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/404.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/admin.astro.mjs');
const _page3 = () => import('./pages/api/approve-resource.astro.mjs');
const _page4 = () => import('./pages/api/submit-rating.astro.mjs');
const _page5 = () => import('./pages/api/submit-resource.astro.mjs');
const _page6 = () => import('./pages/categories/_slug_.astro.mjs');
const _page7 = () => import('./pages/categories.astro.mjs');
const _page8 = () => import('./pages/contact.astro.mjs');
const _page9 = () => import('./pages/resources/_slug_.astro.mjs');
const _page10 = () => import('./pages/resources.astro.mjs');
const _page11 = () => import('./pages/submit.astro.mjs');
const _page12 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["src/pages/404.astro", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/admin/index.astro", _page2],
    ["src/pages/api/approve-resource.js", _page3],
    ["src/pages/api/submit-rating.js", _page4],
    ["src/pages/api/submit-resource.js", _page5],
    ["src/pages/categories/[slug].astro", _page6],
    ["src/pages/categories/index.astro", _page7],
    ["src/pages/contact.astro", _page8],
    ["src/pages/resources/[slug].astro", _page9],
    ["src/pages/resources/index.astro", _page10],
    ["src/pages/submit.astro", _page11],
    ["src/pages/index.astro", _page12]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions,
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = undefined;
const _exports = createExports(_manifest);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
