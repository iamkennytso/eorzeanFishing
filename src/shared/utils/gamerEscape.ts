/**
 * Generates a GamerEscape wiki URL for a given page name
 */
export const getGamerEscapeURL = (pageName: string): string => {
  const encodedName = encodeURIComponent(pageName.replace(/ /g, '_'));
  return `https://ffxiv.gamerescape.com/wiki/${encodedName}`;
};
