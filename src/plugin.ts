import type { Plugin } from 'vite'

import { Options } from './types'
import { createConfig } from './config'
import { configureServer } from './config-server'

const microSite = (options: Options) => {
  const plugin: Plugin = {
    name: 'vite:micro:site',
    enforce: 'pre',
    config: createConfig(options),
    configureServer: configureServer(options)
  }
  return plugin
}

export default microSite