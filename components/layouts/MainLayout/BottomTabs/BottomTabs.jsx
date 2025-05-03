import { StyleSheet, View, Text, Animated, Pressable } from "react-native";

import { useEffect, useState } from "react";

// Icons
import CarIcon from "@components/icons/CarIcon";
import HomeIcon from "@components/icons/HomeIcon";
import ProfileIcon from "@components/icons/ProfileIcon";
import FeaturesIcon from "@components/icons/FeaturesIcon";
// Constants
import Fonts from "@constants/Fonts";
import Colors from "@constants/Colors";
// Utils
import { navigateTo } from "@utils/handleNavigation";

const BottomTab = ({ icon, text, active, route }) => {
    const [width] = useState(new Animated.Value(active ? 122 : 100));

    useEffect(() => {
        Animated.timing(width, {
            duration: 300,
            useNativeDriver: false,
            toValue: active ? 122 : 50,
        }).start();
    }, [active]);

    return (
        <Pressable onPress={() => navigateTo(route)}>
            <Animated.View style={[
                { width },
                styles.tab,
                active && styles.activeTab,
            ]}>
                <View>
                    {icon}
                </View>
                {active && (
                    <View style={styles.textContainer}>
                        <Text
                            numberOfLines={1}
                            ellipsizeMode="clip"
                            style={[styles.tabText, active && styles.activeText]}>
                            {text}
                        </Text>
                    </View>
                )}
            </Animated.View>
        </Pressable>

    );
};

const BottomTabs = ({ route = "home" }) => {
    const [activeTab, setActiveTab] = useState(true);

    return <>
        <View style={styles.container}>
            <BottomTab
                text="Home"
                route={"home"}
                active={route == "home"}
                icon={<HomeIcon color={route == "home" ? Colors.textLight : Colors.textMuted} />}
            />
            <BottomTab
                text="Insurance"
                route={"insurance"}
                active={route == "insurance"}
                icon={<CarIcon color={route == "insurance" ? Colors.textLight : Colors.textMuted} />}

            />
            <BottomTab
                text="Achievements"
                route="achievements"
                active={route == "achievements"}
                icon={<FeaturesIcon color={route == "achievements" ? Colors.textLight : Colors.textMuted} />}
            />
            <BottomTab
                text="Profile"
                route={"profile"}
                active={route == "profile"}
                icon={<ProfileIcon color={route == "profile" ? Colors.textLight : Colors.textMuted} />}
            />
        </View>
    </>
};

const styles = StyleSheet.create({
    container: {
        left: 0,
        bottom: 0,
        height: 96,
        width: '100%',
        position: 'absolute',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 24,
        backgroundColor: '#fff',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: -4,
        },
        shadowOpacity: 0.15,
        shadowRadius: 5,
        elevation: 5,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    tab: {
        gap: 7,
        height: 40,
        borderRadius: 20,
        paddingVertical: 6,
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 15,
        justifyContent: 'center',
        overflow: 'hidden',
    },
    activeTab: {
        backgroundColor: Colors.primary,
    },
    textContainer: {
        overflow: 'hidden',
    },
    tabText: {
        fontSize: 12,
        flexShrink: 1,
        flexWrap: 'nowrap',
        color: Colors.textLight,
        fontFamily: Fonts.SfProDisplay.Bold,
    },
})
export default BottomTabs;