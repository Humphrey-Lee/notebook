import { mergeProps, useSSRContext } from 'file:///Users/humphreylee/Desktop/notebook/node_modules/vue/index.mjs';
import { ssrRenderAttrs } from 'file:///Users/humphreylee/Desktop/notebook/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import { u as useHead } from './v3-CSwQ5pjQ.mjs';
import 'file:///Users/humphreylee/Desktop/notebook/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Users/humphreylee/Desktop/notebook/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/humphreylee/Desktop/notebook/node_modules/h3/dist/index.mjs';
import 'file:///Users/humphreylee/Desktop/notebook/node_modules/ufo/dist/index.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/humphreylee/Desktop/notebook/node_modules/destr/dist/index.mjs';
import 'file:///Users/humphreylee/Desktop/notebook/node_modules/hookable/dist/index.mjs';
import 'file:///Users/humphreylee/Desktop/notebook/node_modules/node-mock-http/dist/index.mjs';
import 'file:///Users/humphreylee/Desktop/notebook/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/humphreylee/Desktop/notebook/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/humphreylee/Desktop/notebook/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/humphreylee/Desktop/notebook/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/humphreylee/Desktop/notebook/node_modules/ohash/dist/index.mjs';
import 'file:///Users/humphreylee/Desktop/notebook/node_modules/klona/dist/index.mjs';
import 'file:///Users/humphreylee/Desktop/notebook/node_modules/defu/dist/defu.mjs';
import 'file:///Users/humphreylee/Desktop/notebook/node_modules/scule/dist/index.mjs';
import 'file:///Users/humphreylee/Desktop/notebook/node_modules/unctx/dist/index.mjs';
import 'file:///Users/humphreylee/Desktop/notebook/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/humphreylee/Desktop/notebook/node_modules/pathe/dist/index.mjs';
import 'file:///Users/humphreylee/Desktop/notebook/node_modules/unhead/dist/server.mjs';
import 'file:///Users/humphreylee/Desktop/notebook/node_modules/devalue/index.js';
import 'file:///Users/humphreylee/Desktop/notebook/node_modules/unhead/dist/utils.mjs';
import 'file:///Users/humphreylee/Desktop/notebook/node_modules/unhead/dist/plugins.mjs';
import 'file:///Users/humphreylee/Desktop/notebook/node_modules/vue-router/dist/vue-router.node.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "JISHI Studio",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
        { charset: "UTF-8" }
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/images/jishi/Untitled.svg" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "home-page" }, _attrs))} data-v-5b090b26><div id="bg-canvas" data-v-5b090b26></div><nav class="navigation" data-v-5b090b26><div class="nav-left" data-v-5b090b26><a href="/" class="active" data-v-5b090b26>JISHI</a></div><div class="nav-center" data-v-5b090b26></div><div class="nav-right" data-v-5b090b26></div></nav><main class="home-container" data-v-5b090b26><div class="home-content" data-v-5b090b26><p class="main-text" data-v-5b090b26>\u5373\u662F\u8BBE\u8BA1\uFF0C\u662F\u7531\u5218\u946B\u548C\u661F\u9648\u53D1\u8D77\u7684\u53CC\u4EBA\u5408\u4F5C\u8BBE\u8BA1\u5DE5\u4F5C\u5BA4\uFF0C\u4E13\u6CE8\u4E8E\u54C1\u724C\u8BBE\u8BA1\u53CA\u7F51\u7AD9\u5EFA\u8BBE\u3002</p><p class="main-text" data-v-5b090b26>\u6211\u4EEC\u6CA1\u6709\u590D\u6742\u7684\u516C\u53F8\u5C42\u7EA7\uFF0C\u6BCF\u4E00\u6B21\u8054\u7EDC\u3001\u63D0\u6848\u3001\u521B\u4F5C\uFF0C\u90FD\u662F\u7531\u6211\u4EEC\u76F4\u63A5\u53C2\u4E0E\uFF0C\u4E0E\u60A8\u5171\u540C\u7ECF\u5386\u3002</p><p class="main-text" data-v-5b090b26>\u8BBE\u8BA1\u7406\u7136\u5982\u6B64\uFF0C\u6BCF\u4E2A\u9879\u76EE\uFF0C\u5373\u662F\u552F\u4E00\u3002</p></div></main></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5b090b26"]]);

export { index as default };
//# sourceMappingURL=index-DSEXr6BD.mjs.map
