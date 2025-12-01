export interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  description: string
  category: string
  subcategory: string
  image: string
  images: string[]
  rating: number
  reviewCount: number
  inStock: boolean
  stockCount?: number
  brand: string
  features: string[]
  size?: string[]
  color?: string[]
  tags: string[]
  isNew?: boolean
  isOnSale?: boolean
  discount?: number
}

export interface Category {
  id: string
  name: string
  description: string
  image: string
  color: string
  subcategories: string[]
}

export interface CartItem extends Product {
  quantity: number
  selectedSize?: string
  selectedColor?: string
}

export interface Review {
  id: string
  productId: string
  customerName: string
  rating: number
  title: string
  content: string
  date: string
  helpful: number
  verified: boolean
  images?: string[]
}

export interface User {
  id: string
  name: string
  email: string
  phone?: string
  addresses: Address[]
  wishlist: string[]
  orderHistory: Order[]
  pets: Pet[]
}

export interface Address {
  id: string
  type: 'shipping' | 'billing'
  street: string
  city: string
  state: string
  zipCode: string
  country: string
  isDefault: boolean
}

export interface Order {
  id: string
  date: string
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
  items: CartItem[]
  subtotal: number
  shipping: number
  tax: number
  total: number
  shippingAddress: Address
  paymentMethod: string
  trackingNumber?: string
}

export interface Pet {
  id: string
  name: string
  type: string
  breed?: string
  age?: string
  weight?: string
  image?: string
}

export interface FilterOptions {
  category: string
  subcategory: string
  priceRange: [number, number]
  brand: string[]
  rating: number
  inStock: boolean
  sortBy: 'popular' | 'price-low' | 'price-high' | 'newest' | 'rating'
}