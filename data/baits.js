export const baitProcure = {
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
  spa: 'Spanner',
  lim: 'Syneyhil'
}

export default baitsData = {
  2585: {
    name: "Lugworm",
    description: "A hairy marine worm that lives under beach sand. Live bait for ocean fishing.",
    iconURL: "/i/027000/027004_hr1.png",
    level: 1,
    aquisition: ["grd", "evr", "m&m", "jnk", "shi", "lim", "ver", "uld"],
    fishes: [4776, 4869, 4870, 4871, 4903, 4904, 4919, 4923]
  }, 2586: {
    name: "Moth Pupa",
    description: "A moth in the third stage of its development into an adult. Live bait for freshwater fishing.",
    iconURL: "/i/027000/027003_hr1.png",
    level: 1,
    aquisition: ["grd", "evr", "m&m", "jnk", "shi", "lim", "ver", "uld"],
    fishes: [4925, 4926, 4927, 4928, 4929, 4930, 4952, 7679, 7681]
  }, 2587: {
    name: "Pill Bug",
    description: "A small insect covered in a grey protective carapace. Is known to curl up in a ball when agitated. Live bait for ocean fishing.",
    iconURL: "/i/027000/027005_hr1.png",
    level: 5,
    aquisition: ["grd", "evr", "m&m", "jnk", "shi", "lim", "ver", "uld"],
    fishes: [4776, 4869, 4870, 4871, 4872, 4873, 4874, 4875, 4876, 4877, 4885, 4888, 4921, 5460, 7685]
  }, 2588: {
    name: "Crayfish Ball",
    description: "A ball of crayfish and rye flour paste. Processed bait for freshwater fishing.",
    iconURL: "/i/027000/027008_hr1.png",
    level: 5,
    aquisition: ["cul", "lim", "hyr", "grd", "uld", "m&m"],
    fishes: [4925, 4926, 4927, 4928, 4929, 4930, 4931, 4932, 4933, 4934, 4935, 4936, 7688, 7692, 7696, 7698]
  }, 2589: {
    name: "Goby Ball",
    description: "A ball of goby and rye flour paste. Processed bait for ocean fishing.",
    iconURL: "/i/027000/027009_hr1.png",
    level: 10,
    aquisition: ["cul", "jnk", "m&m"],
    fishes: [4776, 4869, 4870, 4871, 4872, 4873, 4874, 4875, 4876, 4877, 4878, 4879, 5460, 7680, 7691, 7712]
  }, 2590: {
    name: "Bloodworm",
    description: "A common earthworm that earns its name from the blood red tint of its body. Live bait for freshwater fishing.",
    iconURL: "/i/027000/027006_hr1.png",
    level: 10,
    aquisition: ["m&m"],
    fishes: [4925, 4926, 4927, 4928, 4929, 4930, 4931, 4932, 4933, 4934, 4935, 4936, 4939, 4940, 4941, 7703, 7708]
  }, 2591: {
    name: "Rat Tail",
    description: "The thin tail of a rat, often carried by young Lalafellin boys as a good-luck charm. Bait for ocean fishing.",
    iconURL: "/i/027000/027001_hr1.png",
    level: 15,
    aquisition: ["grd", "evr", "m&m", "jnk", "shi", "lim", "ver", "uld"],
    fishes: [4776, 4869, 4870, 4871, 4872, 4873, 4874, 4875, 4876, 4877, 4878, 4879, 4880, 4881, 4882, 4883, 4884, 5460, 7678, 7903]
  }, 2592: {
    name: "Midge Basket",
    description: "A tightly knitted wicker basket filled with a swarm of biting midges. Live bait for freshwater fishing.",
    iconURL: "/i/027000/027002_hr1.png",
    level: 15,
    aquisition: ["grd", "evr", "m&m", "jnk", "shi", "lim", "ver", "uld"],
    fishes: [4927, 4929, 4931, 4932, 4933, 4935, 4936, 4939, 4940, 4941, 4942, 4943, 4944, 4945, 4946, 4948, 4949, 4965, 5002, 7702]
  }, 2593: {
    name: "Crab Ball",
    description: "A ball of crabmeat and rye flour paste. Processed bait for ocean fishing.",
    iconURL: "/i/027000/027011_hr1.png",
    level: 20,
    aquisition: ["cul", "jnk", "m&m"],
    fishes: [4869, 4870, 4872, 4874, 4876, 4878, 4879, 4881, 4886, 4887, 5461]
  }, 2594: {
    name: "Butterworm",
    description: "If allowed to pupate, this bright-yellow larva will transform into a hideous moth which can devour an entire tunic in a single turn of the sun. Live bait for freshwater fishing.",
    iconURL: "/i/027000/027019_hr1.png",
    level: 20,
    aquisition: ["jnk", "ect", "m&m", "a&m"],
    fishes: [4925, 4926, 4927, 4928, 4929, 4930, 4931, 4932, 4933, 4934, 4935, 4936, 4939, 4940, 4941, 4942, 4943, 4944, 4945, 4946, 4948, 4949, 4950, 4951, 4953, 4954, 4956, 4957, 4958, 4965, 4992, 7682, 7700, 7706, 7714, 7907, 7908, 7916]
  }, 2595: {
    name: "Bass Ball",
    description: "A ball of dark bass and sunset flour paste. Processed bait for freshwater fishing.",
    iconURL: "/i/027000/027010_hr1.png",
    level: 25,
    aquisition: ["cul", "ect", "m&m", "arm", "a&m"],
    fishes: [4927, 4929, 4931, 4932, 4935, 4936, 4940, 4941, 4942, 4943, 4944, 4945, 4948, 4950, 4954, 4955, 4958, 4959, 4960, 4961, 4962, 4966, 4967, 4968, 7913]
  }, 2596: {
    name: "Spoon Worm",
    description: "Also colorfully known as a “fisherman's member,” the stench of this sea-dwelling creature when sliced up is perfect for attracting hungry fish. Live bait for ocean fishing.",
    iconURL: "/i/027000/027015_hr1.png",
    level: 30,
    aquisition: ["grd", "evr", "jnk", "m&m", "shi", "lim", "ver", "uld"],
    fishes: [4869, 4870, 4871, 4872, 4874, 4876, 4877, 4878, 4879, 4881, 4883, 4886, 4887, 4890, 4891, 4892, 4894, 4895, 4896, 4897, 4898, 4899, 4900, 4906, 5461, 7710]
  }, 2597: {
    name: "Syrphid Basket",
    description: "A tightly knitted wicker basket filled with a swarm of angry syrphids. Live bait for freshwater fishing.",
    iconURL: "/i/027000/027002_hr1.png",
    level: 30,
    aquisition: ["grd", "evr", "jnk", "m&m", "shi", "lim", "ver", "uld"],
    fishes: [4927, 4929, 4931, 4937, 4938, 4939, 4940, 4941, 4942, 4943, 4944, 4945, 4948, 4950, 4958, 4962, 4968, 4970, 4971, 4972, 4973, 4974, 4976, 5544, 7704, 7902, 7914, 7920]
  }, 2598: {
    name: "Herring Ball",
    description: "A ball of Indigo herring and sunset flour paste. Processed bait for ocean fishing.",
    iconURL: "/i/027000/027007_hr1.png",
    level: 35,
    aquisition: ["cul", "grd", "evr", "jnk", "m&m", "shi", "lim", "ver", "uld"],
    fishes: [4869, 4870, 4871, 4872, 4873, 4874, 4878, 4880, 4883, 4884, 4886, 4890, 4891, 4892, 4894, 4895, 4896, 4897, 4898, 4899, 4900, 4901, 4902, 4983, 5461, 5462, 7924]
  }, 2599: {
    name: "Honey Worm",
    description: "The honeyfly will lay its eggs in beehives where, upon hatching, the larvae will feed on honey until pupation. Live bait for freshwater fishing.",
    iconURL: "/i/027000/027018_hr1.png",
    level: 35,
    aquisition: ["grd", "evr", "m&m", "jnk", "shi", "lim", "ver", "uld"],
    fishes: [4925, 4927, 4929, 4932, 4933, 4934, 4936, 4937, 4938, 4939, 4940, 4941, 4942, 4943, 4945, 4948, 4950, 4953, 4954, 4955, 4957, 4958, 4959, 4961, 4966, 4967, 4970, 4973, 4974, 4976, 4978, 4979, 4980, 4981, 4982, 4983, 4984, 4985, 4986, 4987, 4996, 5000, 5002, 5004, 5005, 5009, 5011, 5544, 7918, 7925, 7934, 7939]
  }, 2600: {
    name: "Sand Leech",
    description: "A spineless creature which hides patiently under the desert─ofttimes for several moons─until a larger beast passes nearby. The leech will then attach itself to the new host's leg and proceed to drink deep of the beast's blood until its belly is full, after which it releases itself back to the desert to wait for its next victim. Live bait for dunefishing.",
    iconURL: "/i/027000/027014_hr1.png",
    level: 35,
    aquisition: ["grd", "evr", "jnk", "m&m", "shi", "lim", "ver", "uld"],
    fishes: [4977, 5032, 5033, 5034, 5035, 5036, 5037, 5045]
  }, 2601: {
    name: "Stem Borer",
    description: "This longhorn beetle larva can most commonly be found burrowed deep into the trunks of fallen logs. Live bait for freshwater fishing.",
    iconURL: "/i/027000/027017_hr1.png",
    level: 40,
    aquisition: ["grd", "evr", "jnk", "m&m", "shi", "lim", "ver", "uld"],
    fishes: [4905, 4925, 4927, 4929, 4932, 4934, 4936, 4937, 4942, 4943, 4948, 4950, 4954, 4955, 4957, 4959, 4967, 4970, 4973, 4974, 4978, 4981, 4982, 4984, 4986, 4987, 4988, 4989, 4990, 4991, 4993, 4994, 4995, 4996, 4997, 5003, 5544, 7713, 7937, 7942]
  }, 2602: {
    name: "Sand Gecko",
    description: "When night falls, thousands of these tiny scalekin can be seen scampering about the Sagolii Desert in search of the beetles on which they dine. Live bait for dunefishing.",
    iconURL: "/i/027000/027012_hr1.png",
    level: 40,
    aquisition: ["grd", "evr", "jnk", "m&m", "shi", "lim", "ver", "uld"],
    fishes: [5032, 5033, 5034, 5035, 5036]
  }, 2603: {
    name: "Glowworm",
    description: "It is not known why one end of these vilekin shines bright like a candle. It is, however, known that the light emitted by these creatures makes them a perfect target for hungry fish. Live bait for freshwater and ocean fishing.",
    iconURL: "/i/027000/027021_hr1.png",
    level: 45,
    aquisition: ["jnk", "m&m", "ind"],
    fishes: [4869, 4872, 4874, 4886, 4900, 4907, 4908, 4909, 4910, 4927, 4929, 4937, 4938, 4940, 4942, 4948, 4950, 4954, 4959, 4966, 4970, 4973, 4974, 4978, 4979, 4981, 4982, 4984, 4987, 4989, 4990, 4993, 4995, 4996, 4997, 4998, 4999, 5001, 5003, 5006, 5007, 5008, 5462, 5466, 5544, 7928, 7933, 7951, 8758, 8759, 8774]
  }, 2604: {
    name: "Rolling Stone",
    description: "When threatened, this tiny desert crustacean will curl itself into a ball which, to the untrained eye, will appear no more than a simple pebble. Live bait for dunefishing.",
    iconURL: "/i/027000/027024_hr1.png",
    level: 45,
    aquisition: ["grd", "evr", "m&m", "jnk", "shi", "lim", "ver", "uld"],
    fishes: [4977, 5032, 5033, 5034, 5035, 5036]
  }, 2605: {
    name: "Hoverworm",
    description: "Unlike other vilekin larvae, the hoverworm is not confined to life on the ground. Filling its belly with air allows it to freely ride the thermals over the Sea of Clouds. Live bait for skyfishing.",
    iconURL: "/i/027000/027022_hr1.png",
    level: 45,
    aquisition: ["grd", "evr", "m&m", "jnk", "shi", "lim", "ver", "uld"],
    fishes: [5038, 5039, 5040, 5041, 5042]
  }, 2606: {
    name: "Northern Krill",
    description: "Microscopic shrimp which inhabit the colder sea currents hailing from the northern seas. Live bait for ocean fishing.",
    iconURL: "/i/027000/027023_hr1.png",
    level: 50,
    aquisition: ["grd", "evr", "m&m", "jnk", "shi", "lim", "ver", "uld"],
    fishes: [4869, 4870, 4871, 4872, 4873, 4874, 4875, 4877, 4878, 4879, 4880, 4881, 4883, 4884, 4886, 4887, 4889, 4890, 4891, 4892, 4893, 4895, 4896, 4897, 4898, 4899, 4900, 4901, 4902, 4909, 4910, 4911, 4913, 4914, 4916, 5460, 5462, 5466, 6185, 7687, 7906, 7910, 8754]
  }, 2607: {
    name: "Caddisfly Larva",
    description: "The fact they are extremely difficult to harvest from their underwater homes makes fishing with caddisfly larvae an option for only the most well-to-do anglers. Live bait for freshwater fishing.",
    iconURL: "/i/027000/027013_hr1.png",
    level: 50,
    aquisition: ["m&m", "ind"],
    fishes: [4929, 4935, 4937, 4940, 4942, 4943, 4948, 4950, 4959, 4962, 4967, 4972, 4973, 4974, 4976, 4978, 4980, 4981, 4982, 4983, 4986, 4987, 4989, 4990, 4993, 4996, 5003, 5006, 5013, 5017, 5023, 5027, 5544, 7919, 7936, 8770]
  }, 2609: {
    name: "Balloon Bug",
    description: "With wings too underdeveloped for flying, this beetle has adopted another method of locomotion about the Sea of Clouds─a second bladder it fills with a noxious lighter-than-air gas. This foul stench is known to attract larger, hungrier creatures. Live bait for skyfishing.",
    iconURL: "/i/027000/027020_hr1.png",
    level: 50,
    aquisition: ["m&m"],
    fishes: [5038, 5039, 5040, 5042]
  }, 2610: {
    name: "Chocobo Fly",
    description: "A freshwater fishing lure made from a chocobo feather. The faint aroma of stable hay brings back memories of a simpler time.",
    iconURL: "/i/027000/027056_hr1.png",
    level: 27,
    aquisition: ["gsm", "jnk", "m&m"],
    fishes: [4927, 4929, 4936, 4938, 4940, 4942, 4943, 4944, 4946, 4948, 4950, 4954, 4955, 4956, 4959, 4966, 4967, 4970, 5544]
  }, 2611: {
    name: "Floating Minnow",
    description: "A light plug lure made to resemble a minnow. Especially effective when used to land fish swimming close to the water's surface.",
    iconURL: "/i/027000/027051_hr1.png",
    level: 22,
    aquisition: ["gsm", "jnk", "m&m"],
    fishes: [4776, 4869, 4870, 4871, 4872, 4874, 4876, 4877, 4879, 4883, 4886, 4887, 4903, 4927, 4929, 4932, 4935, 4936, 4939, 4940, 4941, 4942, 4943, 4945, 4946, 4948, 4949, 4950, 4951, 4953, 4954, 4955, 4957, 4958, 4959, 4961, 7699]
  }, 2612: {
    name: "Brass Spoon Lure",
    description: "A polished brass lure shaped like a spoon so it will oscillate when dragged through the water, attracting fish. Especially effective in lakes.",
    iconURL: "/i/027000/027064_hr1.png",
    level: 23,
    aquisition: ["gsm", "jnk", "arm"],
    fishes: [4943, 4948, 4959, 4967]
  }, 2613: {
    name: "Shrimp Cage Feeder",
    description: "A small metal cage packed with a pungent mixture of chopped shrimp. Fish are drawn to the area as pieces of shrimp break off from the cage. Processed bait for ocean fishing.",
    iconURL: "/i/027000/027053_hr1.png",
    level: 25,
    aquisition: ["grd", "evr", "jnk", "m&m", "shi", "lim", "ver", "uld"],
    fishes: [4869, 4870, 4874, 4876, 4878, 4883, 4886, 4887, 4890, 4891, 4892, 4893, 4894, 5461, 7909]
  }, 2614: {
    name: "Crow Fly",
    description: "A caddisfly-shaped lure crafted from a crow feather. Recommended for freshwater fly fishing novices.",
    iconURL: "/i/027000/027057_hr1.png",
    level: 20,
    aquisition: ["gsm", "jnk", "a&m"],
    fishes: [4925, 4927, 4929, 4930, 4932, 4933, 4934, 4936, 4939, 4940, 4941, 4942, 4943, 4944, 4946, 4947, 4948, 4949, 4950, 4951, 4953, 4954, 4955, 4956, 4957, 4959, 4960, 7689, 7701, 7904]
  }, 2615: {
    name: "Silver Spoon Lure",
    description: "A polished silver lure shaped like a spoon so it will oscillate when dragged through the water, attracting fish. Especially effective in lakes.",
    iconURL: "/i/027000/027052_hr1.png",
    level: 32,
    aquisition: ["gsm", "grd", "evr", "jnk", "m&m", "shi", "lim", "ver", "uld"],
    fishes: [4937, 4938, 4943, 4959, 4969, 4970, 4973, 4978, 4981]
  }, 2616: {
    name: "Steel Jig",
    description: "The weight of this steel lure allows for casting great distances, such as from coastlines.",
    iconURL: "/i/027000/027067_hr1.png",
    level: 32,
    aquisition: ["gsm", "grd", "evr", "jnk", "m&m", "shi", "lim", "ver", "uld"],
    fishes: [4869, 4870, 4871, 4872, 4874, 4876, 4878, 4879, 4881, 4882, 4883, 4886, 4887, 4891, 4892, 4893, 4894, 4895, 4896, 4898, 4899, 4901, 5461]
  }, 2617: {
    name: "Sinking Minnow",
    description: "A heavy plug lure made to resemble a minnow. Effective in attracting fish from both surface and floor.",
    iconURL: "/i/027000/027055_hr1.png",
    level: 34,
    aquisition: ["gsm"],
    fishes: [4869, 4874, 4876, 4879, 4886, 4892, 4895, 4896, 4898, 4899, 4901, 4902, 4926, 4928, 4930, 4931, 4934, 4936, 4937, 4940, 4945, 4946, 4961, 4967, 4970, 4974, 4976, 4978, 4980, 4981, 4982, 5462, 7709, 7921]
  }, 2618: {
    name: "Snurble Fly",
    description: "A freshwater fishing lure made from a snurble tuft.",
    iconURL: "/i/027000/027058_hr1.png",
    level: 43,
    aquisition: ["gsm"],
    fishes: [4905, 4936, 4937, 4948, 4970, 4973, 4974, 4978, 4987, 4990, 4999, 5001, 7938]
  }, 2619: {
    name: "Heavy Steel Jig",
    description: "The sheer weight of this steel lure allows for casting tremendous distances, such as from coastlines.",
    iconURL: "/i/027000/027065_hr1.png",
    level: 37,
    aquisition: ["gsm"],
    fishes: [4869, 4870, 4874, 4876, 4878, 4879, 4881, 4883, 4886, 4887, 4889, 4890, 4891, 4893, 4894, 4896, 4898, 4899, 4900, 4901, 4902, 5461, 5462, 7711, 7926, 10123]
  }, 2620: {
    name: "Spinner",
    description: "A metal river lure designed to resemble both a mayfly and a minnow, allowing for use in a variety of different situations.",
    iconURL: "/i/027000/027062_hr1.png",
    level: 39,
    aquisition: ["gsm"],
    fishes: [4931, 4937, 4943, 4948, 4955, 4957, 4959, 4966, 4969, 4970, 4979, 4981, 4982, 4984, 4986, 4987, 4988, 4990, 4991, 4993, 4995, 7929]
  }, 2621: {
    name: "Krill Cage Feeder",
    description: "A small metal cage packed with northern krill. Fish are drawn to the area as krill float off from the cage. Processed bait for ocean fishing.",
    iconURL: "/i/027000/027053_hr1.png",
    level: 40,
    aquisition: ["m&m"],
    fishes: [4869, 4870, 4872, 4874, 4876, 4886, 4890, 4891, 4892, 4894, 4896, 4898, 4899, 4900, 4902, 5461, 5462, 5466]
  }, 2622: {
    name: "Mythril Spoon Lure",
    description: "A polished mythril lure shaped like a spoon so it will oscillate when dragged through the water, attracting all manner of lake and marsh life.",
    iconURL: "/i/027000/027066_hr1.png",
    level: 41,
    aquisition: ["gsm", "grd", "evr", "m&m", "jnk", "shi", "lim", "ver", "uld"],
    fishes: [4937, 4942, 4950, 4973, 4976, 4978, 4981, 4986, 4987, 4988, 4989, 4993, 5003, 5544]
  }, 2623: {
    name: "Wildfowl Fly",
    description: "A freshwater lure made from a wildfowl feather. Its uncanny resemblance to a mayfly makes it irresistible to vilekin-feeding fish such as trout.",
    iconURL: "/i/027000/027059_hr1.png",
    level: 36,
    aquisition: ["gsm", "grd", "evr", "jnk", "m&m", "shi", "lim", "ver", "uld"],
    fishes: [4925, 4927, 4929, 4932, 4934, 4935, 4936, 4937, 4940, 4942, 4943, 4945, 4947, 4951, 4955, 4959, 4970, 4973, 4976, 4978, 4981, 4982, 4986, 4988, 5544, 7695, 7932, 7944]
  }, 2624: {
    name: "Topwater Frog",
    description: "A light freshwater lure crafted to resemble a frog. Best suited for larger prey such as pikes and certain trout.",
    iconURL: "/i/027000/027054_hr1.png",
    level: 44,
    aquisition: ["gsm"],
    fishes: [4937, 4942, 4954, 4967, 4973, 4974, 4976, 4978, 4981, 4982, 4984, 4987, 4988, 4989, 4990, 4993, 4994, 4996, 4997, 5006, 5008, 5544, 6191, 7947, 8775]
  }, 2625: {
    name: "Rainbow Spoon Lure",
    description: "A shiny blacklip oyster shell lure shaped like a spoon so it will oscillate when dragged through the water, attracting all manner of aquatic life. Especially effective in lakes.",
    iconURL: "/i/027000/027061_hr1.png",
    level: 46,
    aquisition: ["gsm"],
    fishes: [4929, 4937, 4942, 4943, 4950, 4954, 4970, 4973, 4978, 4981, 5003, 5006, 5008, 5021, 8760]
  }, 2626: {
    name: "Spinnerbait",
    description: "Several small spinners joined together to resemble a school of fish. Especially effective in rivers.",
    iconURL: "/i/027000/027063_hr1.png",
    level: 47,
    aquisition: ["gsm"],
    fishes: [4929, 4931, 4933, 4943, 4944, 4945, 4947, 4948, 4950, 4953, 4954, 4955, 4957, 4959, 4962, 4970, 4973, 4974, 4976, 4978, 4981, 4982, 4984, 4988, 4989, 4993, 4995, 4998, 5001, 5016, 7697, 7927]
  }, 2627: {
    name: "Streamer",
    description: "A freshwater fly designed to sink below the water's surface, and by doing so, attract the larger carnivorous fish living near the floor.",
    iconURL: "/i/027000/027060_hr1.png",
    level: 48,
    aquisition: ["gsm"],
    fishes: [4937, 4940, 4942, 4943, 4954, 4970, 4973, 4974, 4976, 4978, 4981, 4982, 4984, 4990, 4994, 4995, 4996, 5008, 5028, 5029]
  }, 2628: {
    name: "Yumizuno",
    description: "A curved man-made lure used traditionally in the Far East, the name means literally “bow horn.” Increases chances of landing a big catch, even when casting from shore.",
    iconURL: "/i/027000/027068_hr1.png",
    level: 48,
    aquisition: ["gsm"],
    fishes: [4869, 4870, 4872, 4873, 4874, 4875, 4876, 4877, 4878, 4879, 4880, 4881, 4882, 4884, 4886, 4890, 4891, 4892, 4895, 4896, 4898, 4901, 4907, 4908, 4909, 4910, 4915, 5460, 5462, 5466, 6185, 7690, 7693]
  }, 12704: {
    name: "Stonefly Nymph",
    description: "Stonefly nymphs are constantly moving, making them easily discernible targets for poor-sighted fish. Live bait for freshwater fishing.",
    iconURL: "/i/027000/027028_hr1.png",
    level: 120,
    aquisition: ["eop", "evr", "pow", "ren", "shi", "ver"],
    fishes: [4937, 5544]
  }, 12705: {
    name: "Purse Web Spider",
    description: "This lightweight spider can distribute its weight over a large surface area, allowing it to “walk” on water without sinking. Live bait for freshwater fishing.",
    iconURL: "/i/022000/022619_hr1.png",
    level: 136,
    aquisition: ["eop", "evr", "pow", "ren", "shi", "ver"],
    fishes: [4937, 5544]
  }, 12711: {
    name: "Brute Leech",
    description: "A fat bloodsucking worm often found attached to large fish or the legs of wading fauna. Live bait for freshwater fishing.",
    iconURL: "/i/022000/022635_hr1.png",
    level: 180,
    aquisition: ["scx"],
    fishes: [4937]
  }, 27591: {
    name: "Freshwater Boilie",
    description: "A hard, round ball incorporating multiple highly effective baits─designed by fishers, for fishers. All-purpose bait for freshwater fishing, dunefishing, and cloudfishing.\n\n\n\nHas no effect on certain fish.",
    iconURL: "/i/027000/027042_hr1.png",
    level: 15,
    aquisition: ["hyr", "a&m", "jnk", "uld", "evr", "ect", "arm", "ind", "lim", "grd", "m&m"],
    fishes: [4925, 4927, 4928, 4929, 4930, 4931, 4932, 4933, 4934, 4935, 4936, 4937, 4938, 4939, 4940, 4941, 4942, 4943, 4944, 4945, 4946, 4948, 4950, 4954, 4955, 4957, 4958, 4959, 4962, 4966, 4967, 4970, 4972, 4973, 4974, 4976, 4977, 4978, 4979, 4980, 4981, 4982, 4986, 4987, 4989, 4990, 4995, 4996, 5001, 5003, 5006, 5008, 5032, 5034, 5035, 5036, 5038, 5039, 5040, 5042, 5544]
  }, 27592: {
    name: "Saltwater Boilie",
    description: "A hard, round ball incorporating multiple highly effective baits─designed by fishers, for fishers. All-purpose bait for ocean fishing, dunefishing, and cloudfishing.\n\n\n\nHas no effect on certain fish.",
    iconURL: "/i/027000/027043_hr1.png",
    level: 15,
    aquisition: ["grd", "arm", "a&m", "ect", "evr", "ind", "jnk", "m&m", "lim", "tsm", "uld"],
    fishes: [4869, 4870, 4871, 4872, 4874, 4875, 4876, 4877, 4878, 4879, 4881, 4882, 4883, 4884, 4886, 4890, 4891, 4892, 4894, 4895, 4896, 4897, 4898, 4899, 4900, 4901, 4902, 4908, 4909, 4910, 4914, 5032, 5034, 5035, 5036, 5040, 5460, 5461, 5462, 5466]
  }, 29715: {
    name: "Krill",
    description: "A species of krill commonly found in the Rhotano Sea. Effective for luring medium-sized fish.\n\n\n\n※Only for use in Ocean Fishing.",
    iconURL: "/i/027000/027023_hr1.png",
    level: 1,
    aquisition: ["mof", "mte"],
    fishes: [4954]
  }, 29717: {
    name: "Versatile Lure",
    description: "A lure developed by the Fishermen's Guild specifically for novice anglers. Can be used on land or at sea.",
    iconURL: "/i/027000/027051_hr1.png",
    level: 1,
    aquisition: ["mof", "mte"],
    fishes: [4776, 4869, 4870, 4871, 4872, 4873, 4874, 4875, 4876, 4877, 4878, 4879, 4880, 4881, 4882, 4883, 4884, 4886, 4887, 4889, 4890, 4891, 4892, 4893, 4894, 4895, 4896, 4897, 4898, 4899, 4900, 4901, 4902, 4905, 4907, 4908, 4909, 4910, 4911, 4913, 4914, 4925, 4926, 4927, 4928, 4929, 4930, 4931, 4932, 4933, 4934, 4935, 4936, 4937, 4938, 4939, 4940, 4941, 4942, 4943, 4944, 4945, 4946, 4947, 4948, 4949, 4950, 4951, 4953, 4954, 4955, 4956, 4957, 4958, 4959, 4960, 4961, 4962, 4966, 4967, 4968, 4969, 4970, 4971, 4972, 4973, 4974, 4975, 4976, 4977, 4978, 4979, 4980, 4981, 4982, 4983, 4984, 4985, 4986, 4987, 4988, 4989, 4990, 4991, 4993, 4994, 4995, 4996, 4997, 4998, 4999, 5001, 5002, 5003, 5006, 5007, 5008, 5028, 5032, 5033, 5034, 5035, 5036, 5038, 5039, 5040, 5042, 5460, 5461, 5462, 5466, 5544]
  }
};
