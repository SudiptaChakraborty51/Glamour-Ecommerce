import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    name: "Mamaearth Ubtan Natural Face Wash for Tan Removal",
    image: "https://images.mamaearth.in/catalog/product/u/b/ubtan-face-wash_1_1_2.jpg?fit=contain&width=640",
    brand: "mamaearth",
    size: "(150ml)",
    price: "338",
    originalPrice: "375",
    off: "10%",
    offer: "Buy 1 Get 1 Free",
    categoryName: "Skin Care",
    productType: "facewash",
    ratings: {
      value: "3.5",
      count: "2345"
    },
    inStock: true,
    isBestSeller: false,
    quantity: 0
  },
  {
    _id: uuid(),
    name: "Mamaearth Onion Shampoo For Hair Growth & Hair Fall Control With Onion & Plant Keratin",
    image: "https://images.mamaearth.in/catalog/product/o/n/onion-shampoo-600ml_1.jpg?fit=contain&width=640",
    brand: "mamaearth",
    size: "(600ml)",
    price: "674",
    originalPrice: "749",
    off: "10%",
    offer: "Buy 1 Get 1 Free",
    categoryName: "Hair",
    productType: "shampoo",
    ratings: {
      value: "4.2",
      count: "2035"
    },
    inStock: true,
    isBestSeller: true,
    quantity: 0
  },
  {
    _id: uuid(),
    name: "Mamaearth Onion Hair Oil with Onion & Redensyl for Hair Fall Control",
    image: "https://images.mamaearth.in/catalog/product/_/o/_onion-oil-250ml__1.jpg?fit=contain&width=640",
    brand: "mamaearth",
    size: "(250ml)",
    price: "539",
    originalPrice: "599",
    off: "10%",
    offer: "Buy 1 Get 1 Free",
    categoryName: "Hair",
    productType: "hairoil",
    ratings: {
      value: "2.7",
      count: "2980"
    },
    inStock: false,
    isBestSeller: false,
    quantity: 0
  },
  {
    _id: uuid(),
    name: "Lakme 9 To 5 Complexion Care Face CC Cream SPF 30 PA++ - Beige",
    image: "https://media6.ppl-media.com/tr:h-750,w-750,c-at_max,dpr-2/static/img/product/255657/lakme-9-to-5-complexion-care-cc-cream-almond-30-g-11-11_8_display_1631683598_6c1169a0.jpg",
    brand: "Lakme",
    size: "(30g)",
    price: "252",
    originalPrice: "360",
    off: "30%",
    offer: "",
    categoryName: "Makeup",
    productType: "cream",
    ratings: {
      value: "4.4",
      count: "1982"
    },
    inStock: true,
    isBestSeller: true,
    quantity: 0
  },
  {
    _id: uuid(),
    name: "Lakme Eyeconic Liquid Eyeliner - Black",
    image: "https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/original/1080053/e7wQPkZ-WD-493214232_1.jpg?dpr=2",
    brand: "Lakme",
    size: "(4.5ml)",
    price: "234",
    originalPrice: "260",
    off: "10%",
    offer: "",
    categoryName: "Makeup",
    productType: "eyeliner",
    ratings: {
      value: "3.6",
      count: "3982"
    },
    inStock: true,
    isBestSeller: false,
    quantity: 0
  },
  {
    _id: uuid(),
    name: "Lakme 9 to 5 Weightless Matte Mousse Lip & Cheek Color - Blush Velvet",
    image: "https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/original/891919/IIC0tVaJB-8901030601750_1.jpg?dpr=2",
    brand: "Lakme",
    size: "(9gm)",
    price: "580",
    originalPrice: "725",
    off: "20%",
    offer: "",
    categoryName: "Makeup",
    productType: "blush",
    ratings: {
      value: "4.0",
      count: "19820"
    },
    inStock: true,
    isBestSeller: true,
    quantity: 0
  },
  {
    _id: uuid(),
    name: "Lakme Eyeconic Kajal - Twin Pack",
    image: "https://www.jiomart.com/images/product/600x600/491450421/lakme-eyeconic-kajal-twin-deep-black-0-35-g-product-images-o491450421-p491450421-0-202203170715.jpg",
    brand: "Lakme",
    size: "(0.7gm)",
    price: "265",
    originalPrice: "350",
    off: "10%",
    offer: "",
    categoryName: "Makeup",
    productType: "kajal",
    ratings: {
      value: "3.2",
      count: "39820"
    },
    inStock: true,
    isBestSeller: false,
    quantity: 0
  },
  {
    _id: uuid(),
    name: "Lakme 9 To 5 Primer + Matte Lipstick - MP8 Rosy Sunday",
    image: "https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/original/lakme/949643/0/uCjwpvyiuE-u9GJeYC9N9-949643_2.jpg?dpr=2",
    brand: "Lakme",
    size: "(3.6g)",
    price: "468",
    originalPrice: "550",
    off: "15%",
    offer: "",
    categoryName: "Makeup",
    productType: "lipstick",
    ratings: {
      value: "4.4",
      count: "25820"
    },
    inStock: true,
    isBestSeller: true,
    quantity: 0
  },
  {
    _id: uuid(),
    name: "Plum Green Tea Alcohol-Free Toner",
    image: "https://cdn.shopify.com/s/files/1/0390/2985/products/1_WBG_2_1024x1024.jpg?v=1658470167",
    brand: "Plum",
    size: "(200ml)",
    price: "293",
    originalPrice: "390",
    off: "25%",
    offer: "",
    categoryName: "Skin Care",
    productType: "toner",
    ratings: {
      value: "2.9",
      count: "5820"
    },
    inStock: true,
    isBestSeller: false,
    quantity: 0
  },
  {
    _id: uuid(),
    name: "Plum Green Tea Pore Cleansing Face Wash",
    image: "https://cdn.shopify.com/s/files/1/0390/2985/products/1_WBG_f0e36b22-42a8-40e7-810a-907d18b4f0f9_750x_1_1024x1024.webp?v=1682335169",
    brand: "Plum",
    size: "(75ml)",
    price: "249",
    originalPrice: "345",
    off: "20%",
    offer: "",
    categoryName: "Skin Care",
    productType: "facewash",
    ratings: {
      value: "3.5",
      count: "19823"
    },
    inStock: true,
    isBestSeller: false,
    quantity: 0
  },
  {
    _id: uuid(),
    name: "Plum Green Tea Renewed Clarity Night Gel",
    image: "https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/original/plum/915846/0/9rocG1Yk91-ilfCwB4oC9d-915846_1.jpg?dpr=2",
    brand: "Plum",
    size: "(50ml)",
    price: "518",
    originalPrice: "575",
    off: "10%",
    offer: "",
    categoryName: "Skin Care",
    productType: "cream",
    ratings: {
      value: "4.4",
      count: "16856"
    },
    inStock: true,
    isBestSeller: true,
    quantity: 0
  },
  {
    _id: uuid(),
    name: "Plum 15% Vitamin C Face Serum with Mandarin for Glow Boost with Pure Ethyl Ascorbic Acid",
    image: "https://media6.ppl-media.com/tr:h-750,w-750,c-at_max,dpr-2/static/img/product/242992/plum-15-percentage-vitamin-c-face-serum-with-mandarin-30-ml-for-glowing-skin-with-pure-ethyl-ascorbic-acid_8_display_1651477544_61d2d400.jpg",
    brand: "Plum",
    size: "(30ml)",
    price: "672",
    originalPrice: "790",
    off: "15%",
    offer: "",
    categoryName: "Skin Care",
    productType: "faceserum",
    ratings: {
      value: "4.1",
      count: "28553"
    },
    inStock: true,
    isBestSeller: true,
    quantity: 0
  },
  {
    _id: uuid(),
    name: "Plum BodyLovin' Hawaiian Rumba Eau de Parfum, Beachy Fragance, Mini Perfume Spray for Women",
    image: "https://cdn.shopify.com/s/files/1/0390/2985/products/HR_15ml_EDP_1080x1080_01_1024x1024.jpg?v=1666769564",
    brand: "Plum",
    size: "(15ml)",
    price: "280",
    originalPrice: "295",
    off: "5%",
    offer: "",
    categoryName: "Fragrance",
    productType: "perfume",
    ratings: {
      value: "1.5",
      count: "17780"
    },
    inStock: true,
    isBestSeller: false,
    quantity: 0
  },
  {
    _id: uuid(),
    name: "Plum BodyLovin' Vanilla Vibes Body Mist, Perfume Body Spray, Sweet Vanilla Fragrance for Women",
    image: "https://cdn.shopify.com/s/files/1/0390/2985/products/VV_150ml_BodyMist1080x1080_01_750x.jpg?v=1665560484",
    brand: "Plum",
    size: "(150ml)",
    price: "446",
    originalPrice: "525",
    off: "15%",
    offer: "",
    categoryName: "Fragrance",
    productType: "perfume",
    ratings: {
      value: "3.2",
      count: "1580"
    },
    inStock: true,
    isBestSeller: true,
    quantity: 0
  },
  {
    _id: uuid(),
    name: "Dot & Key Vitamin C + E Face Sunscreen With SPF 50 PA+++ For Glowing Skin, 100% No White Cast",
    image: "https://m.media-amazon.com/images/I/51i5cMLD8eL._SL1500_.jpg",
    brand: "Dot & Key",
    size: "(50g)",
    price: "421",
    originalPrice: "495",
    off: "15%",
    offer: "",
    categoryName: "Skin Care",
    productType: "sunscreen",
    ratings: {
      value: "4.0",
      count: "2553"
    },
    inStock: true,
    isBestSeller: true,
    quantity: 0
  },
  {
    _id: uuid(),
    name: "Dot & Key Vitamin C + E Super Bright Moisturizer For Glowing Skin-Fades Pigmentation & Dark Spots",
    image: "https://m.media-amazon.com/images/I/61BefSVVmTL._SL1500_.jpg",
    brand: "Dot & Key",
    size: "(60ml)",
    price: "506",
    originalPrice: "595",
    off: "15%",
    offer: "",
    categoryName: "Skin Care",
    productType: "moisturizer",
    ratings: {
      value: "1.2",
      count: "1553"
    },
    inStock: false,
    isBestSeller: false,
    quantity: 0
  },
  {
    _id: uuid(),
    name: "M.A.C Studio Fix Powder Plus Foundation - NC42",
    image: "https://sdcdn.io/mac/in/mac_sku_M51071_1x1_1.png?width=1080&height=1080",
    brand: "MAC",
    size: "(15gm)",
    price: "2250",
    originalPrice: "3000",
    off: "25%",
    offer: "",
    categoryName: "Makeup",
    productType: "foundation",
    ratings: {
      value: "2.9",
      count: "9593"
    },
    inStock: true,
    isBestSeller: false,
    quantity: 0
  },
  {
    _id: uuid(),
    name: "M.A.C Powder Kiss Lipstick - Marrakesh-mere",
    image: "https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/original/1082169/PgIFdoA5cU-773602588749_1.jpg?dpr=2",
    brand: "MAC",
    size: "(3gm)",
    price: "1650",
    originalPrice: "2200",
    off: "25%",
    offer: "",
    categoryName: "Makeup",
    productType: "lipstick",
    ratings: {
      value: "4.4",
      count: "1981"
    },
    inStock: true,
    isBestSeller: true,
    quantity: 0
  },
  {
    _id: uuid(),
    name: "M.A.C Studio Fix Fluid SPF 15 Mini - NC15",
    image: "https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/original/pfr4G6eKc-M.A.C-Mini-Studio-Fix-Fluid-Foundation-SPF-15-NC15-(15ml).jpeg?dpr=2",
    brand: "MAC",
    size: "(15ml)",
    price: "1715",
    originalPrice: "1900",
    off: "15%",
    offer: "",
    categoryName: "Makeup",
    productType: "foundation",
    ratings: {
      value: "4.1",
      count: "1081"
    },
    inStock: true,
    isBestSeller: false,
    quantity: 0
  },
  {
    _id: uuid(),
    name: "Veet Full Body Waxing Kit Easy-Gelwax Technology Dry Skin - 20 Strips",
    image: "https://chhotudihatti.com/wp-content/uploads/2022/08/Veet-Full-Body-Waxing-Kit-Easy-Gelwax-Technology-Dry-Skin-20-Strips.jpg",
    brand: "Veet",
    size: "(20Strips)",
    price: "207",
    originalPrice: "259",
    off: "20%",
    offer: "",
    categoryName: "Bath & Body",
    productType: "bodywax",
    ratings: {
      value: "4.2",
      count: "19072"
    },
    inStock: true,
    isBestSeller: true,
    quantity: 0
  },
  {
    _id: uuid(),
    name: "Veet 5 In 1 Skin Benefits Hair Removal Cream- Sensitive Skin",
    image: "https://pixiesmediapull-145ca.kxcdn.com/pub/media/catalog/product/cache/39500cf9d88472c26e1ec72addc15f3a/v/e/veet-5-in-1-skin-benefits-hair-removal-cream-sensitive-skin-50gm_.jpg",
    brand: "Veet",
    size: "(50gm)",
    price: "108",
    originalPrice: "135",
    off: "20%",
    offer: "",
    categoryName: "Bath & Body",
    productType: "bodywax",
    ratings: {
      value: "3.5",
      count: "6041"
    },
    inStock: false,
    isBestSeller: false,
    quantity: 0
  },
  {
    _id: uuid(),
    name: "NIVEA Body Wash, Fresh Powerfruit Shower Gel, with Antioxidants & Blueberry Scent",
    image: "https://m.media-amazon.com/images/I/41NR0sXI8UL.jpg",
    brand: "NIVEA",
    size: "(250ml)",
    price: "213",
    originalPrice: "250",
    off: "15%",
    offer: "",
    categoryName: "Bath & Body",
    productType: "bodywash",
    ratings: {
      value: "3.9",
      count: "1678"
    },
    inStock: true,
    isBestSeller: true,
    quantity: 0
  },
  {
    _id: uuid(),
    name: "NIVEA Nourishing Body Milk Lotion With Deep Moisture Serum",
    image: "https://m.media-amazon.com/images/I/41YYjKKbruL._SL1001_.jpg",
    brand: "NIVEA",
    size: "(600ml)",
    price: "469",
    originalPrice: "625",
    off: "25%",
    offer: "",
    categoryName: "Bath & Body",
    productType: "bodylotion",
    ratings: {
      value: "4.5",
      count: "1678"
    },
    inStock: true,
    isBestSeller: false,
    quantity: 0
  },
  {
    _id: uuid(),
    name: "Philips Heated Straightening Brush (BHH880/10)",
    image: "https://m.media-amazon.com/images/I/51F4Fsq42SL._SL1000_.jpg",
    brand: "Philips",
    size: "",
    price: "2956",
    originalPrice: "3695",
    off: "20%",
    offer: "",
    categoryName: "Appliances",
    productType: "straightners",
    ratings: {
      value: "4",
      count: "12078"
    },
    inStock: true,
    isBestSeller: false,
    quantity: 0
  },
  {
    _id: uuid(),
    name: "Philips Hair Dryer (HP8120/00)",
    image: "https://m.media-amazon.com/images/I/51pxIjmlLAL._SL1227_.jpg",
    brand: "Philips",
    size: "",
    price: "1076",
    originalPrice: "1345",
    off: "20%",
    offer: "",
    categoryName: "Appliances",
    productType: "dryer",
    ratings: {
      value: "4.2",
      count: "1258"
    },
    inStock: true,
    isBestSeller: true,
    quantity: 0
  },
];

