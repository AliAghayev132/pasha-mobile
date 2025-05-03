// React Native
import { View, Text, Pressable, StyleSheet } from "react-native";
// Components
// Custom Hook
import { useModal } from "@contexts/ModalProvider";
// Constants
import Fonts from "@constants/Fonts";
import Colors from "@constants/Colors";

const ErrorModal = ({ title = "Error", text, buttonText = "Close" }) => {
    const { closeModal } = useModal();
    
    const errorColor = '#FF3B30'; // Custom error color not in the palette

    return <>
        <View style={styles.container}>
            <View style={{ gap: 16 }}>
                <View style={styles.iconContainer}>
                    <Text style={[styles.icon, { color: errorColor }]}>⚠️</Text>
                </View>
                <View>
                    <Text style={[styles.title, { color: errorColor }]}>{title}</Text>
                    {text && <Text style={styles.subTitle}>{text}</Text>}
                </View>
            </View>
            <View style={styles.buttons}>
                <Pressable 
                    onPress={closeModal} 
                    style={[styles.button, { backgroundColor: errorColor }]}
                >
                    <Text style={styles.buttonText}>
                        {buttonText}
                    </Text>
                </Pressable>
            </View>
        </View>
    </>
};

const styles = StyleSheet.create({
    container: {
        gap: 16,
        maxWidth: 335,
        width: "100%",
        borderRadius: 12,
        paddingVertical: 20,
        paddingHorizontal: 40,
        backgroundColor: Colors.background
    },
    row: {
        justifyContent: 'center',
    },
    iconContainer: {
        alignItems: "center",
    },
    icon: {
        fontSize: 40,
        textAlign: 'center',
        fontFamily: Fonts.SfProDisplay.Bold,
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        fontFamily: Fonts.SfProDisplay.Bold,
    },
    button: {
        flex: 1,
        height: 40,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 16,
        color: Colors.textLight,
        fontFamily: Fonts.SfProDisplay.Medium,
    },
    buttons: {
        gap: 12,
        flexDirection: 'row',
    },
    subTitle: {
        fontSize: 16,
        textAlign: 'center',
        color: Colors.textMuted,
        fontFamily: Fonts.SfProDisplay.Regular,
    }
});

export default ErrorModal;
