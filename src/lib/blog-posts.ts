
export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
  imageHint: string;
  body: { heading?: string; text: string }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "the-story-behind-our-12-hour-pork-leg",
    title: "The Story Behind Our 12-Hour Braised Pork Leg",
    date: "February 12, 2025",
    category: "Our Story",
    excerpt:
      "What starts at midnight in our kitchen and ends on your table the next afternoon is more than a dish. It's a ritual passed down through three generations of our family.",
    image: "/imges/khao-kha-moo.png",
    imageHint: "braised pork leg Thai food",
    body: [
      {
        text: "Every night at midnight, our kitchen lights up. While the rest of Alhambra sleeps, our cooks start building the brine: a bath of palm sugar, fish sauce, five-spice, and a dozen other ingredients that vary slightly depending on who taught you and where they grew up.",
      },
      {
        heading: "Where the recipe comes from",
        text: "Our head cook, Khun Noi, learned this recipe from her grandmother in Chiang Mai. The original dish is called khao kha moo, braised pork knuckle over jasmine rice, sold from street carts as early as 5 AM. In Thailand, this is breakfast food. Hearty, rich, and deeply comforting.",
      },
      {
        text: "When Noi moved to California, she brought the recipe written on a folded piece of paper that has since been laminated and pinned to the wall above her station. We've never digitized it. Some things should stay analog.",
      },
      {
        heading: "The twelve hours",
        text: "The pork leg goes into a pot with the brine, whole spices, and a dark soy base around 1 AM. Low heat only, never a rolling boil. By 3 AM the kitchen smells extraordinary. By 7 AM the collagen has broken down enough that the meat is starting to pull. By noon it falls from the bone on contact.",
      },
      {
        text: "We plate it simply: the pork over steamed jasmine rice, a soft-boiled egg, pickled mustard greens, and a ladleful of the braising liquid reduced to a gloss. Nothing disguises the main ingredient. Nothing needs to.",
      },
      {
        heading: "Why we'll never rush it",
        text: "Guests sometimes ask if we could do a shorter version, four hours or six. The honest answer is yes, technically. But the texture would be different. The flavor would not have fully transferred from the bone into the meat. You'd be eating something that looks the same but isn't. We'd rather run out early and disappoint a few people than serve a version we're not proud of.",
      },
      {
        text: "On weekends we produce around forty portions. When they're gone, they're gone. That's not a marketing tactic. It's just the math of a twelve-hour process.",
      },
    ],
  },
  {
    slug: "from-bangkok-street-stalls-to-san-gabriel",
    title: "From Bangkok Street Stalls to San Gabriel",
    date: "January 28, 2025",
    category: "Culture",
    excerpt:
      "Our founder grew up eating khanom jeen from a cart on Silom Road. Here's how those early morning memories shaped everything about Bangkok Soul.",
    image: "https://picsum.photos/seed/bangkok-street/1200/600",
    imageHint: "Bangkok street food market",
    body: [
      {
        text: "Our founder, Wit, grew up in the Bang Rak district of Bangkok, two blocks from the Chao Phraya River. His mornings before school always started the same way: a bowl of khanom jeen, fermented rice noodles served cold with a warm curry poured over them, from a cart run by a woman named Malee who had been there since before Wit's parents were born.",
      },
      {
        heading: "What street food teaches you",
        text: "Thai street food is not simplified restaurant food. It is its own discipline. Cart vendors spend their entire careers perfecting one or two dishes. They have no menu to hide behind. Malee made khanom jeen and nothing else. The pressure to be good was total.",
      },
      {
        text: "Wit carried that standard when he moved to Los Angeles in 2009 to study engineering. He worked in tech for a decade. But every time he wanted to eat the food he grew up with, he couldn't find it, not the real version. The versions he found were adapted, sweetened, simplified. He started cooking for himself. Then for friends. Then it became obvious what he actually wanted to do.",
      },
      {
        heading: "Why San Gabriel",
        text: "The San Gabriel Valley is home to one of the largest Southeast Asian communities in the United States. When Wit started looking for a space, San Gabriel felt right, both for the community already there and because Main Street reminded him, in small ways, of the commercial streets he walked as a child.",
      },
      {
        text: "Bangkok Soul opened in 2024. The menu is small by design. Every item is there because someone on our team has a personal connection to it. Nothing is on the menu because it tests well or because it photographs nicely. Everything is there because it means something.",
      },
    ],
  },
  {
    slug: "why-we-import-our-chilies",
    title: "Why We Import Our Chilies from Thailand",
    date: "January 10, 2025",
    category: "Ingredients",
    excerpt:
      "California has wonderful produce, but some things simply cannot be substituted. We explain our sourcing philosophy and why the heat in our curries is non-negotiable.",
    image: "https://picsum.photos/seed/thai-chilies/1200/600",
    imageHint: "Thai chilies and spices",
    body: [
      {
        text: "California grows remarkable produce. We use local vegetables, local citrus, and local pork for most of what comes out of our kitchen. But there are a handful of things we import, and the most important of these are our dried chilies.",
      },
      {
        heading: "The difference is real",
        text: "Prik kee noo, bird's eye chili, grown in California is hotter but less fragrant than the Thai variety. It's a Capsicum annuum vs. Capsicum frutescens difference that shows up clearly in a finished curry. You get heat without the floral, slightly fermented undertone that makes Thai food taste like Thai food rather than just spicy food.",
      },
      {
        text: "We use three varieties of imported dried chili depending on the dish: prik haeng for depth, prik chee fah for color and moderate heat, and prik kee noo haeng for the sharp finish in our naam prik pastes. They arrive vacuum-packed every six weeks from a supplier in Chiang Rai that Noi's family has used for twenty years.",
      },
      {
        heading: "On cost",
        text: "Importing adds cost. We absorb it rather than cutting corners, because serving a curry made with the wrong chili would mean the whole dish is slightly off. Our guests, particularly those who grew up eating this food, would notice immediately. Trust is more valuable than margin.",
      },
      {
        heading: "What we don't compromise on",
        text: "Beyond chilies: our fish sauce is Tiparos or Megachef, never substituted. Our shrimp paste is imported. Our kaffir lime leaves come from a small farm in Riverside that grows the Thai variety specifically. Palm sugar over cane sugar in anything that needs a caramel note. These are not choices we revisit every year. They're fixed.",
      },
    ],
  },
  {
    slug: "a-guide-to-our-menu-for-first-timers",
    title: "A Guide to Our Menu for First-Timers",
    date: "December 20, 2024",
    category: "Menu",
    excerpt:
      "Never been to Bangkok Soul? Don't know where to start? Our team put together a beginner's guide covering the must-orders and hidden gems on our menu.",
    image: "https://picsum.photos/seed/menu-guide/1200/600",
    imageHint: "Thai restaurant menu food",
    body: [
      {
        text: "First visits can be overwhelming. Our menu is intentionally short, about twenty items, but if you don't know Thai food well, the names and descriptions might not tell you much. Here's a practical guide from our staff.",
      },
      {
        heading: "Start with the khao kha moo",
        text: "If you only order one thing on your first visit, let it be our braised pork leg over rice. It's the dish that started Bangkok Soul and the one that best represents what we're trying to do: simple presentation, maximum depth of flavor, no shortcuts.",
      },
      {
        heading: "For the table",
        text: "The miang kham is a good shared starter, betel leaves filled with toasted coconut, peanuts, dried shrimp, lime, ginger, and a sweet-salty palm sugar sauce. It's interactive and a good conversation piece. Each leaf is one bite.",
      },
      {
        text: "The tom kha is our soup. Not tom yum but tom kha. It's coconut milk-based, less sour, more fragrant with galangal and kaffir lime. We use chicken, but it's the broth you'll remember.",
      },
      {
        heading: "Heat levels",
        text: "Everything on the menu is made at a traditional heat level. We don't reduce the spice for a general audience. If you are sensitive to heat, tell your server and we can adjust pastes and nam prik elements. But we'd rather you try the real version and work up from there.",
      },
      {
        heading: "What to drink",
        text: "The house Thai iced tea is made with a blend we source directly, stronger and more aromatic than most American versions. For something less sweet, the pandan soda is cold-pressed in house. Both pair well with anything spiced.",
      },
      {
        heading: "Dessert",
        text: "Mango sticky rice when mango is in season. Tub tim grob, water chestnuts in coconut milk, year-round. Both are light enough to actually eat after a full meal.",
      },
    ],
  },
  {
    slug: "celebrating-songkran-in-san-gabriel",
    title: "Celebrating Songkran in San Gabriel",
    date: "April 13, 2024",
    category: "Events",
    excerpt:
      "Last April we hosted our first Songkran celebration with traditional food, live music, and a whole lot of water. Here's a look back at the night.",
    image: "https://picsum.photos/seed/songkran/1200/600",
    imageHint: "Thai Songkran festival celebration",
    body: [
      {
        text: "Songkran is the Thai New Year, celebrated every April 13th. In Thailand it's marked by a nationwide water festival. The idea is that water washes away the bad luck and misfortune of the previous year. It is also, if we're being honest, a reason to drench strangers in the street and call it spiritual.",
      },
      {
        heading: "Our first celebration",
        text: "We had been open for about three months when April 13th arrived. We decided last minute to close the dining room for a private event and set up outside. We got permission to close off the small parking area next to the building and hung lanterns. The kitchen made food for about 120 people, a mix of regular guests, friends of the team, and members of the Thai community in the SGV who had heard about us through word of mouth.",
      },
      {
        text: "The menu was all finger food: miang kham, grilled skewers, rice paper rolls, tod mun pla fish cakes, and a large pot of khao tom, congee, that stayed on a burner all night for anyone who needed something gentle and warm.",
      },
      {
        heading: "The music",
        text: "A friend of Wit's, a musician who splits his time between Bangkok and Silver Lake, played acoustic guitar and sang. He did traditional songs and then, after 10 PM, something closer to Thai indie pop. Nobody left early.",
      },
      {
        text: "There was a water blessing ceremony at sunset. Guests could pour water over the hands of the staff as a gesture of respect and renewal. It was quiet and sincere and nothing like the full Songkran experience in Bangkok, but it felt like ours.",
      },
      {
        heading: "Next year",
        text: "We're planning the 2025 Songkran event now. It will be bigger. We'll announce it in March. If you want to be on the list, reach out through our contact page.",
      },
    ],
  },
  {
    slug: "the-art-of-slow-cooking-thai-style",
    title: "The Art of Slow Cooking, Thai Style",
    date: "March 5, 2024",
    category: "Kitchen",
    excerpt:
      "Fast food culture has made people forget what patience tastes like. Our head cook walks you through the philosophy of gaeng, Thai stew, and why time is the most important ingredient.",
    image: "https://picsum.photos/seed/slow-cook/1200/600",
    imageHint: "Thai cooking pot kitchen",
    body: [
      {
        text: "In Thai, gaeng describes a broad category of wet dishes, curries, soups, stews, that share one quality: liquid that has been cooked long enough to carry the flavors of everything that went into it. The word is often translated as curry, which undersells it.",
      },
      {
        heading: "The paste is the foundation",
        text: "Every gaeng starts with a paste. At Bangkok Soul, our pastes are made by hand three times a week. Garlic, lemongrass, galangal, kaffir lime zest, shrimp paste, dried chilies soaked and squeezed, coriander root, white pepper, each ingredient pounded separately to release oils before being combined. A food processor would take three minutes. We take thirty. The texture is different. The oil release is different. The finished dish is different.",
      },
      {
        text: "Noi says she can taste the difference between a hand-pounded paste and a blended one every single time. We believe her.",
      },
      {
        heading: "The order of things",
        text: "Paste hits a dry wok first, no oil, over high heat until fragrant. Then coconut cream, not milk, added slowly to allow the fat to split and fry the paste. This is called khua, blooming. Then liquid. Then protein. Then vegetables, added in order of how long they need. Then seasoning at the very end, never before, because everything reduces and concentrates and you cannot predict the final salt level until you are nearly done.",
      },
      {
        text: "A gaeng made this way takes two to three hours minimum. Most of that time is low-heat reducing, tasting, adjusting. It cannot be rushed without losing the layered quality that makes it worth eating.",
      },
      {
        heading: "What we want guests to understand",
        text: "When something costs what it costs at Bangkok Soul, it's because a person spent most of the morning making it. Not because of the ingredient cost, most Thai ingredients are affordable, but because of the time. We think that's worth paying for. We think most guests, once they understand it, agree.",
      },
    ],
  },
];
