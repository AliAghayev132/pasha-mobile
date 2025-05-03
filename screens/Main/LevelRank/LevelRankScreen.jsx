import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ProgressBar from 'react-native-progress/Bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const LevelRankScreen = () => {
  const navigation = useNavigation();
  const [currentLevel, setCurrentLevel] = useState(3);
  const [currentExp, setCurrentExp] = useState(750);
  
  const levels = [
    { level: 1, requiredExp: 200, reward: "10% Insurance Discount", color: '#8BC34A', unlocked: true },
    { level: 2, requiredExp: 500, reward: "Free Roadside Assistance", color: '#4CAF50', unlocked: true },
    { level: 3, requiredExp: 1000, reward: "Premium Customer Support", color: '#009688', unlocked: true },
    { level: 4, requiredExp: 2000, reward: "20% Off Vehicle Service", color: '#00BCD4', unlocked: false },
    { level: 5, requiredExp: 3500, reward: "30% Insurance Discount", color: '#3F51B5', unlocked: false },
    { level: 6, requiredExp: 5000, reward: "Free Annual Vehicle Check", color: '#673AB7', unlocked: false },
    { level: 7, requiredExp: 7500, reward: "VIP Customer Status", color: '#9C27B0', unlocked: false },
    { level: 8, requiredExp: 10000, reward: "Exclusive Trip Coverage", color: '#E91E63', unlocked: false },
  ];

  // Calculate progress to next level
  const nextLevel = levels.find(level => level.level === currentLevel + 1);
  const currentLevelData = levels.find(level => level.level === currentLevel);
  const prevLevelExp = currentLevel > 1 ? levels.find(level => level.level === currentLevel - 1).requiredExp : 0;
  
  const progressToNextLevel = nextLevel ? 
    (currentExp - prevLevelExp) / (nextLevel.requiredExp - prevLevelExp) : 1;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Level Rank</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={styles.scrollContainer}>
        <View style={styles.profileSection}>
          <Image
            source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
            style={styles.profileImage}
          />
          <View style={styles.levelBadge}>
            <Text style={styles.levelText}>{currentLevel}</Text>
          </View>
          <Text style={styles.username}>John Driver</Text>
          <Text style={styles.userTitle}>{currentLevelData.unlocked ? currentLevelData.reward : 'Locked'}</Text>
          
          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{currentExp}</Text>
              <Text style={styles.statLabel}>Experience</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{nextLevel ? nextLevel.requiredExp - currentExp : 'MAX'}</Text>
              <Text style={styles.statLabel}>To Next Level</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{levels.filter(l => l.unlocked).length}</Text>
              <Text style={styles.statLabel}>Rewards</Text>
            </View>
          </View>
        </View>

        <View style={styles.progressSection}>
          <Text style={styles.sectionTitle}>Level Progress</Text>
          <View style={styles.progressContainer}>
            <ProgressBar 
              progress={progressToNextLevel} 
              width={null} 
              height={15}
              borderRadius={10}
              color={currentLevelData.color}
              unfilledColor="#EBEBEB"
              borderWidth={0}
            />
            <View style={styles.progressLabels}>
              <Text style={styles.progressLabel}>Level {currentLevel}</Text>
              <Text style={styles.progressLabel}>
                {nextLevel ? `Level ${nextLevel.level}` : 'Max Level'}
              </Text>
            </View>
            <Text style={styles.progressText}>
              {nextLevel ? `${currentExp} / ${nextLevel.requiredExp} XP` : 'Maximum Level Reached!'}
            </Text>
          </View>
        </View>

        <View style={styles.levelSection}>
          <Text style={styles.sectionTitle}>Level Rewards</Text>
          {levels.map((level, index) => (
            <View 
              key={index} 
              style={[
                styles.levelItem, 
                level.unlocked ? styles.levelUnlocked : styles.levelLocked
              ]}
            >
              <View style={[styles.levelIcon, { backgroundColor: level.color }]}>
                <Text style={styles.levelIconText}>{level.level}</Text>
              </View>
              <View style={styles.levelInfo}>
                <Text style={styles.levelTitle}>Level {level.level}</Text>
                <Text style={styles.levelReward}>{level.reward}</Text>
                <Text style={styles.levelExp}>{level.requiredExp} XP required</Text>
              </View>
              <View style={styles.levelStatus}>
                {level.unlocked ? (
                  <Ionicons name="checkmark-circle" size={24} color="#4CAF50" />
                ) : (
                  <Ionicons name="lock-closed" size={24} color="#999" />
                )}
              </View>
            </View>
          ))}
        </View>

        <View style={styles.howToSection}>
          <Text style={styles.sectionTitle}>How to Earn XP</Text>
          <View style={styles.xpItem}>
            <Ionicons name="car" size={24} color="#009688" />
            <View style={styles.xpInfo}>
              <Text style={styles.xpTitle}>Safe Driving</Text>
              <Text style={styles.xpDescription}>Earn 10 XP for each day of safe driving</Text>
            </View>
          </View>
          <View style={styles.xpItem}>
            <Ionicons name="speedometer" size={24} color="#009688" />
            <View style={styles.xpInfo}>
              <Text style={styles.xpTitle}>Keep Speed Limits</Text>
              <Text style={styles.xpDescription}>Earn 5 XP for each trip without speeding</Text>
            </View>
          </View>
          <View style={styles.xpItem}>
            <Ionicons name="timer" size={24} color="#009688" />
            <View style={styles.xpInfo}>
              <Text style={styles.xpTitle}>Continuous Usage</Text>
              <Text style={styles.xpDescription}>Earn 15 XP for each week of app usage</Text>
            </View>
          </View>
          <View style={styles.xpItem}>
            <Ionicons name="document-text" size={24} color="#009688" />
            <View style={styles.xpInfo}>
              <Text style={styles.xpTitle}>Complete Documentation</Text>
              <Text style={styles.xpDescription}>Earn 50 XP for completing all documentation</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EBEBEB',
    backgroundColor: '#FFFFFF',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  scrollContainer: {
    flex: 1,
  },
  profileSection: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#EBEBEB',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  levelBadge: {
    position: 'absolute',
    top: 90,
    right: '35%',
    width: 35,
    height: 35,
    borderRadius: 18,
    backgroundColor: '#009688',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#FFF',
  },
  levelText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  username: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#333',
  },
  userTitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
  },
  progressSection: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  progressContainer: {
    width: '100%',
  },
  progressLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  progressLabel: {
    fontSize: 12,
    color: '#666',
  },
  progressText: {
    textAlign: 'center',
    marginTop: 10,
    color: '#666',
    fontSize: 14,
  },
  levelSection: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    marginTop: 10,
  },
  levelItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EBEBEB',
  },
  levelUnlocked: {
    opacity: 1,
  },
  levelLocked: {
    opacity: 0.7,
  },
  levelIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  levelIconText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  levelInfo: {
    flex: 1,
  },
  levelTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  levelReward: {
    fontSize: 14,
    color: '#666',
  },
  levelExp: {
    fontSize: 12,
    color: '#999',
    marginTop: 2,
  },
  levelStatus: {
    width: 30,
    alignItems: 'center',
  },
  howToSection: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    marginTop: 10,
    marginBottom: 20,
  },
  xpItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#EBEBEB',
  },
  xpInfo: {
    marginLeft: 15,
    flex: 1,
  },
  xpTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  xpDescription: {
    fontSize: 14,
    color: '#666',
  },
});

export default LevelRankScreen;
