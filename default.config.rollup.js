import commonjs from '@rollup/plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import url from '@rollup/plugin-url';
import json from '@rollup/plugin-json';
import replace from '@rollup/plugin-replace';

const env = process.env.NODE_ENV || 'development';

export const setConfig = ({ input, output, tsconfig }) => {
  return {
    input,
    output,
    plugins: [
      replace({ 'process.env.NODE_ENV': JSON.stringify(env) }),
      external(),
      url(),
      json(),
      resolve({
        mainFields: ['module', 'main', 'browser'].filter(Boolean),
      }),
      typescript({
        tsconfig,
      }),
      commonjs(),
    ],
    treeshake: true,
    onwarn: (warning) => {
      if (warning.code === 'CIRCULAR_DEPENDENCY' && !~warning.importer.search('node_modules')) {
        throw Error(warning);
      }
    },
  };
};
