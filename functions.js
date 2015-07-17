
//returns the results of rolling dice; input how many dice and how many sides the dice have
function rollX(numberOfDice, numberOfSides) {
  if (typeof numberOfDice === 'undefined') { numberOfDice = 1;}
  if (typeof numberOfSides === 'undefined') { numberOfSides = 6; }
  var total = 0;
  for (var i = 0; i < numberOfDice; i++) {
    var roll = Math.floor(Math.random() * (numberOfSides+1));
    total += roll;
  }
  return total;
}

//rolls 4d6 and subtracts the lowest result
function rollSingleAbility() {
  var rolls = [];
  var total = 0;
  for (var i = 0; i < 4; i++) {
    rolls.push(rollX());
  }
  rolls.sort();
  rolls.shift();
  for (var i = 0; i < 3; i++) {
    total += rolls[i];
  }
  return total;
}

//returns an array of six ability scores
function rollAbilities(){
  var abilities = [];
  for (var i = 0; i < 6; i++) {
    abilities.push(rollSingleAbility());
  }
  return abilities;
}

//returns an array of ability modifiers given an array of ability scores
function getModifiers(abilities){
  var modifiers = [];
  for (var i = 0; i < 6; i++){
    modifiers.push((Math.floor(abilities[i]/2))-5);
  }
  return modifiers;
}
