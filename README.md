# Shared dev setup for TypeScript projects

_Note:_ You are more than welcome to use this setup in your own projects. We
will however update this repository according to what we need in the
Integreat codebases, and take no responsibility for how this may affect your
projects, and will probably no accept PRs. If you want to make changes we
suggest forking and using your own fork.

## Install

```
npm install @integreat/ts-dev-setup --save-dev
```

Then run the following commands in terminal to set up symbolic links to config
files:

```
ln -s node_modules/@integreat/ts-dev-setup/ava-dist.config.cjs ava-dist.config.cjs
ln -s node_modules/@integreat/ts-dev-setup/ava.config.cjs ava.config.cjs
ln -s node_modules/@integreat/ts-dev-setup/codeclimate.yml .codeclimate.yml
ln -s node_modules/@integreat/ts-dev-setup/editorconfig .editorconfig
ln -s node_modules/@integreat/ts-dev-setup/eslintrc.json .eslintrc.json
ln -s node_modules/@integreat/ts-dev-setup/nycrc.json .nycrc.json
ln -s node_modules/@integreat/ts-dev-setup/prettierrc.json .prettierrc.json
ln -s node_modules/@integreat/ts-dev-setup/tsconfig.json tsconfig.json
```

## package.json

```json
"scripts": {
    "test": "npm run build && nyc --reporter=text-summary ava --config ./ava-dist.config.js",
    "test:inspect": "node --inspect node_modules/ava/profile.js",
    "test:watch": "npm run dev",
    "dev": "ava --watch",
    "build": "tsc",
    "coverage": "nyc report --reporter=text-lcov | coveralls",
    "nyc:report": "nyc report --reporter=text --reporter=html",
    "lint": "eslint --ext .ts src"
}
```
