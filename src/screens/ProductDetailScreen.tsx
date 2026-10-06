import React from 'react'
import {
  View, Text, ScrollView, Image, TouchableOpacity, StyleSheet,
} from 'react-native'
import { colors, spacing } from '../theme'
import { money } from '../data'
import { Product } from '../types'

interface ProductDetailProps {
  product: Product
  onBack: () => void
  onAdd: () => void
  liked: boolean
  toggleLike: () => void
}

export default function ProductDetail({ product, onBack, onAdd, liked, toggleLike }: ProductDetailProps) {
  return (
    <ScrollView style={s.container} showsVerticalScrollIndicator={false}>
      {/* Back */}
      <TouchableOpacity style={s.backBtn} onPress={onBack}>
        <Text style={s.backText}>← Back to the edit</Text>
      </TouchableOpacity>

      {/* Gallery */}
      <Image source={{ uri: product.image }} style={s.mainImage} />
      <View style={s.thumbRow}>
        <Image source={{ uri: product.image }} style={s.thumb} />
        <Image source={{ uri: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=250&q=80' }} style={s.thumb} />
        <View style={[s.thumb, s.thumbMore]}>
          <Text style={s.thumbMoreText}>+4</Text>
        </View>
      </View>

      <View style={s.content}>
        {/* Eyebrow + title */}
        <View style={s.eyebrow}>
          <View style={s.eyebrowLine} />
          <Text style={s.eyebrowText}>{product.tag}</Text>
        </View>
        <Text style={s.title}>{product.name}</Text>
        <Text style={s.maker}>by <Text style={{ textDecorationLine: 'underline', color: colors.ink }}>{product.maker}</Text> · {product.city}</Text>

        {/* Rating */}
        <View style={s.rating}>
          <Text style={s.star}>★</Text>
          <Text style={s.ratingScore}>4.9</Text>
          <Text style={s.ratingCount}>(18 stories)</Text>
        </View>

        {/* Price */}
        <Text style={s.price}>{money(product.price)}</Text>

        {/* Description */}
        <Text style={s.description}>
          A one-of-one layer built from rescued {product.material.toLowerCase()}, cut and hand-finished in small batches. The kind of piece that gets better every time you tell its story.
        </Text>

        {/* Fields */}
        <View style={s.fields}>
          {[['Material', product.material], ['Fit', 'Relaxed · M–L'], ['Ships from', product.city]].map(([label, val]) => (
            <View key={label} style={s.field}>
              <Text style={s.fieldLabel}>{label}</Text>
              <Text style={s.fieldVal}>{val}</Text>
            </View>
          ))}
        </View>

        {/* Actions */}
        <View style={s.actions}>
          <TouchableOpacity style={s.addBtn} onPress={onAdd}>
            <Text style={s.addBtnText}>Add to bag 🛍</Text>
          </TouchableOpacity>
          <TouchableOpacity style={s.saveBtn} onPress={toggleLike}>
            <Text style={[s.saveBtnText, liked && { color: colors.terracotta }]}>
              {liked ? '♥ Saved' : '♡ Save for later'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Impact note */}
        <View style={s.impactNote}>
          <Text style={s.impactIcon}>🌿</Text>
          <View style={{ flex: 1 }}>
            <Text style={s.impactTitle}>Your purchase keeps the loop moving.</Text>
            <Text style={s.impactText}>Supports {product.maker}, diverts approx. 0.6 kg from landfill and earns you 48 ReThread points.</Text>
          </View>
        </View>

        {/* Maker strip */}
        <View style={s.makerStrip}>
          <View style={s.makerAvatar}>
            <Text style={s.makerAvatarText}>AS</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={s.makerLabel}>Meet the maker</Text>
            <Text style={s.makerName}>{product.maker}</Text>
            <Text style={s.makerMeta}>Jaipur · 42 completed projects · ★ 4.9</Text>
          </View>
          <TouchableOpacity style={s.viewMakerBtn}>
            <Text style={s.viewMakerText}>View maker →</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.paper },
  backBtn: { padding: spacing.lg, paddingBottom: spacing.sm },
  backText: { color: colors.muted, fontSize: 12 },
  mainImage: { width: '100%', height: 380 },
  thumbRow: { flexDirection: 'row', gap: 8, padding: spacing.md, paddingTop: spacing.sm },
  thumb: { width: 70, height: 80, borderRadius: 3 },
  thumbMore: { backgroundColor: colors.softSage, justifyContent: 'center', alignItems: 'center' },
  thumbMoreText: { fontSize: 12, color: colors.muted },
  content: { padding: spacing.lg },
  eyebrow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 10 },
  eyebrowLine: { width: 22, height: 1, backgroundColor: colors.sage },
  eyebrowText: { color: colors.sage, fontSize: 10, fontWeight: '700', letterSpacing: 1.5, textTransform: 'uppercase' },
  title: { fontSize: 38, fontWeight: '500', lineHeight: 40, marginBottom: 8 },
  maker: { color: colors.muted, fontSize: 13 },
  rating: { flexDirection: 'row', alignItems: 'center', gap: 5, marginVertical: 16 },
  star: { color: colors.sage, fontSize: 14 },
  ratingScore: { fontSize: 13, fontWeight: '600' },
  ratingCount: { color: colors.muted, fontSize: 11 },
  price: { fontSize: 22, fontWeight: '700', marginBottom: spacing.md },
  description: { color: colors.muted, fontSize: 13, lineHeight: 22, marginBottom: spacing.lg },
  fields: { flexDirection: 'row', borderTopWidth: 1, borderBottomWidth: 1, borderColor: colors.line, marginBottom: spacing.lg },
  field: { flex: 1, paddingVertical: 14, paddingHorizontal: 4, borderRightWidth: 1, borderColor: colors.line, gap: 6 },
  fieldLabel: { color: colors.muted, fontSize: 9, textTransform: 'uppercase', letterSpacing: 0.5 },
  fieldVal: { fontSize: 11, fontWeight: '600' },
  actions: { flexDirection: 'row', gap: 16, alignItems: 'center', marginBottom: spacing.lg },
  addBtn: { flex: 1, backgroundColor: colors.ink, paddingVertical: 14, borderRadius: 3, alignItems: 'center' },
  addBtnText: { color: colors.paper, fontWeight: '700', fontSize: 13 },
  saveBtn: { paddingHorizontal: 4, paddingVertical: 14 },
  saveBtnText: { fontSize: 12, color: colors.ink, fontWeight: '600' },
  impactNote: { backgroundColor: colors.softSage, padding: 16, flexDirection: 'row', gap: 12, borderRadius: 3, marginBottom: spacing.xl },
  impactIcon: { fontSize: 20, marginTop: 2 },
  impactTitle: { fontSize: 11, fontWeight: '700', marginBottom: 4 },
  impactText: { fontSize: 10, color: '#687060', lineHeight: 16 },
  makerStrip: { flexDirection: 'row', alignItems: 'center', gap: 12, borderTopWidth: 1, borderColor: colors.line, paddingTop: spacing.lg },
  makerAvatar: { width: 44, height: 44, borderRadius: 22, backgroundColor: colors.yellow, justifyContent: 'center', alignItems: 'center' },
  makerAvatarText: { fontWeight: '700', fontSize: 12 },
  makerLabel: { color: colors.muted, fontSize: 9, textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 2 },
  makerName: { fontSize: 13, fontWeight: '600' },
  makerMeta: { color: colors.muted, fontSize: 10, marginTop: 2 },
  viewMakerBtn: { borderWidth: 1, borderColor: colors.ink, paddingHorizontal: 12, paddingVertical: 8, borderRadius: 3 },
  viewMakerText: { fontSize: 10, fontWeight: '700' },
})
