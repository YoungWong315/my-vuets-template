import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import * as path from 'path'
const pathSrc = path.resolve(__dirname, 'src')

import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default ({ mode, command }) => {
  return defineConfig({
    envDir: path.resolve(__dirname, 'env'),
    base: mode == 'dev' ? '/context/' : '', // 二级目录
    resolve: {
      alias: [
        {
          find: '@',
          replacement: pathSrc,
        },
      ],
    },
    server: {
      port: 3000,
      hmr: true,
    },
    plugins: [
      vue(),
      AutoImport({
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/,
          /\.vue\?vue/, // .vue
          /\.md$/ // .md
        ],
        imports: [
          'vue',
          'vue-router',
          {
            '@vueuse/core': [
              'useMouse',
              ['useFetch', 'useMyFetch']
            ],
            axios: [
              ['default', 'axios']
            ]
          }
        ],
        resolvers: [
          ElementPlusResolver(),
          // 自动导入图标组件
          IconsResolver({
            prefix: 'Icon',
          }),
        ],
        dts: path.resolve(pathSrc, 'auto-imports.d.ts'),
      }),
      Components({
        dirs: ['src/components', 'src/assets', 'src/modules'],
        resolvers: [
          // 自动注册图标组件
          IconsResolver({
            enabledCollections: ['ep'],
          }),
          ElementPlusResolver(),
        ],
        dts: path.resolve(pathSrc, 'components.d.ts'),
      }),
      Icons({
        autoInstall: true,
      }),
    ]
  })
}
