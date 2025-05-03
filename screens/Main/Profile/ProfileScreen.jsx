import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';


import Colors from '@constants/Colors';
import Fonts from '@constants/Fonts';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

const ProfileScreen = () => {
  return (
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }} style={styles.container} showsVerticalScrollIndicator={false}>
        <StatusBar style="light" backgroundColor={Colors.primary} />
        {/* Header with profile photo */}
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <View style={styles.profileImageContainer}>
              {/* <Image 
                source={require('../assets/images/profile-placeholder.png')} 
                style={styles.profileImage}
              /> */}
              <TouchableOpacity style={styles.editButton}>
                <Ionicons name="camera-outline" size={18} color={Colors.textLight} />
              </TouchableOpacity>
            </View>
            <View style={styles.nameContainer}>
              <View style={styles.nameRankContainer}>
                <Text style={styles.name}>John Doe</Text>
                <View style={styles.rankBadge}>
                  <Text style={styles.rankText}>Gold</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Insurance Card */}

        {/* Menu Options */}
        <View style={styles.menuSection}>
          <Text style={styles.sectionTitle}>Account</Text>

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIconContainer}>
              <Ionicons name="person-outline" size={22} color={Colors.primary} />
            </View>
            <Text style={styles.menuText}>Personal Information</Text>
            <Ionicons name="chevron-forward" size={20} color={Colors.textMuted} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIconContainer}>
              <Ionicons name="car-outline" size={22} color={Colors.primary} />
            </View>
            <Text style={styles.menuText}>My Vehicles</Text>
            <Ionicons name="chevron-forward" size={20} color={Colors.textMuted} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIconContainer}>
              <Ionicons name="card-outline" size={22} color={Colors.primary} />
            </View>
            <Text style={styles.menuText}>Payment Methods</Text>
            <Ionicons name="chevron-forward" size={20} color={Colors.textMuted} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIconContainer}>
              <Ionicons name="document-text-outline" size={22} color={Colors.primary} />
            </View>
            <Text style={styles.menuText}>Documents</Text>
            <Ionicons name="chevron-forward" size={20} color={Colors.textMuted} />
          </TouchableOpacity>
        </View>

        <View style={styles.menuSection}>
          <Text style={styles.sectionTitle}>Preferences</Text>

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIconContainer}>
              <Ionicons name="notifications-outline" size={22} color={Colors.primary} />
            </View>
            <Text style={styles.menuText}>Notifications</Text>
            <Ionicons name="chevron-forward" size={20} color={Colors.textMuted} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIconContainer}>
              <Ionicons name="globe-outline" size={22} color={Colors.primary} />
            </View>
            <Text style={styles.menuText}>Language</Text>
            <Ionicons name="chevron-forward" size={20} color={Colors.textMuted} />
          </TouchableOpacity>
        </View>

        <View style={styles.menuSection}>
          <Text style={styles.sectionTitle}>Support</Text>

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIconContainer}>
              <Ionicons name="help-circle-outline" size={22} color={Colors.primary} />
            </View>
            <Text style={styles.menuText}>Help Center</Text>
            <Ionicons name="chevron-forward" size={20} color={Colors.textMuted} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIconContainer}>
              <Ionicons name="chatbubble-ellipses-outline" size={22} color={Colors.primary} />
            </View>
            <Text style={styles.menuText}>Contact Us</Text>
            <Ionicons name="chevron-forward" size={20} color={Colors.textMuted} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.logoutButton}>
          <Ionicons name="log-out-outline" size={20} color={Colors.textLight} />
          <Text style={styles.logoutText}>Sign Out</Text>
        </TouchableOpacity>

      </ScrollView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  container: {
    flex: 1,
  },
  header: {
    padding: 25,
    backgroundColor: Colors.primary,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImageContainer: {
    position: 'relative',
    marginRight: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: Colors.textLight,
  },
  editButton: {
    bottom: 0,
    right: 0,
    padding: 8,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: Colors.textLight,
    backgroundColor: Colors.accent,
  },
  nameContainer: {
    flex: 1,
  },
  nameRankContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontFamily: Fonts.SfProDisplay.Bold,
    fontSize: 24,
    color: Colors.textLight,
    marginRight: 10,
  },
  rankBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 12,
  },
  rankText: {
    fontFamily: Fonts.SfProDisplay.Medium,
    fontSize: 14,
    color: Colors.textLight,
  },
  card: {
    backgroundColor: Colors.textLight,
    borderRadius: 16,
    marginTop: -20,
    marginHorizontal: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  cardTitle: {
    fontFamily: Fonts.SfProDisplay.Semibold,
    fontSize: 18,
    color: Colors.textPrimary,
  },
  viewDetails: {
    fontFamily: Fonts.SfProDisplay.Medium,
    fontSize: 14,
    color: Colors.primary,
  },
  policyInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  infoColumn: {
    flex: 1,
  },
  infoLabel: {
    fontFamily: Fonts.SfProDisplay.Regular,
    fontSize: 14,
    color: Colors.textMuted,
    marginBottom: 4,
  },
  infoValue: {
    fontFamily: Fonts.SfProDisplay.Medium,
    fontSize: 16,
    color: Colors.textPrimary,
  },
  statusBadge: {
    backgroundColor: '#e6f7e6',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  statusText: {
    fontFamily: Fonts.SfProDisplay.Medium,
    fontSize: 14,
    color: '#2e7d32',
  },
  divider: {
    height: 1,
    backgroundColor: '#f0f0f0',
    marginVertical: 5,
  },
  renewButton: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  renewButtonText: {
    fontFamily: Fonts.SfProDisplay.Medium,
    fontSize: 14,
    color: Colors.textLight,
  },
  menuSection: {
    backgroundColor: Colors.textLight,
    borderRadius: 16,
    marginHorizontal: 20,
    marginTop: 20,
    padding: 20,
  },
  sectionTitle: {
    fontFamily: Fonts.SfProDisplay.Semibold,
    fontSize: 18,
    color: Colors.textPrimary,
    marginBottom: 15,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
  },
  menuIconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#f0f7ff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  menuText: {
    fontFamily: Fonts.SfProDisplay.Regular,
    fontSize: 16,
    color: Colors.textPrimary,
    flex: 1,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.accent,
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
    padding: 16,
    borderRadius: 12,
  },
  logoutText: {
    fontFamily: Fonts.SfProDisplay.Medium,
    fontSize: 16,
    color: Colors.textLight,
    marginLeft: 8,
  },
  versionText: {
    fontFamily: Fonts.SfProDisplay.Regular,
    fontSize: 14,
    color: Colors.textMuted,
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default ProfileScreen;
