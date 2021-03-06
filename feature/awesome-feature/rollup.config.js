import { setConfig } from '../../default.config.rollup';

export default setConfig({
  input: ['./index.ts'],
  output: {
    dir: './build',
    format: 'es',
    sourcemap: false,
    exports: 'named',
    entryFileNames: '[name].js',
  },
  tsconfig: './tsconfig.json',
});
