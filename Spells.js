var SPELL_LISTS = {
  bard: 0,
  cleric: 1,
  druid: 2,
  paladin: 3,
  ranger: 4,
  sorcerer: 5,
  warlock: 6,
  wizard: 7,
  warlock_archfey: 8,
  warlock_fiend: 9,
  warlock_great_old_one: 10,
  cleric_knowledge_domain: 11,
  cleric_life_domain: 12,
  cleric_light_domain: 13,
  cleric_nature_domain: 14,
  cleric_tempest_domain: 15,
  cleric_trickery_domain: 16,
  cleric_war_domain: 17,
  ritual: 18
};

var Spells = {
  acidSplash: {
    name: "Acid Splash",
    level: 0,
    components: ['v', 's'],
    lists: [SPELL_LISTS.sorcerer, SPELL_LISTS.wizard],
  },
  alarm: {
    name: "Alarm",
    level: 1,
    components: ['v', 's', 'm'],
    materials: ["a tiny bell", "a piece of fine silver wire"],
    lists: [SPELL_LISTS.ranger, SPELL_LISTS.wizard, SPELL_LISTS.ritual],
  },
  animalFriendship: {
    name: "Animal Friendship",
    level: 1,
    components: ['v', 's', 'm'],
    materials: ["a morsel of food"],
    lists: [SPELL_LISTS.cleric_nature_domain, SPELL_LISTS.bard, SPELL_LISTS.druid, SPELL_LISTS.ranger],
  },
  armorOfAgathys: {
    name: "Armor of Agathys",
    level: 1,
    components: ['v', 's', 'm'],
    materials: ["a cup of water"],
    lists: [SPELL_LISTS.warlock],
  },
  armsOfHadar: {
    name: "Arms of Hadar",
    level: 1,
    components: ['v','s'],
    lists: [SPELL_LISTS.warlock],
  },
  bane: {
    name: "Bane",
    level: 1,
    components: ['v','s','m'],
    materials: ["a drop of blood"],
    lists: [SPELL_LISTS.bard, SPELL_LISTS.cleric]
  },
  bladeWard: {
    name: "Blade Ward",
    level: 0,
    components: ['v','s'],
    lists: [SPELL_LISTS.bard, SPELL_LISTS.sorcerer, SPELL_LISTS.warlock, SPELL_LISTS.wizard]
  },
  bless: {
    name: "Bless",
    level: 1,
    components: ['v','s','m'],
    materials: ["a sprinkling of holy water"],
    lists: [SPELL_LISTS.cleric, SPELL_LISTS.paladin, SPELL_LISTS.cleric_life_domain]
  },
  burningHands: {
    name: "Burning Hands",
    level: 1,
    components: ['v','s'],
    lists: [SPELL_LISTS.cleric_light_domain, SPELL_LISTS.warlock_fiend, SPELL_LISTS.sorcerer, SPELL_LISTS.wizard]
  },
  charmPerson: {
    name: "Charm Person",
    level: 1,
    components: ['v','s'],
    lists: [SPELL_LISTS.bard, SPELL_LISTS.druid, SPELL_LISTS.sorcerer, SPELL_LISTS.warlock, SPELL_LISTS.wizard, SPELL_LISTS.cleric_trickery_domain]
  },
  chillTouch: {
    name: "Chill Touch",
    level: 0,
    components: ['v','s'],
    damage: "1d8",
    lists: [SPELL_LISTS.sorcerer, SPELL_LISTS.warlock, SPELL_LISTS.wizard]
  },
  chromaticOrb: {
    name: "Chromatic Orb",
    level: 1,
    components: ['v','s','m'],
    materials: ["a diamond worth at least 50 gp"],
    damage: "3d8",
    lists: [SPELL_LISTS.sorcerer, SPELL_LISTS.wizard]
  },
  colorSpray: {
    name: "Color Spray",
    level: 1,
    components: ['v','s','m'],
    materials: ["a pinch of powder or sand that is colored red, yellow, and blue"],
    lists: [SPELL_LISTS.sorcerer, SPELL_LISTS.wizard]
  },
  command: {
    name: "Command",
    level: 1,
    components: ['v'],
    lists: [SPELL_LISTS.cleric, SPELL_LISTS.paladin, SPELL_LISTS.cleric_knowledge_domain, SPELL_LISTS.warlock_fiend]
  },
  compelledDuel: {
    name: "Compelled Duel",
    level: 1,
    components: ['v'],
    lists: [SPELL_LISTS.paladin]
  },
  comprehendLanguages: {
    name: "Comprehend Languages",
    level: 1,
    components: ['v','s','m'],
    materials: ["a pinch of soot and salt"],
    lists: [SPELL_LISTS.bard, SPELL_LISTS.sorcerer, SPELL_LISTS.warlock, SPELL_LISTS.wizard, SPELL_LISTS.ritual]
  },
  createOrDestroyWater: {
    name: "Create or Destroy Water",
    level: 1,
    components: ['v','s','m'],
    materials: ["a drop of water","a few grains of sand"],
    lists: [SPELL_LISTS.cleric, SPELL_LISTS.druid]
  },
  cureWounds: {
    name: "Cure Wounds",
    level: 1,
    components: ['v','s'],
    lists: [SPELL_LISTS.bard, SPELL_LISTS.cleric, SPELL_LISTS.druid, SPELL_LISTS.paladin, SPELL_LISTS.ranger, SPELL_LISTS.cleric_life_domain]
  },
  dancingLights: {
    name: "Dancing Lights",
    level: 0,
    components: ['v','s','m'],
    materials: ["a bit of phosphorus or wychwood, or a glowworm"],
    lists: [SPELL_LISTS.bard, SPELL_LISTS.sorcerer, SPELL_LISTS.wizard]
  },
  detectEvilAndGood: {
    name: "Detect Evil and Good",
    level: 1,
    components: ['v','s'],
    lists: [SPELL_LISTS.cleric, SPELL_LISTS.paladin]
  },
  detectMagic: {
    name: "Detect Magic",
    level: 1,
    components: ['v','s'],
    lists: [SPELL_LISTS.bard, SPELL_LISTS.cleric, SPELL_LISTS.druid, SPELL_LISTS.paladin, SPELL_LISTS.ranger, SPELL_LISTS.sorcerer, SPELL_LISTS.wizard, SPELL_LISTS.ritual]
  },
  detectPoisonAndDisease: {
    name: "Detect Poison and Disease",
    level: 1,
    components: ['v','s','m'],
    materials: ["a yew leaf"],
    lists: [SPELL_LISTS.cleric, SPELL_LISTS.druid, SPELL_LISTS.paladin, SPELL_LISTS.ranger, SPELL_LISTS.ritual]
  },
  disguiseSelf: {
    name: "Disguise Self",
    level: 1,
    components: ['v','s'],
    lists: [SPELL_LISTS.bard, SPELL_LISTS.sorcerer, SPELL_LISTS.wizard, SPELL_LISTS.cleric_trickery_domain]
  },
  dissonantWhispers: {
    name: "Dissonant Whispers",
    level: 1,
    components: ['v'],
    lists: [SPELL_LISTS.bard, SPELL_LISTS.warlock_great_old_one]
  },
  divineFavor: {
    name: "Divine Favor",
    level: 1,
    components: ['v','s'],
    lists: [SPELL_LISTS.paladin, SPELL_LISTS.cleric_war_domain]
  },
  druidcraft: {
    name: "Druidcraft",
    level: 0,
    components: ['v','s'],
    lists: [SPELL_LISTS.druid]
  },
  eldritchBlast: {
    name: "Eldritch Blast",
    level: 0,
    components: ['v','s'],
    damage: "1d10",
    lists: [SPELL_LISTS.warlock]
  },
  ensnaringStrike: {
    name: "Ensnaring Strike",
    level: 1,
    components: ['v'],
    lists: [SPELL_LISTS.ranger]
  },
  entangle: {
    name: "Entangle",
    level: 1,
    components: ['v','s'],
    lists: [SPELL_LISTS.druid]
  },
  expeditiousRetreat: {
    name: "Expeditious Retreat",
    level: 1,
    components: ['v','s'],
    lists: [SPELL_LISTS.sorcerer, SPELL_LISTS.warlock, SPELL_LISTS.wizard]
  },
  faerieFire: {
    name: "Faerie Fire",
    level: 1,
    components: ['v'],
    lists: [SPELL_LISTS.bard, SPELL_LISTS.druid, SPELL_LISTS.cleric_light_domain, SPELL_LISTS.warlock_archfey]
  },
  falseLife: {
    name: "False Life",
    level: 1,
    components: ['v','s','m'],
    materials: ["a small amount of alcohol or distilled spirits"],
    lists: [SPELL_LISTS.sorcerer, SPELL_LISTS.wizard]
  },
  featherFall: {
    name: "Feather Fall",
    level: 1,
    components: ['v','m'],
    materials: ["a small feather or piece of down"],
    lists: [SPELL_LISTS.bard, SPELL_LISTS.sorcerer, SPELL_LISTS.wizard]
  },
  findFamiliar: {
    name: "Find Famililar",
    level: 1,
    components: ['v','s','m'],
    materials: ["10 gp worth of charcoal, incense, and herbs that must be consumed by fire in a brass brazier"],
    lists: [SPELL_LISTS.wizard, SPELL_LISTS.ritual]
  },
  fireBolt: {
    name: "Fire Bolt",
    level: 0,
    components: ['v','s'],
    damage: "1d10",
    lists: [SPELL_LISTS.sorcerer, SPELL_LISTS.wizard]
  },
  fogCloud: {
    name: "Fog Cloud",
    level: 1,
    components: ['v','s'],
    lists: [SPELL_LISTS.druid, SPELL_LISTS.cleric_tempest_domain, SPELL_LISTS.ranger, SPELL_LISTS.sorcerer, SPELL_LISTS.wizard]
  },
  friends: {
    name: "Friends",
    level: 0,
    components: ['s','m'],
    materials: ["a small amount of makeup"],
    lists: [SPELL_LISTS.bard, SPELL_LISTS.sorcerer, SPELL_LISTS.warlock, SPELL_LISTS.wizard]
  },
  goodberry: {
    name: "Goodberry",
    level: 1,
    components: ['v','s','m'],
    materials: ["a sprig of mistletoe"],
    lists: [SPELL_LISTS.druid, SPELL_LISTS.ranger]
  },
  grease: {
    name: "Grease",
    level: 1,
    components: ['v','s','m'],
    materials: ["a bit of pork rind or butter"],
    lists: [SPELL_LISTS.wizard]
  },
  guidance: {
    name: "Name",
    level: 0,
    components: ['v','s'],
    lists: [SPELL_LISTS.cleric, SPELL_LISTS.druid]
  },
  guidingBolt: {
    name: "Guiding Bolt",
    level: 1,
    components: ['v','s'],
    damage: "4d6",
    lists: [SPELL_LISTS.cleric]
  },
  hailOfThorns: {
    name: "Hail of Thorns",
    level: 1,
    components: ['v'],
    lists: [SPELL_LISTS.ranger]
  },
  healingWord: {
    name: "Healing Word",
    level: 1,
    components: ['v'],
    lists: [SPELL_LISTS.bard, SPELL_LISTS.cleric, SPELL_LISTS.druid]
  },
  hellishRebuke: {
    name: "Hellish Rebuke",
    level: 1,
    components: ['v','s'],
    lists: [SPELL_LISTS.warlock]
  },
  heroism: {
    name: "Heroism",
    level: 1,
    components: ['v','s'],
    lists: [SPELL_LISTS.bard, SPELL_LISTS.paladin]
  },
  hex: {
    name: "Hex",
    level: 1,
    components: ['v','s','m'],
    materials: ["a petrified eye of newt"],
    lists: [SPELL_LISTS.warlock]
  },
  huntersMark: {
    name: "Hunter's Mark",
    level: 1,
    components: ['v'],
    lists: [SPELL_LISTS.ranger]
  },
  identify: {
    name: "Identify",
    level: 1,
    components: ['v','s','m'],
    materials: ["a pearl worth at least 100 gp", "an owl feather"],
    lists: [SPELL_LISTS.bard, SPELL_LISTS.wizard, SPELL_LISTS.ritual, SPELL_LISTS.cleric_knowledge_domain]
  },
  illusoryScript: {
    name: "Illusory Script",
    level: 1,
    components: ['s','m'],
    materials: ["a lead-based ink worth at least 10 gp"],
    lists: [SPELL_LISTS.bard, SPELL_LISTS.ritual, SPELL_LISTS.warlock, SPELL_LISTS.wizard]
  },
  inflictWounds: {
    name: "Inflict Wounds",
    level: 1,
    components: ['v','s'],
    damage: "3d10",
    lists: [SPELL_LISTS.cleric]
  },
  jump: {
    name: "Jump",
    level: 1,
    components: ['v','s','m'],
    materials: ["a grasshopper's hind leg"],
    lists: [SPELL_LISTS.druid, SPELL_LISTS.ranger, SPELL_LISTS.sorcerer, SPELL_LISTS.wizard]
  },
  light: {
    name: "Light",
    level: 0,
    components: ['v','m'],
    materials: ["a firefly or phosphorescent moss"],
    lists: [SPELL_LISTS.bard, SPELL_LISTS.cleric, SPELL_LISTS.sorcerer, SPELL_LISTS.wizard]
  },
  longstrider: {
    name: "Longstrider",
    level: 1,
    components: ['v','s','m'],
    materials: ["a pinch of dirt"],
    lists: [SPELL_LISTS.bard, SPELL_LISTS.druid, SPELL_LISTS.ranger, SPELL_LISTS.wizard]
  },
  mageArmor: {
    name: "Mage Armor",
    level: 1,
    components: ['v','s','m'],
    materials: ["a piece of cured leather"],
    lists: [SPELL_LISTS.sorcerer, SPELL_LISTS.wizard]
  },
  mageHand: {
    name: "Mage Hand",
    level: 0,
    components: ['v','s'],
    lists: [SPELL_LISTS.bard, SPELL_LISTS.sorcerer, SPELL_LISTS.warlock, SPELL_LISTS.wizard]
  },
  magicMissile: {
    name: "Magic Missile",
    level: 1,
    components: ['v','s'],
    damage: "1d4+1",
    lists: [SPELL_LISTS.sorcerer, SPELL_LISTS.wizard]
  },
  mending: {
    name: "Mending",
    level: 0,
    components: ['v','s','m'],
    materials: ["two lodestones"],
    lists: [SPELL_LISTS.bard, SPELL_LISTS.cleric, SPELL_LISTS.druid, SPELL_LISTS.sorcerer, SPELL_LISTS.wizard]
  },
  message: {
    name: "Message",
    level: 0,
    components: ['v','s','m'],
    materials: ["a short piece of copper wire"],
    lists: [SPELL_LISTS.bard, SPELL_LISTS.sorcerer, SPELL_LISTS.wizard]
  },
  minorIllusion: {
    name: "Minor Illusion",
    level: 0,
    components: ['s','m'],
    materials: ["a bit of fleece"],
    lists: [SPELL_LISTS.bard, SPELL_LISTS.sorcerer, SPELL_LISTS.warlock, SPELL_LISTS.wizard]
  },
  poisonSpray: {
    name: "Poison Spray",
    level: 0,
    components: ['v','s'],
    lists: [SPELL_LISTS.druid, SPELL_LISTS.sorcerer,SPELL_LISTS.warlock, SPELL_LISTS.wizard]
  },
  prestidigitation: {
    name: "Prestidigitation",
    level: 0,
    components: ['v','s'],
    lists: [SPELL_LISTS.bard, SPELL_LISTS.sorcerer, SPELL_LISTS.warlock, SPELL_LISTS.wizard]
  },
  produceFlame: {
    name: "Produce Flame",
    level: 0,
    components: ['v','s'],
    damage: "1d8",
    lists: [SPELL_LISTS.druid]
  },
  protectionFromEvilAndGood: {
    name: "Protection from Evil and Good",
    level: 1,
    components: ['v','s','m'],
    materials: ["holy water or powdered silver and iron"],
    lists: [SPELL_LISTS.cleric, SPELL_LISTS.paladin, SPELL_LISTS.warlock, SPELL_LISTS.wizard]
  },
  purifyFoodAndDrink: {
    name: "Purify Food and Drink",
    level: 1,
    components: ['v','s'],
    lists: [SPELL_LISTS.cleric, SPELL_LISTS.druid, SPELL_LISTS.ritual, SPELL_LISTS.paladin]
  },
  rayOfFrost: {
    name: "Ray of Frost",
    level: 0,
    components: ['v','s'],
    damage: "1d8",
    lists: [SPELL_LISTS.sorcerer, SPELL_LISTS.wizard]
  },
  rayOfSickness: {
    name: "Ray of Sickness",
    level: 1,
    components: ['v','s'],
    damage: "2d8",
    lists: [SPELL_LISTS.sorcerer, SPELL_LISTS.wizard]
  },
  resistance: {
    name: "Resistance",
    level: 0,
    components: ['v','s','m'],
    materials: ["a miniature cloak"],
    lists: [SPELL_LISTS.cleric, SPELL_LISTS.druid]
  },
  sacredFlame: {
    name: "Sacred Flame",
    level: 0,
    components: ['v','s'],
    damage: "1d8",
    lists: [SPELL_LISTS.cleric]
  },
  sanctuary: {
    name: "Sanctuary",
    level: 1,
    components: ['v','s','m'],
    materials: ["a small silver mirror"],
    lists: [SPELL_LISTS.cleric]
  },
  searingSmite: {
    name: "Searing Smite",
    level: 1,
    components: ['v'],
    lists: [SPELL_LISTS.paladin]
  },
  shield: {
    name: "Shield",
    level: 1,
    components: ['v','s'],
    lists: [SPELL_LISTS.sorcerer, SPELL_LISTS.wizard]
  },
  shieldOfFaith: {
    name: "Shield of Faith",
    level: 1,
    components: ['v','s','m'],
    materials: ["a small parchment with a bit of holy text written on it"],
    lists: [SPELL_LISTS.cleric, SPELL_LISTS.paladin, SPELL_LISTS.cleric_war_domain]
  },
  shillelagh: {
    name: "Shillelagh",
    level: 0,
    components: ['v','s','m'],
    materials: ["mistletoe","a shamrock leaf", "a club or quarterstaff"],
    lists: [SPELL_LISTS.druid]
  },
  shockingGrasp: {
    name: "Shocking Grasp",
    level: 0,
    components: ['v','s'],
    damage: "1d8",
    lists: [SPELL_LISTS.sorcerer, SPELL_LISTS.wizard]
  },
  silentImage: {
    name: "Silent Image",
    level: 1,
    components: ['v','s','m'],
    materials: ["a bit of fleece"],
    lists: [SPELL_LISTS.bard, SPELL_LISTS.sorcerer, SPELL_LISTS.wizard]
  },
  sleep: {
    name: "Sleep",
    level: 1,
    components: ['v','s','m'],
    materials: ["a pinch of fine sand, rose petals, or a cricket"],
    lists: [SPELL_LISTS.bard, SPELL_LISTS.sorcerer, SPELL_LISTS.wizard, SPELL_LISTS.warlock_archfey]
  },
  spareTheDying: {
    name: "Spare the Dying",
    level: 0,
    components: ['v','s'],
    lists: [SPELL_LISTS.cleric]
  },
  speakWithAnimals: {
    name: "Speak with Animals",
    level: 1,
    components: ['v','s'],
    lists: [SPELL_LISTS.bard, SPELL_LISTS.druid, SPELL_LISTS.ranger, SPELL_LISTS.ritual,SPELL_LISTS.cleric_nature_domain]
  },
  tashasHideousLaughter: {
    name: "Tasha's Hideous Laughter",
    level: 1,
    components: ['v','s','m'],
    materials: ["tiny tarts", "a feather"],
    lists: [SPELL_LISTS.bard, SPELL_LISTS.wizard, SPELL_LISTS.warlock_great_old_one]
  },
  tensersFloatingDisk: {
    name: "Tenser's Floating Disk",
    level: 1,
    components: ['v','s','m'],
    materials: ["a drop of mercury"],
    lists: [SPELL_LISTS.ritual, SPELL_LISTS.wizard]
  },
  thaumaturgy: {
    name: "Thaumaturgy",
    level: 0,
    components: ['v'],
    lists: [SPELL_LISTS.cleric]
  },
  thornWhip: {
    name: "Thorn Whip",
    level: 0,
    components: ['v','s','m'],
    materials: ["the stem of a plant with thorns"],
    damage: "1d6",
    lists: [SPELL_LISTS.druid]
  },
  thunderousSmite: {
    name: "Thunderous Smite",
    level: 1,
    components: ['v'],
    lists: [SPELL_LISTS.paladin]
  },
  thunderwave: {
    name: "Thunderwave",
    level: 1,
    components: ['v','s'],
    lists: [SPELL_LISTS.bard, SPELL_LISTS.druid, SPELL_LISTS.sorcerer, SPELL_LISTS.wizard, SPELL_LISTS.cleric_tempest_domain]
  },
  trueStrike: {
    name: "True Strike",
    level: 0,
    components: ['s'],
    lists: [SPELL_LISTS.bard, SPELL_LISTS.sorcerer, SPELL_LISTS.warlock, SPELL_LISTS.wizard]
  },
  unseenServant: {
    name: "Unseen Servant",
    level: 1,
    components: ['v','s','m'],
    materials: ["a piece of string and a bit of wood"],
    lists: [SPELL_LISTS.bard, SPELL_LISTS.warlock, SPELL_LISTS.wizard, SPELL_LISTS.ritual]
  },
  viciousMockery: {
     name: "Vicious Mockery",
     level: 0,
     components: ['v'],
     lists: [SPELL_LISTS.bard]
  },
  witchBolt: {
    name: "Witch Bolt",
    level: 1,
    components: ['v','s','m'],
    materials: ["a twig from a tree that has been struck by lightning"],
    damage: "1d12",
    lists: [SPELL_LISTS.sorcerer, SPELL_LISTS.warlock, SPELL_LISTS.wizard]
  },
  wrathfulSmite: {
    name: "Wrathful Smite",
    level: 1,
    components: ['v'],
    lists: [SPELL_LISTS.paladin]
  }
  //function to generate class spell lists??
};
