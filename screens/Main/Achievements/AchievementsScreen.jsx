import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, StatusBar, FlatList } from 'react-native';
import Colors from '@constants/Colors';
import Fonts from '@constants/Fonts';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const AchievementsScreen = ({ navigation }) => {
    const [selectedFilter, setSelectedFilter] = useState('All');

    const filters = ['All', 'Driving', 'Payments', 'Insurance', 'Rewards'];

    // Sample achievements data
    const achievements = [
        {
            id: '1',
            title: 'Safe Driver',
            description: 'Completed 50 trips without any incidents',
            points: 250,
            category: 'Driving',
            date: 'May 2, 2025',
            icon: 'trophy',
            iconColor: '#FFD700',
            earned: true,
        },
        {
            id: '2',
            title: 'Early Bird',
            description: 'Made all payments before due date for 3 months',
            points: 100,
            category: 'Payments',
            date: 'May 1, 2025',
            icon: 'star-circle',
            iconColor: '#4CD964',
            earned: true,
        },
        {
            id: '3',
            title: 'Premium Member',
            description: 'Upgraded to premium insurance coverage',
            points: 150,
            category: 'Insurance',
            date: 'April 28, 2025',
            icon: 'shield-check',
            iconColor: '#1F95D3',
            earned: true,
        },
        {
            id: '4',
            title: 'Eco Warrior',
            description: 'Maintained eco-friendly driving for 30 days',
            points: 200,
            category: 'Driving',
            date: 'April 25, 2025',
            icon: 'leaf',
            iconColor: '#4CD964',
            earned: true,
        },
        {
            id: '5',
            title: 'Road Expert',
            description: 'Drove over 10,000 miles safely',
            points: 300,
            category: 'Driving',
            date: 'April 20, 2025',
            icon: 'road',
            iconColor: '#FF9500',
            earned: true,
        },
        {
            id: '6',
            title: 'Family Protection',
            description: 'Added family members to your insurance',
            points: 150,
            category: 'Insurance',
            date: 'April 15, 2025',
            icon: 'account-group',
            iconColor: '#5AC8FA',
            earned: true,
        },
        {
            id: '7',
            title: 'Loyalty Champion',
            description: 'Member for over 1 year',
            points: 200,
            category: 'Rewards',
            date: 'April 10, 2025',
            icon: 'medal',
            iconColor: '#FF2D55',
            earned: true,
        },
        {
            id: '8',
            title: 'Perfect Record',
            description: 'No claims filed for 6 months',
            points: 500,
            category: 'Insurance',
            date: null,
            icon: 'certificate',
            iconColor: '#007AFF',
            earned: false,
        },
        {
            id: '9',
            title: 'Payment Wizard',
            description: 'Set up automatic payments',
            points: 50,
            category: 'Payments',
            date: 'April 5, 2025',
            icon: 'cash',
            iconColor: '#4CD964',
            earned: true,
        },
        {
            id: '10',
            title: 'Night Driver',
            description: 'Complete 20 safe night-time drives',
            points: 150,
            category: 'Driving',
            date: null,
            icon: 'weather-night',
            iconColor: '#5856D6',
            earned: false,
        },
    ];

    const filteredAchievements = selectedFilter === 'All'
        ? achievements
        : achievements.filter(item => item.category === selectedFilter);

    const renderAchievement = ({ item }) => (
        <View style={[styles.achievementCard, !item.earned && styles.unearnedCard]}>
            <View style={styles.achievementHeader}>
                <View style={[styles.achievementIconContainer, { backgroundColor: `${item.iconColor}20` }]}>
                    <MaterialCommunityIcons name={item.icon} size={28} color={item.iconColor} />
                </View>
                <View style={styles.headerRightContent}>
                    <View style={styles.categoryChip}>
                        <Text style={styles.categoryText}>{item.category}</Text>
                    </View>
                    <View style={styles.achievementPoints}>
                        <Text style={styles.achievementPointsText}>+{item.points}</Text>
                    </View>
                </View>
            </View>
            <Text style={styles.achievementTitle}>{item.title}</Text>
            <Text style={styles.achievementDescription}>
                {item.description}
            </Text>
            {item.earned ? (
                <Text style={styles.achievementDate}>Earned {item.date}</Text>
            ) : (
                <Text style={styles.achievementNotEarned}>Not yet earned</Text>
            )}
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={Colors.background} />

            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}
                >
                    <Ionicons name="arrow-back" size={24} color={Colors.textPrimary} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Achievements</Text>
                <View style={{ width: 24 }} />
            </View>

            {/* Filters */}
            <View style={styles.filtersWrapper}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.filtersContent}
                    bounces={true}
                    alwaysBounceHorizontal={false}
                >
                    {filters.map(filter => (
                        <TouchableOpacity
                            key={filter}
                            activeOpacity={0.7}
                            style={[
                                styles.filterChip,
                                selectedFilter === filter && styles.filterChipActive
                            ]}
                            onPress={() => setSelectedFilter(filter)}
                        >
                            <Text style={[
                                styles.filterText,
                                selectedFilter === filter && styles.filterTextActive
                            ]}>
                                {filter}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>

            {/* Stats Summary */}
            <View style={styles.statsContainer}>
                <View style={styles.statItem}>
                    <Text style={styles.statValue}>
                        {achievements.filter(a => a.earned).length}/{achievements.length}
                    </Text>
                    <Text style={styles.statLabel}>Completed</Text>
                </View>
                <View style={styles.statItem}>
                    <Text style={styles.statValue}>
                        {achievements.reduce((sum, a) => a.earned ? sum + a.points : sum, 0)}
                    </Text>
                    <Text style={styles.statLabel}>Total Points</Text>
                </View>
                <View style={styles.statItem}>
                    <Text style={styles.statValue}>
                        {Math.round((achievements.filter(a => a.earned).length / achievements.length) * 100)}%
                    </Text>
                    <Text style={styles.statLabel}>Progress</Text>
                </View>
            </View>

            {/* Achievements List */}
            <FlatList
                data={filteredAchievements}
                renderItem={renderAchievement}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.achievementsList}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 100,
        backgroundColor: Colors.background,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    backButton: {
        padding: 5,
    },
    headerTitle: {
        fontSize: 20,
        fontFamily: Fonts.SfProDisplay.Semibold,
        color: Colors.textPrimary,
    },
    filtersWrapper: {
        height: 52,
        marginBottom: 5,
    },
    filtersContainer: {
        maxHeight: 50,
    },
    filtersContent: {
        paddingHorizontal: 20,
        paddingVertical: 6,
        alignItems: 'center',
    },
    filterChip: {
        paddingHorizontal: 18,
        paddingVertical: 8,
        backgroundColor: Colors.textLight,
        borderRadius: 20,
        marginRight: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
        borderWidth: 1,
        borderColor: 'transparent',
    },
    filterChipActive: {
        backgroundColor: Colors.primary,
        borderColor: Colors.primary,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,
    },
    filterText: {
        fontFamily: Fonts.SfProDisplay.Medium,
        color: Colors.textPrimary,
        fontSize: 14,
    },
    filterTextActive: {
        color: Colors.textLight,
        fontFamily: Fonts.SfProDisplay.Semibold,
    },
    statsContainer: {
        flexDirection: 'row',
        marginVertical: 20,
        paddingHorizontal: 20,
    },
    statItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        backgroundColor: Colors.textLight,
        borderRadius: 16,
        margin: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    statValue: {
        fontSize: 18,
        fontFamily: Fonts.SfProDisplay.Bold,
        color: Colors.primary,
        marginBottom: 5,
    },
    statLabel: {
        fontSize: 12,
        fontFamily: Fonts.SfProDisplay.Regular,
        color: Colors.textMuted,
    },
    achievementsList: {
        paddingHorizontal: 20,
        paddingBottom: 30,
    },
    achievementCard: {
        backgroundColor: Colors.textLight,
        padding: 20,
        borderRadius: 16,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
        position: 'relative',
    },
    unearnedCard: {
        opacity: 0.7,
        backgroundColor: Colors.background,
        borderWidth: 1,
        borderColor: '#E0E0E0',
    },
    achievementHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    headerRightContent: {
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: 8,
    },
    achievementIconContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    achievementPoints: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        backgroundColor: 'rgba(76, 217, 100, 0.1)',
        borderRadius: 12,
    },
    achievementPointsText: {
        color: '#4CD964',
        fontFamily: Fonts.SfProDisplay.Bold,
        fontSize: 14,
    },
    achievementTitle: {
        fontSize: 18,
        color: Colors.textPrimary,
        fontFamily: Fonts.SfProDisplay.Semibold,
        marginBottom: 8,
    },
    achievementDescription: {
        fontSize: 14,
        color: Colors.textMuted,
        fontFamily: Fonts.SfProDisplay.Regular,
        lineHeight: 20,
        marginBottom: 16,
    },
    achievementDate: {
        fontSize: 14,
        color: Colors.textSecondary,
        fontFamily: Fonts.SfProDisplay.Regular,
    },
    achievementNotEarned: {
        fontSize: 14,
        color: Colors.textMuted,
        fontFamily: Fonts.SfProDisplay.Italic || Fonts.SfProDisplay.Regular,
    },
    categoryChip: {
        backgroundColor: 'rgba(31, 149, 211, 0.1)',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 12,
    },
    categoryText: {
        fontSize: 11,
        fontFamily: Fonts.SfProDisplay.Medium,
        color: Colors.primary,
    },
});

export default AchievementsScreen;