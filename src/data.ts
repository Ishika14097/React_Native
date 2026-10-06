import { Product, Designer, TimelineItem } from './types'

export const products: Product[] = [
  { id: 1, name: 'Indigo Patchwork Jacket', maker: 'Aarohi Studio', city: 'Jaipur', price: 4890, category: 'Outerwear', material: 'Denim', image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=85', color: 'Indigo', tag: 'One of one', liked: false },
  { id: 2, name: 'Monsoon Carryall', maker: 'The Reclaim Room', city: 'Mumbai', price: 1650, category: 'Bags', material: 'Cotton', image: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=900&q=85', color: 'Terracotta', tag: 'Bestseller', liked: true },
  { id: 3, name: 'Sari Drape Dress', maker: 'Nila Collective', city: 'Bengaluru', price: 3950, category: 'Dresses', material: 'Silk sari', image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=900&q=85', color: 'Sage', tag: 'New drop', liked: false },
  { id: 4, name: 'Kantha Cloud Cushion', maker: 'Mitti Works', city: 'Kolkata', price: 980, category: 'Home', material: 'Kantha', image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=900&q=85', color: 'Ochre', tag: 'Low impact', liked: false },
  { id: 5, name: 'Indigo Daypack', maker: 'Kachra Khaas', city: 'Pune', price: 2240, category: 'Bags', material: 'Denim', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85', color: 'Blue', tag: '3 left', liked: false },
  { id: 6, name: 'Hand-embroidered Shirt', maker: 'Aarohi Studio', city: 'Jaipur', price: 2780, category: 'Tops', material: 'Cotton', image: 'https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?auto=format&fit=crop&w=900&q=85', color: 'Ivory', tag: 'Small batch', liked: false },
  { id: 7, name: 'Rag Rug No. 04', maker: 'Mitti Works', city: 'Kolkata', price: 1350, category: 'Home', material: 'Cotton', image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&w=900&q=85', color: 'Multi', tag: 'Slow made', liked: false },
  { id: 8, name: 'Sari Knot Bag', maker: 'Nila Collective', city: 'Bengaluru', price: 1250, category: 'Accessories', material: 'Silk sari', image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85', color: 'Rose', tag: 'One of one', liked: false },
]

export const designers: Designer[] = [
  { name: 'Aarohi Studio', city: 'Jaipur', specialty: 'Denim stories & hand embroidery', image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=700&q=85', projects: 42 },
  { name: 'Nila Collective', city: 'Bengaluru', specialty: 'Sari drapes & soft tailoring', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=700&q=85', projects: 68 },
  { name: 'The Reclaim Room', city: 'Mumbai', specialty: 'Utility objects from deadstock', image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=700&q=85', projects: 31 },
  { name: 'Mitti Works', city: 'Kolkata', specialty: 'Kantha textiles & home objects', image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=700&q=85', projects: 27 },
]

export const timeline: TimelineItem[] = [
  { title: 'Submitted', date: '12 Mar 2024', copy: 'Your cotton shirts arrived in our care.', done: true },
  { title: 'Assigned to designer', date: '15 Mar 2024', copy: 'Aarohi Studio in Jaipur picked your pieces.', done: true },
  { title: 'Being transformed', date: 'In progress', copy: 'Your shirts are becoming an embroidered day jacket.', done: true },
  { title: 'Listed for sale', date: 'Coming soon', copy: 'We will let you know the moment it is ready.', done: false },
]

export const money = (value: number) => `₹${value.toLocaleString('en-IN')}`
