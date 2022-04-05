import type { App } from '@vuepress/core'
import type { PlumeThemeLocaleOptions } from '../../shared'
import { preparedPostIndex, watchPostIndex } from './postIndex'

export const onPrepared = (
  app: App,
  localeOption: PlumeThemeLocaleOptions
): void => {
  preparedPostIndex(app, localeOption)
}

export const preparedWatch = (
  app: App,
  watchers,
  localeOption: PlumeThemeLocaleOptions
): void => {
  watchPostIndex(app, watchers, localeOption)
}