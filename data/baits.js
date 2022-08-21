export const procure = {
  gsm: 'Goldsmith',
  cul: 'Culinarian',
  scx: 'Scrip Exchange',
  'm&m': 'Merchant & Mender',
  ect: 'Encampment Clothier & Tailor',
  arm: 'Arms Supplier',
  'a&m': 'Arms Supplier & Mender',
  jnk: 'Junkmonger',
  hyr: 'Tool Supplier and Mender (Hyrstmill)',
  ind: 'Independent Merchant',
  grd: 'Admiranda',
  uld: 'Yoyobasa',
  bur: 'Bureau Provisioner',
  mjk: 'Mord Junkmonger',
  fan: 'Local Merchant (Fanow)',
  twi: 'Merchant and Mender (Twine)',
  pix: 'Pixie Hoarder',
  sha: 'Shan San',
  tjk: 'Tholl Junkmonger',
  cry: 'Andia',
  oas: 'Arms Supplier (The Ostall Imperative)',
  rra: "Arms Supplier and Mender (Radisca's Round)",
  evr: 'Evrardoux',
  dad: 'Dadden',
  jsd: 'Jasard',
  jft: 'Jasfort',
  lom: 'Local Merchant',
  ver: 'Vernarth',
  ysg: 'Ys Gyuf',
  dia: 'Mender (The Diadem)',
  yuq: 'Yuqurl Manl',
  scl: 'Spoils Collector',
  fah: 'Fahruvvet',
  poi: 'Pillar of Industry',
  prn: 'Provisions Node',
  syn: 'Synnove',
  uns: 'Unskynwyb',
  mof: 'Merchant & Mender (Ocean Fishing)',
  mte: 'Merchant & Mender (The Endeavor)',
  shi: 'Shichiho',
  blu: 'Blue Merchant', 
  env: 'Enclave Merchant',
  hig: 'Hingan Merchant & Mender',
  tok: 'Tokohana',
  vmm: 'Village Merchant & Mender',
  ann: 'Anna',
  dna: 'Diana',
  bls: 'Blessed Merchant',
  dot: 'Dotharli',
  mmm: 'Mol Merchant & Mender',
  omr: 'Oroniri Merchant',
  tra: 'Traveling Merchant',
  tri: 'Tribe Merchant',
  eop: 'Emptier of Purses',
  pow: 'Peddler of Wonders',
  ren: 'Repository Node',
  vmr: 'Village Merchant',
  tsm: 'Tool Supplier and Mender',
  den: 'Denys',
  spa: 'Spanner'
}

