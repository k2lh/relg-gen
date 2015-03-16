var types = [
    {value:1, name: "nontheistic", tval: 0, pval: 0} ,
    {value:2, name: "pandeistic", tval: 0, pval: 0 },
    {value:3, name: "deistic", tval: 1, pval: 0 },
    {value:4, name: "henotheistic", tval: 1, pval: 1 },
    {value:5, name: "panentheistic", tval: 1, pval: 1 },
    {value:6, name: "monotheistic", tval: 1, pval: 1 },
    {value:7, name: "pantheistic", tval: 1, pval: 1 },
    {value:8, name: "poly-pantheistic", tval: 2, pval: 1} ,
    {value:9, name: "polytheistic", tval: 2, pval: 1} ,
    {value:10, name: "animist", tval: 2, pval: 1 }
];

/** -------- SHARED VARS ------------ **/

var freqs = [
    "always",
    "usually",
    "occasionally",
    "mostly"
];

var negations = [
    "",
    "not"
];

var conjunctions = [
    ", although sometimes ",
    ", and often ",
    ", and more rarely ",
    ", but never ",
    ", and not "
];

var altconjunctions = [
    ", and sometimes ",
    ", and often ",
    ", and more rarely ",
    ", but never "
];

var persons = [
    "men",
    "women",
    "men or women",
    "3rd gender",
    "widow/ers",
    "virgins",
    "foreigners",
    "parents"
];

var ranks = [
    "noble",
    "royal",
    "younger than #N# years",
    "older than #N# years",
    "working-class",
    "military",
    "below a certain social rank",
    "above a certain social rank"
];

var positions = [
    "of Y profession",
    "of Z ancestry",
    "trained in military skills",
    "trained in politics",
    "possessing a specific ability",
    "from a certain family"
];



/** -------- MODEL FACTORY ------------ **/

var modelAdjs1 = [
    "patriarchial",
    "matriarchial"
];

var modelAdjs2 = [
    "androgynous",
    "hermaphroditic"
];

var modelNouns = [
    "familial",
    "bureaucratic",
    "constellation",
    "heroic/mythic",
    "nature-derived",
    "elemental",
    "tribal"
];

/** -------- GODS FACTORIES ------------ **/

var gods = [
    "god",
    "goddess",
    "deities",
    "god",
    "goddess"
];

