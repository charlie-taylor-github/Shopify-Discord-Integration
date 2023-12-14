var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  mode: () => mode,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_server2 = require("react-dom/server"), import_react = require("@remix-run/react"), import_node2 = require("@remix-run/node"), import_isbot = __toESM(require("isbot"));

// app/shopify.server.js
var import_node = require("@shopify/shopify-app-remix/adapters/node"), import_server = require("@shopify/shopify-app-remix/server"), import_shopify_app_session_storage_prisma = require("@shopify/shopify-app-session-storage-prisma"), import__ = require("@shopify/shopify-api/rest/admin/2023-10");

// app/db.server.js
var import_client = require("@prisma/client"), prisma = global.prisma || new import_client.PrismaClient();
global.prisma || (global.prisma = new import_client.PrismaClient());
var db_server_default = prisma;

// app/shopify.server.js
var shopify = (0, import_server.shopifyApp)({
  apiKey: process.env.SHOPIFY_API_KEY,
  apiSecretKey: process.env.SHOPIFY_API_SECRET || "",
  apiVersion: import_server.LATEST_API_VERSION,
  scopes: process.env.SCOPES?.split(","),
  appUrl: process.env.SHOPIFY_APP_URL || "",
  authPathPrefix: "/auth",
  sessionStorage: new import_shopify_app_session_storage_prisma.PrismaSessionStorage(db_server_default),
  distribution: import_server.AppDistribution.AppStore,
  restResources: import__.restResources,
  webhooks: {
    APP_UNINSTALLED: {
      deliveryMethod: import_server.DeliveryMethod.Http,
      callbackUrl: "/webhooks"
    }
  },
  hooks: {
    afterAuth: async ({ session }) => {
      shopify.registerWebhooks({ session });
    }
  },
  future: {
    v3_webhookAdminContext: !0
  },
  ...process.env.SHOP_CUSTOM_DOMAIN ? { customShopDomains: [process.env.SHOP_CUSTOM_DOMAIN] } : {}
});
var addDocumentResponseHeaders = shopify.addDocumentResponseHeaders, authenticate = shopify.authenticate, unauthenticated = shopify.unauthenticated, login = shopify.login, registerWebhooks = shopify.registerWebhooks, sessionStorage = shopify.sessionStorage;

