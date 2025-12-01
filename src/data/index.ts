import { Product, Category, Review } from '../types'

export const categories: Category[] = [
  {
    id: 'dogs',
    name: 'Dogs',
    description: 'Everything your canine companion needs',
    image: '/images/categories/dogs.jpg',
    color: 'blue',
    subcategories: ['Food', 'Toys', 'Beds', 'Grooming', 'Collars & Leashes', 'Training', 'Health', 'Clothing']
  },
  {
    id: 'cats',
    name: 'Cats',
    description: 'Premium products for your feline friends',
    image: '/images/categories/cats.jpg',
    color: 'purple',
    subcategories: ['Food', 'Toys', 'Beds', 'Grooming', 'Collars', 'Litter', 'Scratching', 'Health']
  },
  {
    id: 'birds',
    name: 'Birds',
    description: 'Supplies for feathered friends',
    image: '/images/categories/birds.jpg',
    color: 'green',
    subcategories: ['Food', 'Toys', 'Cages', 'Perches', 'Grooming', 'Health']
  },
  {
    id: 'fish',
    name: 'Fish',
    description: 'Aquatic supplies for underwater pets',
    image: '/images/categories/fish.jpg',
    color: 'cyan',
    subcategories: ['Food', 'Tanks', 'Filters', 'Decorations', 'Heating', 'Lighting', 'Water Care']
  },
  {
    id: 'reptiles',
    name: 'Reptiles',
    description: 'Habitats and supplies for reptilian pets',
    image: '/images/categories/reptiles.jpg',
    color: 'orange',
    subcategories: ['Food', 'Habitats', 'Heating', 'Lighting', 'Substrate', 'Decorations', 'Health']
  },
  {
    id: 'small-animals',
    name: 'Small Animals',
    description: 'Essentials for rabbits, guinea pigs, and more',
    image: '/images/categories/small-animals.jpg',
    color: 'pink',
    subcategories: ['Food', 'Cages', 'Bedding', 'Toys', 'Grooming', 'Health', 'Harnesses']
  }
]

export const featuredProducts: Product[] = [
  {
    id: '1',
    name: 'Premium Chicken Dog Treats',
    price: 12.99,
    originalPrice: 16.99,
    description: 'All-natural chicken treats made with real ingredients. Perfect for training and rewarding your good boy!',
    category: 'dogs',
    subcategory: 'Food',
    image: '/images/products/dog-treats.jpg',
    images: ['/images/products/dog-treats-1.jpg', '/images/products/dog-treats-2.jpg', '/images/products/dog-treats-3.jpg'],
    rating: 4.8,
    reviewCount: 234,
    inStock: true,
    stockCount: 45,
    brand: 'PetPremium',
    features: ['All-natural ingredients', 'Grain-free', 'Made in USA', 'No artificial preservatives'],
    size: ['Small (5oz)', 'Medium (12oz)', 'Large (24oz)'],
    tags: ['bestseller', 'grain-free', 'training'],
    isOnSale: true,
    discount: 24
  },
  {
    id: '2',
    name: 'Interactive Cat Feather Wand',
    price: 8.99,
    description: 'Engage your cat with this interactive feather wand toy. Perfect for bonding and exercise!',
    category: 'cats',
    subcategory: 'Toys',
    image: '/images/products/cat-wand.jpg',
    images: ['/images/products/cat-wand-1.jpg', '/images/products/cat-wand-2.jpg'],
    rating: 4.6,
    reviewCount: 156,
    inStock: true,
    stockCount: 78,
    brand: 'PlayfulPaws',
    features: ['Natural feathers', 'Flexible wand', 'Bell attachment', 'Safe materials'],
    color: ['Blue', 'Pink', 'Green'],
    tags: ['interactive', 'exercise', 'bonding'],
    isNew: true
  },
  {
    id: '3',
    name: 'Orthopedic Dog Bed',
    price: 49.99,
    description: 'Provide ultimate comfort for your aging dog with memory foam orthopedic support.',
    category: 'dogs',
    subcategory: 'Beds',
    image: '/images/products/dog-bed.jpg',
    images: ['/images/products/dog-bed-1.jpg', '/images/products/dog-bed-2.jpg', '/images/products/dog-bed-3.jpg'],
    rating: 4.9,
    reviewCount: 412,
    inStock: true,
    stockCount: 23,
    brand: 'ComfortZone',
    features: ['Memory foam', 'Water-resistant cover', 'Non-slip bottom', 'Machine washable'],
    size: ['Small', 'Medium', 'Large', 'Extra Large'],
    color: ['Gray', 'Brown', 'Navy'],
    tags: ['orthopedic', 'senior-dogs', 'comfort']
  },
  {
    id: '4',
    name: 'Automatic Pet Feeder',
    price: 89.99,
    description: 'Schedule meals for your pet with this smart automatic feeder. Works with app control!',
    category: 'dogs',
    subcategory: 'Food',
    image: '/images/products/auto-feeder.jpg',
    images: ['/images/products/auto-feeder-1.jpg', '/images/products/auto-feeder-2.jpg'],
    rating: 4.5,
    reviewCount: 89,
    inStock: true,
    stockCount: 15,
    brand: 'SmartPet',
    features: ['App controlled', '6 meal slots', 'Voice recording', 'Battery backup'],
    tags: ['smart', 'convenience', 'tech'],
    isNew: true
  },
  {
    id: '5',
    name: 'Cat Scratching Post',
    price: 24.99,
    description: 'Save your furniture with this durable cat scratching post. Natural sisal material.',
    category: 'cats',
    subcategory: 'Scratching',
    image: '/images/products/cat-post.jpg',
    images: ['/images/products/cat-post-1.jpg', '/images/products/cat-post-2.jpg'],
    rating: 4.4,
    reviewCount: 178,
    inStock: true,
    stockCount: 34,
    brand: 'KittyComfort',
    features: ['Natural sisal', 'Sturdy base', 'Hanging toy', 'Easy assembly'],
    color: ['Beige', 'Gray'],
    tags: ['furniture-protection', 'natural'],
    isOnSale: true,
    discount: 17
  },
  {
    id: '6',
    name: 'Bird Cage with Stand',
    price: 129.99,
    description: 'Spacious bird cage with stand, perfect for medium-sized birds. Includes perches and feeders.',
    category: 'birds',
    subcategory: 'Cages',
    image: '/images/products/bird-cage.jpg',
    images: ['/images/products/bird-cage-1.jpg', '/images/products/bird-cage-2.jpg'],
    rating: 4.7,
    reviewCount: 92,
    inStock: true,
    stockCount: 12,
    brand: 'AvianHome',
    features: ['Stainless steel', 'Removable tray', 'Multiple perches', 'Seed guards'],
    size: ['Medium', 'Large'],
    tags: ['spacious', 'easy-clean']
  },
  {
    id: '7',
    name: 'Fish Tank Starter Kit',
    price: 79.99,
    description: 'Complete aquarium setup for beginners. Includes tank, filter, heater, and decorations.',
    category: 'fish',
    subcategory: 'Tanks',
    image: '/images/products/fish-tank.jpg',
    images: ['/images/products/fish-tank-1.jpg', '/images/products/fish-tank-2.jpg'],
    rating: 4.6,
    reviewCount: 203,
    inStock: true,
    stockCount: 28,
    brand: 'AquaLife',
    features: ['10 gallon tank', 'LED lighting', 'Filter included', 'Starter kit'],
    tags: ['beginner', 'complete-set'],
    isNew: true
  },
  {
    id: '8',
    name: 'Reptile Heat Lamp',
    price: 34.99,
    description: 'Provide essential heat for your reptile with this adjustable heat lamp and bulb.',
    category: 'reptiles',
    subcategory: 'Heating',
    image: '/images/products/heat-lamp.jpg',
    images: ['/images/products/heat-lamp-1.jpg', '/images/products/heat-lamp-2.jpg'],
    rating: 4.5,
    reviewCount: 67,
    inStock: true,
    stockCount: 41,
    brand: 'ReptiHeat',
    features: ['Adjustable temperature', 'Ceramic emitter', 'Safety clamp', 'Long-lasting bulb'],
    tags: ['essential', 'temperature-control']
  }
]