var majors = [
    "Social Order",
    "Divination",
    "Morality",
    "Wealth",
    "Mercy",
    "Tenacious",
    "Shape-Shifting",
    "Sorcery",
    "Rain",
    "Plants",
    "Unity",
    "Blessings",
    "Protection",
    "Disruption",
    "Oracles",
    "Crops",
    "Restoration",
    "Iron",
    "Steel",
    "Bronze",
    "Apprentice",
    "Archer",
    "Architect",
    "Arrogant",
    "Assassin",
    "Astronomer",
    "Autumn",
    "Baker",
    "Banker",
    "Bartender",
    "Battle",
    "Beautiful",
    "Beekeeper",
    "Beggar",
    "Mapmaker",
    "Navigator",
    "Bellmaker",
    "Bird",
    "Blacksmith",
    "Boatmen",
    "Border",
    "Brave",
    "Brawl",
    "Brewer",
    "Bricklayer",
    "Bridge-builder",
    "Business",
    "Butcher",
    "Cabinetmaker",
    "Candlemaker",
    "Carpenter",
    "Cat",
    "Celebration",
    "Chaos",
    "Charcoal-burner",
    "Charisma",
    "Chemist",
    "Children",
    "City",
    "Clerk",
    "Clockmaker",
    "Clothmaker",
    "Cobbler",
    "Cooking",
    "Counselor",
    "Courier",
    "Courtesan",
    "Courtship",
    "Creation",
    "Crossroads",
    "Currier",
    "Dance",
    "Darkness",
    "Dawn",
    "Day",
    "Daydream",
    "Death",
    "Debt",
    "Deceit",
    "Desert",
    "Desire",
    "Destruction",
    "Diplomacy",
    "Disease",
    "Doctor",
    "Dog",
    "Dream",
    "Duel",
    "Dyer",
    "Earth",
    "Engineer",
    "Famine",
    "Farmer",
    "Fate",
    "Fearful",
    "Fearless",
    "Fear-making",
    "Feast",
    "Fertility",
    "Fieldhand",
    "Fire",
    "Fish",
    "Fishermen",
    "Florist",
    "Flower",
    "Foreigner",
    "Forest",
    "Fortune",
    "Foundry",
    "Friendship",
    "Gambling",
    "Gardener",
    "Ghost",
    "Glassmaker",
    "Goldsmith",
    "Gravedigger",
    "Graves",
    "Guardian",
    "Harvest",
    "Hoofed",
    "Horned",
    "Horse",
    "Hunting",
    "Innkeeper",
    "Innocence",
    "Inspiration",
    "Jeweler",
    "Joyful",
    "Judging",
    "Just",
    "Key",
    "Kitchen",
    "Knowledge",
    "Laborer",
    "Laundry-worker",
    "Lawful",
    "Librarian",
    "Light",
    "Locked",
    "Lost",
    "Love",
    "Lovers",
    "Lucky",
    "Lust",
    "Madness",
    "Marriage",
    "Meadow",
    "Medicine",
    "Memory",
    "Merchant",
    "Messenger",
    "Midnight",
    "Midwife",
    "Miller",
    "Miner",
    "Misery",
    "Mist",
    "Money",
    "Moon",
    "Mountain",
    "Muscian",
    "Musical",
    "Mystery",
    "Naming",
    "Nature",
    "Night",
    "Nightmare",
    "Nomad",
    "Nursing",
    "Oathbreaking",
    "Oathmaking",
    "Ocean",
    "Old",
    "Orphan",
    "Outsider",
    "Painter",
    "Parenthood",
    "Parenthood",
    "Passionate",
    "Pawnbroker",
    "Peaceful",
    "Perfumed",
    "Pig-keeper",
    "Pilgrim",
    "Poet",
    "Politician",
    "Potter",
    "Farseeing",
    "Prosperity",
    "Rain",
    "Reborn",
    "Refiner",
    "Revelry",
    "River",
    "Runaway",
    "Sacrifice",
    "Saddle-maker",
    "Sailor",
    "Scholar",
    "Sciencist",
    "Sculptor",
    "Sea",
    "Seafarer",
    "Secret",
    "Seduction",
    "Servant",
    "Shadow",
    "Shame",
    "Shepherd",
    "Silent",
    "Sky",
    "Sleeping",
    "Snow",
    "Soldier",
    "Sorrowful",
    "Spring",
    "Horsebreeder",
    "Star",
    "Stonecutter",
    "Storm",
    "Storyteller",
    "Strength",
    "Strife",
    "Student",
    "Summer",
    "Sun",
    "Surgeon",
    "Swineherd",
    "Tailor",
    "Tanner",
    "Teacher",
    "Thief",
    "Thunder",
    "Time",
    "Tinsmith",
    "Torment",
    "Trapped",
    "Traveller",
    "Trickster",
    "Truss-maker",
    "Truth",
    "Twilight",
    "Undertaker",
    "Underworld",
    "Vengeful",
    "Victorious",
    "Vintner",
    "War",
    "Warrior",
    "Water",
    "Weaver",
    "Wilderness",
    "Wind",
    "Winged",
    "Winter",
    "Wisdom",
    "Wish",
    "Wood-carver",
    "Wrathful",
    "Young",
    "Old"
];

