// React Native
import { View, Text, Pressable, StyleSheet } from "react-native";
// Components
// Custom Hook
import { useModal } from "@contexts/ModalProvider";
// Constants
import Fonts from "@constants/Fonts";
import Colors from "@constants/Colors";

const ConfirmModal = ({ text, onConfirm, confirmText = "Confirm", cancelText = "Cancel" }) => {
    const { closeModal } = useModal();

    const handleConfirm = () => {
        if (onConfirm) onConfirm();
        closeModal();
    };

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
                    style={[styles.button, styles.cancelButton]}
                >
                    <Text style={[styles.buttonText, styles.cancelButtonText]}>
                        {cancelText}
                    </Text>
                </Pressable>
                <Pressable 
                    onPress={handleConfirm} 
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>
                        {confirmText}
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
    title: {
        fontSize: 20,
        textAlign: 'center',
        color: Colors.textPrimary,
        fontFamily: Fonts.SfProDisplay.Bold,
    },
    buttons: {
        gap: 12,
        flexDirection: 'row',
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
    },
    cancelButton: {
        backgroundColor: '#f2f2f2',
    },
    cancelButtonText: {
        color: Colors.textSecondary,
    },
    subTitle: {
        fontSize: 16,
        textAlign: 'center',
        color: Colors.textMuted,
        fontFamily: Fonts.SfProDisplay.Regular,
    }
});

export default ConfirmModal;
