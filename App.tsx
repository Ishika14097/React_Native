import React, { useState, useCallback } from 'react'
import {
  View, Text, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar, Animated,
} from 'react-native'
import { colors, spacing } from './src/theme'
import { products } from './src/data'
import { View as AppView, Product } from './src/types'
import HomeScreen from './src/screens/HomeScreen'
import ShopScreen from './src/screens/ShopScreen'
import ProductDetailScreen from './src/screens/ProductDetailScreen'
import DonateScreen from './src/screens/DonateScreen'
import JourneyScreen from './src/screens/JourneyScreen'
import RewardsScreen from './src/screens/RewardsScreen'
import StudioScreen from './src/screens/StudioScreen'

type TabView = 'home' | 'shop' | 'donate' | 'journey' | 'profile'

const TABS: { id: TabView; label: string; icon: string }[] = [
  { id: 'home', label: 'Home', icon: '⌂' },
  { id: 'shop', label: 'Shop', icon: '◻' },
  { id: 'donate', label: 'Donate', icon: '↑' },
  { id: 'journey', label: 'Journey', icon: '◎' },
  { id: 'profile', label: 'Profile', icon: '◉' },
]

export default function App() {
  const [activeTab, setActiveTab] = useState<TabView>('home')
  const [view, setView] = useState<AppView>('home')
  const [cart, setCart] = useState<number[]>([2])
  const [liked, setLiked] = useState<number[]>([2])
  const [selectedProduct, setSelectedProduct] = useState<Product>(products[0])
  const [donationSent, setDonationSent] = useState(false)
  const [toast, setToast] = useState('')
  const [toastOpacity] = useState(new Animated.Value(0))

  const showToast = useCallback((message: string) => {
    setToast(message)
    Animated.sequence([
      Animated.timing(toastOpacity, { toValue: 1, duration: 200, useNativeDriver: true }),
      Animated.delay(2000),
      Animated.timing(toastOpacity, { toValue: 0, duration: 300, useNativeDriver: true }),
    ]).start()
  }, [toastOpacity])

  const openProduct = useCallback((product: Product) => {
    setSelectedProduct(product)
    setView('product')
  }, [])

  const toggleLike = useCallback((id: number) => {
    setLiked((curr) => curr.includes(id) ? curr.filter((i) => i !== id) : [...curr, id])
  }, [])

  const addToCart = useCallback((id: number) => {
    if (!cart.includes(id)) setCart((c) => [...c, id])
    showToast('Added to your bag ✓')
  }, [cart, showToast])

  const handleTabPress = (tab: TabView) => {
    setActiveTab(tab)
    if (tab === 'home') setView('home')
    else if (tab === 'shop') setView('shop')
    else if (tab === 'donate') setView('donate')
    else if (tab === 'journey') setView('journey')
    else if (tab === 'profile') setView('rewards')
  }

  const setViewAndSync = (v: AppView) => {
    setView(v)
    if (v === 'home') setActiveTab('home')
    else if (v === 'shop') setActiveTab('shop')
    else if (v === 'donate') setActiveTab('donate')
    else if (v === 'journey') setActiveTab('journey')
    else if (v === 'rewards' || v === 'studio') setActiveTab('profile')
  }

  const renderScreen = () => {
    switch (view) {
      case 'home':
        return <HomeScreen setView={setViewAndSync} onProduct={openProduct} />
      case 'shop':
        return <ShopScreen onProduct={openProduct} liked={liked} toggleLike={toggleLike} />
      case 'product':
        return (
          <ProductDetailScreen
            product={selectedProduct}
            onBack={() => setViewAndSync('shop')}
            onAdd={() => addToCart(selectedProduct.id)}
            liked={liked.includes(selectedProduct.id)}
            toggleLike={() => toggleLike(selectedProduct.id)}
          />
        )
      case 'donate':
        return (
          <DonateScreen
            sent={donationSent}
            onSubmit={() => {
              setDonationSent(true)
              showToast('Donation submitted!')
            }}
          />
        )
      case 'journey':
        return <JourneyScreen />
      case 'rewards':
        return <RewardsScreen onDonate={() => setViewAndSync('donate')} />
      case 'studio':
        return <StudioScreen onProduct={openProduct} />
      default:
        return <HomeScreen setView={setViewAndSync} onProduct={openProduct} />
    }
  }

  return (
    <SafeAreaView style={s.root}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.paper} />

      {/* Top bar */}
      <View style={s.topBar}>
        <TouchableOpacity onPress={() => setViewAndSync('home')} style={s.brand}>
          <View style={s.brandMark}>
            <Text style={s.brandMarkText}>↻</Text>
          </View>
          <Text style={s.brandName}>re<Text style={{ color: colors.sage }}>thread</Text></Text>
        </TouchableOpacity>
        <View style={s.topActions}>
          {/* Cart badge */}
          <TouchableOpacity style={s.iconBtn} onPress={() => showToast(`${cart.length} item${cart.length === 1 ? '' : 's'} in your bag`)}>
            <Text style={s.iconBtnText}>🛍</Text>
            {cart.length > 0 && (
              <View style={s.badge}>
                <Text style={s.badgeText}>{cart.length}</Text>
              </View>
            )}
          </TouchableOpacity>
          {/* Maker studio shortcut */}
          <TouchableOpacity style={s.studioBtn} onPress={() => setViewAndSync('studio')}>
            <Text style={s.studioBtnText}>For makers</Text>
          </TouchableOpacity>
          {/* Avatar */}
          <TouchableOpacity style={s.avatar} onPress={() => setViewAndSync('rewards')}>
            <Text style={s.avatarText}>AS</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Main content */}
      <View style={{ flex: 1 }}>
        {renderScreen()}
      </View>

      {/* Bottom Tab Bar */}
      <View style={s.tabBar}>
        {TABS.map((tab) => {
          const isActive = activeTab === tab.id
          return (
            <TouchableOpacity
              key={tab.id}
              style={s.tab}
              onPress={() => handleTabPress(tab.id)}
              accessibilityLabel={tab.label}
            >
              <Text style={[s.tabIcon, isActive && s.tabIconActive]}>{tab.icon}</Text>
              <Text style={[s.tabLabel, isActive && s.tabLabelActive]}>{tab.label}</Text>
              {isActive && <View style={s.tabIndicator} />}
            </TouchableOpacity>
          )
        })}
      </View>

      {/* Toast */}
      {toast !== '' && (
        <Animated.View style={[s.toast, { opacity: toastOpacity }]}>
          <Text style={s.toastText}>{toast}</Text>
        </Animated.View>
      )}
    </SafeAreaView>
  )
}

