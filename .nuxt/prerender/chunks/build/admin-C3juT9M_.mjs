import { ref, mergeProps, useSSRContext } from 'file:///Users/humphreylee/Desktop/notebook/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr } from 'file:///Users/humphreylee/Desktop/notebook/node_modules/vue/server-renderer/index.mjs';
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
  __name: "admin",
  __ssrInlineRender: true,
  setup(__props) {
    const title = ref("");
    const content = ref("");
    const author = ref("");
    const loading = ref(false);
    const successMessage = ref("");
    const errorMessage = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "blog-publish-container" }, _attrs))} data-v-82a0ec03><h2 data-v-82a0ec03>\u53D1\u5E03\u65B0\u535A\u5BA2\u6587\u7AE0</h2><label data-v-82a0ec03> \u6807\u9898\uFF1A <input${ssrRenderAttr("value", title.value)} type="text" placeholder="\u8BF7\u8F93\u5165\u6587\u7AE0\u6807\u9898" data-v-82a0ec03></label><label data-v-82a0ec03> \u4F5C\u8005\uFF1A <input${ssrRenderAttr("value", author.value)} type="text" placeholder="\u8BF7\u8F93\u5165\u4F5C\u8005\u540D" data-v-82a0ec03></label><label data-v-82a0ec03> \u5185\u5BB9\uFF1A <textarea placeholder="\u8BF7\u8F93\u5165\u6587\u7AE0\u5185\u5BB9" data-v-82a0ec03>${ssrInterpolate(content.value)}</textarea></label><button${ssrIncludeBooleanAttr(loading.value) ? " disabled" : ""} data-v-82a0ec03>${ssrInterpolate(loading.value ? "\u53D1\u5E03\u4E2D..." : "\u53D1\u5E03")}</button>`);
      if (successMessage.value) {
        _push(`<p class="success-message" data-v-82a0ec03>${ssrInterpolate(successMessage.value)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (errorMessage.value) {
        _push(`<p class="error-message" data-v-82a0ec03>${ssrInterpolate(errorMessage.value)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const admin = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-82a0ec03"]]);

export { admin as default };
//# sourceMappingURL=admin-C3juT9M_.mjs.map
