class pageCategory {
    constructor (name, subCategories) {
        this.name = name
        this.subCategories = subCategories
    }
}

class character {
    constructor (name, gender, age, bloodType, height, weight, birthday, alignment, likes, dislikes, weaknesses, voiceActor, description, introImage, staffComment, spritePathName) {
        this.name = name
        this.gender = gender
        this.age = age
        this.bloodType = bloodType
        this.height = height
        this.weight = weight
        this.birthday = birthday
        this.alignment = alignment
        this.likes = likes
        this.dislikes = dislikes
        this.weaknesses = weaknesses
        this.voiceActor = voiceActor
        this.description = description
        this.introImage = introImage
        this.staffComment = staffComment
        this.spritePathName = spritePathName
    }
}

class dictionaryEntry {
    constructor (title, text) {
        this.title = title
        this.text = text
    }
}


export const pageCategories = [
    new pageCategory("illustration gallery", ["1", "2"]),
    new pageCategory(
        "character profiles", [
            "arcueid", 
            "ciel",
            "shiki",
            "akiha", 
            "hisui", 
            "kohaku", 
            "satsuki", 
            "noel", 
            "dead apostle noel", 
            "vlov", 
            "roa", 
            "mario", 
            "andou", 
            "karius", 
            "mio", 
            "arihiko", 
            "arach", 
            "gouto"]),
    new pageCategory("background art", ["1", "2"]),
    new pageCategory("seventh scripture", ["1", "2"]),
    new pageCategory("weapons & creatures", ["1", "2"]),
    new pageCategory("lines of death", ["1", "2"]),
    new pageCategory("unused designs", ["1", "2"]),
    new pageCategory("ciel-sensei", ["1", "2"]),
    new pageCategory(
        "dictionary", [
            "death perception", 
            "burial agency", 
            "black keys", 
            "black keys (for real)", 
            "cathedral (barrier)", 
            "seventh scripture", 
            "calvaria's star", 
            "rank ⅰ vampire",
            "rank ⅱ vampire",
            "rank ⅲ vampire",
            "rank ⅳ vampire",
            "rank ⅴ vampire",
            "rank ⅵ vampire",
            "rank ⅶ vampire",
            "rank ⅷ vampire",
            "rank ⅸ vampire",
            "27 dead apostle ancestors",
            "idea blood",
            "true ancestor",
            "vampiric impulse",
            "marble phantasm",
            "event storage",
            "luminary"]),
    new pageCategory("character lineup", ["1", "2"]),
]

