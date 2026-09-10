# TradesPro Squeeze Scanner (V2)

Standalone, static V2 squeeze scanner — taken as-is as a basic starting point.

- **Static site.** No build step, no bundler, no framework. Plain single-file HTML.
- **Live data.** Reads Supabase (project `nsrlrhofvzstwbfkxoyk`) directly in the
  browser via the embedded publishable/anon key, against the public-read views
  `public.scanner_squeeze_latest` and `public.scanner_conditions`. No env vars
  required — the URL and anon key are baked into the HTML.
- Renders the ranked squeeze cards.

## Files

- `index.html` / `scanner-v2.html` — the scanner (identical; `index.html` serves at `/`).
- `scanner-rubric.html` — scoring rubric reference.
- `scanner-logic-map.html` — logic map reference.

## Deploy

Static deploy — output is the repo root, no build command.
