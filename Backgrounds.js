var Backgrounds = {
  acolyte: {
    name: "Acolyte",
    skill_proficiency: [Skills.insight, Skills.religion],
    tool_proficiency: [],//none
    languages: [],//two of your choice
    equipment: [
      "a prayer book or prayer wheel","5 sticks of incense", "vestements",
      "a set of common clothes", "a belt pouch contaning 15 gp"
    ],
    feature: "Shelter of the Faithful"
  },
  guildArtisan: {
    name: "Guild Artisan",
    skill_proficiency: [Skills.insight, Skills.persuasion], // Skills
    tool_proficiency: [], // one type of artisan's tools
    languages: [], //one of your choice
    equipment: ["a letter of introduction from your guild", "a set of traveler's clothes", "a belt pouch containing 15 gp"], //"a set of artisan's tools (one of your choice)"
    feature: "Guild Business"
  },
  sailor: {
    skill_proficiency: [Skills.athletics, Skills.perception],
    tool_proficiency: [Tools.navigators_tools, Tools.water_vehicles],
    equipment : ["a belaying pin (club)", "50 ft of silk rope", "a lucky charm", "a set of common clothes", "a belt pouch containing 10 gp"],
    feature : "Ship's Passage"
  }

};
