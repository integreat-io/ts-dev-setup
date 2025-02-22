# Shared dev setup for Integreat TypeScript projects

> [!NOTE]
> You are more than welcome to use this setup in your own projects. We will
> however update this repository according to what we need in the Integreat
> codebases and take no responsibility for how this may affect your projects. If
> you want to make changes, we suggest forking.

## Breaking changes
- **Version 8:** We are now using eslint 9, which comes with a brand new config
  file format.
- **Version 7:** We have dropped Ava as a test framework and c8 for coverage,
  and have started using the built-in node test runner.

## Install

```
npm install @integreat/ts-dev-setup --save-dev
```

Then run the following commands in terminal to set up symbolic links to config
files:

```
cp node_modules/@integreat/ts-dev-setup/codeclimate.yml .codeclimate.yml
cp node_modules/@integreat/ts-dev-setup/.editorconfig .editorconfig
cp node_modules/@integreat/ts-dev-setup/eslint.config.js eslint.config.js
cp node_modules/@integreat/ts-dev-setup/.prettierrc.json .prettierrc.json
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
    "test": "node --import tsx --test --enable-source-maps --experimental-test-coverage --test-reporter node-test-reporter 'src/**/*.test.ts'",
    "test:watch": "npm run dev",
    "dev": "node --import tsx --test --enable-source-maps --test-reporter node-test-reporter --watch 'src/**/*.test.ts' || exit 0",
    "build": "tsc",
    "lint": "eslint src",
    "typecheck": "tsc --noEmit --strict",
    "verify": "npm run lint && npm run typecheck && npm test",
}
```
