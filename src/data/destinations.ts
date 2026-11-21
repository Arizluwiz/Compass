export type TownId = 'urdaneta' | 'bolinao' | 'natividad';

export interface TownOverviewInfo {
  id: TownId;
  name: string;
  regionLabel: string;
  character: string;
  summary: string;
  highlights: string[];
  accessNote: string;
  previewImage: string;
  previewAlt: string;
}

export interface TravelSpot {
  id: string;
  townId: TownId;
  townName: string;
  title: string;
  shortDesc: string;
  area: string;
  bestTime: string;
  whatToExpect: string;
  reminders: string[];
  image: string;
  imageAlt: string;
  imageCaption: string;
}

export const HERO_MEDIA = {
  image: '/src/assets/images/hero_pangasinan_coast_1795232404263.jpg',
  alt: 'Rocky limestone shoreline and clear teal sea water along the Bolinao coast in western Pangasinan during late afternoon light.',
  caption: 'Coastal limestone formations along the West Philippine Sea in Bolinao, Pangasinan.',
};

export const TOWNS: TownOverviewInfo[] = [
  {
    id: 'urdaneta',
    name: 'Urdaneta',
    regionLabel: 'Eastern Pangasinan · City Center',
    character: 'Convenient city hub with calm landmark grounds',
    summary:
      'Urdaneta is a growing component city in eastern Pangasinan that connects major provincial highways and serves as a practical gateway for travelers. Beyond busy commercial roads, it offers shaded civic plazas, approachable local eateries, and quiet landscaped grounds such as the Urdaneta Philippines Temple.',
    highlights: [
      'Direct access via TPLEX and MacArthur Highway',
      'Urdaneta Philippines Temple white granite grounds',
      'Everyday Pangasinan restaurants, bakeries, and city plaza',
    ],
    accessNote: 'About 2.5 to 3 hours north of Metro Manila via SCTEX and TPLEX.',
    previewImage: '/src/assets/images/urdaneta_temple_grounds_1795232404180.jpg',
    previewAlt: 'White granite facade and landscaped palm gardens of the Urdaneta Philippines Temple in warm afternoon light.',
  },
  {
    id: 'bolinao',
    name: 'Bolinao',
    regionLabel: 'Western Pangasinan · Coastal Peninsula',
    character: 'Rocky shores, clear water, caves, and coastal treats',
    summary:
      'Located on the northwestern tip of Pangasinan, Bolinao is a coastal municipality known for weathered limestone shorelines, open beaches facing the West Philippine Sea, and freshwater swimming spots inland. Visitors often pair rocky coastal stays like Old Rock Resort in Sitio Tinumrong, Brgy. Arnedo with Patar Beach, Cape Bolinao Lighthouse, Enchanted Cave, Bolinao Falls, and local binungey.',
    highlights: [
      'Old Rock Resort in Sitio Tinumrong, Brgy. Arnedo',
      'Patar Beach, Cape Bolinao Lighthouse, Enchanted Cave & Bolinao Falls',
      'Binungey sticky rice cooked in fresh bamboo tubes',
    ],
    accessNote: 'Roughly 2.5 to 3 hours west of Urdaneta via Dagupan or Alaminos.',
    previewImage: '/src/assets/images/bolinao_patar_lighthouse_1795232404224.jpg',
    previewAlt: 'Golden sand curve of Patar Beach beside the white Cape Bolinao Lighthouse overlooking the West Philippine Sea.',
  },
  {
    id: 'natividad',
    name: 'Natividad',
    regionLabel: 'Eastern Pangasinan · Mountain Foothills',
    character: 'Rural greenery, fresh air, and an unhurried pace',
    summary:
      'Tucked near the eastern mountain foothills of Pangasinan, Natividad is a quiet agricultural municipality far from crowded highway strips. Wide rice fields, tree-lined country roads, and countryside stops like R.Rebs Farm give travelers fresh morning air and a slower, restful view of everyday rural life.',
    highlights: [
      'R.Rebs Farm open gardens and countryside pavilion',
      'Unobstructed mountain foothill views and green fields',
      'Quiet local roads well suited for unhurried morning visits',
    ],
    accessNote: 'Around 45 to 60 minutes east of Urdaneta via Tayug or San Nicolas.',
    previewImage: '/src/assets/images/natividad_rrebs_farm_1795232404277.jpg',
    previewAlt: 'Open green pastures and wooden garden pavilion at R.Rebs Farm with green mountain foothills behind Natividad, Pangasinan.',
  },
];

