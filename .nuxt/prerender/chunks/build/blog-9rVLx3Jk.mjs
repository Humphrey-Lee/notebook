import { ref, mergeProps, useSSRContext } from 'file:///Users/humphreylee/Desktop/notebook/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate } from 'file:///Users/humphreylee/Desktop/notebook/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';
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
  __name: "blog",
  __ssrInlineRender: true,
  setup(__props) {
    const blog2 = ref({
      title: "",
      content: "",
      author: "",
      date: "",
      tags: []
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "blog-container" }, _attrs))} data-v-27a3130d><h1 data-v-27a3130d>${ssrInterpolate(blog2.value.title)}</h1><p data-v-27a3130d>${ssrInterpolate(blog2.value.content)}</p><div class="blog-meta" data-v-27a3130d><p data-v-27a3130d><strong data-v-27a3130d>\u4F5C\u8005\uFF1A</strong>${ssrInterpolate(blog2.value.author)}</p><p data-v-27a3130d><strong data-v-27a3130d>\u53D1\u5E03\u65E5\u671F\uFF1A</strong>${ssrInterpolate(blog2.value.date)}</p><p data-v-27a3130d><strong data-v-27a3130d>\u6807\u7B7E\uFF1A</strong>${ssrInterpolate(blog2.value.tags.join(", "))}</p></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const blog = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-27a3130d"]]);

export { blog as default };
//# sourceMappingURL=blog-9rVLx3Jk.mjs.map
