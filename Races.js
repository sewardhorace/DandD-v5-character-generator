//_.extend() not fitting our purpose!!

var Races = {}

// add genus to Races
_.extend(Races, {
  genus: {
    dwarf: {
      name: "Dwarf",
      characterNames: Names.dwarf,
      mods: {
        "con" : 2
      },
      age: {
        baseAge: 40,
        ageMod: {
          numberDice: 3,
          numberSides: 14
        }
      }

    },
    elf: {
      name: "Elf",
      characterNames: Names.elf,
      mods: {
        "dex" : 2
      },
      age: {
        baseAge: 110,
        ageMod: {
          numberDice: 4,
          numberSides: 15
        }
      }
    },
    halfling: {
      name: "Halfling",
      characterNames: Names.halfling,
      mods: {
        "dex" : 2
      },
      age: {
        baseAge: 20,
        ageMod: {
          numberDice: 2,
          numberSides: 12
        }
      },
      build: {
        baseHeight: 31,
        heightMod: {
          numberDice: 2,
          numberSides: 4
        },
        baseWeight: 35,
        weightMod: {
          numberDice: 1,
          numberSides: 1
        }
      },
      size: "Small"
    }

  }
})

// add species to Races
_.extend(Races, {
  species: {
    //dwarves
    hillDwarf: {
      name: "Hill Dwarf",
      characterNames: Races.genus.dwarf.characterNames,
      mods: _.extend(Races.genus.dwarf.mods, {"wis" : 1}),
      age: Races.genus.dwarf.age,
      build: {
        baseHeight: 44,
        heightMod: {
          numberDice: 2,
          numberSides: 4
        },
        baseWeight: 115,
        weightMod: {
          numberDice: 2,
          numberSides: 6
        }
      }
    },
    mountainDwarf: {
      name: "Mountain Dwarf",
      characterNames: Races.genus.dwarf.characterNames,
      mods: _.extend(Races.genus.dwarf.mods, {"str" : 2}),
      age: Races.genus.dwarf.age,
      build: {
        baseHeight: 48,
        heightMod: {
          numberDice: 2,
          numberSides: 4
        },
        baseWeight: 130,
        weightMod: {
          numberDice: 2,
          numberSides: 6
        }
      }
    },
    // //elves
    highElf: {
      name: "High Elf",
      characterNames: Races.genus.elf.characterNames,
      mods: _.extend(Races.genus.elf.mods, {"int" : 1}),
      age: Races.genus.elf.age,
      build: {
        baseHeight: 54,
        heightMod: {
          numberDice: 2,
          numberSides: 10
        },
        baseWeight: 90,
        weightMod: {
          numberDice: 1,
          numberSides: 4
        }
      }
    },
    woodElf: {
      name: "Wood Elf",
      characterNames: Races.genus.elf.characterNames,
      mods: _.extend(Races.genus.elf.mods, {"wis" : 1}),
      age: Races.genus.elf.age,
      build: {
        baseHeight: 54,
        heightMod: {
          numberDice: 2,
          numberSides: 10
        },
        baseWeight: 100,
        weightMod: {
          numberDice: 1,
          numberSides: 4
        }
      }
    },
    darkElf: {
      name: "Drow",
      characterNames: Races.genus.elf.characterNames,
      mods: _.extend(Races.genus.elf.mods, {"cha" : 1}),
      age: Races.genus.elf.age,
      build: {
        baseHeight: 53,
        heightMod: {
          numberDice: 2,
          numberSides: 6
        },
        baseWeight: 75,
        weightMod: {
          numberDice: 1,
          numberSides: 6
        }
      }
    },

    //halflings
    

    // half_elf: {
    //   name: "Half Elf",
    //   mods: {"cha" : 2},
    //   onCreate: function() {
    //     for (var i = 0; i < 2; i++) {
    //       var modKeys = Object.keys(this.mods);
    //       var modKey = Abilities.randomMod(modKeys);
    //       this.mods[modKey] = 1;
    //     }
    //   }
    // }
  }
})

Races.randomRace = function() {
  var r = Object.keys(Races.species);
  var idx = Math.floor(Math.random() * r.length);
  var race = Utilities.deepClone(Races.species[r[idx]]);
  if (race.onCreate) {
    race.onCreate();
  }
  return race;
}
