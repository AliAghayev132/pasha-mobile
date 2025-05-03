import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import Colors from '@constants/Colors';
import Fonts from '@constants/Fonts';
import { Ionicons } from '@expo/vector-icons';

const DocumentItem = ({ title, type, date, size, icon }) => {
    return (
        <TouchableOpacity style={styles.documentItem}>
            <View style={styles.documentIconContainer}>
                <Ionicons name={icon} size={24} color={Colors.accent} />
            </View>
            <View style={styles.documentDetails}>
                <Text style={styles.documentTitle}>{title}</Text>
                <Text style={styles.documentMeta}>{type} • {date} • {size}</Text>
            </View>
            <View style={styles.documentActions}>
                <TouchableOpacity style={styles.actionButton}>
                    <Ionicons name="download-outline" size={20} color={Colors.primary} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton}>
                    <Ionicons name="share-outline" size={20} color={Colors.primary} />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
};

const DocumentsScreen = () => {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Your Documents</Text>
                    <Text style={styles.headerSubtitle}>Manage your important documents</Text>
                </View>

                <View style={styles.uploadSection}>
                    <View style={styles.uploadBox}>
                        <Ionicons name="cloud-upload-outline" size={32} color={Colors.accent} />
                        <Text style={styles.uploadText}>Upload a new document</Text>
                        <Text style={styles.uploadSubtext}>PDF, JPG, PNG up to 10MB</Text>
                        <TouchableOpacity style={styles.uploadButton}>
                            <Text style={styles.uploadButtonText}>Choose File</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Recent Documents</Text>
                        <TouchableOpacity>
                            <Text style={styles.seeAllText}>See All</Text>
                        </TouchableOpacity>
                    </View>

                    <DocumentItem
                        title="ID Card.pdf"
                        type="PDF"
                        date="15.04.2023"
                        size="2.3 MB"
                        icon="document-text-outline"
                    />

                    <DocumentItem
                        title="Passport Scan.jpg"
                        type="JPG"
                        date="22.01.2023"
                        size="1.5 MB"
                        icon="image-outline"
                    />

                    <DocumentItem
                        title="Utility Bill.pdf"
                        type="PDF"
                        date="05.03.2023"
                        size="0.8 MB"
                        icon="document-text-outline"
                    />
                </View>

                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Verification Documents</Text>
                        <TouchableOpacity>
                            <Text style={styles.seeAllText}>See All</Text>
                        </TouchableOpacity>
                    </View>

                    <DocumentItem
                        title="Verified ID.pdf"
                        type="PDF"
                        date="18.02.2023"
                        size="1.2 MB"
                        icon="shield-checkmark-outline"
                    />

                    <DocumentItem
                        title="Address Proof.pdf"
                        type="PDF"
                        date="18.02.2023"
                        size="0.9 MB"
                        icon="shield-checkmark-outline"
                    />
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
    uploadSection: {
        marginBottom: 20,
    },
    uploadBox: {
        backgroundColor: Colors.textLight,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: Colors.accent,
        borderStyle: 'dashed',
        padding: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    uploadText: {
        fontFamily: Fonts.SfProDisplay.Medium,
        fontSize: 16,
        color: Colors.textPrimary,
        marginTop: 12,
        marginBottom: 4,
    },
    uploadSubtext: {
        fontFamily: Fonts.SfProDisplay.Regular,
        fontSize: 14,
        color: Colors.textMuted,
        marginBottom: 16,
    },
    uploadButton: {
        backgroundColor: Colors.accent,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    uploadButtonText: {
        fontFamily: Fonts.SfProDisplay.Medium,
        fontSize: 14,
        color: Colors.textLight,
    },
    section: {
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
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    sectionTitle: {
        fontFamily: Fonts.SfProDisplay.Semibold,
        fontSize: 18,
        color: Colors.accent,
    },
    seeAllText: {
        fontFamily: Fonts.SfProDisplay.Medium,
        fontSize: 14,
        color: Colors.primary,
    },
    documentItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.background,
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
    },
    documentIconContainer: {
        width: 40,
        height: 40,
        borderRadius: 8,
        backgroundColor: 'rgba(8, 103, 90, 0.1)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    documentDetails: {
        flex: 1,
        marginLeft: 16,
    },
    documentTitle: {
        fontFamily: Fonts.SfProDisplay.Medium,
        fontSize: 16,
        color: Colors.textPrimary,
    },
    documentMeta: {
        fontFamily: Fonts.SfProDisplay.Regular,
        fontSize: 14,
        color: Colors.textMuted,
        marginTop: 4,
    },
    documentActions: {
        flexDirection: 'row',
    },
    actionButton: {
        padding: 8,
        marginLeft: 4,
    },
});

export default DocumentsScreen;