export const reviews: Review[] = [
  {
    id: '1',
    productId: '1',
    customerName: 'Sarah Johnson',
    rating: 5,
    title: 'My dog loves these treats!',
    content: 'These are by far the best dog treats I\'ve ever purchased. My golden retriever goes crazy for them and they\'re great for training. The ingredients are all natural which gives me peace of mind.',
    date: '2024-01-15',
    helpful: 23,
    verified: true
  },
  {
    id: '2',
    productId: '1',
    customerName: 'Mike Chen',
    rating: 4,
    title: 'Good quality, a bit pricey',
    content: 'The treats are high quality and my dog enjoys them. My only complaint is the price - they\'re a bit expensive compared to other options. However, you do get what you pay for in terms of ingredients.',
    date: '2024-01-10',
    helpful: 12,
    verified: true
  },
  {
    id: '3',
    productId: '3',
    customerName: 'Emily Rodriguez',
    rating: 5,
    title: 'Perfect for my senior dog',
    content: 'My 12-year-old lab has arthritis and this bed has made such a difference. The memory foam provides great support and he seems much more comfortable. Worth every penny!',
    date: '2024-01-08',
    helpful: 34,
    verified: true,
    images: ['/images/reviews/dog-bed-review.jpg']
  }
]

export const brands = [
  'PetPremium', 'PlayfulPaws', 'ComfortZone', 'SmartPet', 'KittyComfort', 
  'AvianHome', 'AquaLife', 'ReptiHeat', 'HealthyPaws', 'NatureBest'
]

export const testimonials = [
  {
    id: '1',
    name: 'Jessica Martinez',
    rating: 5,
    content: 'Pet Stuff has everything I need for my two dogs and three cats. The quality is consistently excellent and the shipping is always fast!',
    image: '/images/testimonials/jessica.jpg'
  },
  {
    id: '2',
    name: 'David Thompson',
    rating: 5,
    content: 'Great selection of products and competitive prices. The customer service team helped me choose the right food for my senior dog. Highly recommend!',
    image: '/images/testimonials/david.jpg'
  },
  {
    id: '3',
    name: 'Amanda Foster',
    rating: 5,
    content: 'I love shopping at Pet Stuff! The website is easy to navigate and they always have the latest products for my pets. The loyalty program is a nice bonus too.',
    image: '/images/testimonials/amanda.jpg'
  }
]