import {
  require_shopify
} from "/build/_shared/chunk-SU66BP3D.js";
import {
  Button,
  Card,
  Layout,
  Page,
  Text,
  init_esm as init_esm2
} from "/build/_shared/chunk-7I2LZPFH.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  init_esm,
  useLoaderData,
  useSubmit
} from "/build/_shared/chunk-YIQU3HCT.js";
import {
  createHotContext,
  init_remix_hmr
} from "/build/_shared/chunk-M3KJXU6O.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/app._index.jsx
init_remix_hmr();
var import_shopify = __toESM(require_shopify());
init_esm2();
init_esm();

// app/controllers/api/webhooks/webhooks_interface.js
init_remix_hmr();

// app/controllers/api/webhooks/webhooks_manager.js
init_remix_hmr();

// app/config.js
init_remix_hmr();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/config.js"
  );
  import.meta.hot.lastModified = "1701988787102.035";
}
var config_default = {
  serverUrl: "https://1b6f-144-32-240-121.ngrok-free.app",
  serverRoutes: {
    webhooks: {
      createOrder: "/webhook/order/create"
    }
  }
};

// app/controllers/api/webhooks/webhooks_manager.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/controllers/api/webhooks/webhooks_manager.js"
  );
  import.meta.hot.lastModified = "1701989171071.2761";
}
var serverUrl = config_default.serverUrl;
var route = config_default.serverRoutes.webhooks.createOrder;
var endpoint = serverUrl + route;

// app/controllers/api/webhooks/webhooks_interface.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/controllers/api/webhooks/webhooks_interface.js"
  );
  import.meta.hot.lastModified = "1701989150977.143";
}

// app/routes/app._index.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/app._index.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/app._index.jsx"
  );
  import.meta.hot.lastModified = "1701989240740.8035";
}
function Index() {
  _s();
  const loaderData = useLoaderData();
  const submit = useSubmit();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Page, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { as: "h1", variant: "headingLg", children: loaderData == null ? void 0 : loaderData.error }, void 0, false, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 71,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { onClick: () => {
      submit({
        action: "delete-subscriptions"
      }, {
        method: "POST"
      });
    }, children: "Delete All Webhook Subscriptions" }, void 0, false, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 73,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { onClick: () => {
      submit({
        action: "create-subscription"
      }, {
        method: "POST"
      });
    }, children: "Create a Webhook Subscription" }, void 0, false, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 82,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: (loaderData == null ? void 0 : loaderData.ids) && loaderData.ids.map((id) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { as: "h3", variant: "bodyLg", children: id }, void 0, false, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 95,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 94,
      columnNumber: 56
    }, this)) }, void 0, false, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 93,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 92,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/app._index.jsx",
    lineNumber: 70,
    columnNumber: 10
  }, this);
}
_s(Index, "Xae86aUTtug9kyQ7XEW4c1bDe+E=", false, function() {
  return [useLoaderData, useSubmit];
});
_c = Index;
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default
};
//# sourceMappingURL=/build/routes/app._index-YUMQOUN5.js.map
