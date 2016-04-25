var Weapons = {
  simple: {
    melee: {
      club: {
        name: "Club",
        damage: "1d4",
        properties: ["light"]
      },
      dagger: {
        name: "Dagger",
        damage: "1d4",
        properties: ["finesse", "light", "thrown"]
      },
      greatclub: {
        name: "Greatclub",
        damage: "1d8",
        properties: ["two-handed"]
      },
      handaxe: {
        name: "Handaxe",
        damage: "1d6",
        properties: ["light", "thrown"]
      },
      javelin: {
        name: "Javelin",
        damage: "1d6",
        properties: ["thrown"]
      },
      lightHammer: {
        name: "Light hammer",
        damage: "1d4",
        properties: ["light", "thrown"]
      },
      mace: {
        name: "Mace",
        damage: "1d6",
      },
      quarterstaff: {
        name: "Quarterstaff",
        damage: "1d6",
        properties: ["versatile"]
      },
      sickle: {
        name: "Sickle",
        damage: "1d4",
        properties: ["light"]
      },
      spear: {
        name: "Spear",
        damage: "1d6",
        properties: ["thrown", "versatile"]
      }
    },
    ranged: {
      lightCrossbow: {
        name: "Light crossbow",
        damage: "1d8",
        properties: ["loading", "two-handed"],
        ammunition: Adventuring_gear.ammunition.crossbow_bolts
      },
      dart: {
        name: "Dart",
        damage: "1d4",
        properties: ["finesse", "thrown"]
      },
      shortbow: {
        name: "Shortbow",
        damage: "1d6",
        properties: ["two-handed"],
        ammunition: Adventuring_gear.ammunition.arrows
      },
      sling: {
        name: "Sling",
        damage: "1d4",
        ammunition: Adventuring_gear.ammunition.sling_bullets
      }
    }
  },
  martial: {
    melee: {
      battleaxe: {
        name: "Battleaxe",
        damage: "1d8",
        properties: ["versatile"]
      },
      flail: {
        name: "Flail",
        damage: "1d8",
      },
      glaive: {
        name: "Glaive",
        damage: "1d10",
        properties: ["heavy", "reach", "two-handed"]
      },
      greataxe: {
        name: "Greataxe",
        damage: "1d12",
        properties: ["heavy", "two-handed"]
      },
      greatsword: {
        name: "Greatsword",
        damage: "2d6",
        properties: ["heavy", "two-handed"]
      },
      halberd: {
        name: "Halberd",
        damage: "1d10",
        properties: ["heavy","reach","two-handed"]
      },
      lance: {
        name: "Lance",
        damage: "1d12",
        properties: ["reach","special"]
      },
      longsword: {
        name: "Longsword",
        damage: "1d8",
        properties: ["versatile"]
      },
      maul: {
        name: "Maul",
        damage: "2d6",
        properties: ["heavy", "two-handed"]
      },
      morningstar: {
        name: "Morningstar",
        damage: "1d8"
      },
      pike: {
        name: "Pike",
        damage: "1d10",
        properties: ["heavy", "reach", "two-handed"]
      },
      rapier: {
        name: "Rapier",
        damage: "1d8",
        properties: ["finesse"]
      },
      scimitar: {
        name: "Scimitar",
        damage: "1d6",
        properties: ["finesse", "light"]
      },
      shortsword: {
        name: "Shortsword",
        damage: "1d6",
        properties: ["finesse", "light"]
      },
      trident: {
        name: "Trident",
        damage: "1d6",
        properties: ["thrown", "versatile"]
      },
      warPick: {
        name: "War pick",
        damage: "1d8"
      },
      warhammer: {
        name: "Warhammer",
        damage: "1d8",
        properties: ["versatile"]
      },
      whip: {
        name: "Whip",
        damage: "1d4",
        properties: ["finesse", "reach"]
      }
    },
    ranged: {
      blowgun: {
        name: "Blowgun",
        damage: "1",
        properties: ["loading"],
        ammunition: Adventuring_gear.ammunition.blowgun_needles
      },
      handCrossbow: {
        name: "Hand crossbow",
        damage: "1d6",
        properties: ["light", "loading"],
        ammunition: Adventuring_gear.ammunition.crossbow_bolts
      },
      heavyCrossbow: {
        name: "Heavy crossbow",
        damage: "1d10",
        properties: ["heavy", "loading", "two-handed"],
        ammunition: Adventuring_gear.ammunition.crossbow_bolts
      },
      longbow: {
        name: "Longbow",
        damage: "1d8",
        properties: ["heavy", "two-handed"],
        ammunition: Adventuring_gear.ammunition.arrows
      },
      net: {
        name: "Net",
        properties: ["special", "thrown"]
      }
    }
  }
};
