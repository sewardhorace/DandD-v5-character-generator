var Utilities = {
  rollDice: function(numberOfDice, numberOfSides) {
    numberOfDice = numberOfDice || 1;
    numberOfSides = numberOfSides || 6;
    var total = 0;
    for (var i = 0; i < numberOfDice; i++) {
      var roll = Math.floor((Math.random() * numberOfSides) + 1);
      total += roll;
    }
    return total;
  },

  deepClone: function(obj) {
    if(obj === null || typeof(obj) !== 'object' || 'isActiveClone' in obj)
        return obj;

    var temp = obj.constructor(); // changed

    for(var key in obj) {
        if(Object.prototype.hasOwnProperty.call(obj, key)) {
            obj['isActiveClone'] = null;
            temp[key] = this.deepClone(obj[key]);
            delete obj['isActiveClone'];
        }
      }

    return temp;
  }
}
