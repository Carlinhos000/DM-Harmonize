import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
const root = dirname(fileURLToPath(import.meta.url));
export default defineConfig({ plugins:[react()], resolve:{alias:{'@':root}}, build:{outDir:'dist'}, server:{host:'127.0.0.1',port:5173} });
