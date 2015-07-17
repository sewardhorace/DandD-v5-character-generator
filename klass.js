
//dictionaries represent each class
var Bard = {
  "name" : "Bard",
  "base_hp"  : 8,
  "proficiencies" : {
    "armor" : ["light_armor"],
    "weapons" : ["simple_weapons", "hand_crossbows", "longswords", "rapiers", "shortswords"],
    "tools" : [], // 3 musical instruments,
  }
  "skills" : [], //any 3
  "equipment" : []// lots of choices
  "features" : ["spellcasting", "Bardic Inspiration (d6)"],
  "spells_known" : BardSpells;
};

var BardSpells = [
  [
    "Blade Ward",
    "Dancing Lights",
    "Friends",
    "Light",
    "Mage Hand",
    "Mending",
    "Message",
    "Minor Illusion",
    "Prestidigitation",
    "True Strike",
    "Vicious Mockery"
  ],
  [
    "Animal Friendship",
    "Bane",
    "Charm Person",
    "Comprehend Languages",
    "Cure Wounds",
    "Detect Magic",
    "Disguise Self",
    "Dissonant Whispers",
    "Faerie Fire",
    "Feather Fall",
    "Healing Word",
    "Heroism",
    "Identify",
    "Illusiory Script",
    "Longstrider",
    "Silent Image",
    "Sleep",
    "Speak with Animals",
    "Tasha's Hideous Laughter",
    "Thunderwave",
    "Unseen Servant"
  ]
];
