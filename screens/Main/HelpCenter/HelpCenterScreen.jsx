import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import Colors from '@constants/Colors';
import Fonts from '@constants/Fonts';
import { Ionicons } from '@expo/vector-icons';

const FAQItem = ({ question, answer }) => {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <View style={styles.faqItem}>
      <TouchableOpacity 
        style={styles.faqQuestion}
        onPress={() => setExpanded(!expanded)}
      >
        <Text style={styles.faqQuestionText}>{question}</Text>
        <Ionicons 
          name={expanded ? 'chevron-up' : 'chevron-down'} 
          size={20} 
          color={Colors.accent} 
        />
      </TouchableOpacity>
      
      {expanded && (
        <View style={styles.faqAnswer}>
          <Text style={styles.faqAnswerText}>{answer}</Text>
        </View>
      )}
    </View>
  );
};

const HelpCenterScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Help Center</Text>
          <Text style={styles.headerSubtitle}>Find answers to common questions</Text>
        </View>

        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color={Colors.textMuted} style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search for help"
            placeholderTextColor={Colors.textMuted}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery('')}>
              <Ionicons name="close-circle" size={20} color={Colors.textMuted} />
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.quickLinksContainer}>
          <Text style={styles.sectionTitle}>Quick Links</Text>
          
          <View style={styles.quickLinksGrid}>
            <TouchableOpacity style={styles.quickLinkItem}>
              <View style={styles.quickLinkIcon}>
                <Ionicons name="card-outline" size={24} color={Colors.accent} />
              </View>
              <Text style={styles.quickLinkText}>Payments</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.quickLinkItem}>
              <View style={styles.quickLinkIcon}>
                <Ionicons name="shield-outline" size={24} color={Colors.accent} />
              </View>
              <Text style={styles.quickLinkText}>Security</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.quickLinkItem}>
              <View style={styles.quickLinkIcon}>
                <Ionicons name="person-outline" size={24} color={Colors.accent} />
              </View>
              <Text style={styles.quickLinkText}>Account</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.quickLinkItem}>
              <View style={styles.quickLinkIcon}>
                <Ionicons name="settings-outline" size={24} color={Colors.accent} />
              </View>
              <Text style={styles.quickLinkText}>Settings</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.faqContainer}>
          <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>
          
          <FAQItem 
            question="How do I reset my password?"
            answer="To reset your password, go to the login screen and tap on 'Forgot Password'. Enter your email address and follow the instructions sent to your email."
          />
          
          <FAQItem 
            question="How can I change my phone number?"
            answer="You can change your phone number in the Personal Information section of your profile. Tap on the edit icon next to your current phone number and follow the verification process."
          />
          
          <FAQItem 
            question="Is my data secure?"
            answer="Yes, we use industry-standard encryption and security measures to protect your data. Your personal information is never shared with third parties without your explicit consent."
          />
          
          <FAQItem 
            question="How do I contact customer support?"
            answer="You can contact our customer support team through the Contact Us section in the app, by calling our support line at +994 XX XXX XX XX, or by sending an email to support@pasha.az."
          />
          
          <FAQItem 
            question="How do I add a new payment method?"
            answer="To add a new payment method, go to the Payment Methods section in your profile and tap on 'Add New Card'. Enter your card details and follow the verification process."
          />
        </View>
        
        <View style={styles.contactContainer}>
          <Text style={styles.contactTitle}>Still need help?</Text>
          <Text style={styles.contactText}>
            Our customer support team is available to assist you with any questions or issues.
          </Text>
          <TouchableOpacity style={styles.contactButton}>
            <Ionicons name="chatbubble-ellipses-outline" size={20} color={Colors.textLight} />
            <Text style={styles.contactButtonText}>Contact Support</Text>
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.textLight,
    borderRadius: 12,
    paddingHorizontal: 16,
    marginBottom: 24,
    height: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 50,
    fontFamily: Fonts.SfProDisplay.Regular,
    fontSize: 16,
    color: Colors.textPrimary,
  },
  quickLinksContainer: {
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
  quickLinksGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  quickLinkItem: {
    width: '48%',
    backgroundColor: Colors.background,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginBottom: 12,
  },
  quickLinkIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(8, 103, 90, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  quickLinkText: {
    fontFamily: Fonts.SfProDisplay.Medium,
    fontSize: 14,
    color: Colors.textPrimary,
  },
  faqContainer: {
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
  faqItem: {
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.05)',
    paddingBottom: 12,
  },
  faqQuestion: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  faqQuestionText: {
    fontFamily: Fonts.SfProDisplay.Medium,
    fontSize: 16,
    color: Colors.textPrimary,
    flex: 1,
    paddingRight: 16,
  },
  faqAnswer: {
    marginTop: 12,
    backgroundColor: Colors.background,
    borderRadius: 8,
    padding: 12,
  },
  faqAnswerText: {
    fontFamily: Fonts.SfProDisplay.Regular,
    fontSize: 14,
    color: Colors.textSecondary,
    lineHeight: 20,
  },
  contactContainer: {
    backgroundColor: Colors.accent,
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  contactTitle: {
    fontFamily: Fonts.SfProDisplay.Bold,
    fontSize: 18,
    color: Colors.textLight,
    marginBottom: 8,
  },
  contactText: {
    fontFamily: Fonts.SfProDisplay.Regular,
    fontSize: 14,
    color: Colors.textLight,
    opacity: 0.8,
    textAlign: 'center',
    marginBottom: 16,
  },
  contactButton: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  contactButtonText: {
    fontFamily: Fonts.SfProDisplay.Medium,
    fontSize: 16,
    color: Colors.textLight,
    marginLeft: 8,
  },
});

export default HelpCenterScreen;
