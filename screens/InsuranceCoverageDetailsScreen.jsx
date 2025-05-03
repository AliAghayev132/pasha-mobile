import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import Colors from '@constants/Colors';
import Fonts from '@constants/Fonts';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const InsuranceCoverageDetailsScreen = () => {
  const navigation = useNavigation();
  
  // Example coverage data
  const coverageItems = [
    {
      title: 'Hospitalization',
      covered: true,
      description: 'Full coverage for hospital stays up to 30 days per year.',
      icon: 'medical'
    },
    {
      title: 'Outpatient Services',
      covered: true,
      description: 'Coverage for doctor visits, laboratory tests, and other outpatient procedures.',
      icon: 'medkit'
    },
    {
      title: 'Prescription Drugs',
      covered: true,
      description: 'Coverage for prescribed medications with a $10 copay.',
      icon: 'bandage'
    },
    {
      title: 'Dental Services',
      covered: false,
      description: 'Basic dental services are not covered under this plan.',
      icon: 'fitness'
    },
    {
      title: 'Vision Care',
      covered: false,
      description: 'Vision examinations and corrective lenses are not covered.',
      icon: 'eye'
    },
    {
      title: 'Emergency Services',
      covered: true,
      description: 'Full coverage for emergency room visits and ambulance services.',
      icon: 'alert-circle'
    },
  ];

  const renderIcon = (item) => {
    return <Ionicons name={item.icon} size={24} color={Colors.primary} style={styles.itemIcon} />;
  };

  const renderStatusIcon = (covered) => {
    if (covered) {
      return <Ionicons name="checkmark-circle" size={20} color={Colors.accent} />;
    } else {
      return <Ionicons name="close-circle" size={20} color={Colors.textMuted} />;
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color={Colors.textLight} />
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Insurance Coverage Details</Text>
          <Text style={styles.headerSubtitle}>Your plan coverage information</Text>
        </View>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.coverageContainer}>
          {coverageItems.map((item, index) => (
            <View key={index} style={styles.coverageItem}>
              <View style={styles.coverageHeader}>
                <View style={styles.titleContainer}>
                  {renderIcon(item)}
                  <Text style={styles.coverageTitle}>{item.title}</Text>
                </View>
                <View style={styles.statusContainer}>
                  {renderStatusIcon(item.covered)}
                  <Text style={[
                    styles.coverageStatus,
                    { color: item.covered ? Colors.accent : Colors.textMuted }
                  ]}>
                    {item.covered ? 'Covered' : 'Not Covered'}
                  </Text>
                </View>
              </View>
              <Text style={styles.coverageDescription}>{item.description}</Text>
            </View>
          ))}
        </View>
        <View style={styles.disclaimerContainer}>
          <Text style={styles.disclaimerText}>
            This is a summary of your insurance coverage. Please refer to your policy documents for complete details, terms, and conditions.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  safeArea: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  backButton: {
    padding: 8,
  },
  headerTitleContainer: {
    flex: 1,
    marginLeft: 8,
  },
  headerTitle: {
    fontFamily: Fonts.SfProDisplay.Bold,
    fontSize: 22,
    color: Colors.textLight,
  },
  headerSubtitle: {
    fontFamily: Fonts.SfProDisplay.Regular,
    fontSize: 14,
    color: Colors.textLight,
    opacity: 0.8,
  },
  scrollView: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  coverageContainer: {
    padding: 16,
  },
  coverageItem: {
    backgroundColor: Colors.textLight,
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  coverageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 2,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
  },
  itemIcon: {
    marginRight: 10,
  },
  coverageTitle: {
    fontFamily: Fonts.SfProDisplay.Semibold,
    fontSize: 18,
    color: Colors.textPrimary,
  },
  coverageStatus: {
    fontFamily: Fonts.SfProDisplay.Medium,
    fontSize: 14,
    marginLeft: 5,
  },
  coverageDescription: {
    fontFamily: Fonts.SfProDisplay.Regular,
    fontSize: 16,
    color: Colors.textSecondary,
    lineHeight: 22,
    paddingLeft: 34, // To align with the title text after the icon
  },
  disclaimerContainer: {
    padding: 16,
    marginTop: 8,
    marginBottom: 24,
  },
  disclaimerText: {
    fontFamily: Fonts.SfProDisplay.Light,
    fontSize: 14,
    color: Colors.textMuted,
    lineHeight: 20,
    textAlign: 'center',
  },
});

export default InsuranceCoverageDetailsScreen;
