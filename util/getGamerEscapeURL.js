const getGamerEscapeURL = poolName => {
  switch (poolName) {
    case 'Doma Castle':
    case 'Haukke Manor':
    case 'Shisui of the Violet Tides':
    case 'Snowcloak':
      return `https://ffxiv.gamerescape.com/wiki/Fishing_Log:_${poolName.replace(' ','_')}_(Landmark)`
    default:
      return `https://ffxiv.gamerescape.com/wiki/Fishing_Log:_${poolName.replace(' ','_')}`
  }
}

export default getGamerEscapeURL;