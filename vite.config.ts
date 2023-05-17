import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts';

import { defineConfig } from 'vite'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      exclude: "**/*.styled.ts"
    }),
  ],
  build: {
    lib: {
      entry: resolve('src/components', 'index.ts'),
      name: 'ComponentsLibrary',
      formats: ['es', 'umd'],
      fileName: (format) => `neubrutalism.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'styled-components', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'styled-components': 'styled',
          'react/jsx-runtime': 'react/jsx-runtime',
        },
      },
    },
  }
})
