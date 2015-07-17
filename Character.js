function Character() {
  this.exp = 0;
  this.level = 1;

  this.proficiencyBonus = 2;
  this.abilities = this.generateAbilities();
  this.gender = this.generateGender();

  this.race = this.generateRace(), //race modifies ability scores;
  this.klass = this.generateClass();
  this.background = this.generateBackground();

  //need race
  this.name = this.generateName();
  this.age = this.generateAge();
  this.stature = this.generateStature();
  this.size = this.generateSize();
  this.speed = 30;

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

  //need equipment and proficiencies
  this.attack_and_spells = [];
  this.ac = 10;

}

Character.prototype = {

  generateAbilities: function() {
    return Abilities.rollAbilities();
  },

  generateGender: function() {
    var genders = ["Male", "Female"];
    return Utilities.getRandom(genders);
  },

  generateRace: function() {
    var race = Races.randomRace();
    for (mod in race.mods) {
      this.abilities[mod].score += race.mods[mod];
    }
    return race;
  },

  generateClass: function() {

  },

  generateBackground: function() {

  },

  generateName: function() {
    // dependant on race
  },

  generateAge: function() {
    var baseAge = this.race.age.baseAge;
    var ageMod = this.race.age.ageMod;
    return baseAge + Utilities.rollDice(ageMod.numberDice, ageMod.numberSides);
  },

  generateStature: function() {
    var stature = {};
    var baseHeight = this.race.stature.baseHeight;
    var heightMod = this.race.stature.heightMod;
    var baseWeight = this.race.stature.baseWeight;
    var weightMod = this.race.stature.weightMod;
    var statureMod = Utilities.rollDice(heightMod.numberDice, heightMod.numberSide);
    stature.height = baseHeight + statureMod;
    stature.weight = baseWeight + Utilities.rollDice(weightMod.numberDice, weightMod.numberSides) * statureMod;
    return stature;
  },

  generateSize: function() {
    if (this.race.size) {
      return this.race.size;
    } else {
      return "Medium";
    }
  }
}