var minors = [
    "Social Order",
    "Divination",
    "Morality",
    "Wealth",
    "Mercy",
    "Perseverance",
    "Shape-Shifting",
    "Sorcery",
    "Rain",
    "Plants",
    "Unity",
    "Blessings",
    "Protection",
    "Disruption",
    "Oracles",
    "Crops",
    "Restoration",
    "Iron",
    "Steel",
    "Bronze",
    "Agriculture",
    "Apprenticeship",
    "Archery",
    "Architecture",
    "Arrogance",
    "Assassination",
    "Astronomy",
    "Autumn",
    "Baking",
    "Banking",
    "Bardship",
    "Bartending",
    "Battle",
    "Beauty",
    "Mapmaking",
    "Naviation",
    "Beekeeping",
    "Beggars",
    "Bellmaking",
    "Birds",
    "Birth",
    "Blacksmithing",
    "Boat People",
    "Borders",
    "Fighting",
    "Brewing",
    "Bricklaying",
    "Bridge-building",
    "Business",
    "Butchering",
    "Cabinetmaking",
    "Candlemaking",
    "Carpentry",
    "Cats",
    "Celebrations",
    "Chaos",
    "Charcoal-burning",
    "Chemistry",
    "Alchemy",
    "Children",
    "a capital city",
    "Clerking",
    "Clockmaking",
    "Clothmaking",
    "Shoemaking",
    "Cooking",
    "Counseling",
    "Couriering",
    "Courtesans",
    "Courtship",
    "Creation",
    "Crossroads",
    "Curriering",
    "Dance",
    "Darkness",
    "Dawn",
    "Day",
    "Death",
    "Rituals",
    "Debts",
    "Deceit",
    "Desire",
    "Destruction",
    "Diplomacy",
    "Disease",
    "Doctors",
    "Dogs",
    "Dreams",
    "Duels",
    "Clothdying",
    "Earth",
    "Engineering",
    "Famine",
    "Farming",
    "Fate",
    "Fear",
    "Feasts",
    "Fertility",
    "the Harvest",
    "Fire",
    "Fishing",
    "Flowers",
    "Fog",
    "Foreigners",
    "Forests",
    "Fortune",
    "Foundry-working",
    "Friendship",
    "Gambling",
    "Gardening",
    "Ghosts",
    "Glassmaking",
    "Goldsmithing",
    "Gravedigging",
    "Guarding",
    "Healing",
    "Holidays",
    "Hoofed creatures",
    "Horned creatures",
    "Horses",
    "Hunting",
    "Innkeeping",
    "Innocence",
    "Inspiration",
    "Jewelry",
    "Joy",
    "Justice",
    "Keys",
    "Kitchen",
    "Knowledge",
    "Laboring",
    "Laundry-working",
    "Laws",
    "Judgment",
    "Librarians",
    "Life",
    "Light",
    "Loss",
    "Lost Souls",
    "Love",
    "Luck",
    "Lust",
    "Madness",
    "Marriage",
    "Meadows",
    "Medicine",
    "Memory",
    "Messages",
    "Midnight",
    "Midwives",
    "Milling",
    "Mining",
    "Misery",
    "Money",
    "Mountains",
    "Muscians",
    "Music",
    "Mysteries",
    "Names",
    "Typhoons",
    "Night",
    "Nightmares",
    "Nomads",
    "Nurses",
    "Oaths",
    "the Oceans",
    "the Sea",
    "Orphans",
    "Outsiders",
    "Painting",
    "Parenthood",
    "Passion",
    "Pawnbroking",
    "Peace",
    "Perfumes",
    "Pig-keeping",
    "Pilgrims",
    "Poetry",
    "Politics",
    "Pottery",
    "Prophecy",
    "Prosperity",
    "Rain",
    "Rebirth",
    "Refining",
    "Revelry",
    "Rivers",
    "Escape",
    "Refuge",
    "Sacrifice",
    "Saddle-making",
    "Sailing",
    "Scholarship",
    "Science",
    "Sculpting",
    "Sea creatures",
    "Seafaring",
    "Secrets",
    "Seduction",
    "Serving",
    "Shadows",
    "Shame",
    "Smithing",
    "Shepherding",
    "Silence",
    "Sleep",
    "Snow",
    "Soldiering",
    "Sorrow",
    "Spring",
    "Stablekeeping",
    "Stonecutting",
    "Storms",
    "Storytelling",
    "Strength",
    "Strife",
    "Learning",
    "Summer",
    "Surgery",
    "Tailoring",
    "Lace-making",
    "Tatting",
    "Sewing",
    "Tanning",
    "Teaching",
    "the Desert",
    "the Moon",
    "the Sky",
    "the Stars",
    "the Sun",
    "the Theater",
    "the Underworld",
    "the Market",
    "the Wilderness",
    "the Wind",
    "Thieves",
    "Thunder",
    "Clocks",
    "Tinsmiths",
    "Torment",
    "Trapping",
    "Travelling",
    "Trickery",
    "Truss-making",
    "Truth",
    "Twilight",
    "Burial",
    "Cremation",
    "Valour",
    "Vengeance",
    "Victory",
    "Winemaking",
    "Warfare",
    "Warriorship",
    "Water",
    "Weaving",
    "Winged creatures",
    "Winter",
    "Wisdom",
    "Wishes",
    "Wood-carving",
    "Wrath",
    "Youth",
    "Old Age"
];

