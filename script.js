const base = "https://indieco.shop";

const demos = [
  {
    name: "Riverbend Books",
    vertical: "books",
    shop: "riverbend-books",
    image: `${base}/static/demo-items/staff_pick_ocean_vuong.webp`,
    copy: "Bookstore dashboard, storefront, shelf proof, staff picks, and local discovery.",
  },
  {
    name: "Riverbend Records",
    vertical: "records",
    shop: "riverbend-records",
    image: `${base}/static/demo-items/blue_note_original.webp`,
    copy: "Record store dashboard, storefront, new arrivals, wishlists, and event-ready tasks.",
  },
  {
    name: "Riverbend Comics",
    vertical: "comics",
    shop: "riverbend-comics",
    image: `${base}/static/demo-items/variant_wall_book.webp`,
    copy: "Comic shop dashboard, pull-list surfaces, variants, wall books, and customer workflows.",
  },
  {
    name: "Riverbend Craft",
    vertical: "craft",
    shop: "riverbend-craft",
    image: `${base}/static/demo-items/hand_dyed_sock_bundle.webp`,
    copy: "Craft store dashboard, kits, classes, project bundles, and inventory signals.",
  },
  {
    name: "Riverbend Thrift",
    vertical: "thrift",
    shop: "riverbend-thrift",
    image: `${base}/static/riverbend-denim-jacket.webp`,
    copy: "Thrift dashboard, one-off finds, quick listings, local SEO, and resale storefront tasks.",
  },
  {
    name: "Riverbend Vintage",
    vertical: "thrift",
    shop: "riverbend-thrift",
    image: "./assets/profile-vintage-shop.png",
    copy: "Vintage walkthrough using the resale/thrift dashboard until the native vintage tenant ships.",
  },
];

function dashboardUrl(demo) {
  const params = new URLSearchParams({
    demo: "1",
    vertical: demo.vertical,
  });
  return `${base}/indie-dashboard.html?${params.toString()}`;
}

function connectionsUrl(demo) {
  const params = new URLSearchParams({
    demo: "1",
    vertical: demo.vertical,
    internalDemo: "1",
    connectorDiagnostics: "1",
  });
  return `${base}/indie-dashboard.html?${params.toString()}#connections-card`;
}

function focusedTourUrl(demo) {
  const params = new URLSearchParams({
    demo: "1",
    vertical: demo.vertical,
    internalDemo: "1",
    tour: "store-visit",
  });
  return `${base}/indie-dashboard.html?${params.toString()}#store-visit-tour`;
}

function storefrontUrl(demo) {
  return `${base}/s/${demo.shop}`;
}

function customerUrl(demo) {
  const params = new URLSearchParams({
    demo: "1",
    shop: demo.shop,
    vertical: demo.vertical,
  });
  return `${base}/customer-account.html?${params.toString()}`;
}

function render() {
  const grid = document.getElementById("demoGrid");
  grid.innerHTML = demos
    .map(
      (demo) => `
        <article class="demo-card">
          <img src="${demo.image}" alt="${demo.name}" loading="lazy" />
          <div class="demo-card-body">
            <div class="demo-card-title">
              <span>${demo.name}</span>
            </div>
            <p class="demo-card-copy">${demo.copy}</p>
            <div class="demo-actions">
              <a class="btn-primary" href="${dashboardUrl(demo)}">Owner dashboard</a>
              <a class="btn-secondary" href="${connectionsUrl(demo)}">All connections</a>
              <a class="btn-secondary" href="${storefrontUrl(demo)}">Storefront</a>
              <a class="btn-secondary" href="${customerUrl(demo)}">Customer view</a>
              <a class="btn-secondary" href="${focusedTourUrl(demo)}">Focused tour</a>
              <a class="btn-secondary" href="${base}/${demo.vertical === "books" ? "books" : demo.vertical}">Landing page</a>
            </div>
          </div>
        </article>
      `,
    )
    .join("");
}

document.addEventListener("DOMContentLoaded", render);