// app/entry.server.jsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
async function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  addDocumentResponseHeaders(request, responseHeaders);
  let callbackName = (0, import_isbot.default)(request.headers.get("user-agent")) ? "onAllReady" : "onShellReady";
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server2.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.jsx",
          lineNumber: 23,
          columnNumber: 7
        },
        this
      ),
      {
        [callbackName]: () => {
          let body = new import_stream.PassThrough(), stream = (0, import_node2.createReadableStreamFromReadable)(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App
});
var import_react2 = require("@remix-run/react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 14,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 15,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 16,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 17,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 20,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 23,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 19,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/routes/app._index.jsx
var app_index_exports = {};
__export(app_index_exports, {
  action: () => action,
  default: () => Index,
  loader: () => loader
});
var import_polaris = require("@shopify/polaris"), import_react3 = require("@remix-run/react");

// app/config.js
var config_default = {
  serverUrl: "https://1b6f-144-32-240-121.ngrok-free.app",
  serverRoutes: {
    webhooks: {
      createOrder: "/webhook/order/create"
    }
  }
};

// app/controllers/api/webhooks/webhooks_manager.js
var serverUrl = config_default.serverUrl, route = config_default.serverRoutes.webhooks.createOrder, endpoint = serverUrl + route;
async function makeQuery(graphql, queryString) {
  return (await (await graphql(queryString)).json()).data;
}
async function getAll(graphql, topic) {
  let query = `
    query {
        webhookSubscriptions(first: 50, topics: ${topic}) {
            edges {
                node {
                    id
                }
            }
        }
    }
    `;
  try {
    return { ids: (await makeQuery(graphql, query))?.webhookSubscriptions?.edges?.map((s) => s?.node?.id) };
  } catch (e) {
    return { error: e };
  }
}
async function createOne(graphql, topic) {
  let query = `
    mutation {
        webhookSubscriptionCreate(
            topic: ${topic}
            webhookSubscription: {
                callbackUrl: "${endpoint}"
            }
        ) {
            webhookSubscription {
                id
            }
        }
    }
    `;
  try {
    return await makeQuery(graphql, query) ? {} : { error: "CREATE_WEBHOOK_SUBSCRIPTION_ERROR" };
  } catch (e) {
    return { error: e };
  }
}
async function deleteOne(graphql, id) {
  let query = `
    mutation {
        webhookSubscriptionDelete(id: "${id}") {
            deletedWebhookSubscriptionId
            userErrors {
                field
                message
            }
        }
    }
    `;
  try {
    return await makeQuery(graphql, query) ? {} : { error: "DELETE_WEBHOOK_SUBSCRIPTION_ERROR" };
  } catch (e) {
    return { error: e };
  }
}
var webhooks_manager_default = { getAll, createOne, deleteOne };

// app/controllers/api/webhooks/webhooks_interface.js
async function getAll2(graphql, topic) {
  let { error, ids } = await webhooks_manager_default.getAll(graphql, topic);
  return { error, ids };
}
async function createOne2(graphql, topic) {
  let { error } = await webhooks_manager_default.createOne(graphql, topic);
  return { error };
}
async function deleteAll(graphql, topic) {
  let { error, ids } = await webhooks_manager_default.getAll(graphql, topic);
  if (error)
    return { error };
  for (let id of ids) {
    let { error: deleteError } = await webhooks_manager_default.deleteOne(graphql, id);
    if (deleteError)
      return { error: deleteError };
  }
  return {};
}
var webhooks_interface_default = { getAll: getAll2, createOne: createOne2, deleteAll };

// app/routes/app._index.jsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
async function loader({ request }) {
  let { admin } = await authenticate.admin(request), { error, ids } = await webhooks_interface_default.getAll(admin.graphql, "ORDERS_CREATE");
  return { error, ids };
}
async function action({ request }) {
  let { admin } = await authenticate.admin(request), action4 = await (await request.formData()).get("action"), error;
  if (action4 === "create-subscription") {
    let { error: createError } = await webhooks_interface_default.createOne(
      admin.graphql,
      "ORDERS_CREATE"
    );
    createError && (error = createError);
  }
  if (action4 === "delete-subscriptions") {
    let { error: deleteError } = await webhooks_interface_default.deleteAll(
      admin.graphql,
      "ORDERS_CREATE"
    );
    deleteError && (error = deleteError);
  }
  return { error };
}
function Index() {
  let loaderData = (0, import_react3.useLoaderData)(), submit = (0, import_react3.useSubmit)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_polaris.Page, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_polaris.Text, { as: "h1", variant: "headingLg", children: loaderData?.error }, void 0, !1, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 41,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      import_polaris.Button,
      {
        onClick: () => {
          submit(
            { action: "delete-subscriptions" },
            { method: "POST" }
          );
        },
        children: "Delete All Webhook Subscriptions"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/app._index.jsx",
        lineNumber: 43,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      import_polaris.Button,
      {
        onClick: () => {
          submit(
            { action: "create-subscription" },
            { method: "POST" }
          );
        },
        children: "Create a Webhook Subscription"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/app._index.jsx",
        lineNumber: 51,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_polaris.Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_polaris.Layout, { children: loaderData?.ids && loaderData.ids.map((id) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_polaris.Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_polaris.Text, { as: "h3", variant: "bodyLg", children: id }, void 0, !1, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 65,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 64,
      columnNumber: 15
    }, this)) }, void 0, !1, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 61,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 60,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/app._index.jsx",
    lineNumber: 40,
    columnNumber: 5
  }, this);
}

// app/routes/auth.login/route.jsx
var route_exports = {};
__export(route_exports, {
  action: () => action2,
  default: () => Auth,
  links: () => links,
  loader: () => loader2
});
var import_react4 = require("react"), import_node3 = require("@remix-run/node"), import_polaris2 = require("@shopify/polaris"), import_react5 = require("@remix-run/react");

// node_modules/@shopify/polaris/build/esm/styles.css
var styles_default = "/build/_assets/styles-K2K5JOVQ.css";

// app/routes/auth.login/error.server.jsx
var import_server3 = require("@shopify/shopify-app-remix/server");
function loginErrorMessage(loginErrors) {
  return loginErrors?.shop === import_server3.LoginErrorType.MissingShop ? { shop: "Please enter your shop domain to log in" } : loginErrors?.shop === import_server3.LoginErrorType.InvalidShop ? { shop: "Please enter a valid shop domain to log in" } : {};
}

