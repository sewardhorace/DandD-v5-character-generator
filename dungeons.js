name : string
klass : []
level : int = 1
background: []
race : []
exp : int = 0

abilities : 3 - 18 (modifier -4 - +4)
  strength
  dexterity
  constitution
  intelligence
  wisdom
  charisma

proficiency_bonus : int = 2

saving_throws : derived from klass

skills : +/-
  acrobatics
  animal_handling
  ...

passive_wisdom : perception skill + 10

proficiencies_languages

equipment : [] derived from background/klass

attacks_spellcasting
  weapons
  spells

hit_points : klass + constitution
temp_hit_points : dynamic
hit_dice : int = 1
death_saves: dynamic // game action

// derived from background
personality_traits
ideals
bonds
flaws

features_traits: anything else
