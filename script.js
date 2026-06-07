const verticals = [
  {
    id: "books",
    name: "Riverbend Books",
    prospectDefault: "Willow & Page Books",
    category: "Bookstore",
    icon: "book-open",
    tone: "blue",
    image: "./assets/profile-bookstore.png",
    pos: "Square POS",
    profile: "Independent bookstore with author events, preorder campaigns, staff picks, and weekend foot traffic.",
    summary: "Seeded bookstore account with events, staff picks, email, social, Google, and POS demo data.",
    spotlight: "Signed Local Author Table",
    contentNoun: "new release wall",
  },
  {
    id: "records",
    name: "Riverbend Records",
    prospectDefault: "Vinyl Signal",
    category: "Record store",
    icon: "disc-3",
    tone: "blue",
    image: "./assets/profile-record-store.png",
    pos: "Lightspeed Retail",
    profile: "Record store with used arrivals, listening events, preorder pushes, and loyal repeat buyers.",
    summary: "Seeded record store account with event, inventory, email, social, Google, and POS demo data.",
    spotlight: "Used Jazz Arrival Bin",
    contentNoun: "new-arrivals reel",
  },
  {
    id: "comics",
    name: "Riverbend Comics",
    prospectDefault: "Panel House Comics",
    category: "Comic shop",
    icon: "panel-top",
    tone: "coral",
    image: "./assets/profile-comic-shop.png",
    pos: "Lightspeed Retail",
    profile: "Comic shop with pull lists, launch-day drops, tabletop nights, and collectible inventory.",
    summary: "Seeded comic shop account with product drops, events, email, social, Google, and POS demo data.",
    spotlight: "New Release Wednesday Picks",
    contentNoun: "pull-list reminder",
  },
  {
    id: "crafts",
    name: "Riverbend Crafts",
    prospectDefault: "Maker's Table",
    category: "Craft store",
    icon: "palette",
    tone: "gold",
    image: "./assets/profile-craft-store.png",
    pos: "Shopify POS",
    profile: "Craft store with workshops, supply bundles, seasonal kits, classes, and repeat hobbyist shoppers.",
    summary: "Seeded craft store account with classes, kits, supplies, email, social, Google, and POS demo data.",
    spotlight: "Weekend Embroidery Kit",
    contentNoun: "project-of-the-week idea",
  },
  {
    id: "thrift",
    name: "Riverbend Thrift",
    prospectDefault: "Maple Street Thrift",
    category: "Thrift store",
    icon: "shirt",
    tone: "green",
    image: "./assets/profile-thrift-store.png",
    pos: "Square POS",
    profile: "Local thrift store with weekly drops, donation events, seasonal merchandising, and community shoppers.",
    summary: "Seeded thrift account with social, website, email, Google, and POS demo data.",
    spotlight: "Weekend Denim Rack",
    contentNoun: "fresh rack preview",
  },
  {
    id: "vintage",
    name: "Riverbend Vintage",
    prospectDefault: "Golden Hour Vintage",
    category: "Vintage shop",
    icon: "gem",
    tone: "coral",
    image: "./assets/profile-vintage-shop.png",
    pos: "Lightspeed Retail",
    profile: "Vintage shop with curated clothing, home decor, estate finds, weekly drops, and strong visual social content.",
    summary: "Seeded vintage shop account with curated drops, email, social, Google, website, and POS demo data.",
    spotlight: "Mid-Century Table Lamp Pair",
    contentNoun: "vintage find reveal",
  },
];

