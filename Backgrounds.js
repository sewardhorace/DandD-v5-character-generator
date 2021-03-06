var GuildArtisan = {
  skill_proficiency: [Skills.insight, Skills.persuasion], // Skills
  tool_proficiency: [] // one type of artisan's tools
  language: [] //one of your choice
  equipment: ["a letter of introduction from your guild", "a set of traveler's clothes", "a belt pouch containing 15 gp"] //"a set of artisan's tools (one of your choice)"
  feature: "Guild Business"
  //characteristics
};

var Sailor = {
  skill_proficiency: [Skills.athletics, Skills.perception],
  tool_proficiency: [Tools.navigators_tools, Tools.water_vehicles],
  equipment : ["a belaying pin (club)", "50 ft of silk rope", "a lucky charm", "a set of common clothes", "a belt pouch containing 10 gp"],
  feature : ["Ship's Passage"]
  //characteristics
}

var Backgrounds = {
  "acolyte" : Acolyte,
  "charlatan" : Charlatan,
  "criminal" : Criminal,
  "entertainer" : Entertainer,
  "folk_hero" : FolkHero,
  "guild_artisan" : GuildArtisan,
  "hermit" : Hermit,
  "noble" : Noble,
  "outlander" : Outlander,
  "sage" : Sage,
  "sailor" : Sailor,
  "soldier" : Soldier,
  "urchin" : Urchin
};
