export const CLASSIC = 'classic_theme'
export const DARK = 'dark_theme'
export const LIGHT = 'light_theme'

export const THEME = {
  [CLASSIC]: {
    FONT: '#FCFBFC',
    BACKGROUND: '#21009C',
    BORDER: '#9A9F9A',
    TOUCHABLE_UNDERLAY: '#080463',
    PRIMARY_GRADIENT: ['#392CDE', '#2920C6', '#392CDE'],
    SECONDARY_GRADIENT: ['#139054', '#0B7A3B', '#139054']
  },
  [DARK]: {
    FONT: '#F1F1F1',
    BACKGROUND: '#303030',
    BORDER: '#8F8353',
    TOUCHABLE_UNDERLAY: '#1D1D1D',
    PRIMARY_GRADIENT: ['#5C5C5C', '#3B393C', '#5C5C5C'],
    SECONDARY_GRADIENT: ['#139054', '#0B7A3B', '#139054']
  },
  [LIGHT]: {
    FONT: '#D5D0C8',
    BACKGROUND: '#F9DCBC',
    BORDER: '#826B57',
    TOUCHABLE_UNDERLAY: '#2E1C08',
    PRIMARY_GRADIENT: ['#7C614E', '#56442E', '#7C614E'],
    SECONDARY_GRADIENT: ['#139054', '#0B7A3B', '#139054']
  }
}