const taskTemplates = [
  {
    id: "google-profile",
    type: "Google",
    title: "Improve Google Business completeness",
    short: "Add missing services, updated description, product highlight, and event link.",
    detail:
      "Sage found an incomplete business description, missing service attributes, and no current promotion on the Google profile.",
    draft:
      "A neighborhood shop with weekly finds, friendly staff, and new arrivals every Friday. Visit for curated secondhand clothing, home goods, gifts, and donation events.",
    action: "Apply Profile Fix",
    effect: "google",
  },
  {
    id: "homepage-seo",
    type: "Website",
    title: "Raise homepage SEO score",
    short: "Rewrite the first paragraph and add a stronger local search phrase.",
    detail:
      "The homepage has a thin intro and no clear local category phrase. Sage drafted tighter copy with the city, category, and current offer.",
    draft:
      "Shop fresh weekly arrivals from a local independent store built for neighbors, collectors, gift-givers, and weekend browsers.",
    action: "Apply SEO Copy",
    effect: "seo",
  },
  {
    id: "catalog-import",
    type: "Catalog",
    title: "Use imported Shopify catalog",
    short: "Review the products Sage pulled in through the read-only OAuth connection.",
    detail:
      "Sage imported product names, categories, images, and inventory signals from Shopify. Nothing public was changed.",
    draft:
      "42 products imported. Sage found seasonal items, high-visibility categories, and product candidates for homepage, email, and social drafts.",
    action: "Use Catalog Data",
    effect: "catalog",
  },
  {
    id: "social-drafts",
    type: "Social",
    title: "Review social post drafts",
    short: "Open the ready-to-approve posts Sage created from the current business context.",
    detail:
      "Sage prepared a three-post sequence: one awareness post, one product spotlight, and one weekend reminder. The demo stops at approval instead of public posting.",
    draft:
      "Post 1: New this week. Post 2: Staff pick spotlight. Post 3: Weekend reminder with store hours and a clear call to visit.",
    action: "Approve Drafts",
    effect: "approval",
  },
  {
    id: "email-draft",
    type: "Email",
    title: "Review email draft",
    short: "Open the weekly email Sage drafted for approval.",
    detail:
      "The email draft is ready for review before anything is sent. It uses the current offer, recent arrivals, and store voice.",
    draft:
      "Subject: Fresh finds are waiting this weekend\n\nHi neighbors,\n\nWe just refreshed the floor with new arrivals, easy gifts, and a few pieces our team cannot stop talking about. Stop by this weekend and see what changed.",
    action: "Approve Email",
    effect: "approval",
  },
  {
    id: "spotlight",
    type: "Merchandising",
    title: "View product spotlight",
    short: "Open the spotlight Sage created from current inventory and margin opportunity.",
    detail:
      "Sage selected a timely spotlight based on inventory, seasonality, and what would be simple to promote in social and email.",
    draft: "",
    action: "View Spotlight",
    effect: "spotlight",
  },
  {
    id: "content-plan",
    type: "Plan",
    title: "Generate 7-day content plan",
    short: "Queue one new suggestion per day for social, email, and store updates.",
    detail:
      "Sage generated a lightweight daily content plan. The business sees a fresh suggestion each day, with the rest available in the plan preview.",
    draft:
      "Monday: new arrival teaser. Tuesday: staff pick. Wednesday: review prompt. Thursday: product spotlight. Friday: weekend reminder. Saturday: behind-the-scenes. Sunday: next-week preview.",
    action: "Use Plan",
    effect: "approval",
  },
];

const extraTasks = [
  "Create a local event listing",
  "Draft a review response",
  "Refresh the top navigation label",
  "Write a win-back email",
  "Create a product bundle",
  "Add alt text to featured images",
  "Draft a Google post",
  "Suggest a weekend offer",
];

