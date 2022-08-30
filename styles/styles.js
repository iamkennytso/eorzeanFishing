import { BLUE_FONT } from "./variables"

export const fontColorStyle = {
  color: BLUE_FONT
}
export const titleStyles = {
  fontSize: 25,
  ...fontColorStyle
}

export const subtitleStyles = {
  fontSize: 20,
  ...fontColorStyle,
}

export const tilesContainer = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  marginBottom: 10,
  flexWrap: 'wrap'
}

export const customTileGradient = {
  height: undefined,
  aspectRatio: .90
}

export const tileContainer = {
  width: '18%',
  display: 'flex',
  alignItems: 'center',
  marginTop: 15
}

export const tileContentContainer = {
  display: 'flex',
  alignItems: 'center',
}

export const tileText = {
  ...fontColorStyle,
  fontSize: 10,
  textAlign: 'center'
}

export const customLinkGradient = {
  aspectRatio: 1,
  height: 22,
  width: 22,
  borderRadius: 2
}