# felippecaso.com

Hosted on Cloudflare Workers with static assets from `_site`. Workers Builds deploys on pushes to `master`:

- Build command: `bundle exec jekyll build`
- Deploy command: `npx wrangler deploy`

## Local preview

```
bundle exec jekyll serve
```

Or build and preview the Worker locally:

```
bundle exec jekyll build && npx wrangler dev
```