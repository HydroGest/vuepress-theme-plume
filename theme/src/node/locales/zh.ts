import type { DocsearchLocaleOptions } from '@vuepress/plugin-docsearch'
import type { SearchLocaleOptions } from '@vuepress-plume/plugin-search'
import type { PlumeThemeLocaleData, PresetLocale } from '../../shared/index.js'

export const zhLocale: PlumeThemeLocaleData = {
  selectLanguageName: '简体中文',
  selectLanguageText: '选择语言',

  appearanceText: '外观',
  lightModeSwitchTitle: '切换为浅色主题',
  darkModeSwitchTitle: '切换为深色主题',

  outlineLabel: '此页内容',
  returnToTopLabel: '返回顶部',
  editLinkText: '编辑此页',
  contributorsText: '贡献者',
  prevPageLabel: '上一页',
  nextPageLabel: '下一页',

  lastUpdated: {
    text: '最后更新于',
  },

  notFound: {
    code: '404',
    title: '页面未找到',
    quote: '但是，如果你不改变方向，并且一直寻找，最终可能会到达你要去的地方。',
    linkText: '返回首页',
  },

  encryptButtonText: '确认',
  encryptPlaceholder: '请输入密码',
  encryptGlobalText: '本站只允许密码访问',
  encryptPageText: '本页面只允许密码访问',

  footer: {
    message:
      'Powered by <a target="_blank" href="https://v2.vuepress.vuejs.org/">VuePress</a> & <a target="_blank" href="https://theme-plume.vuejs.press">vuepress-theme-plume</a>',
  },
}

export const zhPresetLocale: PresetLocale = {
  home: '首页',
  blog: '博客',
  tag: '标签',
  archive: '归档',
  category: '分类',
}

export const zhDocsearchLocale: DocsearchLocaleOptions = {
  placeholder: '搜索文档',
  translations: {
    button: {
      buttonText: '搜索文档',
      buttonAriaLabel: '搜索文档',
    },
    modal: {
      searchBox: {
        resetButtonTitle: '清除查询条件',
        resetButtonAriaLabel: '清除查询条件',
        cancelButtonText: '取消',
        cancelButtonAriaLabel: '取消',
      },
      startScreen: {
        recentSearchesTitle: '搜索历史',
        noRecentSearchesText: '没有搜索历史',
        saveRecentSearchButtonTitle: '保存至搜索历史',
        removeRecentSearchButtonTitle: '从搜索历史中移除',
        favoriteSearchesTitle: '收藏',
        removeFavoriteSearchButtonTitle: '从收藏中移除',
      },
      errorScreen: {
        titleText: '无法获取结果',
        helpText: '你可能需要检查你的网络连接',
      },
      footer: {
        selectText: '选择',
        navigateText: '切换',
        closeText: '关闭',
        searchByText: '搜索提供者',
      },
      noResultsScreen: {
        noResultsText: '无法找到相关结果',
        suggestedQueryText: '你可以尝试查询',
        reportMissingResultsText: '你认为该查询应该有结果？',
        reportMissingResultsLinkText: '点击反馈',
      },
    },
  },
}

export const zhSearchLocale: Partial<SearchLocaleOptions> = {
  placeholder: '搜索文档',
  resetButtonTitle: '重置搜索',
  backButtonTitle: '关闭',
  noResultsText: '无搜索结果：',
  footer: {
    selectText: '选择',
    selectKeyAriaLabel: '输入',
    navigateText: '切换',
    navigateUpKeyAriaLabel: '向上',
    navigateDownKeyAriaLabel: '向下',
    closeText: '关闭',
    closeKeyAriaLabel: '退出',
  },
}