const state = {
  selectedVerticalId: "thrift",
  businessName: "Maple Street Thrift",
  shopifyConnected: false,
  googleScore: 64,
  seoScore: 58,
  catalogItems: 0,
  approvals: 0,
  selectedTaskId: null,
  tasks: structuredClone(taskTemplates),
  extraTaskIndex: 0,
  selectedDayIndex: 0,
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function currentVertical() {
  return verticals.find((vertical) => vertical.id === state.selectedVerticalId);
}

function syncIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function renderVerticals() {
  const grid = $("#verticalGrid");
  grid.innerHTML = verticals
    .map(
      (vertical) => `
        <button class="demo-tile ${vertical.id === state.selectedVerticalId ? "is-selected" : ""}"
          data-vertical="${vertical.id}"
          data-tone="${vertical.tone}"
          aria-pressed="${vertical.id === state.selectedVerticalId}">
          <img class="tile-photo" src="${vertical.image}" alt="${vertical.name} profile image" />
          <span class="tile-icon"><i data-lucide="${vertical.icon}" aria-hidden="true"></i></span>
          <span>
            <strong>${vertical.name}</strong>
            <span>${vertical.category}</span>
          </span>
          <span class="tile-footer">
            <span>${vertical.pos}</span>
            <i data-lucide="chevron-right" aria-hidden="true"></i>
          </span>
        </button>
      `,
    )
    .join("");

  $$(".demo-tile").forEach((tile) => {
    tile.addEventListener("click", () => {
      const nextVertical = verticals.find((vertical) => vertical.id === tile.dataset.vertical);
      state.selectedVerticalId = nextVertical.id;
      state.businessName = nextVertical.prospectDefault;
      state.shopifyConnected = false;
      state.googleScore = 64;
      state.seoScore = 58;
      state.catalogItems = 0;
      state.approvals = 0;
      state.selectedTaskId = null;
      state.tasks = structuredClone(taskTemplates);
      $("#prospectName").value = state.businessName;
      renderAll();
    });
  });
}

function renderCopy() {
  const vertical = currentVertical();
  $("#selectedVerticalPill").textContent = vertical.name;
  $("#prospectPreviewName").textContent = state.businessName;
  $("#prospectPreviewText").textContent = vertical.summary;
  $("#prospectProfileImage").src = vertical.image;
  $("#prospectProfileImage").alt = `${state.businessName} profile`;
  $("#onboardingTitle").textContent = `Connect ${state.businessName}.`;
  $("#profileSummary").textContent = vertical.profile;
  $("#posName").textContent = vertical.pos;
  $("#dashboardTitle").textContent = `${state.businessName} has work ready.`;
  $("#proofTitle").textContent = `What changed for ${state.businessName}.`;
  $("#planTitle").textContent = `Daily suggestions for ${state.businessName}`;
}

function renderConnections() {
  const row = $("#shopifyConnectionRow");
  if (state.shopifyConnected) {
    row.classList.add("is-connected");
    row.innerHTML = `
      <span><i data-lucide="shopping-bag" aria-hidden="true"></i>Shopify Catalog</span>
      <strong>42 products imported</strong>
    `;
    return;
  }

  row.classList.remove("is-connected");
  row.innerHTML = `
    <span><i data-lucide="shopping-bag" aria-hidden="true"></i>Shopify Catalog</span>
    <button class="primary-btn small" id="connectShopifyBtn">
      <i data-lucide="key-round" aria-hidden="true"></i>
      <span>Authorize</span>
    </button>
  `;
  $("#connectShopifyBtn").addEventListener("click", openOauth);
}

function renderMetrics() {
  $("#googleMetric").textContent = `${state.googleScore}%`;
  $("#googleProgress").value = state.googleScore;
  $("#seoMetric").textContent = `${state.seoScore}%`;
  $("#seoProgress").value = state.seoScore;
  $("#socialMetric").textContent = state.catalogItems;

  $("#proofGoogle").textContent = `64% to ${state.googleScore}%`;
  $("#proofGoogleDelta").textContent =
    state.googleScore > 64 ? `+${state.googleScore - 64} point completeness lift` : "Waiting for profile fix";
  $("#proofSeo").textContent = `58% to ${state.seoScore}%`;
  $("#proofSeoDelta").textContent =
    state.seoScore > 58 ? `+${state.seoScore - 58} point SEO lift` : "Waiting for SEO task";
  $("#proofPosts").textContent = state.catalogItems;
  $("#proofPostsDelta").textContent =
    state.catalogItems > 0 ? "Imported from Shopify in read-only mode" : "Waiting for Shopify OAuth";
  $("#proofApprovals").textContent = state.approvals;
}

function verticalizedTask(task) {
  const vertical = currentVertical();
  const spotlight = vertical.spotlight;
  let title = task.title;
  let short = task.short;
  let detail = task.detail;
  let draft = task.draft;

  if (task.id === "spotlight") {
    title = `View ${spotlight} spotlight`;
    short = `Open the ${spotlight.toLowerCase()} preview Sage created.`;
  }

  if (task.id === "social-drafts") {
    draft = `${state.businessName} post set:\n\n1. ${vertical.contentNoun} with store voice.\n2. ${spotlight} feature.\n3. Weekend reminder with hours and a clear visit prompt.`;
  }

  if (task.id === "catalog-import") {
    draft = `42 products imported from Shopify for ${state.businessName}.\n\nSage found: ${spotlight}, seasonal categories, image-ready items, and candidates for homepage, email, and social drafts.`;
  }

  if (task.id === "email-draft") {
    draft = `Subject: ${spotlight} is ready this week\n\nHi neighbors,\n\nWe just refreshed the shop with ${spotlight.toLowerCase()}, new arrivals, and a few picks our team is excited to share. Stop by this weekend and see what changed.`;
  }

  if (task.id === "google-profile") {
    draft = `${state.businessName} is a local ${vertical.category.toLowerCase()} with weekly updates, helpful service, and timely finds. Visit for ${spotlight.toLowerCase()}, community favorites, and easy ways to shop local.`;
  }

  if (task.id === "homepage-seo") {
    draft = `Shop ${state.businessName}, a local ${vertical.category.toLowerCase()} with fresh weekly updates, friendly service, and ${spotlight.toLowerCase()} ready now.`;
  }

  return { ...task, title, short, detail, draft };
}

function renderTasks() {
  const list = $("#taskList");
  list.innerHTML = state.tasks
    .map((task) => {
      const displayTask = verticalizedTask(task);
      const isSelected = state.selectedTaskId === task.id;
      return `
        <button class="task-card ${isSelected ? "is-selected" : ""} ${task.complete ? "is-complete" : ""}"
          data-task="${task.id}">
          <span>
            <strong>${displayTask.title}</strong>
            <span>${displayTask.short}</span>
          </span>
          <small>${task.complete ? "Done" : displayTask.type}</small>
        </button>
      `;
    })
    .join("");

  $$(".task-card").forEach((card) => {
    card.addEventListener("click", () => {
      state.selectedTaskId = card.dataset.task;
      renderTasks();
      renderDetail();
      syncIcons();
    });
  });
}

function renderDetail() {
  const panel = $("#detailPanel");
  const task = state.tasks.find((item) => item.id === state.selectedTaskId);
  if (!task) {
    panel.innerHTML = `
      <div class="empty-detail">
        <i data-lucide="mouse-pointer-click" aria-hidden="true"></i>
        <strong>Select a task</strong>
        <span>Drafts, previews, and before/after changes appear here.</span>
      </div>
    `;
    return;
  }

  const displayTask = verticalizedTask(task);
  panel.innerHTML = `
    <h3>${displayTask.title}</h3>
    <p class="detail-copy">${displayTask.detail}</p>
    ${detailBody(displayTask)}
    <button class="primary-btn full" id="taskActionBtn" ${task.complete ? "disabled" : ""}>
      <i data-lucide="${task.complete ? "check" : "wand-sparkles"}" aria-hidden="true"></i>
      <span>${task.complete ? "Completed" : displayTask.action}</span>
    </button>
  `;

  const action = $("#taskActionBtn");
  if (action && !task.complete) {
    action.addEventListener("click", () => completeTask(task.id));
  }
}

function detailBody(task) {
  if (task.effect === "spotlight") {
    return `
      <div class="spotlight-preview">
        <strong>${currentVertical().spotlight}</strong>
        <p>Homepage tile, social caption, and email block are ready for approval. Sage chose this because it matches the vertical, current inventory, and a timely selling moment.</p>
      </div>
      <div class="before-after">
        <div><span>Before</span><p>No current feature on the homepage.</p></div>
        <div><span>After</span><p>${currentVertical().spotlight} preview linked from homepage, email, and social queue.</p></div>
      </div>
    `;
  }

  if (task.id === "catalog-import") {
    return `
      <div class="draft-box"><p>${formatDraft(task.draft)}</p></div>
      <div class="before-after">
        <div><span>Before</span><p>No product context available.</p></div>
        <div><span>After</span><p>42 products imported and available to Sage tasks.</p></div>
      </div>
    `;
  }

  if (task.id === "email-draft" || task.id === "social-drafts" || task.id === "content-plan") {
    return `
      <div class="draft-box"><p>${formatDraft(task.draft)}</p></div>
    `;
  }

  return `
    <div class="draft-box"><p>${formatDraft(task.draft)}</p></div>
    <div class="before-after">
      <div><span>Before</span><p>${task.effect === "google" ? "64% complete" : "58% SEO score"}</p></div>
      <div><span>After</span><p>${task.effect === "google" ? "92% complete" : "84% SEO score"}</p></div>
    </div>
  `;
}

function formatDraft(text) {
  return text.replaceAll("\n\n", "<br><br>").replaceAll("\n", "<br>");
}

function completeTask(taskId) {
  const task = state.tasks.find((item) => item.id === taskId);
  if (!task) return;
  const effect = task.effect;

  if (effect === "google") state.googleScore = Math.max(state.googleScore, 92);
  if (effect === "seo") state.seoScore = Math.max(state.seoScore, 84);
  if (effect === "catalog") state.catalogItems = Math.max(state.catalogItems, 42);
  if (effect === "approval" || effect === "spotlight") state.approvals += 1;

  task.complete = true;
  renderAll();
}

function renderPlan() {
  const vertical = currentVertical();
  const days = [
    ["Mon", `${vertical.contentNoun} with a short caption and clear store hours.`],
    ["Tue", `${vertical.spotlight} product spotlight with approval-required post draft.`],
    ["Wed", "Review prompt for recent customers and Google Business Profile activity."],
    ["Thu", "Email block based on the strongest current offer."],
    ["Fri", "Weekend reminder with directions, hours, and a low-pressure call to visit."],
    ["Sat", "Behind-the-scenes post from the floor, shelf, rack, or counter."],
    ["Sun", "Next-week preview that keeps the dashboard from going stale."],
  ];

  $("#dayStrip").innerHTML = days
    .map(
      ([day], index) => `
        <button class="day-button ${index === state.selectedDayIndex ? "is-selected" : ""}" data-day="${index}">
          ${day}
        </button>
      `,
    )
    .join("");

  const [day, suggestion] = days[state.selectedDayIndex];
  $("#planPreview").innerHTML = `
    <strong>${day}: ${state.businessName}</strong>
    <span>${suggestion}</span>
  `;

  $$(".day-button").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedDayIndex = Number(button.dataset.day);
      renderPlan();
    });
  });
}

