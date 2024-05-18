export default {
  environmentVariables: {
    TSIMP_DIAG: 'ignore',
  },
  extensions: { js: true, ts: 'module' },
  nodeArguments: ['--import=tsimp'],
  watchMode: {
    ignoreChanges: ['{coverage,dist,media}/**', '.tsimp/**']
  },
  files: ['src/**/*.test.ts']
}
