import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@constants/Colors';
import Fonts from '@constants/Fonts';

// Sample data - replace with actual API call in production
const mockPolicies = [
  { id: '1', type: 'Auto Insurance', status: 'Active', expiry: '12/12/2023', policyNumber: 'POL-1234-5678' },
  { id: '2', type: 'Home Insurance', status: 'Active', expiry: '05/03/2024', policyNumber: 'POL-8765-4321' },
  { id: '3', type: 'Health Insurance', status: 'Active', expiry: '01/15/2024', policyNumber: 'POL-9876-5432' },
];

const PolicyCard = ({ policy }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.policyType}>{policy.type}</Text>
        <View style={styles.statusBadge}>
          <Text style={styles.statusText}>{policy.status}</Text>
        </View>
      </View>
      
      <View style={styles.cardDetails}>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Policy Number:</Text>
          <Text style={styles.detailValue}>{policy.policyNumber}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Expiry Date:</Text>
          <Text style={styles.detailValue}>{policy.expiry}</Text>
        </View>
      </View>
      
      <TouchableOpacity style={styles.viewButton}>
        <Text style={styles.viewButtonText}>View Details</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const ActivePoliciesScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color={Colors.textPrimary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Active Policies</Text>
        <View style={styles.placeholder} />
      </View>
      
      {mockPolicies.length > 0 ? (
        <FlatList
          data={mockPolicies}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <PolicyCard policy={item} />}
          contentContainerStyle={styles.listContainer}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>You don't have any active policies</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: Colors.textLight,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: Fonts.SfProDisplay.Semibold,
    color: Colors.textPrimary,
  },
  placeholder: {
    width: 40,
  },
  listContainer: {
    padding: 16,
  },
  card: {
    backgroundColor: Colors.textLight,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  policyType: {
    fontSize: 18,
    fontFamily: Fonts.SfProDisplay.Bold,
    color: Colors.textPrimary,
  },
  statusBadge: {
    backgroundColor: Colors.accent,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  statusText: {
    color: Colors.textLight,
    fontFamily: Fonts.SfProDisplay.Medium,
    fontSize: 12,
  },
  cardDetails: {
    marginBottom: 16,
  },
  detailRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  detailLabel: {
    fontSize: 14,
    color: Colors.textMuted,
    fontFamily: Fonts.SfProDisplay.Regular,
    width: '40%',
  },
  detailValue: {
    fontSize: 14,
    color: Colors.textSecondary,
    fontFamily: Fonts.SfProDisplay.Medium,
    width: '60%',
  },
  viewButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  viewButtonText: {
    color: Colors.textLight,
    fontFamily: Fonts.SfProDisplay.Semibold,
    fontSize: 14,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    fontFamily: Fonts.SfProDisplay.Medium,
    fontSize: 16,
    color: Colors.textMuted,
    textAlign: 'center',
  },
});

export default ActivePoliciesScreen;