export const characterProfileEN = {
    "arcueid": new character(
        "Arcueid Brunestud",
        "Female",
        "17 (self-proclaimed)",
        "Unknown",
        "167 cm",
        "52 kg",
        "December 25th",
        "Neutral Good",
        "Movies, novels, going out, dates at home, Shiki's verbal abuse, kittens",
        "Snakes, boredom, Shiki's verbal abuse",
        "Mystic Eyes of Death Perception, Retroflow",
        "Ikumi Hasegawa",
        [`A True Ancestor who, around the year 1200, spawned naturally, as True Ancestors always do. It was soon discovered that her specs were a far above the True Ancestor standard. It was decided impromptu that she was to be educated for anti-corrupted True Ancestor purposes. She woke up only to kill corrupted True Ancestors, and went to sleep after defeating her target. Somewhere along this cycle, she was tricked by the mage Roa into drinking human blood, causing her to go haywire. After killing all the True Ancestors who raised her, she regained her sanity and locked herself in the Millenium Castle. After that, she formed a new cycle where every time Roa reincarnated, she would visit the world outside the castle, punish him, and return to sleep. This princess is a killer machine who never experienced anything other than fighting and doesn't care for "useless" matters. Or rather, was.`, `The main heroine of the story. She has the appearance of a woman around 16-17. Her real age is about 800-900. That said, the total time she's been active is less than an year. She's a genuine bloodsucker who came to Souya town in pursuit of the vampire Roa. An invigorating heroine with looks and a personality unbecoming of a vampire, who gets killed by the protagonist in her introduction scene. She gets interested in Shiki's murder skills and asks him for his help. She's Chaotic Good. Introverted (extroverted when it comes to Shiki), cheerful, and active. Since her appearance is stuck in an late teens form, her mental age is also not matured. Not caring about details is in her personality. She got happy-go-lucky ever since Shiki killed her, but she still has her vast knowledge and dry humor (her logical nature as a True Ancestor), resulting in an unbalanced personality, carefree yet intellectual.`, `After being broken as a True Ancestor beyond repair, she grew greatly interested in Shiki, and this interest eventually developed into affection, which was taken to extreme level of loving Shiki's life, so she wants to protect not only Shiki himself, but also everything Shiki approves. Except when she is rampaging or awakened. In Ciel's route, the awakened Arc's directive was to first obtain Shiki, and only then respect his life. And to obtain Shiki, she chose the frightening method of eliminating all obstacles.`],
        null,
        "A True Ancestor: a vampire born as one instead of turned. One of the main heroines in A Piece of Blue Glass Moon, and the poster girl for Tsukihime as a whole. A character designed after idea of an un-vampire-like vampire. Not the best person to have as an ally and the absolute worst to have as an enemy. Her long skirt form at the second half of Ciel's route was meant as little surprise. It goes to show how much I can't let go of my habits.",
        "arcueid-sprite.png"
    ),
    "ciel": new character(
        "Ciel",
        "Female",
        "18 (estimated)",
        "O",
        "165 cm",
        "52 kg",
        "May 3rd",
        "Lawful Evil (good from an objective perspective, but Ciel considers herself evil)",
        "Spicy food, volunteering, tinkering, puppies",
        "Lazy lifestyles, vampires",
        "None in particular (she's an all-rounder)",
        "Kaede Hondo",
        ["Birth name: Elesia. A girl born in the French countryside. Being chosen as Roa's new body caused her to awaken at age 12, become a vampire, take over her village, and eventually become a center figure of what would be called the French Incident. But after being defeated by Arcueid, Roa transferred to the next incarnation and the corpse taken to Curia revived as Elesia. The girl, now immortal for as long as Roa is alive, discarded her name, was baptized as Ciel, and joined the Church as a vampire hunter. In order to one day die as a human.", "Sensing Roa's reincarnation, Ciel assigned herself alone to Souya town to punish him. She lives a double life, steadily getting rid of the constantly proliferating vampires by night, and infiltrating a school by day to investigate and observe her Roa body candidate, Toono Shiki, eldest son of the Toono family. Despite her suspicions about the assignment of her pupil Noel, she tries to use Shiki to seal and/or destroy Roa, but things don't go as planned.", "One of the story's heroines. She looks about 16-18. She's poses as upperclassman in Shiki's school but is actually a Holy Church Executor who came to Souya after Roa. The people of the Church call her by the pejorative name Quinze. Although she explains their secrets to Shiki as he gets involved in the situation, the mystery woman doesn't tell him a thing about herself. She's Lawful Good. Extroverted, timid, and active. Has a generally quiet and caring personality. However she's also nosy and curious, and can't leave lazy or depressed people alone.", "The character whose personality best fits the big sister archetype. She takes cares of people and does anything they ask. She's satisfied with her class representative-like position... but, things get different if she grows affectionate to the person she's helping. Her teasing can get mean-spirited. Maybe she just likes troubling her loved ones.", "However, that's all just the base Ciel. She uses a different persona as an Executor, so she can become a cold-blooded machine to fulfill her objectives if necessary."],
        null,
        "One of the main heroines in this game. Arc's narrative foil. While she's the Tsukihime heroine with the biggest variety of outfits, she isn't particularly fashionable, which fits with her unaffected and sincere personality. She doesn't stop getting into battle after battle, to the point it feels like all of her CGs are fight scenes. I made her more sprites in cute poses to compensate that.",
        "ciel-sprite.png"
    ),
    "shiki": new character(
        "Shiki Tohno",
        "Male",
        "17",
        "AB",
        "173 cm",
        "57 kg",
        "October 15th",
        "True Unknown",
        "Effort, relationships, thoughtfulness, large cats",
        "Vampires, shiritori, self-contained lifeforms",
        "Infinity, Chaos, Perfection",
        "Ryousuke Kanemoto",
        null,
        null,
        `The protagonist of the game, tragically given eyes that perceive "lines of death" in everything. Since this is a first-person POV VN, he has only one normal sprite, but maybe the biggest amount of battle sprites. `,
        "shiki-sprite.png"
    ),
    "akiha": new character(
        "Akiha Tohno",
        "Female",
        "16",
        "A",
        "160 cm",
        "45 kg",
        "September 22nd",
        "Chaotic Good",
        "A systematic lifestyle, unity, obedient brothers",
        "Incomprehensible events, blood, disobedient brothers",
        "Arcueid, point-blank gunshots, either brother",
        "Shino Shimoji",
        null,
        null,
        `The carefully raised head of the Tohno family. A cute and strict little sister to Shiki. I drew her praying she turn out beautiful. She's not all that different from the old version, but I changed in her color scheme into something chicer, to better convey the weight of the character.`,
        "akiha-sprite.png"
    ),
    "hisui": new character(
        "Hisui",
        "Female",
        "16 (estimated)",
        "B",
        "156 cm",
        "43 kg",
        "March 12th",
        "Neutral Good",
        "Organizing, sour flavors, sunbathes, cats",
        "Untidy people, loud people, unclean people",
        "Kohaku",
        "Kana Ichinose",
        null,
        null,
        `One of the Tohno family's employees. Shiki's personal maid. Aside from her role as maid, her character also brings a tone of old-fashionedness to the setting, so I'll always be keeping her exactly the way you first saw her.`,
        "hisui-sprite.png"
    ),
    "kohaku": new character(
        "Kohaku",
        "Female",
        "16 (estimated)",
        "B",
        "156 cm",
        "43 kg",
        "March 12th",
        "True Neutral",
        "Cooking, pharmacy, Hisui, Akiha, Shiki",
        "Bad cooking, cats",
        "Hisui",
        "Yuuki Kuwahara",
        null,
        null,
        `The other Tohno maid, the high energy girl in the kimono with apron. Contrary to Hisui, she presents a tone of modernity, so I believe she'll change little by little. Hirokazu Koyama designed her apron.`,
        "kohaku-sprite.png"
    ),
    "satsuki": new character(
        "Satsuki Yumizuka",
        "Female",
        "17",
        "A",
        "161 cm",
        "45 kg",
        "October 15th",
        "Chaotic Neutral",
        "Non-competitive sports, her part-time job, winter sceneries",
        "Her own lack of courage",
        "-",
        "Omi Minami",
        null,
        null,
        `Shiki's cheerful and sociable classmate, loved by all boys and girls. I intended to make her a character without a particularly charming face or silhouette, but with a cute vibe to her. While she doesn't appear much in A Piece of Blue Glass Moon, her little moments increase her heroine levels.`,
        "satsuki-sprite.png"
    ),
    "noel": new character(
        "Noel",
        "Female",
        "27",
        "B",
        "169 cm",
        "59 kg",
        "December 25th",
        "Chaotic Neutral",
        "Gifting herself, social media, antiques, younger lovers",
        "Unwieldy weapons, dentists, younger bosses",
        "Ciel",
        "Ai Kayano",
        null,
        null,
        `A new teacher transferred to Shiki's school and an Executor working with Ciel. The main idea was designing her more adult than the heroines. Well, she turned out to be more like an adult who sucks at being an adult.`,
        "noel-sprite.png"
    ),
    "dead apostle noel": new character(
        "Dead Apostle Noel",
        "Female",
        "27",
        "Unknown",
        "143 cm",
        "35 kg",
        "December 25th",
        "Chaotic Evil",
        "Her puny, audacious, and pathetic enemies, her best self",
        "Ciel",
        "Ciel",
        "Ai Kayano",
        null,
        null,
        `Noel's appearance reborn as a Dead Apostle. The design concept was butterfly fairy, but visibly still Noel. She's not just a younger Noel. Her face was changed by the vampirization. Another possible way to describe concept is Noel's dark passions hatched. `,
        "dan-sprite.png"
    ),
    "vlov": new character(
        "Vlov Arkhangel",
        "Male",
        "Around 400",
        "O",
        "188 cm",
        "79 kg",
        "May 14th",
        "Chaotic Good",
        "His wives, bears, his liege",
        "Snakes, blizzards, floes",
        "Chaos, Rose, Modding Maniac",
        "Kenjirou Tsuda",
        null,
        null,
        `The frozen Dead Apostle, number 19 of the 27 Ancestors. The character who best symbolizes the differences between A Piece of Blue Glass Moon and the old game. I intended to design him as a decadent, beautiful and pale pure vampire, in direct opposition to the non-standard vampire in the old game. `,
        "vlov-sprite.png"
    ),
    "roa": new character(
        "Michael Roa Valdamjong",
        "Male",
        "12-60 (he's incarnated in an 18-year-old body)",
        "A",
        "178 cm",
        "65 kg",
        "September 29th",
        "Lawful Evil",
        "Technological revolutions, reading aloud, eating, tragedy",
        "Unexpected events, malnourishment, imperfection, comedy",
        "Mystic Eyes of Death Perception, Seventh Scripture",
        "Youhei Azakami",
        null,
        null,
        `Arc's and Ciel's nemesis. A character always close to the core of Tsukihime. In Arc's story, he retained SHIKI's consciousness until the moment Shiki's knife stabbed him. After SHIKI's greatest wish was fulfilled, Roa completely took over the body. PFALZ designed the Serpent of Akasha crest that appears when Roa has full control of the body.`,
        "roa-sprite.png"
    ),
    "mario": new character(
        "Mario Gallo Bestino",
        "Male",
        "12-14 (estimated)",
        "AB",
        "150 cm",
        "45 kg",
        "August 3rd",
        "Lawful Good",
        "Sweet food, piano recitals, competent subordinates",
        "Idealist arguments, gerontocracy, one of his brothers (the one born immediately before him)",
        "None in particular",
        "Ayane Sakura",
        null,
        null,
        `A boy from the Holy Church. An Acting Presbyter. A pretty boy with a sadistic personality. As you can tell from his size and emerald-green color, he's a character with powerful eyes.`,
        "mario-sprite.png"
    ),
    "andou": new character(
        "Andou Yuugo",
        "Male",
        "31",
        "A",
        "175 cm",
        "62 kg",
        "February 10th",
        "Chaotic Good",
        "Salary, easy jobs, original recipes",
        "Crime, easy jobs, cacti",
        "Mario",
        "Ryouta Asari",
        null,
        null,
        `Mario's subordinate #1. As smoothly dressed character, to contrast with Mario. Like with Noel, I made him an out-of-place adult.`,
        "andou-sprite.png"
    ),
    "karius": new character(
        "Karius Berlusconi",
        "Male",
        "30",
        "AB",
        "189 cm",
        "79 kg",
        "July 9th",
        "Lawful Good",
        "Shogi, Japanese folding fans, kabuki",
        "A coworker who doesn't show respect for his own country's culture",
        "Andou",
        "Shuuta Morishima",
        null,
        null,
        `Mario's subordinate #2. The hardest character to design in the game. Even after I designed this version, I tested many other alternatives before I ultimately returned to this one.`,
        "karius-sprite.png"
    ),
    "mio": new character(
        "Mio",
        "Female",
        "14",
        "Unknown",
        "149 cm",
        "40 kg",
        "October 16th",
        "Chaotic Neutral",
        "Windowpanes, ammonites, concrete",
        "Hot food",
        "Kiri Nanaya",
        "Rina Hidaka",
        null,
        null,
        `A mysterious girl you find in the town multiple times. I designed her imagining… a girl with a subdued color scheme, but still memorable. She's in this one just to introduce herself. Look forward to her future roles.`,
        "mio-sprite.png"
    ),
    "arihiko": new character(
        "Arihiko Inui",
        "Male",
        "17",
        "B",
        "174 cm",
        "62 kg",
        "October 24th",
        "Chaotic Neutral",
        "Hobbies, gambling, ramen",
        "Plans going further than 3 days, stupidity that affects those around him",
        "Satsuki Yumizuka",
        "Makoto Furukawa",
        null,
        null,
        `Shiki's middle school friend. I designed in way that feels really true to Arihiko, although I'm not too sure about wearing a gakuran uniform at this day and age. I fixed a bunch of images long after I drew them, but Arihiko was the only character where I didn't need to fix anything.`,
        "arihiko-sprite.png"
    ),
    "arach": new character(
        "Neiko Arach",
        "Female",
        "Who cares?",
        "Not telling you",
        "175 cm",
        "No way I'm measuring that",
        "Who gives a damn?",
        "Chaotic Good (lying through her teeth)",
        "Work, sugar, milady Akiha!",
        "Nothing, nil, nada!",
        "If I had to pick something, I guess deadlines?",
        "Mamiko Notoh",
        null,
        null,
        `A lady doctor living in the Tohno residence. An energetic scientist with a habit of skipping work. A new part of the Tohno residence who clearly doesn't belong there. Tsukihime's greatest source of funny faces. Maybe the most fun I had drawing expressions in my entire life. I just drew her silhouette the way I wanted it to be, without thinking much about the details. `,
        "arach-sprite.png"
    ),
    "gouto": new character(
        "Gouto Saiki",
        "Male",
        "30",
        "A",
        "182 cm",
        "74 kg",
        "September 4th",
        "Chaotic Neutral",
        "Mountain climbing",
        "Talentless people",
        "None in particular",
        "Chikahiro Kobayashi",
        null,
        null,
        `The character representing the Tohno branch families. Arach is one character who leaves an impression, but this one here is just a complete horror movie killer. I thought to myself that this design looked way too untrustworthy… but somehow it made the cut. Making good faces for his sprites was a cakewalk. Please pay attention to them.`,
        "gouto-sprite.png"
    ),
}

