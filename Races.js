var Races = {}

// add genus to Races
_.extend(Races, {
  genus: {
    dwarf: {
      name: "Dwarf",
      mods: {
        "con" : 2
      },
      size: "Medium",


    }
  }
})

// add species to Races
_.extend(Races, {
  species: {
    hillDwarf: {
      name: "Hill Dwarf",
      mods: Races.genus.dwarf.mods
    },
    mountainDwarf: {
      name: "Mountain Dwarf",
      mods: _.extend(Races.genus.dwarf.mods, {"str" : 2})
    },
    half_elf: {
      name: "Half Elf",
      mods: {"cha" : 2},
      onCreate: function() {
        for (var i = 0; i < 2; i++) {
          var modKeys = Object.keys(this.mods);
          var modKey = Abilities.randomMod(modKeys);
          this.mods[modKey] = 1;
        }
      }
    }
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

Races.generateAge = function() {

}
