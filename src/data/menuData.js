// Extracted from the RR Food menu PDF and restructured for the digital menu.
export const CATEGORIES = [
  'Appetizers & Bites',
  'Soups & Zuppas',
  'Tacos & Nachos',
  'Burgers',
  'Wraps',
  'Sandwiches',
  'Skinny Pizzas',
  'Pasta',
  'Breakfast',
  'Chinese',
  'Shakes',
  'Beverages',
  'Mocktails & Mojitos',
]

let id = 0
const item = (name, price, category, opts = {}) => ({
  id: `item-${id++}`,
  name,
  price,
  category,
  veg: opts.veg ?? true,
  desc: opts.desc,
})

export const MENU_ITEMS = [
  // Appetizers & Bites Size
  item('French Fries', 100, 'Appetizers & Bites'),
  item('Peri Peri Fries', 120, 'Appetizers & Bites'),
  item('Chilly Mushroom', 180, 'Appetizers & Bites'),
  item('Chicken Popcorn', 190, 'Appetizers & Bites', { veg: false }),
  item('Chilly Chicken', 210, 'Appetizers & Bites', { veg: false }),
  item('Cheese Garlic Bread', 150, 'Appetizers & Bites'),

  // Soups & Zuppas
  item('Hot & Sour Soup', 90, 'Soups & Zuppas'),
  item('Tomato Basil Soup', 110, 'Soups & Zuppas'),
  item('Add On Chicken (Soup)', 50, 'Soups & Zuppas', { veg: false, desc: 'Add-on for any soup' }),

  // Tacos & Nachos
  item('Pinto Bean Taco Veg', 180, 'Tacos & Nachos'),
  item('Chicken Keema Taco', 200, 'Tacos & Nachos', { veg: false }),
  item('Classic Veg Nacho', 180, 'Tacos & Nachos'),
  item('Chicken Nacho', 200, 'Tacos & Nachos', { veg: false }),

  // Burgers
  item('Supreme Veg Burger', 120, 'Burgers'),
  item('Paneer Mexican Burger', 160, 'Burgers'),
  item('Spicy Chicken Burger', 190, 'Burgers', { veg: false }),
  item('Grilled Chicken Burger', 220, 'Burgers', { veg: false }),

  // Wraps
  item('Paneer Tikka Wrap', 160, 'Wraps'),
  item('Green Veggie Wrap', 170, 'Wraps'),
  item('Aloo Tikka Wrap', 130, 'Wraps'),
  item('Spicy Paneer Wrap', 170, 'Wraps'),
  item('Chicken Tikka Wrap', 180, 'Wraps', { veg: false }),
  item('Smoked Chicken Crunch Wrap', 180, 'Wraps', { veg: false }),

  // Sandwiches
  item('Veg Club Sandwich', 160, 'Sandwiches'),
  item('Corn Spinach Sandwich', 180, 'Sandwiches'),
  item('Paneer Tikka Sandwich', 180, 'Sandwiches'),
  item('Classic Chicken Mayo Sandwich', 210, 'Sandwiches', { veg: false }),

  // Skinny Pizzas
  item('Margherita Pizza', 230, 'Skinny Pizzas'),
  item('Fresh Farm Veggies Pizza', 280, 'Skinny Pizzas'),
  item('Paneer Tikka Pizza', 300, 'Skinny Pizzas'),
  item('Chilly Paneer Pizza', 300, 'Skinny Pizzas'),
  item('Chilly Chicken Pizza', 300, 'Skinny Pizzas', { veg: false }),
  item('Grilled Herbed Chicken Pizza', 350, 'Skinny Pizzas', { veg: false }),

  // Pasta
  item('Arrabbiata Veg Pasta', 220, 'Pasta'),
  item('Creamy Alfredo Veg Pasta', 250, 'Pasta'),
  item('Add On Veg (Pasta)', 30, 'Pasta', { desc: 'Add-on for any pasta' }),
  item('Add On Chicken (Pasta)', 60, 'Pasta', { veg: false, desc: 'Add-on for any pasta' }),

  // Breakfast (Omelette + Maggie)
  item('Boiled Egg (4 pcs)', 100, 'Breakfast', { veg: false }),
  item('Scrambled Egg', 100, 'Breakfast', { veg: false }),
  item('Masala Omelette', 100, 'Breakfast', { veg: false }),
  item('Half Fry Egg (4 pcs)', 100, 'Breakfast', { veg: false }),
  item('Plain Maggie', 70, 'Breakfast'),
  item('Indian Style Masala Maggie', 90, 'Breakfast'),
  item('Creamy Veggie Maggie', 110, 'Breakfast'),

  // Chinese Mains + Combo Sizzler
  item('Veg Hakka Noodles', 180, 'Chinese'),
  item('Chilly Garlic Noodles', 190, 'Chinese'),
  item('Veg Fried Rice', 180, 'Chinese'),
  item('Schezwan Fried Rice', 200, 'Chinese'),
  item('Asian Chilly Cottage Cheese With Gravy', 250, 'Chinese'),
  item('Chilly Chicken With Gravy', 220, 'Chinese', { veg: false }),
  item('Add On Egg (Chinese)', 50, 'Chinese', { veg: false, desc: 'Add-on for any Chinese main' }),
  item('Add On Chicken (Chinese)', 60, 'Chinese', { veg: false, desc: 'Add-on for any Chinese main' }),
  item('Chilly Paneer + Noodles Combo', 300, 'Chinese', { desc: 'Combo sizzler' }),
  item('Chilly Chicken + Fried Rice Combo', 350, 'Chinese', { veg: false, desc: 'Combo sizzler' }),
  item('Chicken Dragon + Schezwan Fried Rice Combo', 380, 'Chinese', { veg: false, desc: 'Combo sizzler' }),

  // Shakes
  item('Vanilla Oreo Shake', 180, 'Shakes'),
  item('Brownie Shake', 180, 'Shakes'),
  item('Jamaican Shake', 180, 'Shakes'),
  item('Ice Cream Cold Coffee', 180, 'Shakes'),
  item('Mary Strawberry Shake', 180, 'Shakes'),
  item('Blueberry Shake', 180, 'Shakes'),
  item('Banana Caramel Shake', 180, 'Shakes'),

  // Beverages: Ice Tea + Hot Coffee & Tea
  item('Lemon Ice Tea', 80, 'Beverages'),
  item('Peach Ice Tea', 80, 'Beverages'),
  item('Passion Fruit Ice Tea', 100, 'Beverages'),
  item('Blue Lagoon', 100, 'Beverages'),
  item('Fresh Lime Soda', 100, 'Beverages'),
  item('Hot Coffee', 100, 'Beverages'),
  item('Tea', 50, 'Beverages'),

  // Mocktails
  item('Masala Drink', 70, 'Mocktails & Mojitos'),
  item('Orange & Mint Ginger Beer', 100, 'Mocktails & Mojitos'),
  item('Jamaican Ginger Beer', 100, 'Mocktails & Mojitos'),
  item('Grapes & Mint Ginger Beer', 120, 'Mocktails & Mojitos'),
  item('Cranberry & Mint Ginger Beer', 130, 'Mocktails & Mojitos'),
  item('Apple & Mint Ginger Beer', 150, 'Mocktails & Mojitos'),
  item('Pomegranate & Mint Ginger', 160, 'Mocktails & Mojitos'),
  item('Pina Colada', 180, 'Mocktails & Mojitos'),

  // Mojitos
  item('Virgin Lemon Mojito', 100, 'Mocktails & Mojitos'),
  item('Strawberry Mojito', 100, 'Mocktails & Mojitos'),
  item('Green Apple Mojito', 140, 'Mocktails & Mojitos'),
  item('Black Mojito', 120, 'Mocktails & Mojitos'),
]
