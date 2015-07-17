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

    }
  }
})

// add species to Races
_.extend(Races, {
  species: {
    hillDwarf: {
      name: "Hill Dwarf",
      characterNames: Races.genus.dwarf.characterNames,
      mods: Races.genus.dwarf.mods,
      age: Races.genus.dwarf.age,
      stature: {
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
      stature: {
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
