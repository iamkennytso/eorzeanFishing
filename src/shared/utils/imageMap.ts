// Import the existing image map
import idToImageMap from '../../util/idToImageMap';

export const getImageById = (id: number) => {
  return idToImageMap[id] || require('../../../assets/misc/defaultAvatar.jpg');
};

export default idToImageMap;
