import { ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr } from "vue/server-renderer";
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "blog-publish-container" }, _attrs))} data-v-82a0ec03><h2 data-v-82a0ec03>发布新博客文章</h2><label data-v-82a0ec03> 标题： <input${ssrRenderAttr("value", title.value)} type="text" placeholder="请输入文章标题" data-v-82a0ec03></label><label data-v-82a0ec03> 作者： <input${ssrRenderAttr("value", author.value)} type="text" placeholder="请输入作者名" data-v-82a0ec03></label><label data-v-82a0ec03> 内容： <textarea placeholder="请输入文章内容" data-v-82a0ec03>${ssrInterpolate(content.value)}</textarea></label><button${ssrIncludeBooleanAttr(loading.value) ? " disabled" : ""} data-v-82a0ec03>${ssrInterpolate(loading.value ? "发布中..." : "发布")}</button>`);
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
export {
  admin as default
};
//# sourceMappingURL=admin-C3juT9M_.js.map
