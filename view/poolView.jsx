import { View, StyleSheet, Text, Image, ScrollView  } from 'react-native';

const getImgSource = poolId => {
  switch (poolId) {
    case 2: 
      return require('../assets/pools/2.jpg')
    case 3: 
      return require('../assets/pools/3.jpg')
    case 4: 
      return require('../assets/pools/4.jpg')
    case 5: 
      return require('../assets/pools/5.jpg')
    case 6: 
      return require('../assets/pools/6.jpg')
    case 7: 
      return require('../assets/pools/7.jpg')
    case 8: 
      return require('../assets/pools/8.jpg')
    case 9: 
      return require('../assets/pools/9.jpg')
    case 10: 
      return require('../assets/pools/10.jpg')
    case 11: 
      return require('../assets/pools/11.jpg')
    case 12: 
      return require('../assets/pools/12.jpg')
    case 13: 
      return require('../assets/pools/13.jpg')
    case 14: 
      return require('../assets/pools/14.jpg')
    case 15: 
      return require('../assets/pools/15.jpg')
    case 16: 
      return require('../assets/pools/16.jpg')
    case 17: 
      return require('../assets/pools/17.jpg')
    case 18: 
      return require('../assets/pools/18.jpg')
    case 19: 
      return require('../assets/pools/19.jpg')
    case 20: 
      return require('../assets/pools/20.jpg')
    case 21: 
      return require('../assets/pools/21.jpg')
    case 22: 
      return require('../assets/pools/22.jpg')
    case 23: 
      return require('../assets/pools/23.jpg')
    case 24: 
      return require('../assets/pools/24.jpg')
    case 25: 
      return require('../assets/pools/25.jpg')
    case 26: 
      return require('../assets/pools/26.jpg')
    case 27: 
      return require('../assets/pools/27.jpg')
    case 28: 
      return require('../assets/pools/28.jpg')
    case 29: 
      return require('../assets/pools/29.jpg')
    case 30: 
      return require('../assets/pools/30.jpg')
    case 31: 
      return require('../assets/pools/31.jpg')
    case 32: 
      return require('../assets/pools/32.jpg')
    case 33: 
      return require('../assets/pools/33.jpg')
    case 34: 
      return require('../assets/pools/34.jpg')
    case 35: 
      return require('../assets/pools/35.jpg')
    case 36: 
      return require('../assets/pools/36.jpg')
    case 37: 
      return require('../assets/pools/37.jpg')
    case 38: 
      return require('../assets/pools/38.jpg')
    case 39: 
      return require('../assets/pools/39.jpg')
    case 40: 
      return require('../assets/pools/40.jpg')
    case 41: 
      return require('../assets/pools/41.jpg')
    case 42: 
      return require('../assets/pools/42.jpg')
    case 43: 
      return require('../assets/pools/43.jpg')
    case 44: 
      return require('../assets/pools/44.jpg')
    case 45: 
      return require('../assets/pools/45.jpg')
    case 46: 
      return require('../assets/pools/46.jpg')
    case 47: 
      return require('../assets/pools/47.jpg')
    case 48: 
      return require('../assets/pools/48.jpg')
    case 49: 
      return require('../assets/pools/49.jpg')
    case 50: 
      return require('../assets/pools/50.jpg')
    case 51: 
      return require('../assets/pools/51.jpg')
    case 52: 
      return require('../assets/pools/52.jpg')
    case 53: 
      return require('../assets/pools/53.jpg')
    case 54: 
      return require('../assets/pools/54.jpg')
    case 55: 
      return require('../assets/pools/55.jpg')
    case 56: 
      return require('../assets/pools/56.jpg')
    case 57: 
      return require('../assets/pools/57.jpg')
    case 58: 
      return require('../assets/pools/58.jpg')
    case 59: 
      return require('../assets/pools/59.jpg')
    case 60: 
      return require('../assets/pools/60.jpg')
    case 61: 
      return require('../assets/pools/61.jpg')
    case 62: 
      return require('../assets/pools/62.jpg')
    case 63: 
      return require('../assets/pools/63.jpg')
    case 64: 
      return require('../assets/pools/64.jpg')
    case 65: 
      return require('../assets/pools/65.jpg')
    case 66: 
      return require('../assets/pools/66.jpg')
    case 67: 
      return require('../assets/pools/67.jpg')
    case 68: 
      return require('../assets/pools/68.jpg')
    case 69: 
      return require('../assets/pools/69.jpg')
    case 70: 
      return require('../assets/pools/70.jpg')
    case 71: 
      return require('../assets/pools/71.jpg')
    case 72: 
      return require('../assets/pools/72.jpg')
    case 73: 
      return require('../assets/pools/73.jpg')
    case 74: 
      return require('../assets/pools/74.jpg')
    case 75: 
      return require('../assets/pools/75.jpg')
    case 76: 
      return require('../assets/pools/76.jpg')
    case 77: 
      return require('../assets/pools/77.jpg')
    case 78: 
      return require('../assets/pools/78.jpg')
    case 79: 
      return require('../assets/pools/79.jpg')
    case 80: 
      return require('../assets/pools/80.jpg')
    case 81: 
      return require('../assets/pools/81.jpg')
    case 82: 
      return require('../assets/pools/82.jpg')
    case 83: 
      return require('../assets/pools/83.jpg')
    case 84: 
      return require('../assets/pools/84.jpg')
    case 85: 
      return require('../assets/pools/85.jpg')
    case 86: 
      return require('../assets/pools/86.jpg')
    case 87: 
      return require('../assets/pools/87.jpg')
    case 88: 
      return require('../assets/pools/88.jpg')
    case 89: 
      return require('../assets/pools/89.jpg')
    case 90: 
      return require('../assets/pools/90.jpg')
    case 91: 
      return require('../assets/pools/91.jpg')
    case 92: 
      return require('../assets/pools/92.jpg')
    case 93: 
      return require('../assets/pools/93.jpg')
    case 94: 
      return require('../assets/pools/94.jpg')
    case 95: 
      return require('../assets/pools/95.jpg')
    case 96: 
      return require('../assets/pools/96.jpg')
    case 97: 
      return require('../assets/pools/97.jpg')
    case 98: 
      return require('../assets/pools/98.jpg')
    case 99: 
      return require('../assets/pools/99.jpg')
    case 100: 
      return require('../assets/pools/100.jpg')
    case 101: 
      return require('../assets/pools/101.jpg')
    case 102: 
      return require('../assets/pools/102.jpg')
    case 103: 
      return require('../assets/pools/103.jpg')
    case 104: 
      return require('../assets/pools/104.jpg')
    case 105: 
      return require('../assets/pools/105.jpg')
    case 106: 
      return require('../assets/pools/106.jpg')
    case 107: 
      return require('../assets/pools/107.jpg')
    case 108: 
      return require('../assets/pools/108.jpg')
    case 109: 
      return require('../assets/pools/109.jpg')
    // case 110: 
    //   return require('../assets/pools/110.jpg')
    case 111: 
      return require('../assets/pools/111.jpg')
    case 112: 
      return require('../assets/pools/112.jpg')
    // case 113: 
    //   return require('../assets/pools/113.jpg')
    case 114: 
      return require('../assets/pools/114.jpg')
    case 115: 
      return require('../assets/pools/115.jpg')
    // case 116: 
    //   return require('../assets/pools/116.jpg')
    // case 117: 
    //   return require('../assets/pools/117.jpg')
    // case 118: 
    //   return require('../assets/pools/118.jpg')
    // case 119: 
    //   return require('../assets/pools/119.jpg')
    // case 120: 
    //   return require('../assets/pools/120.jpg')
    // case 121: 
    //   return require('../assets/pools/121.jpg')
    // case 122: 
    //   return require('../assets/pools/122.jpg')
    // case 123: 
    //   return require('../assets/pools/123.jpg')
    // case 124: 
    //   return require('../assets/pools/124.jpg')
    // case 125: 
    //   return require('../assets/pools/125.jpg')
    // case 126: 
    //   return require('../assets/pools/126.jpg')
    // case 127: 
    //   return require('../assets/pools/127.jpg')
    // case 128: 
    //   return require('../assets/pools/128.jpg')
    case 129: 
      return require('../assets/pools/129.jpg')
    // case 130: 
    //   return require('../assets/pools/130.jpg')
    // case 131: 
    //   return require('../assets/pools/131.jpg')
    // case 132: 
    //   return require('../assets/pools/132.jpg')
    // case 133: 
    //   return require('../assets/pools/133.jpg')
    // case 134: 
    //   return require('../assets/pools/134.jpg')
    // case 135: 
    //   return require('../assets/pools/135.jpg')
    // case 136: 
    //   return require('../assets/pools/136.jpg')
    // case 137: 
    //   return require('../assets/pools/137.jpg')
    // case 138: 
    //   return require('../assets/pools/138.jpg')
    // case 139: 
    //   return require('../assets/pools/139.jpg')
    // case 140: 
    //   return require('../assets/pools/140.jpg')
    // case 141: 
    //   return require('../assets/pools/141.jpg')
    // case 142: 
    //   return require('../assets/pools/142.jpg')
    // case 143: 
    //   return require('../assets/pools/143.jpg')
    // case 144: 
    //   return require('../assets/pools/144.jpg')
    // case 145: 
    //   return require('../assets/pools/145.jpg')
    // case 146: 
    //   return require('../assets/pools/146.jpg')
    // case 147: 
    //   return require('../assets/pools/147.jpg')
    // case 148: 
    //   return require('../assets/pools/148.jpg')
    // case 149: 
    //   return require('../assets/pools/149.jpg')
    // case 150: 
    //   return require('../assets/pools/150.jpg')
    // case 151: 
    //   return require('../assets/pools/151.jpg')
    // case 152: 
    //   return require('../assets/pools/152.jpg')
    // case 153: 
    //   return require('../assets/pools/153.jpg')
    // case 154: 
    //   return require('../assets/pools/154.jpg')
    case 155: 
      return require('../assets/pools/155.jpg')
    case 156: 
      return require('../assets/pools/156.jpg')
  }
}

export default function PoolView ({ navigation, route }) {
  const { pool } = route.params;
  const imageSource = getImgSource(pool.id)
  const str = '../assets/pools/2.jpg'
  return <>
    <View>
      <Image style={styles.poolImage} source={imageSource} />
    </View>
    <ScrollView>
      <Text>name: {pool.n}</Text>
      <Text>level: {pool.l}</Text>
      <Text>id: {pool.id}</Text>
    </ScrollView>
  </>
}

const styles = StyleSheet.create({
  poolImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  }
});