export const dictionaryEntriesEN = {
    "death perception": new dictionaryEntry(
        "Mystic Eyes of Death Perception",
        [`A special power that awoke in Tohno Shiki as the aftereffect of an accident seven years ago. Mystic Eyes that can apprehend "the lines vulnerable to death" - the concept of a "time of death" inherently contained within all things.`, `As opposed to the "physical phenomena that can be attained through modern technology", it is a "phenomenon that cannot be attained no matter what". Tracing these "lines of death" allows for the target to be severed and killed (in this case it is not the cut that kills, but death resulting in the target being cut).`, `Although Shiki can suppress his power to a level that doesn't impede his daily life thanks to the Mystic Eye Killer glasses he once received from his teacher (Aozaki Aoko), the same cannot be said for when he runs into extreme situations. Ultimately, it becomes possible to not only see the "lines" and "points" of living and inanimate things, but also the death even of space and existence.`]
    ), 
    "burial agency": new dictionaryEntry(
        "Burial Agency", 
        [`A secret division of the Holy Church, an organisation of Europe's prominent religion whose name means "universal".`, `It comprises seven militants called 'executors' after their intended role to "execute the Lord's teachings as His proxy". Its extraterritoriality within the Church precludes the attainment of power and in return affords it freedom from authority. A walking armoury; a security force consisting of a mere handful of people. They are in charge of exterminating the "inhuman things" that never show themselves, which the Church condemned as heresies — vampires. `, `Ciel holds the seventh seat in the Burial Agency, along with the codename "Bow".`]), 
    "black keys": new dictionaryEntry(
        "Black Keys"
        ,[`The rumour goes that this is a niche weapon favoured only by pious believers.`, `At the mention of Black Keys, Ciel... (the following has been redacted for your viewing convenience)`]), 
    "black keys (for real)": new dictionaryEntry(
        "Black Keys (for real)",
        [`The essential equipment carried by Ciel. A sacrament of the Church crafted on the basis of the provisions for mourning and burying the dead. Since regular attacks have little effect on the heretics bearing the curse of immortality, these were devised with the goal of properly reverting them to corpses and returning them to dust.`, `Pages torn from a book of holy scripture are fixed into the shape of hilts with magical energy, which is then passed through those hilts during battle to form the blade portion, shifting into automatic baptism mode.`, `They are mainly used for throwing, and generations of users have devised many throwing techniques such as shadow suturing, time jumping, the iron plate effect, cremation rite, internment rite, and conclave.`]), 
    "cathedral (barrier)": new dictionaryEntry(
        "Cathedral (barrier)",
        [`A phase-transforming, isolation-type barrier developed to contain Rank Ⅸ Dead Apostles.`, `It originally belonged to the Ancestor signifying kingdom, and was a wall with a 30km diameter that isolated everything it enclosed from the outside world. Compared to the original, Ciel's version is a conceptual barrier that can only contain a single instance or kind of object.`, `On the other hand, it possesses a space distortion function that the original lacked, allowing the user to alter the size of the space within at will. As this High Thaumaturgy demands a special sort of magical energy to be used, it cannot easily be used repeatedly.`]), 
    "seventh scripture": new dictionaryEntry(
        "Seventh Scripture",
        [`A treasured holy relic created by the Holy Church to demonstrate the Lord's power, though for a long time there was no one to use it. The embodiment of a miracle crafted by human hands. A conceptual weapon structured into a scripture a thousand years ago by luring a rare phantasmal species still lingering on the surface and forging divine iron by casting the girl who served as a lure into the fires of the furnace.`, `Soul-smashing - that is, starting with execution, all the possible causes of death that may befall a human are inscribed, while the divine iron's natural frequency chants a baptismal admonition against them.`, `The combined form of the six armaments - dual guns, bayonet, great sword, armor, and the core - assembled onto the horn of a unicorn is operated as a mobile anti-vampire weapons platform, and when further deployed it can also transform into a ballista.`]
    ), 
    "calvaria's star": new dictionaryEntry(
        "Calvaria's Star",
        [`A halo deployed in the stratosphere, blazing with focused sunlight.`, `A reflector created with magecraft. The 50km long, 10km wide blade of light beaming towards the surface can be compared to an aurora possessing mass, or a guillotine of light. It is High Thaumaturgy that Ciel came up with after defeating the Ancestor who was her sword mentor; apparently she uses his Idea Blood to initiate it.`, `After firing at full power against Arcueid the remaining magical energy was used to launch one last shot, and it was this move that turned the tables in the endgame.`]
    ), 
    "rank ⅰ vampire": new dictionaryEntry(
        "Rank Ⅰ Vampire: Dead",
        [`A marionette dancing to the tune of its master. A corpse that will return to being dead if left without orders. A mere grunt which simply sucks blood and delivers it to its master. One of what are called "The Dead".`]
    ),
    "rank ⅱ vampire": new dictionaryEntry(
        "Rank Ⅱ Vampire: Ghoul",
        [`A corpse mimicking the form it had in life, possessing a will yet incapable of coherent thought. While its master's magical energy keeps it from decaying, its insides have completely disintegrated. As the brain's decomposition causes it to seek flesh and blood instinctively, it is more savage that a Rank Ⅰ Dead. Could be described as a soldier. Counted among "The Dead".`]
    ),
    "rank ⅲ vampire": new dictionaryEntry(
        "Rank Ⅲ Vampire: Undead",
        [`From this point on a creature can finally be called a vampire. A living corpse. Undead. Although it hasn't fully regained its mental faculties, it can simulate a human lifestyle on its own. A high-ranking soldier whose brain has been reconstructed after death. It is not fazed by sunlight, but requires periodic embalming treatment so as to conceal its true nature. Counted among "The Dead".`]
    ),
    "rank ⅳ vampire": new dictionaryEntry(
        "Rank Ⅳ Vampire: Nightkin",
        [`An undead who acts as a fledgling vampire while maintaining its original personality.`, `A half-human vampire whose inhuman physical abilities come at the cost of experiencing extreme coldness and thirst. A low-ranking knight, so to speak. When those of Rank Ⅵ and above drink the blood of their prey assiduously, their victim starts out as a vampire of this rank. They become anemic under the sunlight, though it doesn't burn them yet.`, `In the world of magic, one is considered "a person" up to this rank. A vampire who has reached Rank Ⅳ can now survive away from its parent. From their point of view it has changed from an "object" to a "living thing", in a sense. Only one in a thousand people are able to reach this rank.`]
    ),
    "rank ⅴ vampire": new dictionaryEntry(
        "Rank Ⅴ Vampire: Nightmare",
        [`Adding to the scope of Rank Ⅳ, at this point the curse within their blood allows them to manifest special powers deriving from their parent vampire, or perhaps arising from their own self. High-ranking knight — a fully fledged vampire.`]
    ),
    "rank ⅵ vampire": new dictionaryEntry(
        "Rank Ⅵ Vampire: Lesser Dead Apostle",
        [`A completely self-sufficient bloodsucker. Though they can create children through their bloodsucking incursions, they cannot sire a child that can exceed Rank Ⅵ - what you'd call a limit to these upstarts.`, `The vampire lurking in Souya is of this rank. Villages fall prey to the disaster that is a "parent" raising minions. Vlov too was classified in this rank, but somehow managed to skip ahead.`]
    ),
    "rank ⅶ vampire": new dictionaryEntry(
        "Rank Ⅶ Vampire: Greater Dead Apostle",
        [`Greater Dead Apostle. Those of Rank Ⅵ who were acknowledged by an Ancestor and bestowed with additional abilities. Though they share a name, this rank is of a wholly different scale from the previous one. To reach this rank is to become a poison that taints the land simply by existing.`, `They are a heresy that ordinary executors cannot cross blades with, noble vampires permitted their own free will. Greater Dead Apostles do not show absolute obedience to their parent Ancestors; given the chance they can defeat them and inherit their curse. However, even if they gained the same "freedom", there is a vast difference in the years the Ancestors have lived, making it difficult for a Greater Dead Apostle to surmount the lifescale of an Ancestor.`]
    ),
    "rank ⅷ vampire": new dictionaryEntry(
        "Rank Ⅷ Vampire: Successor",
        [`A talented vampire chosen by an Ancestor as their own successor. A prince or princess, as it were. Among the Ancestors are also some who were captivated by beings that were not vampires and unexpectedly raised them to this rank.`, `Assuming a minimum of two for each Ancestor, there are more than fifty Rank Ⅷ individuals. Some of them are even said to have been created in imitation of the True Ancestors. Vampires of this rank are mighty, surpassing Vlov - who achieved entry into the Twenty-seven Dead Apostle Ancestors - in terms of their fundamental reserves.`]
    ),
    "rank ⅸ vampire": new dictionaryEntry(
        "Rank Ⅸ Vampire: Ancestor",
        [`The old Dead Apostles who broke free from their role as emergency rations and achieved victory in their struggle for independence as wholly distinct beings. Crimson stains that fell from the moon onto the earth. Long-lived beings who take in the life of humans and give rise to Rank Ⅵ Dead Apostles. Said to have established the structure of vampire society that exists to this day.`, `Their lifescale differs on an individual basis, but they can be categorised into the "elders", active from before the Common Era, and the "upstarts", whose activities began in the Common Era. Vlov, having killed the Ancestor that had been his parent of the last hundred years, became one such new "upstart" Ancestor.`]
    ),
    "27 dead apostle ancestors": new dictionaryEntry(
        "The Twenty-seven Dead Apostle Ancestors",
        [`The 27 individuals who are the apex of Dead Apostles. It is a title that represents their way of being. Though exceptions like the "League of the Age of Gods" of the five old-timers do exist, each is said to be fundamentally individualistic, while not all of them are enemies of man.`, `In their three thousand year long history some seats have emptied, and apart from those six that are Offenbaum's - Vlov's parent's - "principle" as well as the principles of Ripening, Castle, therefore Kingdom, Sword, and then Melting and Four Limbs that are sealed by the Church, the remaining ones whose existence has been verified number twenty-one.`, `Though it takes the Holy Church a hundred years from preparation to execution in order to seal a single ancestor, they are thought to have succeeded only twice. Considering this, it's easy to see how irregular Tohno Shiki's defeat of Vlov was.`]
    ),
    "idea blood": new dictionaryEntry(
        "Hemonomic Principle",
        [`Idea Blood. The quality of the blood that makes the Ancestors what they are, and a foundational commandment etched on their soul.`, `The Dead Apostles who inherited this blood would always rise up to become Ancestors no matter their rank; Arcueid compared it to a "crown".`, `On the other hand, a millennium-class foundation is needed for the Hemonomic Principle to function, and even if a Dead Apostle with hundreds of years of activity were to inherit it they would be crushed by that curse. Properly speaking it was not something that Vlov could withstand, but thanks to a technique given to him by a certain Dead Apostle as well as his desire for revenge against that person he managed to retain his sanity until the end.`]
    ),
    "true ancestor": new dictionaryEntry(
        "True Ancestor",
        [`The original bloodsucking species.`, `One of the races of so-called nature spirits, fairies independently established by the planet as its sense of touch. A completely different species from the originally human Dead Apostles, no religion's purification ritual works on them, nor does sunlight faze them — they are beings infinitely close to immortality.`, `As they receive backup from the planet, it can be said that the limits of their actions are the limits of nature itself. If the planet is thought of as a single organism they are like its white blood cells, regarding the humans who consume nature as an element that must be exterminated.`, `In the same way that humans perceive the vampires who prey on them as "evil", from the standpoint of the True Ancestors it is the humans who enjoy the blessing of nature all the while plundering its resources that are "evil".`]
    ),
    "vampiric impulse": new dictionaryEntry(
        "Vampiric Impulse",
        [`Even the god-like race of the True Ancestors harbour a flaw from the moment they are born: to seek out the blood of humans, not because they need it to live, but out of a primitive desire to ingest the information of intelligent lifeforms — this inclination of their kind is called the vampiric impulse.`, `Basking in the pleasure, the True Ancestors who keep on drinking blood eventually become powerful vampires and begin to defile the world - a fall into beasthood. To avoid this wretched fate, they use this awesome power of theirs to control their vampiric impulse.`, `When they realise that they will become unable to control this impulse sooner or later, the True Ancestors choose eternal sleep for themselves. In a way, this is the lifespan of those who have none to begin with - an end to their long journey.`]
    ),
    "marble phantasm": new dictionaryEntry(
        "Fantasy Manifestation",
        [`Marble Phantasm.`, `An ability possessed by the nature spirits that are Touch of the Planet, allowing them to reconstruct the world through probability alteration. By connecting their will to the world, they can transfigure it into whatever environment they imagine. However, the same cannot be done with things like humans or animals, which exist independently of the world. Fantasy Manifestation is purely the ability to freely transform one's surroundings.`, `Moreover, the reason why the Millennium Castle suddenly appeared in the city of Souya in the Ciel route is simply because its True Ancestor lord (Arcueid) willed it into existence.`]
    ),
    "event storage": new dictionaryEntry(
        "Event Storage",
        [`An ability of the True Ancestors, the planet's sense of touch. The conceptual and physical storage of things reared on the planet's surface. Every creature that has appeared on the face of the planet——it is something that requisitions Textures.`, `In terms of Divine Spirits it's an ability on the level of an Authority, but since this an Authority of the planet it is a 'system' rather than a 'skill'. The gravitational sphere that appeared at Arcueid's feet when she had become an Luminary was of a scale great enough to store the entire planet's texture.`]
    ),
    "luminary": new dictionaryEntry(
        "Luminary",
        [`Rapid expansion (Inflation). A phenomenon more simply called "Luminary".`, `An excited state only possessed by True Ancestor royalty. When a True Ancestor's body is completely destroyed by some means, this reaction is said to occur. It was the result of Arcueid, a "small yet massive being", losing the container called 'body' and consequently having the compressed magical energy released, causing her lifescale to expand. Arcueid's consciousness exists at the core of the light, but since the barrier called 'body' doesn't exist, it is a state where in this excess of magical energy "an image of herself as she imagines it" is projected and diffused.`, `If a True Ancestor still brimming with magical energy is imperfectly destroyed, it will reemerge through just this energy that had been stored within its body and destroy human settlements in the form of a calamity, as a revenge mechanism. Inflation does not occur with Arcueid having her power stolen by Roa and fatally wasting away, but the Arcueid in Ciel route who killed Roa, was troubled by the bug that was her love for Shiki, and could no longer control her bloodsucking impulse could cause this phenomenon. Or rather, ended up causing it.`]
    )
}