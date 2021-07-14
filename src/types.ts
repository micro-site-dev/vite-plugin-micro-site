import type { AppConfig } from '@micro-site/shared'

export interface Options extends AppConfig {
  config?: string
  tsconfigPaths?: { [key: string]: any[] }
}