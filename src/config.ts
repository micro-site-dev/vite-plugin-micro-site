import type { UserConfig } from 'vite'
import { resolve } from 'path'
import { Options } from './types'

const createResolveAlias = (paths: {[key: string]: any[]}) => {
  return Object.keys(paths).reduce((prev, cur) => {
    prev[cur] = resolve(paths[cur][0])
    return prev
  }, {})
}

const createConfig = (options: Options) => {
  return () => {
    const config: UserConfig = {
      root: '.',
      resolve: {
        alias: createResolveAlias(options.tsconfigPaths ?? {})
      },
      optimizeDeps: { include: [ 'redux' ] },
      server: {
        fs: { allow: [ resolve(), '..' ] }
      }
    }
    return config
  }
}

export { createConfig }