var patrons = [
    "Farmers",
    "Apprentices",
    "Archers",
    "Architects",
    "Assassins",
    "Astronomers",
    "Bakers",
    "Shape-Shifters",
    "Sorcerers",
    "Oracles",
    "Bankers",
    "Bards",
    "Bartenders",
    "Beekeepers",
    "Beggars",
    "Bellmakers",
    "Wild Creatures",
    "Mapmakers",
    "Navigators",
    "Mothers",
    "Fathers",
    "Parents",
    "Blacksmiths",
    "Boatmen",
    "Fighters",
    "Brewers",
    "Bricklayers",
    "Bridge-builders",
    "Butchers",
    "Cabinetmakers",
    "Candlemakers",
    "Carpenters",
    "Charcoal-burners",
    "Chemists",
    "Children",
    "the capital city",
    "Clerks",
    "Clockmakers",
    "Clothmakers",
    "Cobblers",
    "Cooks",
    "Counselors",
    "Couriers",
    "Courtesans",
    "Curriers",
    "Dancers",
    "Dreamers",
    "the dying",
    "Debtors",
    "Deceivers",
    "Diplomats",
    "the diseased",
    "Doctors",
    "Dogbreeders",
    "Horse traders",
    "Duelists",
    "Dyers",
    "Engineers",
    "the starving",
    "Feastgivers",
    "Fieldhands",
    "the harvest",
    "Fishermen",
    "Florists",
    "Foreigners",
    "Foundry-workers",
    "Distant Friends",
    "Gamblers",
    "Gardeners",
    "Wainwrights",
    "Glassmakers",
    "Goldsmiths",
    "Gravediggers",
    "Guards",
    "Hunters",
    "Innkeepers",
    "Innocents",
    "Jewelers",
    "Judges",
    "Locksmiths",
    "Laborers",
    "Laundry-workers",
    "Lawyers",
    "Librarians",
    "Lost Souls",
    "Lost Causes",
    "Lovers",
    "Invalids",
    "Mad Souls",
    "Married people",
    "Healers",
    "Merchants",
    "Messengers",
    "Night Guards",
    "Midwives",
    "Millers",
    "Miners",
    "the poor",
    "Muscians",
    "Matchmakers",
    "Namegivers",
    "Nomads",
    "Nurses",
    "Orphans",
    "Outsiders",
    "Painters",
    "Parents",
    "Pawnbrokers",
    "Peacemakers",
    "Perfumers",
    "Pig-keepers",
    "Pilgrims",
    "Poets",
    "Politicianss",
    "Potters",
    "Prophets",
    "the reborn",
    "Refiners",
    "Revelers",
    "River people",
    "Runaways",
    "Mourners",
    "Saddle-makers",
    "Sailors",
    "Scholars",
    "Scientists",
    "Sculptors",
    "Seafarers",
    "Seducers",
    "Servants",
    "Smiths",
    "Shepherds",
    "the mute",
    "the deaf",
    "Soldiers",
    "the grieving",
    "Stablemen",
    "Stonecutters",
    "Storytellers",
    "Strongmen",
    "Students",
    "Surgeons",
    "Swineherds",
    "Tailors",
    "Tanners",
    "Teachers",
    "Desert-dwellers",
    "Forest-dwellers",
    "Mountain-dwellers",
    "Actors",
    "Thieves",
    "Tinsmiths",
    "Trappers",
    "Travellers",
    "Refugees",
    "Tricksters",
    "Truss-makers",
    "Truth-tellers",
    "Liars",
    "Undertakers",
    "Vintners",
    "Warriors",
    "Weavers",
    "Wood-carvers",
    "Children",
    "the elderly"
];

