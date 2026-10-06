export type View = 'home' | 'shop' | 'product' | 'donate' | 'journey' | 'rewards' | 'studio' | 'admin'

export interface Product {
  id: number
  name: string
  maker: string
  city: string
  price: number
  category: string
  material: string
  image: string
  color: string
  tag: string
  liked: boolean
}

export interface Designer {
  name: string
  city: string
  specialty: string
  image: string
  projects: number
}

export interface TimelineItem {
  title: string
  date: string
  copy: string
  done: boolean
}
