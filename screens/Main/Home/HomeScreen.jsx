import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Svg, Circle, Path } from "react-native-svg";
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import Colors from "../../../constants/Colors";
import Fonts from "../../../constants/Fonts";
// import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
    const navigation = useNavigation();
    const [score, setScore] = useState(8);
    const [improvement, setImprovement] = useState(2);
    
    // Mock metrics data
    const [metrics, setMetrics] = useState([
        {
            id: 1,
            title: "Speed",
            score: 10,
            maxScore: 10,
            status: "Excellent",
            change: "+2",
            icon: "speedometer",
            description: "How fast you drive, and whether you're staying within the speed limit"
        },
        {
            id: 2,
            title: "Braking",
            score: 8,
            maxScore: 10,
            status: "Good",
            change: "+1",
            icon: "car-brake-hold",
            description: "How quickly you stop, and if you give yourself to slow down safely"
        },
        {
            id: 3,
            title: "Cornering",
            score: 2,
            maxScore: 10,
            status: "Fair",
            change: "-4",
            icon: "rotate-right",
            description: "How smoothly you turn, and whether you give yourself enough time"
        }
    ]);

    // Calculate the progress for the circular progress indicator
    const calculateProgress = (current, max) => {
        return (current / max) * 100;
    };

    // Render the progress circle
    const ProgressCircle = ({ progress, size = 200, strokeWidth = 15 }) => {
        const radius = (size - strokeWidth) / 2;
        const circumference = radius * 2 * Math.PI;
        const progressOffset = circumference - (progress / 100) * circumference;

        return (
            <Svg width={size} height={size}>
                {/* Background Circle */}
                <Circle
                    stroke={Colors.textSecondary}
                    fill="none"
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    strokeWidth={strokeWidth}
                />
                {/* Progress Circle - starts from top (270 degrees rotation) */}
                <Circle
                    stroke={Colors.textLight}
                    fill="none"
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={progressOffset}
                    strokeLinecap="round"
                    rotation="-90"
                    origin={`${size/2}, ${size/2}`}
                />
            </Svg>
        );
    };

    // Render a metric item
    const MetricItem = ({ metric }) => {
        const isPositive = metric.change.includes("+");
        
        return (
            <View style={styles.metricItem}>
                <View style={styles.metricHeader}>
                    <View style={styles.metricIconContainer}>
                        <MaterialCommunityIcons name={metric.icon} size={24} color={Colors.primary} />
                    </View>
                    <View style={styles.metricTitleContainer}>
                        <Text style={styles.metricTitle}>{metric.title}</Text>
                        <Text style={[styles.metricStatus, 
                            metric.status === "Excellent" ? styles.statusExcellent : 
                            metric.status === "Good" ? styles.statusGood : 
                            styles.statusFair]}>
                            {metric.status}
                        </Text>
                    </View>
                    <View style={styles.metricScoreContainer}>
                        <Text style={styles.metricScore}>{metric.score}/{metric.maxScore}</Text>
                        <Text style={[styles.metricChange, isPositive ? styles.positive : styles.negative]}>
                            {isPositive ? "↗" : "↘"} {metric.change}
                        </Text>
                    </View>
                </View>
                <Text style={styles.metricDescription}>{metric.description}</Text>
            </View>
        );
    };

    return (
        // <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={styles.container}>
            <View style={styles.scoreCard}>
                <Text style={styles.scoreTitle}>Your average driving score</Text>
                <View style={styles.scoreContainer}>
                    <ProgressCircle progress={calculateProgress(score, 10)} size={220} strokeWidth={18} />
                    <View style={styles.scoreTextContainer}>
                        <Text style={styles.scoreStatus}>
                            {score >= 8 ? "Excellent" : score >= 6 ? "Good" : score >= 4 ? "Fair" : "Poor"}
                        </Text>
                        <Text style={styles.scoreValue}>{score}</Text>
                    </View>
                </View>
                <View style={styles.scoreScale}>
                    <Text style={styles.scoreMin}>0</Text>
                    <View style={styles.improvementContainer}>
                        <Ionicons name="trending-up" size={16} color={Colors.accent} />
                        <Text style={styles.improvementText}>{improvement} points better than last month</Text>
                    </View>
                    <Text style={styles.scoreMax}>10</Text>
                </View>
            </View>

            <View style={styles.metricsContainer}>
                <Text style={styles.metricsTitle}>Driving metrics</Text>
                {metrics.map(metric => (
                    <MetricItem key={metric.id} metric={metric} />
                ))}
            </View>

            <View style={styles.actionsContainer}>
                <TouchableOpacity style={styles.actionButton}>
                    <FontAwesome5 name="tasks" size={20} color={Colors.primary} />
                    <Text style={styles.actionText}>Complete Tasks</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton}>
                    <MaterialCommunityIcons name="gift" size={20} color={Colors.primary} />
                    <Text style={styles.actionText}>Claim Rewards</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
        // </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    scoreCard: {
        backgroundColor: Colors.primary,
        width: "100%",
        paddingVertical: 24,
        paddingHorizontal: 16,
        alignItems: "center",
    },
    scoreTitle: {
        color: Colors.textLight,
        fontSize: 18,
        fontFamily: Fonts.SfProDisplay.Semibold,
        marginBottom: 20,
    },
    scoreContainer: {
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
    },
    scoreTextContainer: {
        position: "absolute",
        alignItems: "center",
    },
    scoreStatus: {
        color: Colors.textLight,
        fontSize: 16,
        fontFamily: Fonts.SfProDisplay.Medium,
    },
    scoreValue: {
        color: Colors.textLight,
        fontSize: 48,
        fontFamily: Fonts.SfProDisplay.Bold,
    },
    scoreScale: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
    },
    scoreMin: {
        color: Colors.textLight,
        fontSize: 14,
        fontFamily: Fonts.SfProDisplay.Regular,
    },
    scoreMax: {
        color: Colors.textLight,
        fontSize: 14,
        fontFamily: Fonts.SfProDisplay.Regular,
    },
    improvementContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    improvementText: {
        color: Colors.textLight,
        fontSize: 12,
        marginLeft: 4,
        fontFamily: Fonts.SfProDisplay.Regular,
    },
    metricsContainer: {
        marginHorizontal: 16,
        marginTop: 24,
        marginBottom: 16,
    },
    metricsTitle: {
        fontSize: 18,
        fontFamily: Fonts.SfProDisplay.Semibold,
        marginBottom: 16,
        color: Colors.textPrimary,
    },
    metricItem: {
        backgroundColor: "white",
        borderRadius: 16,
        padding: 16,
        marginBottom: 12,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 3,
        elevation: 2,
    },
    metricHeader: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8,
    },
    metricIconContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: Colors.background,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 12,
    },
    metricTitleContainer: {
        flex: 1,
    },
    metricTitle: {
        fontSize: 16,
        fontFamily: Fonts.SfProDisplay.Semibold,
        color: Colors.textPrimary,
    },
    metricStatus: {
        fontSize: 14,
        fontFamily: Fonts.SfProDisplay.Regular,
    },
    statusExcellent: {
        color: Colors.accent,
    },
    statusGood: {
        color: Colors.primary,
    },
    statusFair: {
        color: "#FF9500",
    },
    metricScoreContainer: {
        alignItems: "flex-end",
    },
    metricScore: {
        fontSize: 16,
        fontFamily: Fonts.SfProDisplay.Bold,
        color: Colors.textPrimary,
    },
    metricChange: {
        fontSize: 14,
        fontFamily: Fonts.SfProDisplay.Medium,
    },
    positive: {
        color: Colors.accent,
    },
    negative: {
        color: "#FF3B30",
    },
    metricDescription: {
        fontSize: 14,
        color: Colors.textSecondary,
        lineHeight: 20,
        fontFamily: Fonts.SfProDisplay.Regular,
    },
    actionsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 16,
        marginBottom: 16,
    },
    actionButton: {
        backgroundColor: "white",
        borderRadius: 12,
        padding: 16,
        alignItems: "center",
        justifyContent: "center",
        width: "48%",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 3,
        elevation: 2,
    },
    actionText: {
        color: Colors.textPrimary,
        fontFamily: Fonts.SfProDisplay.Medium,
        marginTop: 8,
    },
});

export default HomeScreen;