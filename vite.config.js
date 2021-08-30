
import path from 'path';
import framework7 from 'rollup-plugin-framework7';
import legacy from '@vitejs/plugin-legacy';


const SRC_DIR = path.resolve(__dirname, './src');
const PUBLIC_DIR = path.resolve(__dirname, './public');
const BUILD_DIR = path.resolve(__dirname, './www',);

export default {
  plugins: [
    framework7({
      emitCss: false
    }),
    legacy({
      targets: ['defaults', 'not IE 11'],
      ignoreBrowserslistConfig: true
    })
  ],
  root: SRC_DIR,
  base: '',
  publicDir: PUBLIC_DIR,
  build: {
    outDir: BUILD_DIR,
    assetsInlineLimit: 0,
    chunkSizeWarningLimit: 800,
    emptyOutDir: true,
    manifest: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        passes: 1
      }
    }
  },
  server: {
    host: '0.0.0.0',
    port: '80'
  },
  resolve: {
    alias: {
      '@': SRC_DIR,
    },
  },
  esbuild: {
    jsxFactory: '$jsx',
  },
};