const s = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.paper },
  topBar: {
    height: 56, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingHorizontal: spacing.lg, borderBottomWidth: 1, borderColor: colors.line,
    backgroundColor: colors.paper,
  },
  brand: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  brandMark: { width: 26, height: 26, borderRadius: 13, borderWidth: 1.5, borderColor: colors.sage, justifyContent: 'center', alignItems: 'center' },
  brandMarkText: { color: colors.sage, fontSize: 16 },
  brandName: { fontSize: 20, fontWeight: '700', letterSpacing: -1 },
  topActions: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  iconBtn: { position: 'relative', padding: 4 },
  iconBtnText: { fontSize: 20 },
  badge: { position: 'absolute', top: 0, right: 0, width: 15, height: 15, borderRadius: 8, backgroundColor: colors.yellow, justifyContent: 'center', alignItems: 'center' },
  badgeText: { fontSize: 8, fontWeight: '700' },
  studioBtn: { borderWidth: 1, borderColor: colors.ink, paddingHorizontal: 10, paddingVertical: 5, borderRadius: 3 },
  studioBtnText: { fontSize: 10, fontWeight: '700' },
  avatar: { width: 30, height: 30, borderRadius: 15, backgroundColor: colors.softSage, justifyContent: 'center', alignItems: 'center' },
  avatarText: { fontSize: 10, fontWeight: '700', color: colors.sageDark },
  tabBar: {
    height: 60, flexDirection: 'row', borderTopWidth: 1, borderColor: colors.line,
    backgroundColor: colors.paper,
  },
  tab: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingVertical: 8, position: 'relative' },
  tabIcon: { fontSize: 18, color: colors.muted },
  tabIconActive: { color: colors.ink },
  tabLabel: { fontSize: 9, color: colors.muted, marginTop: 2 },
  tabLabelActive: { color: colors.ink, fontWeight: '700' },
  tabIndicator: { position: 'absolute', top: 0, left: '25%', right: '25%', height: 2, backgroundColor: colors.ink, borderBottomLeftRadius: 2, borderBottomRightRadius: 2 },
  toast: {
    position: 'absolute', bottom: 72, left: spacing.lg, right: spacing.lg,
    backgroundColor: colors.ink, borderRadius: 8, padding: 14, alignItems: 'center',
    shadowColor: '#000', shadowOpacity: 0.18, shadowRadius: 12, elevation: 8,
  },
  toastText: { color: colors.paper, fontSize: 13, fontWeight: '600' },
})
