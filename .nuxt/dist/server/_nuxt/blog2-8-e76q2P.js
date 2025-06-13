import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "/Users/humphreylee/Desktop/notebook/node_modules/hookable/dist/index.mjs";
import "/Users/humphreylee/Desktop/notebook/node_modules/unctx/dist/index.mjs";
import "/Users/humphreylee/Desktop/notebook/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/humphreylee/Desktop/notebook/node_modules/radix3/dist/index.mjs";
import "/Users/humphreylee/Desktop/notebook/node_modules/defu/dist/defu.mjs";
import "/Users/humphreylee/Desktop/notebook/node_modules/ufo/dist/index.mjs";
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
      console.error("获取数据失败:", error);
    });
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "blog2-container" }, _attrs))} data-v-d8f9e801><h1 data-v-d8f9e801>Blog2 页面</h1><div class="card-list" data-v-d8f9e801><!--[-->`);
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
export {
  blog2 as default
};
//# sourceMappingURL=blog2-8-e76q2P.js.map
