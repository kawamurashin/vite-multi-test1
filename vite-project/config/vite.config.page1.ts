import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {join} from 'path';
const root = '../src/page1/'
export default defineConfig(({ command, mode }) => {
    if (mode === 'development') {
        return {
            plugins: [vue()],
            mode:'development',
            base: "./",
            root: join(__dirname, root),
            build: {
                rollupOptions: {
                    input:
                        {
                            page1: join(__dirname, root, 'index.html')
                        },

                },
                outDir: "../../../express/dist/public/page1",
                emptyOutDir:true
            }
        }
    } else {
        return {
            plugins: [vue()],
            mode:'production',
            base: "./",
            root: join(__dirname, root),
            build: {
                rollupOptions: {
                    input:
                        {
                            page1: join(__dirname, root, 'index.html')
                        },

                },
                outDir: "../../../express/dist/public/page1",
                emptyOutDir:true
            }
        }
    }
})