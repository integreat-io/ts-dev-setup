# Shared dev setup for Integreat TypeScript projects

_Note:_ You are more than welcome to use this setup in your own projects. We
will however update this repository according to what we need in the
Integreat codebases, and take no responsibility for how this may affect your
projects. If you want to make changes, we suggest forking.

## Install

```
npm install @integreat/ts-dev-setup --save-dev
```

Then run the following commands in terminal to set up symbolic links to config
files:

```
cp node_modules/@integreat/ts-dev-setup/ava-dist.config.cjs ava-dist.config.cjs
cp node_modules/@integreat/ts-dev-setup/ava.config.cjs ava.config.cjs
cp node_modules/@integreat/ts-dev-setup/codeclimate.yml .codeclimate.yml
cp node_modules/@integreat/ts-dev-setup/editorconfig .editorconfig
cp node_modules/@integreat/ts-dev-setup/eslintrc.json .eslintrc.json
cp node_modules/@integreat/ts-dev-setup/prettierrc.json .prettierrc.json
cp node_modules/@integreat/ts-dev-setup/tsconfig.json tsconfig.json
```

## package.json

```json
"type": "module",
"exports": {
".": {
    "import": "./dist/index.js",
    "types": "./dist/index.d.ts"
}
},
"main": "dist/index.js",
"types": "dist/index.d.ts",
```

```json
"scripts": {
    "test": "npm run lint && npm run build && c8 --reporter=text-summary ava --config ./ava-dist.config.cjs",
    "test:inspect": "node --inspect node_modules/ava/profile.js",
    "test:watch": "npm run dev",
    "dev": "ava --watch",
    "build": "tsc",
    "coverage": "c8 report",
    "lint": "eslint --ext .ts src"
}
```
