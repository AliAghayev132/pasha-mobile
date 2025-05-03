import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import Colors from '@constants/Colors';
import Fonts from '@constants/Fonts';
import { Ionicons } from '@expo/vector-icons';

const PaymentCard = ({ cardType, lastDigits, isDefault, expiry }) => {
  return (
    <View style={[styles.cardContainer, isDefault && styles.defaultCardContainer]}>
      {isDefault && (
        <View style={styles.defaultBadge}>
          <Text style={styles.defaultBadgeText}>Default</Text>
        </View>
      )}
      <View style={styles.cardTypeContainer}>
        <Ionicons 
          name={cardType === 'mastercard' ? 'card' : 'card-outline'} 
          size={28} 
          color={Colors.accent} 
        />
      </View>
      <View style={styles.cardDetails}>
        <Text style={styles.cardNumberText}>**** **** **** {lastDigits}</Text>
        <Text style={styles.cardExpiryText}>Expires {expiry}</Text>
      </View>
      <View style={styles.cardActions}>
        <TouchableOpacity style={styles.cardActionButton}>
          <Ionicons name="create-outline" size={22} color={Colors.primary} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardActionButton}>
          <Ionicons name="trash-outline" size={22} color="#ff3b30" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const PaymentMethodsScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Your Payment Methods</Text>
          <Text style={styles.headerSubtitle}>Manage your saved payment methods</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Saved Cards</Text>
          
          <PaymentCard 
            cardType="visa" 
            lastDigits="1234" 
            isDefault={true} 
            expiry="09/25"
          />
          
          <PaymentCard 
            cardType="mastercard" 
            lastDigits="5678" 
            isDefault={false} 
            expiry="12/24"
          />
          
          <TouchableOpacity style={styles.addCardButton}>
            <Ionicons name="add-circle" size={20} color={Colors.textLight} />
            <Text style={styles.addCardText}>Add New Card</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Other Payment Methods</Text>
          
          <TouchableOpacity style={styles.otherPaymentMethod}>
            <View style={styles.otherPaymentIcon}>
              <Ionicons name="cash-outline" size={24} color={Colors.accent} />
            </View>
            <View style={styles.otherPaymentDetails}>
              <Text style={styles.otherPaymentTitle}>Cash Payment</Text>
              <Text style={styles.otherPaymentSubtitle}>Pay in cash upon delivery</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color={Colors.textMuted} />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.otherPaymentMethod}>
            <View style={styles.otherPaymentIcon}>
              <Ionicons name="wallet-outline" size={24} color={Colors.accent} />
            </View>
            <View style={styles.otherPaymentDetails}>
              <Text style={styles.otherPaymentTitle}>Digital Wallet</Text>
              <Text style={styles.otherPaymentSubtitle}>Pay using your digital wallet</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color={Colors.textMuted} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 16,
  },
  header: {
    marginBottom: 24,
  },
  headerTitle: {
    fontFamily: Fonts.SfProDisplay.Bold,
    fontSize: 22,
    color: Colors.textPrimary,
    marginBottom: 8,
  },
  headerSubtitle: {
    fontFamily: Fonts.SfProDisplay.Regular,
    fontSize: 14,
    color: Colors.textMuted,
  },
  section: {
    backgroundColor: Colors.textLight,
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionTitle: {
    fontFamily: Fonts.SfProDisplay.Semibold,
    fontSize: 18,
    color: Colors.accent,
    marginBottom: 16,
  },
  cardContainer: {
    backgroundColor: Colors.background,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  defaultCardContainer: {
    borderWidth: 1,
    borderColor: Colors.accent,
  },
  defaultBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: Colors.accent,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderBottomLeftRadius: 8,
  },
  defaultBadgeText: {
    fontFamily: Fonts.SfProDisplay.Medium,
    fontSize: 10,
    color: Colors.textLight,
  },
  cardTypeContainer: {
    width: 50,
    alignItems: 'center',
  },
  cardDetails: {
    flex: 1,
    marginLeft: 12,
  },
  cardNumberText: {
    fontFamily: Fonts.SfProDisplay.Medium,
    fontSize: 16,
    color: Colors.textPrimary,
  },
  cardExpiryText: {
    fontFamily: Fonts.SfProDisplay.Regular,
    fontSize: 14,
    color: Colors.textMuted,
    marginTop: 4,
  },
  cardActions: {
    flexDirection: 'row',
  },
  cardActionButton: {
    padding: 8,
    marginLeft: 8,
  },
  addCardButton: {
    backgroundColor: Colors.primary,
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addCardText: {
    fontFamily: Fonts.SfProDisplay.Medium,
    fontSize: 16,
    color: Colors.textLight,
    marginLeft: 8,
  },
  otherPaymentMethod: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.background,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  otherPaymentIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(8, 103, 90, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  otherPaymentDetails: {
    flex: 1,
    marginLeft: 16,
  },
  otherPaymentTitle: {
    fontFamily: Fonts.SfProDisplay.Medium,
    fontSize: 16,
    color: Colors.textPrimary,
  },
  otherPaymentSubtitle: {
    fontFamily: Fonts.SfProDisplay.Regular,
    fontSize: 14,
    color: Colors.textMuted,
    marginTop: 2,
  },
});

export default PaymentMethodsScreen;
