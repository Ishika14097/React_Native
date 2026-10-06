import React from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { colors, spacing } from '../theme'
import { timeline } from '../data'

export default function Journey() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={s.container}>
      {/* Header */}
      <View style={s.heading}>
        <View style={s.eyebrow}>
          <View style={s.eyebrowLine} />
          <Text style={s.eyebrowText}>Your garment journey</Text>
        </View>
        <Text style={s.title}>Nothing <Text style={s.italic}>disappears.</Text></Text>
        <Text style={s.subtitle}>Every piece has a next chapter. Here's yours.</Text>
      </View>

      {/* Journey ID */}
      <View style={s.journeyIdRow}>
        <Text style={s.journeyIdLabel}>Journey ID</Text>
        <Text style={s.journeyId}>RT-240318</Text>
        <TouchableOpacity style={s.copyBtn}>
          <Text style={s.copyBtnText}>Copy ID</Text>
        </TouchableOpacity>
      </View>

      {/* Card */}
      <View style={s.card}>
        {/* Summary */}
        <View style={s.summary}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=600&q=85' }}
            style={s.summaryImage}
          />
          <View style={{ padding: spacing.md, gap: 8 }}>
            <View style={s.statusPill}>
              <View style={s.statusDot} />
              <Text style={s.statusText}>Being transformed</Text>
            </View>
            <Text style={s.itemTitle}>Two cotton shirts</Text>
            <Text style={s.itemMeta}>Submitted 12 March 2024 · 0.8 kg estimated</Text>
            <View style={s.ownerRow}>
              <View style={s.ownerAvatar}>
                <Text style={s.ownerAvatarText}>PD</Text>
              </View>
              <View>
                <Text style={s.ownerName}>Picked by Aarohi Studio</Text>
                <Text style={s.ownerCity}>Jaipur, Rajasthan</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Timeline */}
        <View style={s.timeline}>
          {timeline.map((item, i) => (
            <View key={item.title} style={s.timelineItem}>
              <View style={s.timelineIconCol}>
                <View style={[s.timelineIcon, item.done && s.timelineIconDone]}>
                  <Text style={{ fontSize: 12 }}>{item.done ? '✓' : '○'}</Text>
                </View>
                {i < timeline.length - 1 && <View style={[s.timelineLine, item.done && s.timelineLineDone]} />}
              </View>
              <View style={[s.timelineContent, !item.done && { opacity: 0.5 }]}>
                <Text style={s.timelineTitle}>{item.title}</Text>
                <Text style={s.timelineDate}>{item.date}</Text>
                <Text style={s.timelineCopy}>{item.copy}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Footer */}
        <View style={s.cardFooter}>
          <View style={s.pointsRow}>
            <Text style={{ fontSize: 16 }}>✦</Text>
            <Text style={s.pointsText}>When your piece sells, you will earn <Text style={{ fontWeight: '700', color: colors.ink }}>+120 points</Text></Text>
          </View>
          <TouchableOpacity style={s.shareBtn}>
            <Text style={s.shareBtnText}>Share journey →</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Other donations */}
      <View style={s.others}>
        <Text style={s.othersTitle}>Your other donations</Text>
        <Text style={s.othersSub}>Keep an eye on what happens next.</Text>
        {[
          { n: '01', name: 'Denim & cotton mix', date: 'Received · 03 Feb 2024', status: 'Received' },
          { n: '02', name: 'Three cotton shirts', date: 'Listed for sale · 18 Jan 2024', status: 'Listed' },
        ].map((d) => (
          <View key={d.n} style={s.miniDonation}>
            <View style={s.miniIcon}>
              <Text style={s.miniIconText}>{d.n}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={s.miniName}>{d.name}</Text>
              <Text style={s.miniDate}>{d.date}</Text>
            </View>
            <Text style={s.miniStatus}>{d.status}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  )
}

const s = StyleSheet.create({
  container: { padding: spacing.lg, paddingBottom: spacing.xxxl },
  heading: { marginBottom: spacing.lg },
  eyebrow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 12 },
  eyebrowLine: { width: 22, height: 1, backgroundColor: colors.sage },
  eyebrowText: { color: colors.sage, fontSize: 10, fontWeight: '700', letterSpacing: 1.5, textTransform: 'uppercase' },
  title: { fontSize: 40, fontWeight: '500', lineHeight: 42, marginBottom: 8 },
  italic: { color: colors.terracotta, fontStyle: 'italic' },
  subtitle: { color: colors.muted, fontSize: 14, lineHeight: 22 },
  journeyIdRow: { flexDirection: 'row', alignItems: 'center', gap: 10, borderWidth: 1, borderColor: colors.line, padding: spacing.md, borderRadius: 6, marginBottom: spacing.lg },
  journeyIdLabel: { color: colors.muted, fontSize: 10, textTransform: 'uppercase', letterSpacing: 0.8 },
  journeyId: { fontSize: 14, fontWeight: '700', flex: 1 },
  copyBtn: {},
  copyBtnText: { color: colors.sage, fontSize: 11 },
  card: { borderWidth: 1, borderColor: colors.line, borderRadius: 8, overflow: 'hidden', marginBottom: spacing.xl },
  summary: {},
  summaryImage: { width: '100%', height: 220 },
  statusPill: { flexDirection: 'row', alignItems: 'center', gap: 6, backgroundColor: colors.softYellow, paddingHorizontal: 10, paddingVertical: 5, borderRadius: 20, alignSelf: 'flex-start' },
  statusDot: { width: 6, height: 6, borderRadius: 3, backgroundColor: '#d3a13c' },
  statusText: { fontSize: 10, color: '#80652c' },
  itemTitle: { fontSize: 22, fontWeight: '500' },
  itemMeta: { color: colors.muted, fontSize: 12 },
  ownerRow: { flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 4 },
  ownerAvatar: { width: 30, height: 30, borderRadius: 15, backgroundColor: colors.terracotta, justifyContent: 'center', alignItems: 'center' },
  ownerAvatarText: { color: '#fff', fontSize: 9, fontWeight: '700' },
  ownerName: { fontSize: 11, fontWeight: '600' },
  ownerCity: { fontSize: 10, color: colors.muted },
  timeline: { padding: spacing.md, borderTopWidth: 1, borderColor: colors.line, gap: 0 },
  timelineItem: { flexDirection: 'row', gap: 12, marginBottom: 0 },
  timelineIconCol: { alignItems: 'center' },
  timelineIcon: { width: 32, height: 32, borderRadius: 16, backgroundColor: '#edede5', justifyContent: 'center', alignItems: 'center' },
  timelineIconDone: { backgroundColor: colors.sage },
  timelineLine: { width: 1, flex: 1, backgroundColor: colors.line, marginVertical: 4, minHeight: 20 },
  timelineLineDone: { backgroundColor: colors.sage },
  timelineContent: { flex: 1, paddingBottom: 20 },
  timelineTitle: { fontSize: 12, fontWeight: '700' },
  timelineDate: { fontSize: 10, color: colors.sage, marginTop: 2 },
  timelineCopy: { fontSize: 11, color: colors.muted, lineHeight: 16, marginTop: 4 },
  cardFooter: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: colors.cream, padding: spacing.md },
  pointsRow: { flexDirection: 'row', gap: 8, alignItems: 'center', flex: 1 },
  pointsText: { fontSize: 11, color: colors.sage, flex: 1 },
  shareBtn: { borderWidth: 1, borderColor: colors.ink, paddingHorizontal: 12, paddingVertical: 7, borderRadius: 3 },
  shareBtnText: { fontSize: 10, fontWeight: '700' },
  others: { marginTop: spacing.sm },
  othersTitle: { fontSize: 28, fontWeight: '500', marginBottom: 4 },
  othersSub: { color: colors.muted, fontSize: 12, marginBottom: spacing.md },
  miniDonation: { flexDirection: 'row', alignItems: 'center', gap: 12, borderTopWidth: 1, borderColor: colors.line, paddingVertical: 16 },
  miniIcon: { width: 36, height: 36, backgroundColor: colors.softSage, justifyContent: 'center', alignItems: 'center', borderRadius: 4 },
  miniIconText: { color: colors.sage, fontSize: 10, fontWeight: '700' },
  miniName: { fontSize: 13, fontWeight: '600' },
  miniDate: { color: colors.muted, fontSize: 10, marginTop: 2 },
  miniStatus: { color: colors.sage, fontSize: 10, fontWeight: '600' },
})
