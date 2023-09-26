import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/@fs/Users/zough/portfolio/node_modules/astro/dist/runtime/client/hmr.js?v=ba2e5b0a");if (import.meta.hot) {
  const injectedStyles = getInjectedStyles();
  const mo = new MutationObserver((records) => {
    for (const record of records) {
      for (const node of record.addedNodes) {
        if (isViteInjectedStyle(node)) {
          injectedStyles.get(node.getAttribute("data-vite-dev-id"))?.remove();
        }
      }
    }
  });
  mo.observe(document.documentElement, { subtree: true, childList: true });
  import.meta.hot.on("vite:beforeUpdate", async (payload) => {
    for (const file of payload.updates) {
      if (file.acceptedPath.includes("vue&type=style")) {
        const link = document.querySelector(`link[href="${file.acceptedPath}"]`);
        if (link) {
          link.replaceWith(link.cloneNode(true));
        }
      }
    }
  });
}
function getInjectedStyles() {
  const injectedStyles = /* @__PURE__ */ new Map();
  document.querySelectorAll("style[data-astro-dev-id]").forEach((el) => {
    injectedStyles.set(el.getAttribute("data-astro-dev-id"), el);
  });
  return injectedStyles;
}
function isStyle(node) {
  return node.nodeType === node.ELEMENT_NODE && node.tagName.toLowerCase() === "style";
}
function isViteInjectedStyle(node) {
  return isStyle(node) && !!node.getAttribute("data-vite-dev-id");
}
