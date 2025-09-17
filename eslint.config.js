import cfg from '@kb-labs/devkit/eslint/node.js';

export default [
  ...cfg,
  {
    ignores: [
      '**/dist/**',
      '**/coverage/**',
      '**/node_modules/**',
      '**/*.d.ts'
    ]
  }
];