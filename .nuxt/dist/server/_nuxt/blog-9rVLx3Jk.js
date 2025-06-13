import { ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "blog-container" }, _attrs))} data-v-27a3130d><h1 data-v-27a3130d>${ssrInterpolate(blog2.value.title)}</h1><p data-v-27a3130d>${ssrInterpolate(blog2.value.content)}</p><div class="blog-meta" data-v-27a3130d><p data-v-27a3130d><strong data-v-27a3130d>作者：</strong>${ssrInterpolate(blog2.value.author)}</p><p data-v-27a3130d><strong data-v-27a3130d>发布日期：</strong>${ssrInterpolate(blog2.value.date)}</p><p data-v-27a3130d><strong data-v-27a3130d>标签：</strong>${ssrInterpolate(blog2.value.tags.join(", "))}</p></div></div>`);
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
export {
  blog as default
};
//# sourceMappingURL=blog-9rVLx3Jk.js.map
