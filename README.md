# Sentry Node export all issue

## Code to Reproduce

```bash
pnpm install
pnpm dev
```

## Result

```bash
pnpm dev
SENTRY_DEBUG=1 node --import ./ts-node.register.mjs --import @sentry/node/preload -r dotenv/config index.ts

Sentry Logger [debug]: @opentelemetry/api: Registered a global for diag v1.9.0.
Sentry Logger [log]: [Sentry] Preloaded Http instrumentation
Sentry Logger [log]: [Sentry] Preloaded Express instrumentation
Sentry Logger [log]: [Sentry] Preloaded Connect instrumentation
Sentry Logger [log]: [Sentry] Preloaded Fastify instrumentation
Sentry Logger [log]: [Sentry] Preloaded Hapi instrumentation
Sentry Logger [log]: [Sentry] Preloaded Koa instrumentation
Sentry Logger [log]: [Sentry] Preloaded Nest instrumentation
Sentry Logger [log]: [Sentry] Preloaded Mongo instrumentation
Sentry Logger [log]: [Sentry] Preloaded Mongoose instrumentation
Sentry Logger [log]: [Sentry] Preloaded Mysql instrumentation
Sentry Logger [log]: [Sentry] Preloaded Mysql2 instrumentation
Sentry Logger [log]: [Sentry] Preloaded Postgres instrumentation
Sentry Logger [log]: [Sentry] Preloaded Hapi instrumentation
Sentry Logger [log]: [Sentry] Preloaded Graphql instrumentation
Sentry Logger [log]: [Sentry] Preloaded Redis instrumentation
[Error: ENOENT: no such file or directory, open '/path-to-repo/src/fn.js'] {
  errno: -2,
  code: 'ENOENT',
  syscall: 'open',
  path: '/path-to-repo/src/fn.js'
}
```
