import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import { u as useHead } from "./v3-CSwQ5pjQ.js";
import "ofetch";
import "#internal/nuxt/paths";
import "/Users/humphreylee/Desktop/notebook/node_modules/hookable/dist/index.mjs";
import "/Users/humphreylee/Desktop/notebook/node_modules/unctx/dist/index.mjs";
import "/Users/humphreylee/Desktop/notebook/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/humphreylee/Desktop/notebook/node_modules/radix3/dist/index.mjs";
import "/Users/humphreylee/Desktop/notebook/node_modules/defu/dist/defu.mjs";
import "/Users/humphreylee/Desktop/notebook/node_modules/ufo/dist/index.mjs";
import "/Users/humphreylee/Desktop/notebook/node_modules/@unhead/vue/dist/index.mjs";
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "home-page" }, _attrs))} data-v-5b090b26><div id="bg-canvas" data-v-5b090b26></div><nav class="navigation" data-v-5b090b26><div class="nav-left" data-v-5b090b26><a href="/" class="active" data-v-5b090b26>JISHI</a></div><div class="nav-center" data-v-5b090b26></div><div class="nav-right" data-v-5b090b26></div></nav><main class="home-container" data-v-5b090b26><div class="home-content" data-v-5b090b26><p class="main-text" data-v-5b090b26>即是设计，是由刘鑫和星陈发起的双人合作设计工作室，专注于品牌设计及网站建设。</p><p class="main-text" data-v-5b090b26>我们没有复杂的公司层级，每一次联络、提案、创作，都是由我们直接参与，与您共同经历。</p><p class="main-text" data-v-5b090b26>设计理然如此，每个项目，即是唯一。</p></div></main></div>`);
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
export {
  index as default
};
//# sourceMappingURL=index-DSEXr6BD.js.map