export const TRAVEL_SPOTS: TravelSpot[] = [
  {
    id: 'urdaneta-temple',
    townId: 'urdaneta',
    townName: 'Urdaneta',
    title: 'Urdaneta Philippines Temple',
    shortDesc:
      'A serene white-walled landmark set within tidy tropical gardens along MacArthur Highway, appreciated for its quiet architectural presence.',
    area: 'Brgy. Nancayasan · MacArthur Highway, Urdaneta City',
    bestTime: 'Late afternoon (4:00 PM – 5:45 PM) for softer light and cooler air',
    whatToExpect:
      'Clean white granite exterior lines, manicured lawns, palm-lined walkways, and a quiet atmosphere away from street noise. While temple interior entry is reserved for members of The Church of Jesus Christ of Latter-day Saints, the outer grounds and walkway views are peaceful and respected by passersby and visitors.',
    reminders: [
      'Dress modestly and keep voices low when walking around the perimeter or public areas.',
      'Check local visitor center hours if planning to walk inside open public garden gates.',
      'Combine easily with a meal stop nearby in central Urdaneta before heading east or west.',
    ],
    image: '/src/assets/images/urdaneta_temple_grounds_1795232404180.jpg',
    imageAlt: 'Symmetrical white exterior and spire of the Urdaneta Philippines Temple surrounded by manicured lawns and palms.',
    imageCaption: 'Urdaneta Philippines Temple exterior and landscaped grounds in late afternoon sunlight.',
  },
  {
    id: 'urdaneta-city-plaza',
    townId: 'urdaneta',
    townName: 'Urdaneta',
    title: 'City Plaza & Everyday Food Stops',
    shortDesc:
      'Shaded town center grounds, nearby public market stalls, and casual local restaurants offering convenient stops for travelers passing through.',
    area: 'Poblacion · Central Urdaneta City',
    bestTime: 'Morning (8:00 AM – 10:30 AM) or early evening for cooler walks and dinner',
    whatToExpect:
      'A lively yet manageable provincial city center with wide sidewalks, mature shade trees, tricycles, and nearby family-run eateries serving grilled dishes, pancit, and Pangasinan snacks. Useful as a practical rest, coffee, or supply stop before heading to rural towns.',
    reminders: [
      'Traffic picks up during weekday school and market hours along MacArthur Highway.',
      'Most small eateries and market stalls prefer cash in small bills.',
      'Good spot to pick up bottled water, snacks, or fuel before driving onward.',
    ],
    image: '/src/assets/images/urdaneta_city_plaza_1795232404581.jpg',
    imageAlt: 'Shaded city plaza and tree-lined street with small local eateries in Urdaneta City, Pangasinan.',
    imageCaption: 'Shaded town plaza and local street-side dining area in central Urdaneta.',
  },
  {
    id: 'bolinao-old-rock',
    townId: 'bolinao',
    townName: 'Bolinao',
    title: 'Old Rock Resort',
    shortDesc:
      'A quiet rocky-shoreline stay and coastal viewpoint where natural limestone formations meet clear shallow seawater.',
    area: 'Sitio Tinumrong, Brgy. Arnedo · Bolinao',
    bestTime: 'Early morning (6:30 AM – 9:30 AM) for calm clear water and bright coastal light',
    whatToExpect:
      'Rather than a wide sandy strip, the shoreline at Sitio Tinumrong features rugged coastal rock ledges, clear tide pools, and simple seaside cottages under coconut palms. Visitors come for quiet ocean views, wading in calm pockets of water, and relaxed overnight or day stays.',
    reminders: [
      'Bring aqua shoes or sturdy sandals when walking near uneven limestone rocks.',
      'Confirm day-tour or cottage availability in advance during summer weekends and holidays.',
      'Follow posted tide and swimming area guidance near rocky drop-offs.',
    ],
    image: '/src/assets/images/bolinao_old_rock_resort_1795232404044.jpg',
    imageAlt: 'Limestone rock shoreline, shallow clear turquoise seawater, and wooden coastal cottages at Old Rock Resort in Brgy. Arnedo, Bolinao.',
    imageCaption: 'Rocky limestone coastline and seaside cottages in Sitio Tinumrong, Brgy. Arnedo, Bolinao.',
  },
  {
    id: 'bolinao-patar-lighthouse',
    townId: 'bolinao',
    townName: 'Bolinao',
    title: 'Patar Beach & Cape Bolinao Lighthouse',
    shortDesc:
      'Bolinao’s best-known golden sand shoreline paired with the neighboring historic white lighthouse perched above the sea.',
    area: 'Brgy. Patar · Western Bolinao Coast',
    bestTime: 'Late afternoon (3:30 PM – 6:00 PM) for sunset views over the West Philippine Sea',
    whatToExpect:
      'Patar offers an open stretch of warm golden sand, gentle surf, and public beach cottages, while a short uphill drive leads to Cape Bolinao Lighthouse—built in 1905 on Punta Piedra—overlooking the coast and coastal bluffs.',
    reminders: [
      'Sunshade and drinking water are helpful as open beach stretches have limited midday shade.',
      'Expect small barangay environmental or parking fees collected at designated entry points.',
      'Waves can grow stronger outside summer months; check local sea conditions before swimming.',
    ],
    image: '/src/assets/images/bolinao_patar_lighthouse_1795232404224.jpg',
    imageAlt: 'Golden sand curve of Patar Beach beside the white Cape Bolinao Lighthouse on a green bluff.',
    imageCaption: 'Patar Beach shoreline and Cape Bolinao Lighthouse in Brgy. Patar.',
  },
  {
    id: 'bolinao-falls-cave',
    townId: 'bolinao',
    townName: 'Bolinao',
    title: 'Bolinao Falls & Enchanted Cave',
    shortDesc:
      'Inland freshwater escapes featuring cool cascading river pools and an underground limestone spring cavern.',
    area: 'Brgy. Samang Norte (Falls) & Brgy. Patar (Enchanted Cave) · Bolinao',
    bestTime: 'Mid-morning (9:00 AM – 11:30 AM) before midday crowds arrive',
    whatToExpect:
      'Bolinao Falls (numbered Falls 1, 2, and 3 along the Balingasay River) offers cool green freshwater basins surrounded by rock ledges and forest shade. Nearby in Patar, Enchanted Cave features steps leading down into a clear natural underground coral-limestone pool.',
    reminders: [
      'Wear non-slip footwear; wet limestone steps and river rocks can be slick.',
      'Life vests are commonly required or available for rent at deeper waterfall plunge pools.',
      'Pack a dry bag and change of clothes if visiting both freshwater stops in one morning.',
    ],
    image: '/src/assets/images/bolinao_cave_falls_1795232404470.jpg',
    imageAlt: 'Clear green freshwater pool beneath a small limestone waterfall surrounded by tropical ferns in Bolinao.',
    imageCaption: 'Freshwater limestone basin and shaded waterfall cascade in inland Bolinao.',
  },
  {
    id: 'bolinao-binungey',
    townId: 'bolinao',
    townName: 'Bolinao',
    title: 'Binungey & Local Coastal Delicacies',
    shortDesc:
      'Traditional Pangasinan sticky rice cooked with coconut milk inside green bamboo tubes—a classic roadside stop.',
    area: 'Brgy. Germinal, Public Market & Patar Road Stalls · Bolinao',
    bestTime: 'Morning to early afternoon while fresh batches are still warm',
    whatToExpect:
      'Vendors along main Bolinao roads and near the town market roast glutinous rice, coconut milk, and salt inside banana-leaf-lined bamboo joints over open embers. Split open to eat, the rice has a mild smoky aroma and pairs well with tablea hot chocolate, ripe mango, or sweet dip.',
    reminders: [
      'Ask vendors for freshly roasted batches if you plan to eat right away; sealed tubes also travel well.',
      'Bring small cash denominations for roadside family stalls.',
      'Store leftover rice in a cool container and consume within a day or two.',
    ],
    image: '/src/assets/images/bolinao_binungey_food_1795232404572.jpg',
    imageAlt: 'Split bamboo tubes filled with banana-leaf wrapped binungey sticky rice sliced on a woven tray in Bolinao.',
    imageCaption: 'Freshly split bamboo-cooked binungey sticky rice served on a woven tray.',
  },
  {
    id: 'natividad-rrebs-farm',
    townId: 'natividad',
    townName: 'Natividad',
    title: 'R.Rebs Farm',
    shortDesc:
      'A peaceful countryside farm stop offering open lawns, simple shaded seating, and clean foothill air away from city traffic.',
    area: 'Natividad · Eastern Pangasinan Countryside',
    bestTime: 'Early morning (6:30 AM – 9:30 AM) or late afternoon for cool mountain breezes',
    whatToExpect:
      'Open green grounds, garden plants, bamboo and wooden pavilions, and unobstructed views toward the eastern mountain range. Visitors come to unwind, enjoy quiet family picnics, and experience a slower rural rhythm without commercial crowds.',
    reminders: [
      'Confirm opening schedules or group reservations ahead of time, especially on weekdays.',
      'Bring sun protection, insect repellent, and drinking water for outdoor farm walks.',
      'Drive carefully on narrow barangay access lanes shared with tricycles and farm vehicles.',
    ],
    image: '/src/assets/images/regenerated_image_1795234732439.webp',
    imageAlt: 'Wooden entrance archway, green garden fence, thatched hut, and rolling foothills at R.Rebs Farm in Natividad, Pangasinan.',
    imageCaption: 'Wooden garden gate, open grounds, and mountain foothills at R.Rebs Farm in Natividad.',
  },
  {
    id: 'natividad-foothills-loop',
    townId: 'natividad',
    townName: 'Natividad',
    title: 'Natividad Foothills & Countryside Roads',
    shortDesc:
      'Scenic rural stretches lined with green rice paddies and quiet barangay roads leading toward the eastern slopes.',
    area: 'Eastern Barangays · Natividad, Pangasinan',
    bestTime: 'Sunrise to mid-morning (6:00 AM – 8:30 AM) when mist still sits on the hills',
    whatToExpect:
      'An unhurried scenic drive or morning walk past irrigated farmlands, grazing carabao, and quiet residential barrios set against the Caraballo and Cordillera foothills. Ideal for travelers looking for calm countryside scenery rather than tourist crowds.',
    reminders: [
      'Keep speeds low on two-lane provincial and barangay roads.',
      'Respect private farmland boundaries when stopping along the shoulder for photos.',
      'Pair easily with an early lunch or coffee stop back toward Tayug or Urdaneta.',
    ],
    image: '/src/assets/images/natividad_foothills_road_1795232404197.jpg',
    imageAlt: 'Quiet rural road winding past green rice paddies and misty mountain foothills at sunrise in Natividad.',
    imageCaption: 'Morning light over rural rice fields and mountain foothills in Natividad.',
  },
];

export const SOURCES_LIST = [
  {
    category: 'Local Government & Tourism Profiles',
    detail:
      'Public municipal overviews, barangay names, and attraction directories from the Provincial Tourism & Cultural Affairs Office (PTCAO) of Pangasinan and local municipal guides for Urdaneta City, Bolinao, and Natividad.',
  },
  {
    category: 'Geographic & Route References',
    detail:
      'Philippine Standard Geographic Code (PSGC) barangay classifications and regional road links (TPLEX, MacArthur Highway, and Pangasinan provincial routes) used to verify general areas and realistic travel times.',
  },
  {
    category: 'Site & Cultural Information',
    detail:
      'Public visitor advisories for the Urdaneta Philippines Temple grounds, coastal spots in Brgy. Arnedo and Brgy. Patar (Old Rock Resort, Patar Beach, Cape Bolinao Lighthouse, Enchanted Cave, Bolinao Falls), R.Rebs Farm in Natividad, and regional Pangasinan food traditions such as binungey.',
  },
  {
    category: 'Visual Photography',
    detail:
      'Editorial travel photographs generated specifically for Compass to depict each Pangasinan destination accurately without external hotlinks.',
  },
];