/** -------- PRAYER FACTORY ------------ **/

var divfreqs = [
    "will always",
    "will often",
    "is more likely to",
    "will sometimes",
    "is less likely to",
    "will never"
];

var possessives = [
    "a man's",
    "a woman's",
    "an adult's",
    "a third-gendered person's",
    "a child's",
    "an elder's",
    "a parent's",
    "a sibling's",
];

var listeners = [
    "to military leaders",
    "through prophets",
    "on auspicious/holy days",
    "during specific sacrifices",
    "to people of X profession",
    "to people of Y class",
    "to people of Z ancestry",
    "to people marked at birth",
    "through signs and messengers",
    "during times of war",
    "during certain rituals",
    "through teachers",
    "to people with certain experiences",
    "in response to certain prayers",
    "in holy locations",
    "in healing rituals",
    "to religious leaders"
];

/** -------- RITUALS FACTORY ------------ **/

var styles = [
    "well-organized",
    "unplanned",
    "formal",
    "informal",
    "structured",
    "freeform",
    "noisy",
    "quiet",
    "silent"
];

var allowances = [
    "public",
    "private",
    "secret",
    "solitary",
    "limited to #N# people"
];

var preparations = [
    "body-painting",
    "dietary restrictions",
    "speech taboos",
    "self-denial",
    "bathing",
    "self-sacrifice",
    "fasting",
    "meditation",
    "reciting certain words",
    "reciting certain stories",
    "purifying",
    "artifact preparation"
];

var uses = [
    "artifact use",
    "scarification",
    "tattooing",
    "speaking in tongues",
    "singing",
    "dancing",
    "chanting",
    "ritual items",
    "meditation",
    "reciting certain words",
    "reciting certain phrases",
    "initiated priests",
    "elected priests",
    "lay leaders",
    "an archaic language",
    "specific movements",
    "rote responses",
    "confessions",
    "ritual symbols",
    "special dress"
];

var locations = [
    "in an initiate's home",
    "in a government office",
    "in a royal court",
    "at a specific shrine/temple",
    "at the nearest shrine/temple",
    "at a clergy residence",
    "by a natural landmark",
    "in the open air",
    "wherever is convenient",
    "indoors",
    "over or near water",
    "anywhere well-lit"
];

var times = [
    "the tides",
    "the moon",
    "a solar cycle",
    "a solar-lunar cycle",
    "a mythic cycle",
    "the seasons",
    "the hours"
];

var starts = [
    "specific hours of the day",
    "specific hours of the night",
    "sunset",
    "dawn",
    "midnight",
    "anytime",
    "midday",
    "twilight"
];

var lasts = [
    "no more than a half-hour",
    "an hour or two",
    "to the next sunrise",
    "to the next sunset",
    "about six hours",
    "a day and night",
    "three days",
    "five days",
    "seven days"
];

var holidays = [
    "ostentatious gift-giving",
    "large-scale celebrations",
    "private family celebrations",
    "many speeches and toasts",
    "lengthy prayers",
    "exchanging small tokens",
    "public sacrifices",
    "limited fasting",
    "athletic competitions",
    "games of chance",
    "many large brawls",
    "extensive drinking",
    "sanctioned extramarital affairs",
    "criminal pardons",
    "public sentencing",
    "parades",
    "theater troupes/shows",
    "puppet shows",
    "historical recitations",
    "poetry or art events",
    "large public feasts",
    "fortune-telling",
    "chorale presentations",
    "visits with distant kin",
    "religious pilgimages"
];

var holidaypurposes = [
    "past teachers",
    "past miracles",
    "past victories",
    "new teachers",
    "recent victories",
    "past military losses",
    "political events",
    "past priests",
    "new priests",
    "astronomical events",
    "seasonal events",
    "past revelations",
    "historical events",
    "martyrs",
    "heroes",
    "great rulers",
    "current rulers",
    "deities/spirits",
    "mythic events"
];

