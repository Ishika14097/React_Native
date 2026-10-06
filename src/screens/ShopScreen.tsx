import React, { useState, useMemo } from 'react'
import {
  View, Text, ScrollView, Image, TextInput, TouchableOpacity, StyleSheet, Dimensions,
} from 'react-native'
import { colors, spacing } from '../theme'
import { products, money } from '../data'
import { Product, View as AppView } from '../types'

const { width } = Dimensions.get('window')
const CARD_W = (width - spacing.md * 3) / 2

const CATEGORIES = ['All pieces', 'Outerwear', 'Bags', 'Dresses', 'Tops', 'Home', 'Accessories']

interface ShopProps {
  onProduct: (p: Product) => void
  liked: number[]
  toggleLike: (id: number) => void
}

export default function Shop({ onProduct, liked, toggleLike }: ShopProps) {
  const [search, setSearch] = useState('')
  const [activeCategory, setCategory] = useState('All pieces')

  const filtered = useMemo(() => products.filter((p) => {
    const catOk = activeCategory === 'All pieces' || p.category === activeCategory
    const searchOk = `${p.name} ${p.maker} ${p.material}`.toLowerCase().includes(search.toLowerCase())
    return catOk && searchOk
  }), [search, activeCategory])

  return (
    <View style={{ flex: 1, backgroundColor: colors.paper }}>
      {/* Shop Header */}
      <View style={s.header}>
        <View style={s.eyebrow}>
          <View style={s.eyebrowLine} />
          <Text style={s.eyebrowText}>The ReThread edit</Text>
        </View>
        <Text style={s.title}>Made once.{'\n'}<Text style={s.italic}>Made again.</Text></Text>
        <Text style={s.subtitle}>One-of-one clothing and objects made by India's most thoughtful upcyclers.</Text>
      </View>

      {/* Search */}
      <View style={s.searchBar}>
        <Text style={s.searchIcon}>🔍</Text>
        <TextInput
          style={s.searchInput}
          placeholder="Search pieces, makers, materials..."
          placeholderTextColor={colors.muted}
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* Categories */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={s.catScroll} contentContainerStyle={s.catContent}>
        {CATEGORIES.map((cat) => (
          <TouchableOpacity key={cat} style={[s.catBtn, activeCategory === cat && s.catBtnActive]} onPress={() => setCategory(cat)}>
            <Text style={[s.catText, activeCategory === cat && s.catTextActive]}>{cat}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Result count */}
      <View style={s.resultRow}>
        <Text style={s.resultText}>Showing {filtered.length} pieces</Text>
      </View>

      {/* Product Grid */}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={s.grid}>
        <View style={s.gridInner}>
          {filtered.map((product) => (
            <View key={product.id} style={s.productWrap}>
              <TouchableOpacity onPress={() => onProduct(product)}>
                <Image source={{ uri: product.image }} style={s.productImage} />
                <View style={s.productTagBadge}>
                  <Text style={s.productTagText}>{product.tag}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={[s.likeBtn, liked.includes(product.id) && s.likeBtnActive]}
                onPress={() => toggleLike(product.id)}
              >
                <Text style={s.likeIcon}>{liked.includes(product.id) ? '♥' : '♡'}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onProduct(product)}>
                <Text style={s.productName}>{product.name}</Text>
                <Text style={s.productMaker}>{product.maker} · {product.city}</Text>
                <Text style={s.productPrice}>{money(product.price)}</Text>
                <Text style={s.productMaterial}>{product.material} · {product.color}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
        {filtered.length === 0 && (
          <View style={s.empty}>
            <Text style={s.emptyIcon}>🔍</Text>
            <Text style={s.emptyTitle}>No pieces found</Text>
            <Text style={s.emptyText}>Try a different material, maker or category.</Text>
          </View>
        )}
      </ScrollView>
    </View>
  )
}

const s = StyleSheet.create({
  header: { padding: spacing.lg, paddingBottom: spacing.md },
  eyebrow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 12 },
  eyebrowLine: { width: 22, height: 1, backgroundColor: colors.sage },
  eyebrowText: { color: colors.sage, fontSize: 10, fontWeight: '700', letterSpacing: 1.5, textTransform: 'uppercase' },
  title: { fontSize: 38, fontWeight: '500', lineHeight: 40, marginBottom: 10 },
  italic: { color: colors.terracotta, fontStyle: 'italic' },
  subtitle: { color: colors.muted, fontSize: 13, lineHeight: 20 },
  searchBar: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#f4f3ed', marginHorizontal: spacing.lg, borderRadius: 8, paddingHorizontal: 12, paddingVertical: 10, marginBottom: 12, gap: 8 },
  searchIcon: { fontSize: 14 },
  searchInput: { flex: 1, fontSize: 13, color: colors.ink },
  catScroll: { maxHeight: 42 },
  catContent: { paddingHorizontal: spacing.lg, gap: 8 },
  catBtn: { paddingHorizontal: 14, paddingVertical: 8, borderRadius: 20, backgroundColor: '#f0efea' },
  catBtnActive: { backgroundColor: colors.ink },
  catText: { fontSize: 11, color: colors.muted, fontWeight: '600' },
  catTextActive: { color: colors.paper },
  resultRow: { paddingHorizontal: spacing.lg, paddingVertical: 10, borderTopWidth: 1, borderColor: colors.line },
  resultText: { fontSize: 11, color: colors.muted },
  grid: { padding: spacing.md },
  gridInner: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.md },
  productWrap: { width: CARD_W, position: 'relative' },
  productImage: { width: CARD_W, height: CARD_W * 1.3, borderRadius: 4 },
  productTagBadge: { position: 'absolute', top: 8, left: 8, backgroundColor: colors.paper, paddingHorizontal: 6, paddingVertical: 3, borderRadius: 2 },
  productTagText: { fontSize: 8, textTransform: 'uppercase', letterSpacing: 0.5 },
  likeBtn: { position: 'absolute', top: 8, right: 8, width: 30, height: 30, borderRadius: 15, backgroundColor: colors.paper, justifyContent: 'center', alignItems: 'center' },
  likeBtnActive: { backgroundColor: colors.terracotta },
  likeIcon: { fontSize: 14, color: colors.ink },
  productName: { fontSize: 12, fontWeight: '600', marginTop: 8 },
  productMaker: { color: colors.muted, fontSize: 10, marginTop: 2 },
  productPrice: { fontSize: 13, fontWeight: '700', marginTop: 4 },
  productMaterial: { color: '#93968a', fontSize: 9, marginTop: 4 },
  empty: { alignItems: 'center', padding: spacing.xxl },
  emptyIcon: { fontSize: 36 },
  emptyTitle: { fontSize: 18, fontWeight: '600', marginTop: 16 },
  emptyText: { color: colors.muted, fontSize: 13, marginTop: 6 },
})
