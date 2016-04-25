// score
// modifier
// name

var Abilities = {
  all: {
    str : {
      name: "Strength",
      score: 0,
      mod: 0
    },
    dex : {
      name: "Dexterity",
      score: 0,
      mod: 0
    },
    con : {
      name: "Constitution",
      score: 0,
      mod: 0
    },
    int : {
      name: "Intelligence",
      score: 0,
      mod: 0
    },
    wis : {
      name: "Wisdom",
      score: 0,
      mod: 0
    },
    cha : {
      name: "Charisma"
    }
  },

  //returns an array of six ability scores
  generateAbilities: function(){
    var abilities = {};
    var keys = Object.keys(Abilities.all);
    for (idx in keys) {
      var key = keys[idx];
      abilities[key] = {};
      abilities[key].name = Abilities.all[key].name;
      abilities[key].score = Abilities.generateSingleAbility();
    }
    return abilities;
  },

  //returns an array of ability modifiers given an array of ability scores [int]
  getModifiers: function(abilities){
    var modifiers = [];
    for (var i = 0; i < 6; i++){
      modifiers.push((Math.floor(abilities[i]/2))-5);
    }
    return modifiers;
  },

  randomAbility: function(scores) {
    if (typeof(scores) != "undefined" && scores.length = Object.keys(Abilities.all).length) {
      while (true) {
        var idx = Math.floor(Math.random() * keys.length);
        if (modKeys.indexOf(key) == -1) {
          return key;
        }
      }
    }
  }

};