var marryrites = [
    "arranged by families",
    "based on common affection",
    "between people of the same social class",
    "between up to #N# people",
    "automatically ended after #N# years",
    "considered a business arrangement",
    "arranged at birth",
    "dissolvable",
    "monogamous",
    "only done once a lifetime",
    "a widespread activity",
    "prompted by pregnancy",
    "for people over #N# years",
    "allowed between relatives",
    "to strengthen political ties",
    "considered sacred",
    "required if courtships last more than #N# months",
    "sealed by a transfer of wealth"
];

var marryasks = [
    "masculine",
    "feminine",
    "parental",
    "sibling's",
    "father's'",
    "mother's'",
    "matchmaker's",
    "income-earner's",
    "elder's"
];

var marryceles = [
    "a transfer of wealth",
    "a clergy's blessing",
    "highly formalized rites",
    "large-scale celebrations",
    "many speeches and toasts",
    "several marriages done simultaneously",
    "legal paperwork signing",
    "symbolic protests from kin",
    "mock attempts to buy back one of the marriage parties",
    "mock kidnapping of one or more parties",
    "lengthy recited prayers",
    "an exchange of vows",
    "auspicious date selection",
    "gift-giving between families",
    "an exchange of jewelry",
    "ritual tattooing",
    "multiple sacrifices",
    "#N# days of seclusion afterwards",
    "#N# days of seclusion beforehand",
    "an exchange of food"
];

var agerites = [
    "taking a journey",
    "defeating an opponent in a fight",
    "mediating for #N# days",
    "publicly declaring beliefs",
    "fasting for #N# days",
    "getting tattooed/scarified",
    "completing a task",
    "leading a public ceremony",
    "leading a private ceremony",
    "performing an ordeal",
    "leaving the childhood home",
    "going on a pilgrimage",
    "choosing a profession",
    "being purified",
    "passing a test of knowledge",
    "passing a test of strength",
    "promotion to a certain military rank",
    "acceptance into a certain family",
    "mastering a skill"
];

var deathrites = [
    "clergical supervision",
    "more than #N# days seclusion for kin",
    "more than #N# days of mourning for kin",
    "less than #N# days of receiving visitors",
    "extensive eulogies",
    "less than #N# days before burial",
    "dividing up property",
    "embalming the body",
    "sacrificing possessions to accompany the deceased",
    "sacrificing animals to accompany the deceased",
    "sacrificing people to accompany the deceased"
];

var burials = [
    "burned on a pyre",
    "entombed in a human-made structure",
    "put in a coffin/box and buried underground",
    "entombed in a cave",
    "buried at sea",
    "buried in a river",
    "wrapped in cloth and buried underground",
    "wrapped in cloth and set on a tree platform",
    "left exposed on a raised platform",
    "left exposed on the ground",
    "abandoned to the elements"
];

/** -------- CLERGY FACTORY ------------ **/

var heirarchys = [
    "linear, strong",
    "linear, weak",
    "branching, strong",
    "branching, weak",
    "flat, strong",
    "flat, weak",
    "overlapping, strong",
    "overlapping, weak"
];

var roles = [
    "specialized",
    "generalized"
];

var clergyfunctions = [
    "speak for the divine",
    "speak to the divine",
    "lead the community",
    "convert outsiders",
    "teach",
    "help poor/ill",
    "lead ceremonies/rituals",
    "interprete scripture/myth",
    "determine holiness",
    "provide spiritual protection",
    "heal the sick",
    "judge wrongdoers",
    "foretell/prophesy",
    "lead military",
    "maintain the historical record",
    "give spiritual advice",
    "talk to the dead",
    "maintain temples/shrines",
    "investigate crimes",
    "investigate sins",
    "interprete divine messages"
];


var clergystyles = [
    "monastic",
    "luxurious",
    "austere",
    "self-supporting",
    "community-supported",
    "solitary",
    "ascetic"
];

var clergyfamilys = [
    "chaste",
    "mostly chaste",
    "celibate",
    "mostly celibate",
    "promiscuous",
    "somewhat promiscuous"
];

