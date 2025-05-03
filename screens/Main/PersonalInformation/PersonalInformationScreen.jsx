import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import Colors from '@constants/Colors';
import Fonts from '@constants/Fonts';
import { Ionicons } from '@expo/vector-icons';

const PersonalInformationScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.profileImageContainer}>
            <Image
              source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
              style={styles.profileImage}
            />
            <TouchableOpacity style={styles.editImageButton}>
              <Ionicons name="camera" size={18} color={Colors.textLight} />
            </TouchableOpacity>
          </View>
          <Text style={styles.name}>Anar Aliyev</Text>
          <Text style={styles.email}>anar.aliyev@example.com</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Personal Details</Text>

          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Full Name</Text>
            <View style={styles.infoValueContainer}>
              <Text style={styles.infoValue}>Anar Aliyev</Text>
              <Ionicons name="create-outline" size={20} color={Colors.accent} />
            </View>
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Phone Number</Text>
            <View style={styles.infoValueContainer}>
              <Text style={styles.infoValue}>+994 50 123 45 67</Text>
              <Ionicons name="create-outline" size={20} color={Colors.accent} />
            </View>
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Email</Text>
            <View style={styles.infoValueContainer}>
              <Text style={styles.infoValue}>anar.aliyev@example.com</Text>
              <Ionicons name="create-outline" size={20} color={Colors.accent} />
            </View>
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Date of Birth</Text>
            <View style={styles.infoValueContainer}>
              <Text style={styles.infoValue}>15.04.1988</Text>
              <Ionicons name="create-outline" size={20} color={Colors.accent} />
            </View>
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Address</Text>
            <View style={styles.infoValueContainer}>
              <Text style={styles.infoValue}>Baku, Azerbaijan</Text>
              <Ionicons name="create-outline" size={20} color={Colors.accent} />
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.securityButton}>
          <Ionicons name="shield-checkmark" size={20} color={Colors.textLight} />
          <Text style={styles.securityButtonText}>Security Settings</Text>
        </TouchableOpacity>
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
    alignItems: 'center',
    marginBottom: 24,
  },
  profileImageContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: Colors.accent,
  },
  editImageButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: Colors.primary,
    width: 34,
    height: 34,
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: Colors.textLight,
  },
  name: {
    fontFamily: Fonts.SfProDisplay.Bold,
    fontSize: 22,
    color: Colors.textPrimary,
    marginBottom: 4,
  },
  email: {
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
  infoItem: {
    marginBottom: 16,
  },
  infoLabel: {
    fontFamily: Fonts.SfProDisplay.Regular,
    fontSize: 14,
    color: Colors.textMuted,
    marginBottom: 4,
  },
  infoValueContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoValue: {
    fontFamily: Fonts.SfProDisplay.Medium,
    fontSize: 16,
    color: Colors.textPrimary,
  },
  securityButton: {
    backgroundColor: Colors.accent,
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  securityButtonText: {
    fontFamily: Fonts.SfProDisplay.Medium,
    fontSize: 16,
    color: Colors.textLight,
    marginLeft: 8,
  },
});

export default PersonalInformationScreen;
