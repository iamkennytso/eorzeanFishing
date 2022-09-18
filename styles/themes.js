export const CLASSIC = 'classic_theme'
export const DARK = 'dark_theme'
export const LIGHT = 'light_theme'

export const THEME = {
  [CLASSIC]: {
    FONT: '#A2B4EE',
    BACKGROUND: '#22009C',
    BORDER: '#D6D5D7',
    TOUCHABLE_UNDERLAY: '#11026B',
    PRIMARY_GRADIENT: ['#0F0F8C', '#060A80'],
    SECONDARY_GRADIENT: ['#139054', '#0B7A3B', '#139054']
  },
  [DARK]: {
    FONT: '#999577',
    BACKGROUND: '#303030',
    BORDER: '#3E3B29',
    TOUCHABLE_UNDERLAY: '#221822',
    PRIMARY_GRADIENT: ['#4B4B4B', '#303030'],
    SECONDARY_GRADIENT: ['#139054', '#0B7A3B', '#139054']
  },
  [LIGHT]: {
    FONT: '#77502F',
    BACKGROUND: '#F7DBB6',
    BORDER: '#D0A482',
    TOUCHABLE_UNDERLAY: '#E6C093',
    PRIMARY_GRADIENT: ['#E7C49E', '#E1B995'],
    SECONDARY_GRADIENT: ['#139054', '#0B7A3B', '#139054']
  }
}