// app/routes/auth.login/route.jsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), links = () => [{ rel: "stylesheet", href: styles_default }], loader2 = async ({ request }) => {
  let errors = loginErrorMessage(await login(request));
  return (0, import_node3.json)({
    errors,
    polarisTranslations: require("@shopify/polaris/locales/en.json")
  });
}, action2 = async ({ request }) => {
  let errors = loginErrorMessage(await login(request));
  return (0, import_node3.json)({
    errors
  });
};
function Auth() {
  let loaderData = (0, import_react5.useLoaderData)(), actionData = (0, import_react5.useActionData)(), [shop, setShop] = (0, import_react4.useState)(""), { errors } = actionData || loaderData;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.AppProvider, { i18n: loaderData.polarisTranslations, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.Page, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react5.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.FormLayout, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.Text, { variant: "headingMd", as: "h2", children: "Log in" }, void 0, !1, {
      fileName: "app/routes/auth.login/route.jsx",
      lineNumber: 48,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      import_polaris2.TextField,
      {
        type: "text",
        name: "shop",
        label: "Shop domain",
        helpText: "example.myshopify.com",
        value: shop,
        onChange: setShop,
        autoComplete: "on",
        error: errors.shop
      },
      void 0,
      !1,
      {
        fileName: "app/routes/auth.login/route.jsx",
        lineNumber: 51,
        columnNumber: 15
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.Button, { submit: !0, children: "Log in" }, void 0, !1, {
      fileName: "app/routes/auth.login/route.jsx",
      lineNumber: 61,
      columnNumber: 15
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/auth.login/route.jsx",
    lineNumber: 47,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/auth.login/route.jsx",
    lineNumber: 46,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/routes/auth.login/route.jsx",
    lineNumber: 45,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/auth.login/route.jsx",
    lineNumber: 44,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/auth.login/route.jsx",
    lineNumber: 43,
    columnNumber: 5
  }, this);
}

// app/routes/webhooks.jsx
var webhooks_exports = {};
__export(webhooks_exports, {
  action: () => action3
});
var action3 = async ({ request }) => {
  let { topic, shop, session, admin, payload } = await authenticate.webhook(
    request
  );
  if (!admin)
    throw new Response();
  switch (topic) {
    case "APP_UNINSTALLED":
      session && await db_server_default.session.deleteMany({ where: { shop } });
      break;
    case "CUSTOMERS_DATA_REQUEST":
    case "CUSTOMERS_REDACT":
    case "SHOP_REDACT":
    default:
      throw new Response("Unhandled webhook topic", { status: 404 });
  }
  throw new Response();
};

// app/routes/_index/route.jsx
var route_exports2 = {};
__export(route_exports2, {
  default: () => App2,
  links: () => links2,
  loader: () => loader3
});
var import_node4 = require("@remix-run/node"), import_react6 = require("@remix-run/react");

// app/routes/_index/style.css
var style_default = "/build/_assets/style-M2E3MJNO.css";

// app/routes/_index/route.jsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), links2 = () => [{ rel: "stylesheet", href: style_default }], loader3 = async ({ request }) => {
  let url = new URL(request.url);
  if (url.searchParams.get("shop"))
    throw (0, import_node4.redirect)(`/app?${url.searchParams.toString()}`);
  return (0, import_node4.json)({ showForm: Boolean(login) });
};
function App2() {
  let { showForm } = (0, import_react6.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "index", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "content", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { children: "A short heading about [your app]" }, void 0, !1, {
      fileName: "app/routes/_index/route.jsx",
      lineNumber: 24,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "A tagline about [your app] that describes your value proposition." }, void 0, !1, {
      fileName: "app/routes/_index/route.jsx",
      lineNumber: 25,
      columnNumber: 9
    }, this),
    showForm && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react6.Form, { method: "post", action: "/auth/login", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("label", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: "Shop domain" }, void 0, !1, {
          fileName: "app/routes/_index/route.jsx",
          lineNumber: 29,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { type: "text", name: "shop" }, void 0, !1, {
          fileName: "app/routes/_index/route.jsx",
          lineNumber: 30,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: "e.g: my-shop-domain.myshopify.com" }, void 0, !1, {
          fileName: "app/routes/_index/route.jsx",
          lineNumber: 31,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index/route.jsx",
        lineNumber: 28,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("button", { type: "submit", children: "Log in" }, void 0, !1, {
        fileName: "app/routes/_index/route.jsx",
        lineNumber: 33,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index/route.jsx",
      lineNumber: 27,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("strong", { children: "Product feature" }, void 0, !1, {
          fileName: "app/routes/_index/route.jsx",
          lineNumber: 38,
          columnNumber: 13
        }, this),
        ". Some detail about your feature and its benefit to your customer."
      ] }, void 0, !0, {
        fileName: "app/routes/_index/route.jsx",
        lineNumber: 37,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("strong", { children: "Product feature" }, void 0, !1, {
          fileName: "app/routes/_index/route.jsx",
          lineNumber: 42,
          columnNumber: 13
        }, this),
        ". Some detail about your feature and its benefit to your customer."
      ] }, void 0, !0, {
        fileName: "app/routes/_index/route.jsx",
        lineNumber: 41,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("strong", { children: "Product feature" }, void 0, !1, {
          fileName: "app/routes/_index/route.jsx",
          lineNumber: 46,
          columnNumber: 13
        }, this),
        ". Some detail about your feature and its benefit to your customer."
      ] }, void 0, !0, {
        fileName: "app/routes/_index/route.jsx",
        lineNumber: 45,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index/route.jsx",
      lineNumber: 36,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index/route.jsx",
    lineNumber: 23,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index/route.jsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

// app/routes/auth.$.jsx
var auth_exports = {};
__export(auth_exports, {
  loader: () => loader4
});
var loader4 = async ({ request }) => (await authenticate.admin(request), null);

// app/routes/app.jsx
var app_exports = {};
__export(app_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App3,
  headers: () => headers,
  links: () => links3,
  loader: () => loader5
});
var import_node5 = require("@remix-run/node"), import_react7 = require("@remix-run/react");
var import_server4 = require("@shopify/shopify-app-remix/server"), import_react8 = require("@shopify/shopify-app-remix/react");
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), links3 = () => [{ rel: "stylesheet", href: styles_default }];
async function loader5({ request }) {
  return await authenticate.admin(request), (0, import_node5.json)({ apiKey: process.env.SHOPIFY_API_KEY || "" });
}
function App3() {
  let { apiKey } = (0, import_react7.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react8.AppProvider, { isEmbeddedApp: !0, apiKey, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react7.Outlet, {}, void 0, !1, {
    fileName: "app/routes/app.jsx",
    lineNumber: 20,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/app.jsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}
function ErrorBoundary() {
  return import_server4.boundary.error((0, import_react7.useRouteError)());
}
var headers = (headersArgs) => import_server4.boundary.headers(headersArgs);

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-SZDJ23HU.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-YIQU3HCT.js", "/build/_shared/chunk-M3KJXU6O.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-J7IWMZCK.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-T776J4YI.js", imports: ["/build/_shared/chunk-3GJP5LZF.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/app": { id: "routes/app", parentId: "root", path: "app", index: void 0, caseSensitive: void 0, module: "/build/routes/app-2XCVG2KW.js", imports: ["/build/_shared/chunk-NMZL6IDN.js", "/build/_shared/chunk-SU66BP3D.js", "/build/_shared/chunk-SA6FP3SJ.js", "/build/_shared/chunk-7I2LZPFH.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !0 }, "routes/app._index": { id: "routes/app._index", parentId: "routes/app", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/app._index-YUMQOUN5.js", imports: void 0, hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/auth.$": { id: "routes/auth.$", parentId: "root", path: "auth/*", index: void 0, caseSensitive: void 0, module: "/build/routes/auth.$-4B5WQABX.js", imports: void 0, hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/auth.login": { id: "routes/auth.login", parentId: "root", path: "auth/login", index: void 0, caseSensitive: void 0, module: "/build/routes/auth.login-ZQUZFD5X.js", imports: ["/build/_shared/chunk-3GJP5LZF.js", "/build/_shared/chunk-SA6FP3SJ.js", "/build/_shared/chunk-7I2LZPFH.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/webhooks": { id: "routes/webhooks", parentId: "root", path: "webhooks", index: void 0, caseSensitive: void 0, module: "/build/routes/webhooks-JFV2P4HI.js", imports: void 0, hasAction: !0, hasLoader: !1, hasErrorBoundary: !1 } }, version: "b7f6e16b", hmr: { runtime: "/build/_shared/chunk-M3KJXU6O.js", timestamp: 1701989242142 }, url: "/build/manifest-B7F6E16B.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = {}, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/app._index": {
    id: "routes/app._index",
    parentId: "routes/app",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: app_index_exports
  },
  "routes/auth.login": {
    id: "routes/auth.login",
    parentId: "root",
    path: "auth/login",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports
  },
  "routes/webhooks": {
    id: "routes/webhooks",
    parentId: "root",
    path: "webhooks",
    index: void 0,
    caseSensitive: void 0,
    module: webhooks_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: route_exports2
  },
  "routes/auth.$": {
    id: "routes/auth.$",
    parentId: "root",
    path: "auth/*",
    index: void 0,
    caseSensitive: void 0,
    module: auth_exports
  },
  "routes/app": {
    id: "routes/app",
    parentId: "root",
    path: "app",
    index: void 0,
    caseSensitive: void 0,
    module: app_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
