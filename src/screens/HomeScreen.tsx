import React from 'react'
import {
  View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, Dimensions,
} from 'react-native'
import { colors, spacing } from '../theme'
import { products } from '../data'
import { Product, View as AppView } from '../types'

const { width } = Dimensions.get('window')

interface HomeProps {
  setView: (v: AppView) => void
  onProduct: (p: Product) => void
}

export default function Home({ setView, onProduct }: HomeProps) {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {/* Hero Section */}
      <View style={s.hero}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=90' }}
          style={s.heroImage}
        />
        <View style={s.heroOverlay} />
        <View style={s.heroContent}>
          <View style={s.eyebrow}>
            <View style={s.eyebrowLine} />
            <Text style={s.eyebrowText}>A circular fashion marketplace</Text>
          </View>
          <Text style={s.heroTitle}>Old clothes.{'\n'}<Text style={s.italic}>New stories.</Text></Text>
          <Text style={s.heroSubtitle}>Give unused garments a second life through Indian creativity.</Text>
          <View style={s.heroBtns}>
            <TouchableOpacity style={s.btnDark} onPress={() => setView('donate')}>
              <Text style={s.btnDarkText}>Donate clothes →</Text>
            </TouchableOpacity>
            <TouchableOpacity style={s.btnOutline} onPress={() => setView('shop')}>
              <Text style={s.btnOutlineText}>Explore creations →</Text>
            </TouchableOpacity>
          </View>
          {/* Social proof */}
          <View style={s.socialProof}>
            <View style={s.avatarStack}>
              {['PD', 'RK', 'SM'].map((a, i) => (
                <View key={a} style={[s.avatar, i === 1 && { backgroundColor: '#8d9c82' }, i === 2 && { backgroundColor: '#d3a13c' }]}>
                  <Text style={s.avatarText}>{a}</Text>
                </View>
              ))}
            </View>
            <Text style={s.socialText}><Text style={{ fontWeight: '700', color: colors.paper }}>1,842 people</Text> are already in the loop</Text>
          </View>
        </View>
        {/* Stamp */}
        <View style={s.stamp}>
          <Text style={s.stampPct}>100%</Text>
          <Text style={s.stampSub}>made from{'\n'}existing fabric</Text>
        </View>
      </View>

      {/* Ticker */}
      <View style={s.ticker}>
        {['THE LOOP IS OPEN', 'DONATE', '🌿 TRANSFORM', 'WEAR', 'REPEAT'].map((t) => (
          <Text key={t} style={s.tickerText}>{t}   ·   </Text>
        ))}
      </View>

      {/* How it works */}
      <View style={s.section}>
        <View style={s.eyebrow}>
          <View style={s.eyebrowLine} />
          <Text style={s.eyebrowText}>How it works</Text>
        </View>
        <Text style={s.sectionTitle}>A little less waste.{'\n'}<Text style={s.italic}>A lot more meaning.</Text></Text>
        <Text style={s.sectionIntro}>Your old wardrobe can become someone else's favourite thing.</Text>
        <View style={s.processGrid}>
          {[
            { n: '01', title: 'Donate unused clothes', copy: 'We collect the pieces sitting quietly in your wardrobe.' },
            { n: '02', title: 'A maker receives them', copy: 'Skilled Indian designers select materials for their next idea.' },
            { n: '03', title: 'A new product emerges', copy: 'Old fibres become beautiful, useful, one-of-a-kind objects.' },
            { n: '04', title: 'Follow the journey', copy: 'You get to see where your contribution ends up.' },
          ].map(({ n, title, copy }) => (
            <View key={n} style={s.processStep}>
              <Text style={s.stepNum}>{n}</Text>
              <Text style={s.stepTitle}>{title}</Text>
              <Text style={s.stepCopy}>{copy}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Shop preview */}
      <View style={[s.section, { backgroundColor: colors.cream }]}>
        <View style={s.sectionRow}>
          <View>
            <View style={s.eyebrow}>
              <View style={s.eyebrowLine} />
              <Text style={s.eyebrowText}>From the marketplace</Text>
            </View>
            <Text style={s.sectionTitle}>Objects with{'\n'}<Text style={s.italic}>something to say.</Text></Text>
          </View>
          <TouchableOpacity onPress={() => setView('shop')}>
            <Text style={s.linkBtn}>View all →</Text>
          </TouchableOpacity>
        </View>
        <View style={s.productRow}>
          {products.slice(0, 4).map((product) => (
            <TouchableOpacity key={product.id} style={s.productCard} onPress={() => onProduct(product)}>
              <Image source={{ uri: product.image }} style={s.productImage} />
              <View style={s.productTag}>
                <Text style={s.productTagText}>{product.tag}</Text>
              </View>
              <Text style={s.productName}>{product.name}</Text>
              <Text style={s.productMaker}>{product.maker} · {product.city}</Text>
              <Text style={s.productPrice}>₹{product.price.toLocaleString('en-IN')}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Story section */}
      <View style={s.storySection}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=85' }}
          style={s.storyImage}
        />
        <View style={s.storyCopy}>
          <View style={s.eyebrow}>
            <View style={[s.eyebrowLine, { backgroundColor: '#c1cfb9' }]} />
            <Text style={[s.eyebrowText, { color: '#c1cfb9' }]}>The material story</Text>
          </View>
          <Text style={[s.sectionTitle, { color: colors.paper, fontSize: 34 }]}>
            From two old shirts to <Text style={[s.italic, { color: colors.yellow }]}>one new day.</Text>
          </Text>
          <Text style={s.storyText}>When Priya sent us two cotton shirts her kids had outgrown, Aarohi Studio saw a jacket waiting to happen.</Text>
          <View style={s.storyMeta}>
            {[['2', 'shirts reused'], ['0.8 kg', 'waste diverted'], ['14 hrs', 'of making']].map(([v, l]) => (
              <View key={l} style={s.metaItem}>
                <Text style={s.metaVal}>{v}</Text>
                <Text style={s.metaLabel}>{l}</Text>
              </View>
            ))}
          </View>
          <TouchableOpacity onPress={() => setView('journey')}>
            <Text style={[s.linkBtn, { color: colors.yellow }]}>Follow Priya's journey →</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Impact */}
      <View style={s.section}>
        <View style={s.eyebrow}>
          <View style={s.eyebrowLine} />
          <Text style={s.eyebrowText}>Our collective impact</Text>
        </View>
        <Text style={s.sectionTitle}>The numbers are{'\n'}<Text style={s.italic}>starting to move.</Text></Text>
        <View style={s.impactGrid}>
          {[
            ['4,281', 'garments reused', '↑ 18% this month'],
            ['1,096', 'products created', 'by 86 makers'],
            ['86', 'active designers', 'across 14 cities'],
            ['2.4t', 'waste diverted', 'and counting'],
          ].map(([val, label, sub]) => (
            <View key={label} style={s.impactItem}>
              <Text style={s.impactVal}>{val}</Text>
              <Text style={s.impactLabel}>{label}</Text>
              <Text style={s.impactSub}>{sub}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Maker CTA */}
      <View style={s.makerCta}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=900&q=85' }}
          style={s.makerCtaImage}
        />
        <View style={s.makerCtaOverlay} />
        <View style={s.makerCtaContent}>
          <View style={s.eyebrow}>
            <View style={[s.eyebrowLine, { backgroundColor: '#f7d7c4' }]} />
            <Text style={[s.eyebrowText, { color: '#f7d7c4' }]}>For the creatively restless</Text>
          </View>
          <Text style={[s.sectionTitle, { color: colors.paper, fontSize: 40 }]}>
            Have a thing for <Text style={[s.italic, { color: colors.yellow }]}>making new?</Text>
          </Text>
          <TouchableOpacity style={s.btnCream} onPress={() => setView('studio')}>
            <Text style={s.btnCreamText}>Become a maker →</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

const CARD_W = (width - spacing.md * 3) / 2

const s = StyleSheet.create({
  hero: { height: 480, position: 'relative', justifyContent: 'flex-end' },
  heroImage: { ...StyleSheet.absoluteFillObject, width: '100%', height: '100%' },
  heroOverlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(30,40,25,0.55)' },
  heroContent: { padding: spacing.lg, paddingBottom: spacing.xl },
  eyebrow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 12 },
  eyebrowLine: { width: 22, height: 1, backgroundColor: colors.sage },
  eyebrowText: { color: colors.sage, fontSize: 10, fontWeight: '700', letterSpacing: 1.5, textTransform: 'uppercase' },
  heroTitle: { fontSize: 52, fontWeight: '500', color: colors.paper, lineHeight: 52, marginBottom: 12 },
  italic: { color: colors.terracotta, fontStyle: 'italic' },
  heroSubtitle: { color: '#c8d4be', fontSize: 14, lineHeight: 22, marginBottom: spacing.lg },
  heroBtns: { flexDirection: 'row', gap: 12, flexWrap: 'wrap' },
  btnDark: { backgroundColor: colors.ink, paddingHorizontal: 18, paddingVertical: 12, borderRadius: 3 },
  btnDarkText: { color: colors.paper, fontSize: 12, fontWeight: '700' },
  btnOutline: { borderWidth: 1, borderColor: colors.paper, paddingHorizontal: 18, paddingVertical: 12, borderRadius: 3 },
  btnOutlineText: { color: colors.paper, fontSize: 12, fontWeight: '700' },
  socialProof: { flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 28 },
  avatarStack: { flexDirection: 'row' },
  avatar: { width: 26, height: 26, borderRadius: 13, backgroundColor: '#bb8069', justifyContent: 'center', alignItems: 'center', marginRight: -7, borderWidth: 2, borderColor: 'rgba(0,0,0,0.3)' },
  avatarText: { color: '#fff', fontSize: 8, fontWeight: '700' },
  socialText: { color: '#c8d4be', fontSize: 11 },
  stamp: { position: 'absolute', top: 36, right: 20, width: 80, height: 80, borderRadius: 40, backgroundColor: colors.yellow, justifyContent: 'center', alignItems: 'center', transform: [{ rotate: '12deg' }] },
  stampPct: { fontSize: 19, fontWeight: '700' },
  stampSub: { fontSize: 7, textAlign: 'center', lineHeight: 10, textTransform: 'uppercase' },
  ticker: { backgroundColor: colors.yellow, paddingVertical: 10, flexDirection: 'row', alignItems: 'center', overflow: 'hidden' },
  tickerText: { fontSize: 9, fontWeight: '700', letterSpacing: 2 },
  section: { padding: spacing.lg, paddingVertical: spacing.xl },
  sectionRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: spacing.md },
  sectionTitle: { fontSize: 36, fontWeight: '500', lineHeight: 38, marginBottom: 12 },
  sectionIntro: { color: colors.muted, fontSize: 14, lineHeight: 22, marginBottom: spacing.lg },
  processGrid: { gap: 1 },
  processStep: { borderTopWidth: 1, borderColor: colors.line, paddingVertical: 18, gap: 6 },
  stepNum: { color: '#a0a497', fontSize: 10, fontWeight: '700' },
  stepTitle: { fontSize: 14, fontWeight: '600' },
  stepCopy: { color: colors.muted, fontSize: 12, lineHeight: 18 },
  productRow: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm },
  productCard: { width: CARD_W, marginBottom: spacing.sm },
  productImage: { width: CARD_W, height: CARD_W * 1.2, borderRadius: 2 },
  productTag: { position: 'absolute', top: 8, left: 8, backgroundColor: colors.paper, paddingHorizontal: 6, paddingVertical: 4, borderRadius: 2 },
  productTagText: { fontSize: 8, letterSpacing: 0.5, textTransform: 'uppercase' },
  productName: { fontSize: 12, fontWeight: '600', marginTop: 8 },
  productMaker: { color: colors.muted, fontSize: 10, marginTop: 2 },
  productPrice: { fontSize: 13, fontWeight: '700', marginTop: 4 },
  linkBtn: { color: colors.sage, fontSize: 12, fontWeight: '700' },
  storySection: { backgroundColor: colors.sageDark },
  storyImage: { width: '100%', height: 280 },
  storyCopy: { padding: spacing.lg, paddingVertical: spacing.xl },
  storyText: { color: '#c6cfbd', fontSize: 14, lineHeight: 22, marginTop: 16, marginBottom: 20 },
  storyMeta: { flexDirection: 'row', gap: 24, marginBottom: spacing.lg },
  metaItem: { gap: 4 },
  metaVal: { fontSize: 22, fontWeight: '500', color: colors.paper },
  metaLabel: { color: '#a9b5a3', fontSize: 10 },
  impactGrid: { flexDirection: 'row', flexWrap: 'wrap', borderTopWidth: 1, borderColor: colors.line, marginTop: spacing.md },
  impactItem: { width: '50%', paddingVertical: 20, paddingRight: 12, borderBottomWidth: 1, borderColor: colors.line, gap: 4 },
  impactVal: { fontSize: 38, fontWeight: '500', letterSpacing: -1 },
  impactLabel: { fontSize: 12 },
  impactSub: { fontSize: 10, color: colors.sage },
  makerCta: { height: 360, position: 'relative', justifyContent: 'flex-end' },
  makerCtaImage: { ...StyleSheet.absoluteFillObject, width: '100%', height: '100%' },
  makerCtaOverlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(185,103,77,0.75)' },
  makerCtaContent: { padding: spacing.lg, paddingBottom: spacing.xl },
  btnCream: { backgroundColor: colors.paper, paddingHorizontal: 18, paddingVertical: 12, borderRadius: 3, alignSelf: 'flex-start', marginTop: 16 },
  btnCreamText: { color: colors.ink, fontSize: 12, fontWeight: '700' },
})
