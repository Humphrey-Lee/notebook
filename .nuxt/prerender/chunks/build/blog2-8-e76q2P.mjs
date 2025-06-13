import { mergeProps, useSSRContext } from 'file:///Users/humphreylee/Desktop/notebook/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'file:///Users/humphreylee/Desktop/notebook/node_modules/vue/server-renderer/index.mjs';
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
  name: "Blog2",
  data() {
    return {
      texts: []
      // 用来保存后端返回的文本数组
    };
  },
  mounted() {
    fetch("http://localhost:8000").then((response) => response.json()).then((data) => {
      this.texts = data;
    }).catch((error) => {
      console.error("\u83B7\u53D6\u6570\u636E\u5931\u8D25:", error);
    });
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "blog2-container" }, _attrs))} data-v-d8f9e801><h1 data-v-d8f9e801>Blog2 \u9875\u9762</h1><div class="card-list" data-v-d8f9e801><!--[-->`);
  ssrRenderList($data.texts, (item, index) => {
    _push(`<div class="card" data-v-d8f9e801><p data-v-d8f9e801>${ssrInterpolate(item)}</p></div>`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const blog2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-d8f9e801"]]);

export { blog2 as default };
//# sourceMappingURL=blog2-8-e76q2P.mjs.map