function openOauth() {
  $("#oauthBody").textContent =
    "Sage will import product names, categories, images, and inventory signals in read-only demo mode. No products, prices, or public storefront content will be changed.";
  $("#oauthModal").classList.remove("is-hidden");
  syncIcons();
}

function closeOauth() {
  $("#oauthModal").classList.add("is-hidden");
}

function authorizeOauth() {
  state.shopifyConnected = true;
  state.catalogItems = 42;
  closeOauth();
  renderAll();
  activateStage("dashboard");
  state.selectedTaskId = "catalog-import";
  renderTasks();
  renderDetail();
  syncIcons();
}

function activateStage(stage) {
  $$("[data-panel]").forEach((panel) => {
    panel.classList.toggle("is-hidden", panel.dataset.panel !== stage);
  });
  $$(".stage-tab").forEach((tab) => {
    const selected = tab.dataset.stage === stage;
    tab.classList.toggle("is-active", selected);
    tab.setAttribute("aria-selected", String(selected));
  });
  window.scrollTo({ top: document.querySelector(".nav-band").offsetTop, behavior: "smooth" });
}

function addNextTask() {
  const label = extraTasks[state.extraTaskIndex % extraTasks.length];
  state.extraTaskIndex += 1;
  const task = {
    id: `extra-${state.extraTaskIndex}`,
    type: "Generated",
    title: label,
    short: `New subscriber task for ${state.businessName}.`,
    detail:
      "This represents the ongoing task stream available to a paying subscriber after onboarding is complete.",
    draft: `Sage generated: ${label.toLowerCase()} for ${state.businessName}, using the selected vertical data and current business context.`,
    action: "Mark Ready",
    effect: "approval",
  };
  state.tasks = [task, ...state.tasks];
  state.selectedTaskId = task.id;
  renderAll();
}

