import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Switch, TouchableOpacity } from 'react-native';
import Colors from '@constants/Colors';
import Fonts from '@constants/Fonts';
import { Ionicons } from '@expo/vector-icons';

const NotificationToggle = ({ title, description, value, onValueChange }) => {
  return (
    <View style={styles.toggleItem}>
      <View style={styles.toggleInfo}>
        <Text style={styles.toggleTitle}>{title}</Text>
        <Text style={styles.toggleDescription}>{description}</Text>
      </View>
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{ false: '#dedede', true: Colors.accent }}
        thumbColor={Colors.textLight}
      />
    </View>
  );
};

const NotificationItem = ({ title, time, message, isRead }) => {
  return (
    <TouchableOpacity style={[styles.notificationItem, !isRead && styles.unreadNotification]}>
      {!isRead && <View style={styles.unreadDot} />}
      <View style={styles.notificationIconContainer}>
        <Ionicons name="notifications" size={20} color={Colors.accent} />
      </View>
      <View style={styles.notificationContent}>
        <Text style={styles.notificationTitle}>{title}</Text>
        <Text style={styles.notificationMessage}>{message}</Text>
        <Text style={styles.notificationTime}>{time}</Text>
      </View>
    </TouchableOpacity>
  );
};

const NotificationsScreen = () => {
  const [pushNotifications, setPushNotifications] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [marketingNotifications, setMarketingNotifications] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Notifications</Text>
          <Text style={styles.headerSubtitle}>Manage how you receive notifications</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Notification Settings</Text>

          <NotificationToggle
            title="Push Notifications"
            description="Receive push notifications on your device"
            value={pushNotifications}
            onValueChange={setPushNotifications}
          />

          <NotificationToggle
            title="Email Notifications"
            description="Receive notifications via email"
            value={emailNotifications}
            onValueChange={setEmailNotifications}
          />

          <NotificationToggle
            title="Marketing Communications"
            description="Receive updates about new features and offers"
            value={marketingNotifications}
            onValueChange={setMarketingNotifications}
          />

          <NotificationToggle
            title="Sound"
            description="Play sound when notifications arrive"
            value={soundEnabled}
            onValueChange={setSoundEnabled}
          />
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent Notifications</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>

          <NotificationItem
            title="Payment Successful"
            time="Today, 10:45 AM"
            message="Your payment of $25.00 was successful"
            isRead={false}
          />

          <NotificationItem
            title="New Feature Available"
            time="Yesterday, 2:30 PM"
            message="Check out our new money transfer feature"
            isRead={false}
          />

          <NotificationItem
            title="Account Security"
            time="20 May, 9:15 AM"
            message="We've improved your account security"
            isRead={true}
          />

          <NotificationItem
            title="Verification Complete"
            time="18 May, 3:22 PM"
            message="Your account verification has been completed"
            isRead={true}
          />

          <TouchableOpacity style={styles.clearButton}>
            <Text style={styles.clearButtonText}>Clear All Notifications</Text>
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
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontFamily: Fonts.SfProDisplay.Semibold,
    fontSize: 18,
    color: Colors.accent,
    marginBottom: 16,
  },
  seeAllText: {
    fontFamily: Fonts.SfProDisplay.Medium,
    fontSize: 14,
    color: Colors.primary,
  },
  toggleItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.05)',
  },
  toggleInfo: {
    flex: 1,
    paddingRight: 16,
  },
  toggleTitle: {
    fontFamily: Fonts.SfProDisplay.Medium,
    fontSize: 16,
    color: Colors.textPrimary,
    marginBottom: 4,
  },
  toggleDescription: {
    fontFamily: Fonts.SfProDisplay.Regular,
    fontSize: 14,
    color: Colors.textMuted,
  },
  notificationItem: {
    flexDirection: 'row',
    backgroundColor: Colors.background,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    position: 'relative',
  },
  unreadNotification: {
    backgroundColor: 'rgba(31, 149, 211, 0.05)',
  },
  unreadDot: {
    position: 'absolute',
    top: 16,
    right: 16,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.primary,
  },
  notificationIconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(8, 103, 90, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontFamily: Fonts.SfProDisplay.Medium,
    fontSize: 16,
    color: Colors.textPrimary,
    marginBottom: 4,
  },
  notificationMessage: {
    fontFamily: Fonts.SfProDisplay.Regular,
    fontSize: 14,
    color: Colors.textSecondary,
    marginBottom: 8,
  },
  notificationTime: {
    fontFamily: Fonts.SfProDisplay.Regular,
    fontSize: 12,
    color: Colors.textMuted,
  },
  clearButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    marginTop: 8,
  },
  clearButtonText: {
    fontFamily: Fonts.SfProDisplay.Medium,
    fontSize: 14,
    color: Colors.primary,
  },
});

export default NotificationsScreen;
