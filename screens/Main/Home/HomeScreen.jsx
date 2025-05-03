import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import Colors from '@constants/Colors';
import Fonts from '@constants/Fonts';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                {/* Header Section */}
                <View style={styles.headerContainer}>
                    <View style={styles.header}>
                        <View>
                            <Text style={styles.headerGreeting}>Good morning,</Text>
                            <Text style={styles.headerTitle}>James!</Text>
                        </View>
                        <View style={styles.headerActions}>
                            <TouchableOpacity style={styles.notificationButton}>
                                <View style={styles.notificationBadge} />
                                <Ionicons name="notifications-outline" size={24} color={Colors.textLight} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                {/* Recent Achievements Section */}
                <View style={styles.sectionContainer}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Recent achievements</Text>
                        <TouchableOpacity style={styles.viewAllButton}>
                            <Text style={styles.viewAllText}>View all</Text>
                            <Ionicons name="chevron-forward" size={16} color={Colors.primary} />
                        </TouchableOpacity>
                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.achievementsScrollView}>
                        <View style={styles.achievementCard}>
                            <View style={styles.achievementHeader}>
                                <View style={styles.achievementIconContainer}>
                                    <MaterialCommunityIcons name="trophy" size={28} color="#FFD700" />
                                </View>
                                <View style={styles.achievementPoints}>
                                    <Text style={styles.achievementPointsText}>+250</Text>
                                </View>
                            </View>
                            <Text style={styles.achievementTitle}>Safe Driver</Text>
                            <Text style={styles.achievementDescription}>
                                Completed 50 trips without any incidents
                            </Text>
                            <Text style={styles.achievementDate}>Earned today</Text>
                        </View>

                        <View style={styles.achievementCard}>
                            <View style={styles.achievementHeader}>
                                <View style={styles.achievementIconContainer}>
                                    <MaterialCommunityIcons name="star-circle" size={28} color="#4CD964" />
                                </View>
                                <View style={styles.achievementPoints}>
                                    <Text style={styles.achievementPointsText}>+100</Text>
                                </View>
                            </View>
                            <Text style={styles.achievementTitle}>Early Bird</Text>
                            <Text style={styles.achievementDescription}>
                                Made all payments before due date for 3 months
                            </Text>
                            <Text style={styles.achievementDate}>Earned yesterday</Text>
                        </View>

                        <View style={styles.achievementCard}>
                            <View style={styles.achievementHeader}>
                                <View style={styles.achievementIconContainer}>
                                    <MaterialCommunityIcons name="shield-check" size={28} color="#1F95D3" />
                                </View>
                                <View style={styles.achievementPoints}>
                                    <Text style={styles.achievementPointsText}>+150</Text>
                                </View>
                            </View>
                            <Text style={styles.achievementTitle}>Premium Member</Text>
                            <Text style={styles.achievementDescription}>
                                Upgraded to premium insurance coverage
                            </Text>
                            <Text style={styles.achievementDate}>Earned last week</Text>
                        </View>
                    </ScrollView>
                </View>

                {/* Active Policies Section */}
                <View style={styles.sectionContainer}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Active policies</Text>
                        <TouchableOpacity style={styles.viewAllButton}>
                            <Text style={styles.viewAllText}>View all</Text>
                            <Ionicons name="chevron-forward" size={16} color={Colors.primary} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.policyCard}>
                        <View style={styles.statusIndicator}>
                            <View style={styles.statusDot} />
                        </View>
                        <View style={styles.policyInfo}>
                            <View style={styles.carImageContainer}>
                                <MaterialCommunityIcons name="car" size={32} color={Colors.accent} />
                            </View>
                            <View style={styles.policyDetails}>
                                <Text style={styles.carModel}>Toyota Camry</Text>
                                <Text style={styles.licensePlate}>6ZZF977</Text>
                                <View style={styles.policyStatusChip}>
                                    <Text style={styles.policyStatusText}>Active</Text>
                                </View>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.arrowButton}>
                            <View style={styles.arrowCircle}>
                                <Ionicons name="chevron-forward" size={20} color={Colors.primary} />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.policyDateContainer}>
                        <View style={styles.policyDateItem}>
                            <View style={styles.dateIconContainer}>
                                <Ionicons name="calendar-outline" size={18} color={Colors.primary} />
                            </View>
                            <View>
                                <Text style={styles.policyDateLabel}>Policy ends</Text>
                                <Text style={styles.policyDate}>15 Sept 2022</Text>
                            </View>
                        </View>
                        <View style={styles.divider} />
                        <View style={styles.policyDateItem}>
                            <View style={styles.dateIconContainer}>
                                <Ionicons name="card-outline" size={18} color={Colors.primary} />
                            </View>
                            <View>
                                <Text style={styles.policyDateLabel}>Next payment</Text>
                                <Text style={styles.policyDate}>15 June 2022</Text>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Insurance Coverage Section */}
                <View style={styles.sectionContainer}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Insurance coverage</Text>
                        <TouchableOpacity style={styles.viewAllButton}>
                            <Text style={styles.viewAllText}>Details</Text>
                            <Ionicons name="chevron-forward" size={16} color={Colors.primary} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.coverageGrid}>
                        <View style={styles.coverageCard}>
                            <View style={[styles.coverageIconContainer, { backgroundColor: 'rgba(76, 217, 100, 0.1)' }]}>
                                <Ionicons name="build-outline" size={24} color="#4CD964" />
                            </View>
                            <Text style={styles.coverageTitle}>Damage</Text>
                            <Text style={styles.coverageDescription}>Covers damages from accidents</Text>
                            <View style={[styles.coverageBadge, styles.basicBadge]}>
                                <Text style={[styles.coverageBadgeText, { color: '#4CD964' }]}>Basic</Text>
                            </View>
                        </View>

                        <View style={styles.coverageCard}>
                            <View style={[styles.coverageIconContainer, { backgroundColor: 'rgba(255, 149, 0, 0.1)' }]}>
                                <Ionicons name="flame-outline" size={24} color="#FF9500" />
                            </View>
                            <Text style={styles.coverageTitle}>Fire</Text>
                            <Text style={styles.coverageDescription}>Protection against fire damage</Text>
                            <View style={[styles.coverageBadge, styles.premiumBadge]}>
                                <Text style={[styles.coverageBadgeText, { color: '#FF9500' }]}>Premium</Text>
                            </View>
                        </View>

                        <View style={styles.coverageCard}>
                            <View style={[styles.coverageIconContainer, { backgroundColor: 'rgba(90, 200, 250, 0.1)' }]}>
                                <MaterialCommunityIcons name="water" size={24} color="#5AC8FA" />
                            </View>
                            <Text style={styles.coverageTitle}>Flood</Text>
                            <Text style={styles.coverageDescription}>Coverage for water damage</Text>
                            <View style={[styles.coverageBadge, styles.standardBadge]}>
                                <Text style={[styles.coverageBadgeText, { color: '#5AC8FA' }]}>Standard</Text>
                            </View>
                        </View>

                        <View style={styles.coverageCard}>
                            <View style={[styles.coverageIconContainer, { backgroundColor: 'rgba(255, 45, 85, 0.1)' }]}>
                                <MaterialCommunityIcons name="shield-car" size={24} color="#FF2D55" />
                            </View>
                            <Text style={styles.coverageTitle}>Theft</Text>
                            <Text style={styles.coverageDescription}>Protection against theft</Text>
                            <View style={[styles.coverageBadge, styles.premiumBadge]}>
                                <Text style={[styles.coverageBadgeText, { color: '#FF2D55' }]}>Premium</Text>
                            </View>
                        </View>
                    </View>
                </View>

                {/* End of ScrollView */}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 100,
        backgroundColor: Colors.background,
    },
    scrollView: {
        flex: 1,
    },
    headerContainer: {
        overflow: 'hidden',
        paddingBottom: 10,
        backgroundColor: Colors.primary,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 30,
    },
    headerGreeting: {
        fontSize: 16,
        color: Colors.textLight,
        fontFamily: Fonts.SfProDisplay.Medium,
        opacity: 0.9,
    },
    headerTitle: {
        fontSize: 30,
        color: Colors.textLight,
        fontFamily: Fonts.SfProDisplay.Bold,
        marginTop: 4,
    },
    headerActions: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    notificationButton: {
        padding: 8,
        position: 'relative',
    },
    notificationBadge: {
        position: 'absolute',
        top: 6,
        right: 6,
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#FF3B30',
        zIndex: 1,
        borderWidth: 1,
        borderColor: Colors.textLight,
    },
    sectionContainer: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginBottom: 5,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 22,
        color: Colors.textPrimary,
        fontFamily: Fonts.SfProDisplay.Semibold,
        marginBottom: 16,
    },
    viewAllButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    viewAllText: {
        color: Colors.primary,
        fontSize: 14,
        fontFamily: Fonts.SfProDisplay.Medium,
        marginRight: 4,
    },
    achievementsScrollView: {
        marginLeft: -5,
    },
    achievementCard: {
        backgroundColor: Colors.textLight,
        padding: 20,
        borderRadius: 16,
        marginRight: 16,
        width: 250,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
    },
    achievementHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    achievementIconContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'rgba(255, 215, 0, 0.1)',
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
    policyCard: {
        backgroundColor: Colors.textLight,
        padding: 20,
        borderRadius: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
        position: 'relative',
        overflow: 'hidden',
    },
    statusIndicator: {
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        width: 4,
        backgroundColor: '#4CD964',
    },
    statusDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#4CD964',
        position: 'absolute',
        top: 20,
        left: -2,
    },
    policyInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    carImageContainer: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: 'rgba(8, 103, 90, 0.1)',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 16,
    },
    policyDetails: {
        flex: 1,
    },
    carModel: {
        fontSize: 18,
        fontFamily: Fonts.SfProDisplay.Semibold,
        color: Colors.textPrimary,
    },
    licensePlate: {
        fontSize: 14,
        fontFamily: Fonts.SfProDisplay.Regular,
        color: Colors.textMuted,
        marginTop: 4,
        marginBottom: 8,
    },
    policyStatusChip: {
        backgroundColor: 'rgba(76, 217, 100, 0.1)',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 12,
        alignSelf: 'flex-start',
    },
    policyStatusText: {
        color: '#4CD964',
        fontSize: 12,
        fontFamily: Fonts.SfProDisplay.Medium,
    },
    arrowButton: {
        padding: 4,
    },
    arrowCircle: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: 'rgba(31, 149, 211, 0.1)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    policyDateContainer: {
        flexDirection: 'row',
        marginTop: 16,
        backgroundColor: Colors.textLight,
        borderRadius: 16,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    policyDateItem: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    dateIconContainer: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: 'rgba(31, 149, 211, 0.1)',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
    },
    policyDateLabel: {
        fontSize: 12,
        color: Colors.textMuted,
        fontFamily: Fonts.SfProDisplay.Regular,
        marginBottom: 4,
    },
    policyDate: {
        fontSize: 14,
        color: Colors.textPrimary,
        fontFamily: Fonts.SfProDisplay.Medium,
    },
    divider: {
        width: 1,
        height: '100%',
        backgroundColor: '#E0E0E0',
        marginHorizontal: 16,
    },
    coverageGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    coverageCard: {
        backgroundColor: Colors.textLight,
        padding: 16,
        borderRadius: 16,
        width: '48%',
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        position: 'relative',
        minHeight: 160,
    },
    coverageIconContainer: {
        width: 44,
        height: 44,
        borderRadius: 22,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 12,
    },
    coverageTitle: {
        fontSize: 16,
        color: Colors.textPrimary,
        fontFamily: Fonts.SfProDisplay.Semibold,
        marginBottom: 6,
    },
    coverageDescription: {
        fontSize: 12,
        color: Colors.textMuted,
        fontFamily: Fonts.SfProDisplay.Regular,
        lineHeight: 16,
        marginBottom: 24,
    },
    coverageBadge: {
        position: 'absolute',
        bottom: 16,
        left: 16,
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 12,
    },
    basicBadge: {
        backgroundColor: 'rgba(76, 217, 100, 0.1)',
    },
    standardBadge: {
        backgroundColor: 'rgba(90, 200, 250, 0.1)',
    },
    premiumBadge: {
        backgroundColor: 'rgba(255, 45, 85, 0.1)',
    },
    coverageBadgeText: {
        fontSize: 11,
        fontFamily: Fonts.SfProDisplay.Medium,
    },
});

export default HomeScreen;
