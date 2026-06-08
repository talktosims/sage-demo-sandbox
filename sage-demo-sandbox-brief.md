# Sage Demo Sandbox

## Goal

Create a private staff-only demo environment at `demo.indieco.shop` that lets Indieco/Sage prospect in person with seeded fake businesses by vertical. The public `indieco.shop` experience remains unchanged for new users and browsers.

## Recommended Shape

- Host: `demo.indieco.shop`
- Access: staff login, optional quick PIN on trusted devices
- Search: `noindex,nofollow`
- App isolation: separate route/app shell with no public navigation links
- Data model: real demo tenants flagged with `demo_mode = true`
- Safety: demo tenants never touch live customer data
- Reset: one-click reset to known seed state before every meeting
- Permissions: subscriber gates open for all demo tenants

## Demo Flow

1. Open the private demo launcher.
2. Pick a vertical, such as Riverbend Books, Riverbend Records, Riverbend Comics, Riverbend Crafts, Riverbend Thrift, or Riverbend Vintage.
3. Optionally rename the demo in the room, for example `Maple Street Thrift`.
4. Start onboarding with most connections already complete.
5. Leave one low-consequence connection open, preferably Shopify Catalog in read-only mode, to show OAuth.
6. Land on a populated paying-subscriber dashboard.
7. Click tasks and show drafts, previews, review steps, and numerical before/after results.
8. End by sending them to the existing free checkup flow for their real website.

## Answers To The Product Questions

### Google Profile Completeness

Yes, make this numerical. Example:

- Before: `64% complete`
- After: `92% complete`
- Delta: `+28 points`

This should be demo-safe math based on checklist completion, not a claim from Google unless an actual Google API/source supports it.

### 7-Day Content Plan

Yes, the prospect should see one suggestion per day. In production, this could work two ways:

- Pre-generate a 7-day plan and reveal today plus upcoming items.
- Generate or refresh one task daily using the original plan as context.

For the sales demo, use deterministic seeded suggestions so the walkthrough is reliable.

### Email Draft

Yes, the user should click into the task and see the email draft before sending. The demo should make it clear that Sage prepares work, but the shop reviews it before anything goes out.

### Product Spotlight

Yes, the user should be able to click and view the created spotlight. It should show a homepage/product tile preview, social caption, and optional email block.

### OAuth Demo Connection

Use Shopify Catalog as the live OAuth example instead of Buffer/social posting.

Why this is smoother:

- OAuth still feels real.
- The proof stays inside Sage: products imported, categories detected, images available, and tasks improved.
- There is no public-facing post to verify during the sales call.
- There is no need to maintain dummy Facebook, Instagram, or LinkedIn pages.
- The connection can be framed as read-only, which feels safer to a prospect.

Recommended demo moment:

1. Most integrations are already connected.
2. Shopify Catalog is the one open connection.
3. You click `Authorize`.
4. Sage shows `42 products imported`.
5. The dashboard immediately uses that catalog data for product spotlight, email, SEO, and social draft tasks.

Sage can still show social post drafts, but the demo should stop at review and confirmation. Public posting can be explained as something they turn on after connecting their real social accounts.

## Vertical Strategy

Primary retail verticals:

- Bookstores
- Record stores
- Comic shops
- Craft stores
- Thrift stores
- Vintage shops

Service pilot:

- Salon

Salon can work if Sage supports reviews, Google profile optimization, social drafts, appointment-fill campaigns, emails, and local SEO. It is less inventory/POS-driven than retail, so keep it as a later pilot until the shop verticals feel airtight.

Each demo tenant should include a generic uploaded business profile image. This makes the demo feel like a complete account without requiring real business assets.

## POS Research Placeholder

Do not hard-code POS priorities from assumptions. Treat POS by vertical as a research and discovery track. Likely integration candidates to validate include Square, Shopify POS, Lightspeed, Clover, Toast, and appointment-specific systems for services.

## Implementation Notes

- Add `demo_mode`, `demo_vertical`, `demo_seed_version`, and `demo_reset_at` fields to demo tenants.
- Add a seed runner that creates businesses, integrations, tasks, drafts, metrics, products, and content plans.
- Add fake integration providers for demo mode.
- Allow one controlled OAuth provider to be real, using Sage-owned credentials.
- Add a `DemoConsole` staff-only route that lists verticals and lets staff rename the prospect-facing business.
- Keep demo route isolated from onboarding analytics and billing automation unless explicitly tagged as demo events.
- Add a demo event log for sales learning: vertical chosen, tasks clicked, OAuth shown, follow-up checkup opened.

## Minimum Viable Build

1. `demo.indieco.shop` staff-only route.
2. Vertical launcher.
3. Prospect-name override.
4. Seeded onboarding with one OAuth step.
5. Seeded dashboard tasks.
6. Task detail previews for social, email, Google, SEO, and product spotlight.
7. Proof metrics with before/after percentages.
8. Reset button.
9. Link out to the existing free website checkup.
