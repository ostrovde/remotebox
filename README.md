# RemoteBox

Practical notes on remote machines for automation: VPS, RDP, dedicated servers — sizing, cost,
setup and security. Static HTML, no build step, published on GitHub Pages.

Live: <https://ostrovde.github.io/remotebox/>

## Where this site comes from

Second bet in a portfolio. The first (`proxystack`) proved the engine; this one proves the engine
is reusable — same stylesheet, same link registry, same deploy pipeline, new vertical.

Economics that shape every decision, identical to the rest of the portfolio:

* Money arrives **in crypto**, so every monetised program must pay crypto.
* Audience is **English-speaking** — the crypto-paying programs are global.
* Traffic must be **organic**, so content has to be worth reading, not just indexable.

## Conventions

* Every vendor link goes through the registry: `<a data-out="rdpm" href="https://rdp.monster/">`.
  When a program is approved, set `affiliate` in `assets/links.js` — the whole site switches at once.
* Affiliate links carry `rel="sponsored nofollow noopener"` and a visible disclosure.
* No invented prices or specs. If a number is uncertain, link to the vendor and say so.
* After adding a page: add it to `sitemap.xml` and link it from `index.html`.

## Deploy

```powershell
git add -A
git commit -m "..."
git push origin main
```

Then confirm the new URL returns HTTP 200 (Pages takes about a minute).
