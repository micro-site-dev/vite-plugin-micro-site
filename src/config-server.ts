import type { Response, Request, NextFunction } from 'express'

import { join } from 'path'
import { fileURLToPath } from 'url'
import { readFile } from 'fs/promises'
import { Options } from './types'

const currentDir = fileURLToPath(new URL('.', import.meta.url))

export function configureServer(options: Options) {
  return ({ middlewares }) => {
    const { config = '/config.json' } = options
    const middleware = async (req: Request, res: Response, next: NextFunction) => {
      switch (req.url) {
        case '/': 
          const content = await readFile(join(currentDir, './index.html'), 'utf-8')
          return res.end(content)
        case config:
          return res.end(JSON.stringify(options))
      }
      next()
    }   
    middlewares.use(middleware)
  }
}