import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const path = require('path')
const projectRootDir = path.resolve(__dirname)

import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { VantResolver, ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default ({ mode, command }) => {
  return defineConfig({
    envDir: path.resolve(projectRootDir, 'env'),
    base: '/context/', // 二级目录
    resolve: {
      alias: [
        {
          find: '@',
          replacement: path.resolve(projectRootDir, 'src'),
        },
      ],
    },
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [VantResolver(), ElementPlusResolver()],
      }),
    ],
  })
}
