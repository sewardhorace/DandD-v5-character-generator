function Character() {
  this.exp = 0;
  this.level = 1;

  this.proficiencyBonus = 2;
  this.abilities = this.generateAbilities();

  this.race = this.generateRace(), //race modifies ability scores;
  this.klass = this.generateClass();
  this.background = this.generateBackground();

  //need race
  this.name = this.generateName();
  this.size = 0;
  this.age = 0;
  this.speed = 30;
  this.height = "";
  this.weight = "";

  //need class
  this.hp = 1;
  this.savingThrows = [];
  this.spells = [];

  //need background
  this.personality_traits = [];
  this.ideals = [];
  this.bonds = [];
  this.flaws = [];

  //need background & class
  this.equipment = []

  //background, race, & class
  this.skills = [];
  this.proficiencies = [];
  this.features_traits =[];

  //need skills
  this.passive_wisdom = 10;

  //need equipment
  this.attack_and_spells = [];

}

Character.prototype = {
  generateName: function() {
    // dependant on race
  },

  generateClass: function() {

  },

  generateRace: function() {
    var race = Races.randomRace();
    for (mod in race.mods) {
      this.abilities[mod].score += race.mods[mod];
    }
    return race;
  },

  generateBackground: function() {

  },

  generateAbilities: function() {
    return Abilities.rollAbilities();
  }
}
