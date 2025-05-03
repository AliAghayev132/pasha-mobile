// React Native
import { View, Text, Pressable, StyleSheet } from "react-native";
// Components
// Custom Hook
import { useModal } from "@contexts/ModalProvider";
// Constants
import Fonts from "@constants/Fonts";
import Colors from "@constants/Colors";

const BasicModal = ({ text }) => {
    const { closeModal } = useModal();

    return <>
        <View style={styles.container}>
            <View style={{ gap: 12 }}>
                <View>
                    <Text style={styles.title}>{text}</Text>
                </View>
            </View>
            <View style={styles.buttons}>
                <Pressable
                    onPress={closeModal}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>
                        Continue
                    </Text>
                </Pressable>
            </View>
        </View>
    </>
}

const styles = StyleSheet.create({
    container: {
        gap: 16,
        maxWidth: 335,
        width: "100%",
        borderRadius: 12,
        paddingVertical: 20,
        paddingHorizontal: 40,
        backgroundColor: Colors.background,
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        color: Colors.textPrimary,
        fontFamily: Fonts.SfProDisplay.Bold,
    },
    buttons: {
        gap: 12,
        marginTop: 20,
        flexDirection: 'row',
        width: "100%",
    },
    button: {
        flex: 1,
        height: 40,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.primary,
    },
    buttonText: {
        fontSize: 16,
        color: Colors.textLight,
        fontFamily: Fonts.SfProDisplay.Medium,
    }
});

export default BasicModal;