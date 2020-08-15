# Shared dev setup for TypeScript projects

_Note:_ You are more than welcome to use this setup in your own projects. We
will however update this repository according to what we need in the
Integreat codebases, and take no responsibility for how this may affect your
projects, and will probably no accept PRs. If you want to make changes we
suggest forking and using your own fork.

## package.json

```json
"scripts": {
    "test": "npm run build && nyc --reporter=text-summary ava --config ./ava-dist.config.js",
    "test:inspect": "node --inspect node_modules/ava/profile.js",
    "test:watch": "npm run dev",
    "dev": "ava --watch",
    "build": "tsc",
    "coverage": "nyc report --reporter=text-lcov | coveralls",
    "nyc:report": "nyc report --reporter=text --reporter=html"
}
```
