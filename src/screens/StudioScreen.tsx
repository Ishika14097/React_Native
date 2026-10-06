import React from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { colors, spacing } from '../theme'
import { products, money } from '../data'
import { Product } from '../types'

interface StudioProps {
  onProduct: (p: Product) => void
}

export default function Studio({ onProduct }: StudioProps) {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {/* Welcome banner */}
      <View style={s.welcome}>
        <View>
          <View style={s.eyebrow}>
            <View style={s.eyebrowLine} />
            <Text style={s.eyebrowText}>Maker studio</Text>
          </View>
          <Text style={s.welcomeTitle}>Make room for{'\n'}<Text style={s.italic}>the unexpected.</Text></Text>
          <Text style={s.welcomeSub}>Your materials are waiting. Your next project might be too.</Text>
        </View>
        <TouchableOpacity style={s.proposalBtn}>
          <Text style={s.proposalBtnText}>Create a proposal +</Text>
        </TouchableOpacity>
      </View>

      {/* Stats */}
      <View style={s.stats}>
        {[
          ['Active projects', '04', '+1 this week'],
          ["Month's earnings", '₹48,620', '↑ 22% from Feb'],
          ['Profile views', '1,284', '↑ 18% this week'],
          ['Your rating', '4.9 ★', 'from 42 reviews'],
        ].map(([label, val, sub]) => (
          <View key={label} style={s.statItem}>
            <Text style={s.statLabel}>{label}</Text>
            <Text style={s.statVal}>{val}</Text>
            <Text style={s.statSub}>{sub}</Text>
          </View>
        ))}
      </View>

      <View style={s.content}>
        {/* Material board */}
        <View style={s.panel}>
          <View style={s.panelHeader}>
            <View>
              <View style={s.eyebrow}>
                <View style={s.eyebrowLine} />
                <Text style={s.eyebrowText}>Material board</Text>
              </View>
              <Text style={s.panelTitle}>Available for you</Text>
            </View>
            <TouchableOpacity>
              <Text style={s.panelLink}>Browse all →</Text>
            </TouchableOpacity>
          </View>
          {[
            ['Vintage denim', '18 pieces · Mumbai', 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=300&q=80'],
            ['Cotton shirts', '24 pieces · Bengaluru', 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=300&q=80'],
            ['Sari offcuts', '12 bundles · Jaipur', 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=300&q=80'],
          ].map(([title, meta, image]) => (
            <View key={title} style={s.materialRow}>
              <Image source={{ uri: image }} style={s.materialThumb} />
              <View style={{ flex: 1 }}>
                <Text style={s.materialName}>{title}</Text>
                <Text style={s.materialMeta}>{meta}</Text>
              </View>
              <TouchableOpacity style={s.addBtn}>
                <Text style={s.addBtnText}>+</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* Your work */}
        <View style={s.panel}>
          <View style={s.panelHeader}>
            <View>
              <View style={s.eyebrow}>
                <View style={s.eyebrowLine} />
                <Text style={s.eyebrowText}>Your work</Text>
              </View>
              <Text style={s.panelTitle}>In the making</Text>
            </View>
            <TouchableOpacity>
              <Text style={s.panelLink}>View projects →</Text>
            </TouchableOpacity>
          </View>
          {/* Active project card */}
          <View style={s.projectCard}>
            <Image source={{ uri: products[0].image }} style={s.projectImage} />
            <View style={s.projectInfo}>
              <View style={s.statusPill}>
                <View style={s.statusDot} />
                <Text style={s.statusText}>Production</Text>
              </View>
              <Text style={s.projectTitle}>{products[0].name}</Text>
              <Text style={s.projectMeta}>Due 28 Mar · 68% complete</Text>
              <View style={s.progressBar}>
                <View style={s.progressFill} />
              </View>
            </View>
          </View>
          {/* Live listing link */}
          <TouchableOpacity style={s.listingRow} onPress={() => onProduct(products[0])}>
            <Image source={{ uri: products[0].image }} style={s.listingThumb} />
            <View style={{ flex: 1 }}>
              <Text style={s.listingLabel}>Live listing</Text>
              <Text style={s.listingName}>{products[0].name}</Text>
              <Text style={s.listingMeta}>12 views today · {money(products[0].price)}</Text>
            </View>
            <Text style={s.listingArrow}>→</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

const s = StyleSheet.create({
  welcome: { backgroundColor: colors.sageDark, padding: spacing.lg, paddingVertical: spacing.xl, gap: spacing.lg },
  eyebrow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 12 },
  eyebrowLine: { width: 22, height: 1, backgroundColor: '#c0d0b9' },
  eyebrowText: { color: '#c0d0b9', fontSize: 10, fontWeight: '700', letterSpacing: 1.5, textTransform: 'uppercase' },
  welcomeTitle: { fontSize: 40, fontWeight: '500', lineHeight: 42, color: colors.paper, marginBottom: 10 },
  italic: { color: colors.yellow, fontStyle: 'italic' },
  welcomeSub: { color: '#b9c6b2', fontSize: 13, lineHeight: 20 },
  proposalBtn: { backgroundColor: colors.paper, paddingHorizontal: 18, paddingVertical: 12, borderRadius: 3, alignSelf: 'flex-start' },
  proposalBtnText: { color: colors.ink, fontWeight: '700', fontSize: 12 },
  stats: { flexDirection: 'row', flexWrap: 'wrap', borderTopWidth: 1, borderBottomWidth: 1, borderColor: colors.line },
  statItem: { width: '50%', padding: 16, borderRightWidth: 1, borderBottomWidth: 1, borderColor: colors.line, gap: 4 },
  statLabel: { fontSize: 10, color: colors.muted },
  statVal: { fontSize: 22, fontWeight: '500' },
  statSub: { fontSize: 10, color: colors.sage },
  content: { padding: spacing.lg, gap: spacing.lg },
  panel: { borderWidth: 1, borderColor: colors.line, borderRadius: 8, padding: spacing.md, gap: spacing.sm },
  panelHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: spacing.sm },
  panelTitle: { fontSize: 22, fontWeight: '500', margin: 0 },
  panelLink: { color: colors.sage, fontSize: 11, fontWeight: '600' },
  materialRow: { flexDirection: 'row', alignItems: 'center', gap: 12, borderTopWidth: 1, borderColor: colors.line, paddingVertical: 12 },
  materialThumb: { width: 50, height: 50, borderRadius: 4 },
  materialName: { fontSize: 12, fontWeight: '600' },
  materialMeta: { color: colors.muted, fontSize: 10, marginTop: 2 },
  addBtn: { width: 28, height: 28, borderRadius: 14, borderWidth: 1, borderColor: colors.line, justifyContent: 'center', alignItems: 'center' },
  addBtnText: { fontSize: 16, color: colors.sage },
  projectCard: { flexDirection: 'row', gap: 12, backgroundColor: colors.cream, padding: 12, borderRadius: 6 },
  projectImage: { width: 100, height: 115, borderRadius: 4 },
  projectInfo: { flex: 1, gap: 4 },
  statusPill: { flexDirection: 'row', alignItems: 'center', gap: 5, backgroundColor: colors.softYellow, paddingHorizontal: 8, paddingVertical: 4, borderRadius: 20, alignSelf: 'flex-start' },
  statusDot: { width: 5, height: 5, borderRadius: 3, backgroundColor: '#d3a13c' },
  statusText: { fontSize: 9, color: '#80652c' },
  projectTitle: { fontSize: 14, fontWeight: '600', marginTop: 4 },
  projectMeta: { fontSize: 10, color: colors.muted },
  progressBar: { height: 4, backgroundColor: '#d5dbcf', borderRadius: 2, marginTop: 12 },
  progressFill: { width: '68%', height: '100%', backgroundColor: colors.sage, borderRadius: 2 },
  listingRow: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingTop: spacing.sm, borderTopWidth: 1, borderColor: colors.line },
  listingThumb: { width: 44, height: 44, borderRadius: 4 },
  listingLabel: { fontSize: 9, color: colors.sage, textTransform: 'uppercase', letterSpacing: 0.5 },
  listingName: { fontSize: 12, fontWeight: '600', marginTop: 2 },
  listingMeta: { fontSize: 10, color: colors.muted, marginTop: 2 },
  listingArrow: { fontSize: 18, color: colors.muted },
})
