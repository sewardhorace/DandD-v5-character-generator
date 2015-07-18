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
  this.speed = this.generateSpeed();

  //need class
  this.hp = 1;
  this.savingThrows = [];
  this.spells = [];

  //need background
  this.character_traits = {};//personality traits, ideals, bonds, flaws

  //need background & class
  this.equipment = {}; //weapons, armor, gp, tools, other

  //background, race, & class
  this.skills = [];
  this.proficiencies = {}; //weapon, armor, tool, languages
  this.features_traits =[];

  //need skills
  this.passive_perception = 10;  //= 10 + perception skill

  //need equipment and proficiencies
  this.attack_and_spells = {}; // 66 (weapon), attack bonus, damage
  this.ac = 10;

}

Character.prototype = {

  generateAbilities: function() {
    return Abilities.generateAbilities();
  },

  generateGender: function() {
    var genders = ["Male", "Female"];
    return Utilities.randomItem(genders);
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

    var characterNames = this.race.characterNames;
    var clan = characterNames.clan;
    var nameOptions  = clan ? clan[Utilities.randomItem(Object.keys(clan))] : characterNames;
    var nameParts = [
      Utilities.randomItem(nameOptions.firstNames[this.gender.toLowerCase()]),
      Utilities.randomItem(nameOptions.nicknames) || "",
      Utilities.randomItem(nameOptions.lastNames) || ""
    ];
    return nameParts.join(' ');
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
    return this.race.size ? this.race.size : "Medium";
  },

  generateSpeed: function() {
    return this.race.speed ? this.race.speed : 30;
  }
}