function resetDemo() {
  const vertical = currentVertical();
  state.businessName = vertical.prospectDefault;
  state.shopifyConnected = false;
  state.googleScore = 64;
  state.seoScore = 58;
  state.catalogItems = 0;
  state.approvals = 0;
  state.selectedTaskId = null;
  state.tasks = structuredClone(taskTemplates);
  state.extraTaskIndex = 0;
  state.selectedDayIndex = 0;
  $("#prospectName").value = state.businessName;
  renderAll();
  activateStage("launcher");
}

function renderAll() {
  renderVerticals();
  renderCopy();
  renderConnections();
  renderMetrics();
  renderTasks();
  renderDetail();
  renderPlan();
  syncIcons();
}

function bindEvents() {
  $$(".stage-tab").forEach((tab) => {
    tab.addEventListener("click", () => activateStage(tab.dataset.stage));
  });

  $$("[data-jump]").forEach((button) => {
    button.addEventListener("click", () => activateStage(button.dataset.jump));
  });

  $("#applyNameBtn").addEventListener("click", () => {
    const value = $("#prospectName").value.trim();
    state.businessName = value || currentVertical().prospectDefault;
    $("#prospectName").value = state.businessName;
    renderAll();
  });

  $("#prospectName").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      $("#applyNameBtn").click();
    }
  });

  $("#resetDemoBtn").addEventListener("click", resetDemo);
  $("#generateTaskBtn").addEventListener("click", addNextTask);
  $("#closeOauthBtn").addEventListener("click", closeOauth);
  $("#cancelOauthBtn").addEventListener("click", closeOauth);
  $("#authorizeOauthBtn").addEventListener("click", authorizeOauth);
  $("#oauthModal").addEventListener("click", (event) => {
    if (event.target.id === "oauthModal") closeOauth();
  });

  $("#copyDemoUrlBtn").addEventListener("click", async () => {
    const text = "https://demo.indieco.shop";
    try {
      await navigator.clipboard.writeText(text);
      $("#copyDemoUrlBtn").title = "Copied";
    } catch {
      $("#copyDemoUrlBtn").title = text;
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  bindEvents();
  renderAll();
});
