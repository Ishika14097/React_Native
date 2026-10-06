import React, { useState } from 'react'
import {
  View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet,
} from 'react-native'
import { colors, spacing } from '../theme'

interface DonateProps {
  sent: boolean
  onSubmit: () => void
}

export default function Donate({ sent, onSubmit }: DonateProps) {
  const [clothingType, setClothingType] = useState('Everyday clothing')
  const [fabric, setFabric] = useState('Cotton')
  const [quantity, setQuantity] = useState('1–3 pieces')
  const [condition, setCondition] = useState('Good, lightly worn')
  const [notes, setNotes] = useState('')
  const [pickup, setPickup] = useState<'doorstep' | 'dropoff'>('doorstep')

  if (sent) {
    return (
      <ScrollView contentContainerStyle={s.successContainer}>
        <View style={s.successIcon}>
          <Text style={s.successCheck}>✓</Text>
        </View>
        <View style={s.eyebrow}>
          <View style={s.eyebrowLine} />
          <Text style={s.eyebrowText}>You're in the loop</Text>
        </View>
        <Text style={s.successTitle}>Donation received.</Text>
        <Text style={s.successText}>
          We will review your details and confirm a pickup window within 24 hours.{'\n'}
          Your journey ID is <Text style={{ fontWeight: '700', color: colors.ink }}>RT-240318</Text>.
        </Text>
        <TouchableOpacity style={s.trackBtn}>
          <Text style={s.trackBtnText}>Track this donation →</Text>
        </TouchableOpacity>
      </ScrollView>
    )
  }

  return (
    <ScrollView contentContainerStyle={s.container} showsVerticalScrollIndicator={false}>
      {/* Heading */}
      <View style={s.heading}>
        <View style={s.eyebrow}>
          <View style={s.eyebrowLine} />
          <Text style={s.eyebrowText}>Give it another life</Text>
        </View>
        <Text style={s.title}>Start a <Text style={s.italic}>journey.</Text></Text>
        <Text style={s.subtitle}>Tell us about the clothes waiting in your wardrobe. We will find them a thoughtful next chapter.</Text>
      </View>

      {/* Progress */}
      <View style={s.progress}>
        <View style={s.progressActive}>
          <Text style={s.progressNumActive}>1</Text>
        </View>
        <View style={s.progressLine} />
        <View style={s.progressInactive}>
          <Text style={s.progressNumInactive}>2</Text>
        </View>
        <View style={s.progressLine} />
        <View style={s.progressInactive}>
          <Text style={s.progressNumInactive}>3</Text>
        </View>
      </View>

      {/* Form */}
      <View style={s.form}>
        {/* Upload zone */}
        <View style={s.uploadZone}>
          <Text style={s.uploadIcon}>📷</Text>
          <Text style={s.uploadTitle}>Add photos of your clothes</Text>
          <Text style={s.uploadSub}>Up to 5 photos · JPG, PNG</Text>
          <TouchableOpacity style={s.uploadBtn}>
            <Text style={s.uploadBtnText}>Browse photos</Text>
          </TouchableOpacity>
        </View>

        {/* Dropdowns (simulated as selector cards) */}
        {[
          { label: 'What kind of clothes?', value: clothingType, options: ['Everyday clothing', 'Denim', 'Traditional wear', 'Home textiles'], set: setClothingType },
          { label: 'Fabric, if you know it', value: fabric, options: ['Cotton', 'Denim', 'Silk', 'Mixed / not sure'], set: setFabric },
          { label: 'Approximate quantity', value: quantity, options: ['1–3 pieces', '4–8 pieces', '9+ pieces'], set: setQuantity },
          { label: 'Condition', value: condition, options: ['Good, lightly worn', 'Well-loved', 'Needs repair'], set: setCondition },
        ].map(({ label, value, options, set }) => (
          <View key={label} style={s.field}>
            <Text style={s.fieldLabel}>{label}</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 8 }}>
              {options.map((opt) => (
                <TouchableOpacity key={opt} style={[s.optionChip, value === opt && s.optionChipActive]} onPress={() => set(opt)}>
                  <Text style={[s.optionText, value === opt && s.optionTextActive]}>{opt}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        ))}

        {/* Notes */}
        <View style={s.field}>
          <Text style={s.fieldLabel}>Anything else to tell us?</Text>
          <TextInput
            style={s.textarea}
            placeholder="A little context helps our makers..."
            placeholderTextColor={colors.muted}
            value={notes}
            onChangeText={setNotes}
            multiline
            numberOfLines={4}
            textAlignVertical="top"
          />
        </View>

        {/* Pickup choice */}
        <View style={s.field}>
          <Text style={s.fieldLabel}>Collection method</Text>
          <TouchableOpacity style={[s.pickupOption, pickup === 'doorstep' && s.pickupActive]} onPress={() => setPickup('doorstep')}>
            <Text style={s.pickupIcon}>🚚</Text>
            <View style={{ flex: 1 }}>
              <Text style={s.pickupTitle}>Doorstep pickup</Text>
              <Text style={s.pickupSub}>Free · We collect from your address</Text>
            </View>
            <View style={[s.radio, pickup === 'doorstep' && s.radioActive]} />
          </TouchableOpacity>
          <TouchableOpacity style={[s.pickupOption, pickup === 'dropoff' && s.pickupActive]} onPress={() => setPickup('dropoff')}>
            <Text style={s.pickupIcon}>📍</Text>
            <View style={{ flex: 1 }}>
              <Text style={s.pickupTitle}>Drop-off</Text>
              <Text style={s.pickupSub}>Choose a nearby ReThread point</Text>
            </View>
            <View style={[s.radio, pickup === 'dropoff' && s.radioActive]} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={s.submitBtn} onPress={onSubmit}>
          <Text style={s.submitBtnText}>Continue to pickup details →</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const s = StyleSheet.create({
  container: { padding: spacing.lg, paddingBottom: spacing.xxxl },
  heading: { marginBottom: spacing.xl },
  eyebrow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 12 },
  eyebrowLine: { width: 22, height: 1, backgroundColor: colors.sage },
  eyebrowText: { color: colors.sage, fontSize: 10, fontWeight: '700', letterSpacing: 1.5, textTransform: 'uppercase' },
  title: { fontSize: 42, fontWeight: '500', lineHeight: 44, marginBottom: 10 },
  italic: { color: colors.terracotta, fontStyle: 'italic' },
  subtitle: { color: colors.muted, fontSize: 14, lineHeight: 22 },
  progress: { flexDirection: 'row', alignItems: 'center', marginBottom: spacing.xl, gap: 0 },
  progressActive: { width: 34, height: 34, borderRadius: 17, backgroundColor: colors.sage, justifyContent: 'center', alignItems: 'center' },
  progressNumActive: { color: colors.paper, fontSize: 12, fontWeight: '700' },
  progressInactive: { width: 34, height: 34, borderRadius: 17, backgroundColor: '#ecece3', justifyContent: 'center', alignItems: 'center' },
  progressNumInactive: { color: '#9b9d93', fontSize: 12 },
  progressLine: { flex: 1, height: 1, backgroundColor: colors.line, marginHorizontal: 8 },
  form: { gap: spacing.lg },
  uploadZone: { borderWidth: 1, borderColor: '#aab1a3', borderStyle: 'dashed', borderRadius: 8, backgroundColor: '#f4f6ef', alignItems: 'center', justifyContent: 'center', padding: spacing.xl, gap: 8 },
  uploadIcon: { fontSize: 28 },
  uploadTitle: { fontSize: 13, fontWeight: '600', color: colors.ink },
  uploadSub: { fontSize: 11, color: colors.muted },
  uploadBtn: { borderWidth: 1, borderColor: colors.sage, paddingHorizontal: 16, paddingVertical: 8, borderRadius: 4, marginTop: 6 },
  uploadBtnText: { color: colors.sage, fontSize: 11, fontWeight: '700' },
  field: { gap: 10 },
  fieldLabel: { fontSize: 11, fontWeight: '700' },
  optionChip: { paddingHorizontal: 14, paddingVertical: 8, borderRadius: 20, borderWidth: 1, borderColor: colors.line },
  optionChipActive: { backgroundColor: colors.sage, borderColor: colors.sage },
  optionText: { fontSize: 11, color: colors.muted },
  optionTextActive: { color: colors.paper },
  textarea: { borderWidth: 1, borderColor: colors.line, borderRadius: 4, padding: 12, fontSize: 13, color: colors.ink, minHeight: 90 },
  pickupOption: { flexDirection: 'row', alignItems: 'center', gap: 12, borderWidth: 1, borderColor: colors.line, padding: 16, borderRadius: 6 },
  pickupActive: { borderColor: colors.sage, backgroundColor: '#f0f4ee' },
  pickupIcon: { fontSize: 20 },
  pickupTitle: { fontSize: 12, fontWeight: '600' },
  pickupSub: { fontSize: 10, color: colors.muted, marginTop: 2 },
  radio: { width: 18, height: 18, borderRadius: 9, borderWidth: 2, borderColor: colors.line },
  radioActive: { borderColor: colors.sage, backgroundColor: colors.sage },
  submitBtn: { backgroundColor: colors.ink, paddingVertical: 16, borderRadius: 3, alignItems: 'center', marginTop: spacing.sm },
  submitBtnText: { color: colors.paper, fontWeight: '700', fontSize: 14 },
  successContainer: { padding: spacing.xl, paddingTop: spacing.xxxl, alignItems: 'center' },
  successIcon: { width: 60, height: 60, borderRadius: 30, backgroundColor: colors.sage, justifyContent: 'center', alignItems: 'center', marginBottom: spacing.xl },
  successCheck: { color: colors.paper, fontSize: 28, fontWeight: '700' },
  successTitle: { fontSize: 36, fontWeight: '500', textAlign: 'center', marginBottom: 12 },
  successText: { color: '#687060', fontSize: 14, lineHeight: 22, textAlign: 'center', marginBottom: spacing.xl },
  trackBtn: { backgroundColor: colors.ink, paddingHorizontal: 24, paddingVertical: 14, borderRadius: 3 },
  trackBtnText: { color: colors.paper, fontWeight: '700', fontSize: 13 },
})
