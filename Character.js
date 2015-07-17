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
  this.build = this.generatebuild();
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
    return Utilities.getRandomFromArray(genders);
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
    //need optional "nickname" for elvish "child names", "clan" for human ethnicities
    var genderKey = this.gender.toLowerCase();
    var nameOptions;
    var firstName;
    var lastName;
    var nickname;
    var name;

    if (this.race.characterNames.clan) {
      nameOptions = this.race.characterNames.clan[Utilities.getRandomKey(this.race.characterNames.clan)];
    } else {
      nameOptions = this.race.characterNames;
    }
    firstName = Utilities.getRandomFromArray(nameOptions.firstNames[genderKey]);
    nickname = Utilities.getRandomFromArray(nameOptions.nicknames) || "";
    lastName = Utilities.getRandomFromArray(nameOptions.lastNames);
    name = firstName + " " + nickname + " " + lastName;
    return name;
  },

  generateAge: function() {
    var baseAge = this.race.age.baseAge;
    var ageMod = this.race.age.ageMod;
    return baseAge + Utilities.rollDice(ageMod.numberDice, ageMod.numberSides);
  },

  generatebuild: function() {
    var build = {};
    var baseHeight = this.race.build.baseHeight;
    var heightMod = this.race.build.heightMod;
    var baseWeight = this.race.build.baseWeight;
    var weightMod = this.race.build.weightMod;
    var buildMod = Utilities.rollDice(heightMod.numberDice, heightMod.numberSide);
    build.height = baseHeight + buildMod;
    build.weight = baseWeight + Utilities.rollDice(weightMod.numberDice, weightMod.numberSides) * buildMod;
    return build;
  },

  generateSize: function() {
    if (this.race.size) {
      return this.race.size;
    } else {
      return "Medium";
    }
  }
}
