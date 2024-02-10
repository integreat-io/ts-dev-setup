export default {
  extensions: { js: true, ts: 'module' },
  nodeArguments: ['--import=tsimp'],
  watchMode: {
    ignoreChanges: ['{coverage,dist,media}/**']
  },
  files: ['src/**/*.test.ts']
}