var clergystarts = [
    "ordained by elder clergy",
    "elected by the people",
    "appointed by religious leaders",
    "appointed by military leaders",
    "appointed by political leaders",
    "schooling",
    "chosen by divine revelation",
    "born into a specific family",
    "selected at birth",
];

var clergydisplays  = [
    "visible tattoos",
    "facial scars",
    "stylized clothing",
    "a special uniform",
    "a dietary code",
    "special jewelry",
    "scholarly knowledge",
    "supernatural abilities",
    "dyed hair",
    "shorn/shaved head",
    "symbolic weaponry",
    "bonds to a certain location"
];

/** -------- CULTURE FACTORY ------------ **/

var goals = [
    "freedom from corruption",
    "a connection with universe",
    "spiritual growth",
    "the reduction of physical desires",
    "enlightenment",
    "physical health",
    "positive relationships",
    "personal wealth",
    "self-control",
    "harmony with nature",
    "forgiveness towards enemies",
    "avoidance of punishment",
    "converting outsiders",
    "avoiding impurity",
    "spreading peace",
    "honoring ancestors",
    "advancing knowledge",
    "upholding the family",
    "being kindness to others",
    "saving the world",
    "avoiding divine wrath",
    "community fellowship",
    "ending sin",
    "avoiding killing",
    "avoiding impurity",
    "honoring parents",
    "helping others",
    "following the rules",
    "avoiding divine wrath",
    "world domination"
];

var attitudes = [
    "dismisses",
    "denies",
    "is cautious about",
    "greatly fears",
    "doesn't worry about",
    "mistrusts",
    "avoids",
    "ignores",
    "embraces",
    "avoids",
    "tolerates"
];

var spirits = [
    "angry ghosts",
    "cursed ghosts",
    "tricksters",
    "evil spirits",
    "divine spirits",
    "guardian spirits",
    "benevolent ghosts",
    "malevolent nature spirits",
    "benevolent nature spirits",
    "ambivolent nature spirits",
    "monsters",
    "folk magic",
    "mischievious spirits"
];

var vices = [
    "sloth",
    "lust",
    "pride",
    "envy",
    "wrath",
    "gluttony",
    "avarice",
    "cowardness",
    "blasphemy",
    "apostasy",
    "despair",
    "indifference",
    "dishonesty",
    "selfishness",
    "recklessness",
    "irresponsibility",
    "faithlessness",
    "thoughtlessness",
    "apathy",
    "negligence",
    "malice",
    "unfilialness",
    "disrespect"
];

var virtues = [
    "moderate",
    "charitable",
    "tolerant",
    "humble",
    "diligent",
    "selfless",
    "responsible",
    "wise",
    "thoughtful",
    "faithful",
    "humane",
    "righteous",
    "knowledgable",
    "dignified",
    "loyal",
    "filial",
    "pious",
    "constant",
    "honest",
    "kind",
    "forgiving",
    "brave",
    "gentle",
    "respectful",
    "reverent",
    "frugal",
    "modest"
];

var taboos = [
    "sex",
    "bodily functions",
    "displays of affection",
    "strong emotions",
    "physical contact",
    "names of the dead",
    "certain clothing",
    "eye contact",
    "money",
    "hygiene",
    "mental illness",
    "incest",
    "eating certain animals",
    "eating certain animals",
    "wearing certain colors",
    "using certain language",
    "converting outsiders"
];

var arts = [
    "poetry",
    "psalms",
    "instrumental music",
    "singing",
    "dance",
    "ballads",
    "sculpture",
    "painting",
    "mosaics",
    "storytelling",
    "chanting",
    "basket weaving‎",
    "beadwork",
    "calligraphy‎",
    "drawing‎",
    "glass blowing",
    "hatmaking",
    "portraiture",
    "illustration‎",
    "leatherworking",
    "metalworking‎",
    "paper-folding‎",
    "papermaking",
    "pottery‎‎",
    "shoemaking‎",
    "theatre",
    "puppetry",
    "textiles",
    "woodcarving‎",
    "woodworking",
    "stone-carving"
];

var outsiders = [
    "welcomed",
    "ignored",
    "taxed heavily",
    "slaughtered",
    "discriminated against",
    "considered misguided",
    "banished",
    "ostracized",
    "tolerated",
    "forcibly converted",
    "taxed lightly",
    "mistrusted",
    "feared"
];

