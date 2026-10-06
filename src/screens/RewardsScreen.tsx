import React from 'react'
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import { colors, spacing } from '../theme'

interface RewardsProps {
  onDonate: () => void
}

export default function Rewards({ onDonate }: RewardsProps) {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {/* Hero */}
      <View style={s.hero}>
        <View style={s.heroCopy}>
          <View style={s.eyebrow}>
            <View style={s.eyebrowLine} />
            <Text style={s.eyebrowText}>ReThread Rewards</Text>
          </View>
          <Text style={s.heroTitle}>Good choices{'\n'}look <Text style={s.italic}>good on you.</Text></Text>
          <Text style={s.heroSub}>Every action that keeps clothes in circulation brings you closer to your next little joy.</Text>
          <TouchableOpacity style={s.earnBtn} onPress={onDonate}>
            <Text style={s.earnBtnText}>Earn more points +</Text>
          </TouchableOpacity>
        </View>
        {/* Points card */}
        <View style={s.pointsCard}>
          <Text style={s.pointsLabel}>Your balance</Text>
          <Text style={s.pointsVal}>2,480 <Text style={s.pointsUnit}>pts</Text></Text>
          <View style={s.pointsBar}>
            <View style={s.pointsBarFill} />
          </View>
          <Text style={s.pointsNext}>520 pts to <Text style={{ fontWeight: '700' }}>Kind Keeper</Text></Text>
          <View style={s.pointsStats}>
            <Text style={s.pointsStat}><Text style={s.pointsStatBold}>12</Text> donations</Text>
            <Text style={s.pointsStat}><Text style={s.pointsStatBold}>8</Text> purchases</Text>
          </View>
        </View>
      </View>

      <View style={s.content}>
        {/* Rewards header */}
        <View style={s.sectionHeader}>
          <View>
            <View style={s.eyebrow}>
              <View style={s.eyebrowLine} />
              <Text style={s.eyebrowText}>Your rewards</Text>
            </View>
            <Text style={s.sectionTitle}>Small wins,{'\n'}<Text style={s.italic}>shared well.</Text></Text>
          </View>
          <TouchableOpacity style={s.howItWorks}>
            <Text style={s.howItWorksText}>How it works ？</Text>
          </TouchableOpacity>
        </View>

        {/* Reward options */}
        {[
          { icon: '₹', iconBg: colors.softYellow, title: '₹250 off your next order', sub: '2,000 points · Available now', locked: false },
          { icon: '🚚', iconBg: colors.softSage, title: 'Free premium pickup', sub: '1,200 points · Available now', locked: false },
          { icon: '✦', iconBg: '#f1dbd1', title: 'Early access to a drop', sub: '3,000 points · 520 more to go', locked: true },
        ].map((reward) => (
          <View key={reward.title} style={[s.rewardOption, reward.locked && s.rewardLocked]}>
            <View style={[s.rewardIcon, { backgroundColor: reward.iconBg }]}>
              <Text style={s.rewardIconText}>{reward.icon}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={s.rewardTitle}>{reward.title}</Text>
              <Text style={s.rewardSub}>{reward.sub}</Text>
            </View>
            <TouchableOpacity style={[s.redeemBtn, reward.locked && s.redeemBtnLocked]}>
              <Text style={[s.redeemBtnText, reward.locked && s.redeemBtnTextLocked]}>
                {reward.locked ? 'Locked' : 'Redeem'}
              </Text>
            </TouchableOpacity>
          </View>
        ))}

        {/* Activity */}
        <View style={s.activityCard}>
          <Text style={s.activityTitle}>Recent activity</Text>
          {[
            ['+120', 'Donation accepted', 'Today'],
            ['+48', 'Purchase · Indigo daypack', '18 Mar'],
            ['+30', 'Community story shared', '15 Mar'],
            ['-250', 'Reward redeemed', '02 Mar'],
          ].map(([amount, label, date]) => (
            <View key={label} style={s.activityRow}>
              <Text style={[s.activityAmount, amount.startsWith('-') && { color: colors.terracotta }]}>{amount}</Text>
              <View style={{ flex: 1 }}>
                <Text style={s.activityLabel}>{label}</Text>
                <Text style={s.activityDate}>{date}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  )
}

const s = StyleSheet.create({
  hero: { backgroundColor: colors.softYellow, padding: spacing.lg, paddingVertical: spacing.xl, gap: spacing.lg },
  heroCopy: {},
  eyebrow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 12 },
  eyebrowLine: { width: 22, height: 1, backgroundColor: colors.sage },
  eyebrowText: { color: colors.sage, fontSize: 10, fontWeight: '700', letterSpacing: 1.5, textTransform: 'uppercase' },
  heroTitle: { fontSize: 38, fontWeight: '500', lineHeight: 40, marginBottom: 10 },
  italic: { color: colors.terracotta, fontStyle: 'italic' },
  heroSub: { color: '#827652', fontSize: 13, lineHeight: 20, marginBottom: spacing.md },
  earnBtn: { backgroundColor: colors.ink, paddingHorizontal: 18, paddingVertical: 12, borderRadius: 3, alignSelf: 'flex-start' },
  earnBtnText: { color: colors.paper, fontWeight: '700', fontSize: 12 },
  pointsCard: { backgroundColor: colors.paper, padding: spacing.lg, borderRadius: 8, shadowColor: '#543e22', shadowOpacity: 0.08, shadowRadius: 14, elevation: 4 },
  pointsLabel: { color: colors.muted, fontSize: 10, textTransform: 'uppercase', letterSpacing: 0.8 },
  pointsVal: { fontSize: 40, fontWeight: '500', marginVertical: 8 },
  pointsUnit: { fontSize: 14, color: colors.muted, fontWeight: '400' },
  pointsBar: { height: 6, backgroundColor: '#e7e3d4', borderRadius: 3, marginBottom: 8 },
  pointsBarFill: { width: '78%', height: '100%', backgroundColor: colors.sage, borderRadius: 3 },
  pointsNext: { fontSize: 10, color: colors.muted, marginBottom: 16 },
  pointsStats: { flexDirection: 'row', gap: 20, borderTopWidth: 1, borderColor: colors.line, paddingTop: 14 },
  pointsStat: { fontSize: 10, color: colors.muted },
  pointsStatBold: { fontSize: 14, fontWeight: '700', color: colors.ink },
  content: { padding: spacing.lg, paddingTop: spacing.xl, gap: spacing.lg },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: spacing.md },
  sectionTitle: { fontSize: 32, fontWeight: '500', lineHeight: 34 },
  howItWorks: { borderWidth: 1, borderColor: colors.ink, paddingHorizontal: 12, paddingVertical: 8, borderRadius: 3 },
  howItWorksText: { fontSize: 10, fontWeight: '700' },
  rewardOption: { flexDirection: 'row', alignItems: 'center', gap: 14, paddingVertical: 16, borderTopWidth: 1, borderColor: colors.line },
  rewardLocked: { opacity: 0.6 },
  rewardIcon: { width: 44, height: 44, borderRadius: 22, justifyContent: 'center', alignItems: 'center' },
  rewardIconText: { fontSize: 18, fontWeight: '700' },
  rewardTitle: { fontSize: 13, fontWeight: '600', marginBottom: 3 },
  rewardSub: { fontSize: 10, color: colors.muted },
  redeemBtn: { backgroundColor: colors.ink, paddingHorizontal: 14, paddingVertical: 8, borderRadius: 3 },
  redeemBtnLocked: { backgroundColor: 'transparent', borderWidth: 1, borderColor: colors.ink },
  redeemBtnText: { color: colors.paper, fontSize: 11, fontWeight: '700' },
  redeemBtnTextLocked: { color: colors.ink },
  activityCard: { backgroundColor: colors.cream, padding: spacing.lg, borderRadius: 8, marginBottom: spacing.xxl },
  activityTitle: { fontSize: 16, fontWeight: '600', marginBottom: spacing.lg },
  activityRow: { flexDirection: 'row', gap: 14, borderTopWidth: 1, borderColor: colors.line, paddingVertical: 14, alignItems: 'center' },
  activityAmount: { width: 36, fontSize: 12, fontWeight: '700', color: colors.sage },
  activityLabel: { fontSize: 11 },
  activityDate: { fontSize: 10, color: colors.muted, marginTop: 2 },
})
