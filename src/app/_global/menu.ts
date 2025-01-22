export const MENU_CATEGORIES = [
  "All",
  "Appetizers",
  "Pho",
  "Rice",
  "Vermicelli",
  "Banh Mi",
  "Desserts",
  "Drinks",
];

export const SIGNATURE_DISHES = [
  {
    name: "Bun Bo Hue",
    description: "Spicy beef noodle soup",
    image: "/bun-bo-hue-2.jpg",
  },
  {
    name: "Spring Roll",
    description: "Fresh spring rolls with shrimp and vegetables",
    image: "/spring-roll.jpg",
  },
  {
    name: "Bun Cha Gio",
    description: "Spring rolls with vermicelli",
    image: "/bun-cha-gio.jpg",
  },
  {
    name: "Pho Tai",
    description: "Rare beef noodle soup",
    image: "/pho-tai.jpg",
  },
  {
    name: "Pho Hai San",
    description: "Seafood noodle soup",
    image: "/pho-hai-san.jpg",
  },
  {
    name: "Curry",
    description: "Rich and creamy Vietnamese curry",
    image: "/curry.jpg",
  },
];

export interface MenuItems {
  category: string;
  name: string;
  price: string;
  ingredients?: string[];
}

export const MENU_ITEMS: MenuItems[] = [
  {
    category: "Appetizers",
    name: "Spring Rolls",
    price: "$5.00",
    ingredients: ["Rice paper", "Shrimp", "Pork", "Vegetables"],
  },
  {
    category: "Appetizers",
    name: "Egg Rolls",
    price: "$4.50",
    ingredients: ["Egg", "Pork", "Vegetables"],
  },
  {
    category: "Appetizers",
    name: "Shrimp Toast",
    price: "$6.00",
    ingredients: ["Shrimp", "Bread", "Garlic"],
  },
  {
    category: "Appetizers",
    name: "Chicken Wings",
    price: "$7.00",
    ingredients: ["Chicken", "Spices"],
  },
  {
    category: "Appetizers",
    name: "Crab Rangoon",
    price: "$6.50",
    ingredients: ["Crab", "Cream Cheese", "Wonton Wrapper"],
  },
  {
    category: "Appetizers",
    name: "Fried Calamari",
    price: "$8.00",
    ingredients: ["Calamari", "Flour", "Spices"],
  },
  {
    category: "Appetizers",
    name: "Stuffed Mushrooms",
    price: "$7.50",
    ingredients: ["Mushrooms", "Cheese", "Breadcrumbs"],
  },
  {
    category: "Appetizers",
    name: "Garlic Bread",
    price: "$4.00",
    ingredients: ["Bread", "Garlic", "Butter"],
  },

  {
    category: "Pho",
    name: "Pho Bo",
    price: "$10.00",
    ingredients: ["Beef", "Rice Noodles", "Broth"],
  },
  {
    category: "Pho",
    name: "Pho Ga",
    price: "$9.50",
    ingredients: ["Chicken", "Rice Noodles", "Broth"],
  },
  {
    category: "Pho",
    name: "Pho Tai",
    price: "$10.50",
    ingredients: ["Rare Beef", "Rice Noodles", "Broth"],
  },
  {
    category: "Pho",
    name: "Pho Dac Biet",
    price: "$11.00",
    ingredients: ["Special Beef", "Rice Noodles", "Broth"],
  },
  {
    category: "Pho",
    name: "Pho Chay",
    price: "$9.00",
    ingredients: ["Vegetables", "Rice Noodles", "Broth"],
  },
  {
    category: "Pho",
    name: "Pho Seafood",
    price: "$12.00",
    ingredients: ["Seafood", "Rice Noodles", "Broth"],
  },
  {
    category: "Pho",
    name: "Pho Nam",
    price: "$10.00",
    ingredients: ["Brisket", "Rice Noodles", "Broth"],
  },
  {
    category: "Pho",
    name: "Pho Ga Nuong",
    price: "$10.00",
    ingredients: ["Grilled Chicken", "Rice Noodles", "Broth"],
  },

  {
    category: "Rice",
    name: "Fried Rice",
    price: "$8.00",
    ingredients: ["Rice", "Vegetables", "Egg"],
  },
  { category: "Rice", name: "Steamed Rice", price: "$7.00" },
  {
    category: "Rice",
    name: "Chicken Fried Rice",
    price: "$8.50",
    ingredients: ["Rice", "Chicken", "Vegetables"],
  },
  {
    category: "Rice",
    name: "Beef Fried Rice",
    price: "$9.00",
    ingredients: ["Rice", "Beef", "Vegetables"],
  },
  {
    category: "Rice",
    name: "Shrimp Fried Rice",
    price: "$9.50",
    ingredients: ["Rice", "Shrimp", "Vegetables"],
  },
  {
    category: "Rice",
    name: "Pork Fried Rice",
    price: "$8.50",
    ingredients: ["Rice", "Pork", "Vegetables"],
  },
  {
    category: "Rice",
    name: "Vegetable Fried Rice",
    price: "$8.00",
    ingredients: ["Rice", "Vegetables"],
  },
  {
    category: "Rice",
    name: "Curry Fried Rice",
    price: "$9.00",
    ingredients: ["Rice", "Curry", "Vegetables"],
  },

  {
    category: "Vermicelli",
    name: "Bun Thit Nuong",
    price: "$9.00",
    ingredients: ["Grilled Pork", "Vermicelli", "Vegetables"],
  },
  {
    category: "Vermicelli",
    name: "Bun Cha Gio",
    price: "$8.50",
    ingredients: ["Spring Rolls", "Vermicelli", "Vegetables"],
  },
  {
    category: "Vermicelli",
    name: "Bun Bo Hue",
    price: "$10.00",
    ingredients: ["Beef", "Vermicelli", "Broth"],
  },
  {
    category: "Vermicelli",
    name: "Bun Rieu",
    price: "$10.50",
    ingredients: ["Crab", "Vermicelli", "Broth"],
  },
  {
    category: "Vermicelli",
    name: "Bun Ga Nuong",
    price: "$9.50",
    ingredients: ["Grilled Chicken", "Vermicelli", "Vegetables"],
  },
  {
    category: "Vermicelli",
    name: "Bun Tom Nuong",
    price: "$10.00",
    ingredients: ["Grilled Shrimp", "Vermicelli", "Vegetables"],
  },
  {
    category: "Vermicelli",
    name: "Bun Chay",
    price: "$8.50",
    ingredients: ["Vegetables", "Vermicelli"],
  },
  {
    category: "Vermicelli",
    name: "Bun Nem Nuong",
    price: "$9.00",
    ingredients: ["Grilled Pork Sausage", "Vermicelli", "Vegetables"],
  },

  {
    category: "Banh Mi",
    name: "Banh Mi Thit",
    price: "$6.00",
    ingredients: ["Pork", "Bread", "Vegetables"],
  },
  {
    category: "Banh Mi",
    name: "Banh Mi Ga",
    price: "$5.50",
    ingredients: ["Chicken", "Bread", "Vegetables"],
  },
  {
    category: "Banh Mi",
    name: "Banh Mi Cha Lua",
    price: "$6.50",
    ingredients: ["Pork Sausage", "Bread", "Vegetables"],
  },
  {
    category: "Banh Mi",
    name: "Banh Mi Xiu Mai",
    price: "$6.50",
    ingredients: ["Meatballs", "Bread", "Vegetables"],
  },
  {
    category: "Banh Mi",
    name: "Banh Mi Chay",
    price: "$5.00",
    ingredients: ["Vegetables", "Bread"],
  },
  {
    category: "Banh Mi",
    name: "Banh Mi Thit Nuong",
    price: "$6.00",
    ingredients: ["Grilled Pork", "Bread", "Vegetables"],
  },
  {
    category: "Banh Mi",
    name: "Banh Mi Bo",
    price: "$6.50",
    ingredients: ["Beef", "Bread", "Vegetables"],
  },
  {
    category: "Banh Mi",
    name: "Banh Mi Tom",
    price: "$6.50",
    ingredients: ["Shrimp", "Bread", "Vegetables"],
  },

  {
    category: "Desserts",
    name: "Che Ba Mau",
    price: "$4.00",
    ingredients: ["Beans", "Jelly", "Coconut Milk"],
  },
  {
    category: "Desserts",
    name: "Che Thai",
    price: "$4.50",
    ingredients: ["Fruits", "Jelly", "Coconut Milk"],
  },
  {
    category: "Desserts",
    name: "Banana Tapioca",
    price: "$4.00",
    ingredients: ["Banana", "Tapioca", "Coconut Milk"],
  },
  {
    category: "Desserts",
    name: "Mango Sticky Rice",
    price: "$5.00",
    ingredients: ["Mango", "Sticky Rice", "Coconut Milk"],
  },
  {
    category: "Desserts",
    name: "Fried Banana",
    price: "$4.50",
    ingredients: ["Banana", "Flour", "Sugar"],
  },
  {
    category: "Desserts",
    name: "Sesame Balls",
    price: "$4.00",
    ingredients: ["Sesame", "Rice Flour", "Red Bean Paste"],
  },
  {
    category: "Desserts",
    name: "Coconut Jelly",
    price: "$4.50",
    ingredients: ["Coconut", "Agar"],
  },
  {
    category: "Desserts",
    name: "Taro Pudding",
    price: "$4.00",
    ingredients: ["Taro", "Coconut Milk"],
  },

  { category: "Drinks", name: "Vietnamese Iced Coffee", price: "$3.00" },
  { category: "Drinks", name: "Thai Iced Tea", price: "$3.50" },
  { category: "Drinks", name: "Coconut Juice", price: "$3.00" },
  { category: "Drinks", name: "Soy Milk", price: "$2.50" },
  { category: "Drinks", name: "Lemonade", price: "$2.50" },
  { category: "Drinks", name: "Iced Tea", price: "$2.00" },
  { category: "Drinks", name: "Smoothie", price: "$4.00" },
  { category: "Drinks", name: "Milkshake", price: "$4.50" },
];
