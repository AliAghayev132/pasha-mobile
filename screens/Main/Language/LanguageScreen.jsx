import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import Colors from '@constants/Colors';
import Fonts from '@constants/Fonts';
import { Ionicons } from '@expo/vector-icons';

const languages = [
    { id: 'en', name: 'English', flag: '🇬🇧' },
    { id: 'az', name: 'Azərbaycan', flag: '🇦🇿' },
    { id: 'ru', name: 'Русский', flag: '🇷🇺' },
    { id: 'tr', name: 'Türkçe', flag: '🇹🇷' },
];

const LanguageScreen = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('az');

    const renderLanguageItem = ({ item }) => {
        const isSelected = selectedLanguage === item.id;

        return (
            <TouchableOpacity
                style={[styles.languageItem, isSelected && styles.selectedLanguageItem]}
                onPress={() => setSelectedLanguage(item.id)}
            >
                <View style={styles.flagContainer}>
                    <Text style={styles.flagText}>{item.flag}</Text>
                </View>
                <Text style={[styles.languageName, isSelected && styles.selectedLanguageName]}>
                    {item.name}
                </Text>
                {isSelected && (
                    <Ionicons name="checkmark-circle" size={24} color={Colors.accent} />
                )}
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Language</Text>
                <Text style={styles.headerSubtitle}>Select your preferred language</Text>
            </View>

            <View style={styles.languageContainer}>
                <FlatList
                    data={languages}
                    renderItem={renderLanguageItem}
                    keyExtractor={item => item.id}
                    contentContainerStyle={styles.languageList}
                    showsVerticalScrollIndicator={false}
                />
            </View>

            <View style={styles.infoContainer}>
                <View style={styles.infoIconContainer}>
                    <Ionicons name="information-circle-outline" size={24} color={Colors.primary} />
                </View>
                <Text style={styles.infoText}>
                    Changing the language will affect the entire application interface
                </Text>
            </View>

            <TouchableOpacity style={styles.saveButton}>
                <Text style={styles.saveButtonText}>Save Changes</Text>
            </TouchableOpacity>
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
    languageContainer: {
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
    languageList: {
        paddingBottom: 8,
    },
    languageItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.05)',
    },
    selectedLanguageItem: {
        backgroundColor: 'rgba(8, 103, 90, 0.05)',
        borderRadius: 8,
        borderBottomWidth: 0,
        marginVertical: 4,
        paddingHorizontal: 12,
    },
    flagContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(31, 149, 211, 0.1)',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    flagText: {
        fontSize: 20,
    },
    languageName: {
        flex: 1,
        fontFamily: Fonts.SfProDisplay.Medium,
        fontSize: 16,
        color: Colors.textPrimary,
    },
    selectedLanguageName: {
        fontFamily: Fonts.SfProDisplay.Semibold,
        color: Colors.accent,
    },
    infoContainer: {
        flexDirection: 'row',
        backgroundColor: 'rgba(31, 149, 211, 0.1)',
        borderRadius: 12,
        padding: 16,
        marginBottom: 20,
    },
    infoIconContainer: {
        marginRight: 16,
    },
    infoText: {
        flex: 1,
        fontFamily: Fonts.SfProDisplay.Regular,
        fontSize: 14,
        color: Colors.textSecondary,
    },
    saveButton: {
        backgroundColor: Colors.accent,
        borderRadius: 12,
        padding: 16,
        alignItems: 'center',
    },
    saveButtonText: {
        fontFamily: Fonts.SfProDisplay.Semibold,
        fontSize: 16,
        color: Colors.textLight,
    },
});

export default LanguageScreen;