/** -------- LITURGY FACTORY ------------ **/

var afterlifes = [
    "cold and barren for all souls",
    "cold and barren only for wrongdoers",
    "a fiery pit only for wrongdoers",
    "a fiery pit for all souls",
    "a brief pause between lives",
    "different, depending on the person's life",
    "a peaceful place",
    "dull and gray except for heroes",
    "a means to reunite those seperated in life",
    "different for each person",
    "incomprehensible to the living",
    "a state of enlightenment"
];

var creations = [
    "as the latest in a series",
    "from a god's dismemberment",
    "by order coming from chaos",
    "by a certain god",
    "when land emerged from the waters",
    "when light emerged from the dark"
];

var mortals = [
    "clay",
    "dust",
    "divine bones",
    "divine blood",
    "divine flesh",
    "stars",
    "divine speech",
    "water",
    "fire",
    "air",
    "the divine",
    "accidental",
    "a god's need for vengeance",
    "metal",
    "plants",
    "one animal elevated above the rest",
    "mud",
    "fallen deities",
    "light",
    "darkness",
    "ashes"
];

var symbols = [
    "an open palm",
    "a fist",
    "a pointing hand",
    "a chalice",
    "a cup",
    "a saucer",
    "a mountain",
    "a river",
    "a tree",
    "an ocean wave",
    "a ship",
    "a ship-sail",
    "a fishing net",
    "an open eye",
    "a closed eye",
    "a cat eye",
    "a fish eye",
    "a sacrificial animal",
    "a predatory animal",
    "a local animal",
    "a body part",
    "a knife-blade",
    "a knife-hilt",
    "a ranged weapon",
    "a melee weapon",
    "a crown",
    "a scepter",
    "a coin",
    "a flame",
    "a fire",
    "an edible plant",
    "a poisonous plant",
    "a plant",
    "a deity",
    "a building",
    "a holy building",
    "a spiral",
    "a knot",
    "a tool",
    "a book",
    "a person sitting",
    "a person reclining",
    "a person standing",
    "a person",
    "an animal",
    "an animal part",
    "wings",
    "horns",
    "a full moon",
    "a crescent moon",
    "a half moon",
    "a quarter moon",
    "#N# interlocking shapes",
    "#N# repeating shapes",
    "the stars",
    "the sun",
    "a lightning bolt",
    "a skull",
    "a unicursal shape",
    "a #N#-pointed star",
    "a rose",
    "a peony",
    "a lotus",
    "a flower",
    "a branch",
    "a square",
    "a circle",
    "a triangle",
    "a pentagon",
    "a pentagram",
    "a hexagram",
    "a octagon",
    "stylized letter",
    "a shield",
    "a kitchen tool",
    "a torch",
    "a candle",
    "#N# animals",
    "#N# interlocking animals",
    "#N# repeating animals"
];

var colors = [
    "amber",
    "aquamarine",
    "azure",
    "beige",
    "black",
    "blue",
    "bronze",
    "brown",
    "burnt sienna",
    "burnt umber",
    "carmine",
    "cerulean blue",
    "charcoal",
    "chartreuse",
    "cobalt ",
    "copper",
    "coral",
    "crimson",
    "cyan",
    "dark blue",
    "emerald",
    "forest green",
    "fuchsia",
    "gold",
    "goldenrod",
    "gray",
    "green",
    "indian red",
    "indigo",
    "ivory",
    "khaki",
    "lamp black",
    "lavender",
    "lemon",
    "lime",
    "magenta",
    "maroon",
    "mauve",
    "ochre",
    "olive",
    "orange",
    "pewter",
    "plum",
    "puce",
    "purple",
    "raw sienna",
    "raw umber",
    "red ochre",
    "rose ",
    "saffron",
    "scarlet",
    "silver",
    "tan",
    "teal",
    "titanium ",
    "turquoise",
    "ultramarine",
    "venetian red",
    "vermillion",
    "violet",
    "viridian",
    "wheat",
    "white",
    "yellow"
];