export const baits = {
  Bas: { n: "Baitbugs", l: 80, a: ['scx',], c: []},
  BanBug: { n: "Balloon Bug", l: 50, a: ['m&m',], c: []},
  BasBal: { n: "Bass Ball", l: 25, a: ['cul', 'ect', 'm&m', 'arm', 'a&m'], c: []},
  BldStlJig: { n: "Bladed Steel Jig", l: 60, a: ['gsm', ], c: []},
  Blm: { n: "Bloodworm", l: 10, a: ['m&m',], c: []},
  BleBot: { n: "Blue Bobbit", l: 70, a: ['scx',], c: []},
  BrsSpnLue: { n: "Brass Spoon Lure", l: 23, a: ['gsm', 'jnk', 'arm'], c: []},
  BrmLue: { n: "Bream Lure", l: 68, a: ['scx',], c: []},
  BreLeh: { n: "Brute Leech", l: 60, a: ['scx',], c: []},
  Bum: { n: "Butterworm", l: 20, a: ['jnk', 'ect', 'm&m', 'a&m'], c: []},
  CayLaa: { n: "Caddisfly Larva", l: 50, a: ['m&m', 'ind'], c: []},
  ChaWom: { n: "Chimera Worm", l: 90, a: ['scx',], c: []},
  ChoFly: { n: "Chocobo Fly", l: 27, a: ['gsm', 'jnk', 'm&m',], c: []},
  CrbBal: { n: "Crab Ball", l: 20, a: ['cul', 'jnk', 'm&m',], c: []},
  CrhBal: { n: "Crayfish Ball", l: 5, a: ['cul', 'lim', 'hyr', 'grd', 'uld', 'm&m',], c: []},
  CrwFly: { n: "Crow Fly", l: 20, a: ['gsm', 'jnk', 'a&m'], c: []},
  DetDetFrg: { n: "Desert Dessert Frog", l: 70, a: ['bur', 'fan', 'twi', 'mjk', 'pix', 'sha', 'tjk', 'ver', 'ysg'], c: []},
  DimBanBug: { n: "Diadem Balloon Bug", l: 80, a: ['dia'], c: []},
  DimCreFly: { n: "Diadem Crane Fly", l: 80, a: ['dia'], c: []},
  DimHom: { n: "Diadem Hoverworm", l: 80, a: ['dia'], c: []},
  DimRedBan: { n: "Diadem Red Balloon", l: 80, a: ['dia'], c: []},
  FidWom: { n: "Fiend Worm", l: 58, a: ['scx',], c: []},
  FlgMiw: { n: "Floating Minnow", l: 22, a: ['gsm', 'jnk', 'm&m',], c: []},
  FrrBoe: { n: "Freshwater Boilie", l: 15, a: ['hyr', 'a&m', 'jnk', 'uld', 'evr', 'ect', 'arm', 'ind', 'lim', 'grd', 'm&m',], c: []},
  FrtWom: { n: "Fruit Worm", l: 70, a: ['cry', 'oas', 'rra', 'bur', 'dad', 'jsd', 'jft', 'lom', 'm&m', 'mjk', 'pix', 'sha', 'tjk', 'ver', 'ysg', 'yuq'], c: []},
  GitCreFly: { n: "Giant Crane Fly", l: 60, a: ['scx', 'scl'], c: []},
  Glm: { n: "Glowworm", l: 45, a: ['jnk', 'm&m', 'ind'], c: []},
  GonJig: { n: "Goblin Jig", l: 58, a: ['gsm', ], c: []},
  GoyBal: { n: "Goby Ball", l: 10, a: ['cul', 'jnk', 'm&m'], c: []},
  GodSanRoe: { n: "Gold Salmon Roe", l: 80, a: ['fah', 'jnk', 'm&m', 'poi', 'prn', 'syn', 'uns'], c: []},
  GryWom: { n: "Grey Worm", l: 84, a: ['jnk', 'm&m', 'poi', 'prn'], c: []},
  HeyStlJig: { n: "Heavy Steel Jig", l: 37, a: ['gsm', ], c: []},
  HegBal: { n: "Herring Ball", l: 35, a: ['cul', 'grd', 'evr', 'jnk', 'm&m', 'shi', 'lim', 'ver', 'uld'], c: []},
  HoyWom: { n: "Honey Worm", l: 35, a: ['grd', 'evr', 'm&m', 'jnk', 'shi', 'lim', 'ver', 'uld'], c: []},
  Hom: { n: "Hoverworm", l: 45, a: ['grd', 'evr', 'm&m', 'jnk', 'shi', 'lim', 'ver', 'uld'], c: []},
  JedOvm: { n: "Jerked Ovim", l: 77, a: ['scx',], c: []},
  Krl: { n: "Krill", l: 1, a: ['mof', 'mte'], c: []},
  KrlCaeFer: { n: "Krill Cage Feeder", l: 40, a: ['m&m',], c: []},
  Leh: { n: "Leech", l: 83, a: ['fah', 'jnk', 'm&m', 'poi', 'prn', 'syn', 'uns'], c: []},
  LieShp: { n: "Live Shrimp", l: 62, a: ['blu', 'env', 'hig', 'ind', 'm&m', 'shi', 'tok', 'ver', 'vmm'], c: []},
  Lum: { n: "Lugworm", l: 1, a: ['grd', 'evr', 'm&m', 'jnk', 'shi', 'lim', 'ver', 'uld'], c: []},
  MalStp: { n: "Mackerel Strip", l: 90, a: ['scx',], c: []},
  MaaWom: { n: "Magma Worm", l: 55, a: ['evr', 'scx', 'scl', 'shi', 'ver'], c: []},
  MaeNyh: { n: "Marble Nymph", l: 73, a: ['bur', 'lom', 'm&m', 'mjk', 'pix', 'tjk', 'ver', 'ysg'], c: []},
  May: { n: "Mayfly", l: 90, a: ['scx',], c: []},
  MelSpr: { n: "Metal Spinner", l: 55, a: ['ann', 'blu', 'dad', 'dna', 'ind', 'jnk', 'syn'], c: []},
  MieBat: { n: "Midge Basket", l: 15, a: ['grd', 'evr', 'm&m', 'jnk', 'shi', 'lim', 'ver', 'uld'], c: []},
  MieLaa: { n: "Midge Larva", l: 65, a: ['bls', 'dot', 'm&m', 'ind', 'm&m', 'mmm', 'omr', 'shi', 'tra', 'tri', 'ver'], c: []},
  MohPua: { n: "Moth Pupa", l: 1, a: ['grd', 'evr', 'm&m', 'jnk', 'shi', 'lim', 'ver', 'uld'], c: []},
  MoiShp: { n: "Moyebi Shrimp", l: 71, a: ['bur', 'lom', 'm&m', 'mjk', 'pix', 'tjk', 'ver', 'ysg'], c: []},
  MylSpnLue: { n: "Mythril Spoon Lure", l: 41, a: ['gsm', 'grd', 'evr', 'm&m', 'jnk', 'shi', 'lim', 'ver', 'uld'], c: []},
  Nir: { n: "Nightcrawler", l: 64, a: ['bls', 'dot', 'm&m', 'ind', 'm&m', 'mmm', 'omr', 'shi', 'tra', 'tri', 'ver'], c: []},
  NonKrl: { n: "Northern Krill", l: 50, a: ['grd', 'evr', 'm&m', 'jnk', 'shi', 'lim', 'ver', 'uld'], c: []},
  PacJig: { n: "Panic Jig", l: 89, a: ['scx',], c: []},
  PilBug: { n: "Pill Bug", l: 5, a: ['grd', 'evr', 'm&m', 'jnk', 'shi', 'lim', 'ver', 'uld'], c: []},
  PlpWom: { n: "Plump Worm", l: 1, a: ['mof', 'mte'], c: []},
  PueWebSpr: { n: "Purse Web Spider", l: 55, a: ['eop', 'evr', 'pow', 'ren', 'shi', 'ver'], c: []},
  Ram: { n: "Ragworm", l: 1, a: ['mof', 'mte'], c: []},
  RawSpnLue: { n: "Rainbow Spoon Lure", l: 46, a: ['gsm', ], c: []},
  RatTal: { n: "Rat Tail", l: 15, a: ['grd', 'evr', 'm&m', 'jnk', 'shi', 'lim', 'ver', 'uld'], c: []},
  RedBan: { n: "Red Balloon", l: 53, a: ['scx', 'scl', 'evr', 'pow', 'shi', 'ver'], c: []},
  RorBal: { n: "Robber Ball", l: 75, a: ['scx',], c: []},
  RogSte: { n: "Rolling Stone", l: 45, a: ['grd', 'evr', 'm&m', 'jnk', 'shi', 'lim', 'ver', 'uld'], c: []},
  SanRoe: { n: "Salmon Roe", l: 60, a: ['dot', 'm&m', 'ind', 'm&m', 'mmm', 'omr', 'shi', 'tra', 'tri', 'ver', 'vmr'], c: []},
  SarBoe: { n: "Saltwater Boilie", l: 15, a: ['grd', 'arm', 'a&m', 'ect', 'evr', 'ind', 'jnk', 'm&m', 'lim', 'tsm', 'uld'], c: []},
  SadGeo: { n: "Sand Gecko", l: 40, a: ['grd', 'evr', 'jnk', 'm&m', 'shi', 'lim', 'ver', 'uld'], c: []},
  SadLeh: { n: "Sand Leech", l: 35, a: ['grd', 'evr', 'jnk', 'm&m', 'shi', 'lim', 'ver', 'uld'], c: []},
  ShtBilMiw: { n: "Short Bill Minnow", l: 78, a: ['scx',], c: []},
  ShpBal: { n: "Shrimp Ball", l: 80, a: ['jnk', 'syn', 'uns'], c: []},
  ShpCaeFer: { n: "Shrimp Cage Feeder", l: 25, a: ['grd', 'evr', 'jnk', 'm&m', 'shi', 'lim', 'ver', 'uld'], c: []},
  SieSkl: { n: "Signature Skyball", l: 80, a: ['den', 'spa'], c: []},
  Sim: { n: "Silkworm", l: 68, a: ['scx',], c: []},
  SirSpnLue: { n: "Silver Spoon Lure", l: 32, a: ['gsm', 'grd', 'evr', 'jnk', 'm&m', 'shi', 'lim', 'ver', 'uld'], c: []},
  SigMiw: { n: "Sinking Minnow", l: 34, a: ['gsm', ], c: []},
  SkySpnLue: { n: "Sky Spoon Lure", l: 86, a: ['scx',], c: []},
  SneFly: { n: "Snurble Fly", l: 43, a: ['gsm', ], c: []},
  Spr: { n: "Spinner", l: 39, a: ['gsm', ], c: []},
  Spt: { n: "Spinnerbait", l: 47, a: ['gsm', ], c: []},
  SpnWom: { n: "Spoon Worm", l: 30, a: ['grd', 'evr', 'jnk', 'm&m', 'shi', 'lim', 'ver', 'uld'], c: []},
  SqdStp: { n: "Squid Strip", l: 80, a: ['scx',], c: []},
  Stt: { n: "Stardust", l: 90, a: ['scx',], c: []},
  StlJig: { n: "Steel Jig", l: 32, a: ['gsm', 'grd', 'evr', 'jnk', 'm&m', 'shi', 'lim', 'ver', 'uld'], c: []},
  StmBor: { n: "Stem Borer", l: 40, a: ['grd', 'evr', 'jnk', 'm&m', 'shi', 'lim', 'ver', 'uld'], c: []},
  StyLaa: { n: "Stonefly Larva", l: 70, a: ['scx',], c: []},
  StyNyh: { n: "Stonefly Nymph", l: 51, a: ['eop', 'evr', 'pow', 'ren', 'shi', 'ver'], c: []},
  Str: { n: "Streamer", l: 48, a: ['gsm', ], c: []},
  SugMiw: { n: "Suspending Minnow", l: 68, a: ['scx',], c: []},
  SydBat: { n: "Syrphid Basket", l: 30, a: ['grd', 'evr', 'jnk', 'm&m', 'shi', 'lim', 'ver', 'uld'], c: []},
  TorFrg: { n: "Topwater Frog", l: 44, a: ['gsm', ], c: []},
  VeeLue: { n: "Versatile Lure", l: 1, a: ['mof', 'mte'], c: []},
  WilFly: { n: "Wildfowl Fly", l: 36, a: ['gsm', 'grd', 'evr', 'jnk', 'm&m', 'shi', 'lim', 'ver', 'uld'], c: []},
  Yuo: { n: "Yumizuno", l: 48, a: ['gsm', ], c: []}, 
}