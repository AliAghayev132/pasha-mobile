import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Colors from '@constants/Colors';
import Fonts from '@constants/Fonts';

const MyVehiclesScreen = ({ navigation }) => {
    // Sample vehicle data
    const [vehicles, setVehicles] = useState([
        { id: '1', make: 'Toyota', model: 'Corolla', year: 2020, licensePlate: 'ABC123' },
        { id: '2', make: 'Honda', model: 'Civic', year: 2019, licensePlate: 'XYZ789' },
        { id: '3', make: 'Ford', model: 'Focus', year: 2021, licensePlate: 'DEF456' },
    ]);

    const renderVehicleItem = ({ item }) => (
        <TouchableOpacity
            style={styles.vehicleItem}
            onPress={() => navigation.navigate('VehicleDetails', { vehicleId: item.id })}
        >
            <View style={styles.vehicleInfo}>
                <Text style={styles.vehicleTitle}>{item.make} {item.model}</Text>
                <Text style={styles.vehicleSubtitle}>{item.year} • {item.licensePlate}</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color={Colors.textMuted} />
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Araçlarım</Text>
                <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => navigation.navigate('AddVehicle')}
                >
                    <Ionicons name="add-circle" size={28} color={Colors.primary} />
                </TouchableOpacity>
            </View>

            {vehicles.length > 0 ? (
                <FlatList
                    data={vehicles}
                    renderItem={renderVehicleItem}
                    keyExtractor={item => item.id}
                    contentContainerStyle={styles.listContainer}
                    showsVerticalScrollIndicator={false}
                />
            ) : (
                <View style={styles.emptyContainer}>
                    <Ionicons name="car-outline" size={80} color={Colors.textMuted} />
                    <Text style={styles.emptyText}>Henüz araç eklemediniz</Text>
                    <TouchableOpacity
                        style={styles.addVehicleButton}
                        onPress={() => navigation.navigate('AddVehicle')}
                    >
                        <Text style={styles.addVehicleButtonText}>Araç Ekle</Text>
                    </TouchableOpacity>
                </View>
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 14,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(107, 138, 153, 0.1)',
        backgroundColor: Colors.textLight,
    },
    headerTitle: {
        fontSize: 20,
        fontFamily: Fonts.SfProDisplay.Semibold,
        color: Colors.textPrimary,
    },
    addButton: {
        padding: 4,
    },
    listContainer: {
        paddingHorizontal: 16,
        paddingTop: 16,
    },
    vehicleItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.textLight,
        borderRadius: 12,
        padding: 18,
        marginBottom: 14,
        shadowColor: Colors.textPrimary,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 4,
        elevation: 3,
        borderWidth: 1,
        borderColor: 'rgba(107, 138, 153, 0.08)',
    },
    vehicleInfo: {
        flex: 1,
    },
    vehicleTitle: {
        fontSize: 17,
        fontFamily: Fonts.SfProDisplay.Semibold,
        color: Colors.textPrimary,
        marginBottom: 6,
    },
    vehicleSubtitle: {
        fontSize: 15,
        fontFamily: Fonts.SfProDisplay.Regular,
        color: Colors.textMuted,
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
    },
    emptyText: {
        fontSize: 17,
        fontFamily: Fonts.SfProDisplay.Medium,
        color: Colors.textSecondary,
        marginTop: 20,
        marginBottom: 28,
    },
    addVehicleButton: {
        backgroundColor: Colors.primary,
        paddingHorizontal: 28,
        paddingVertical: 14,
        borderRadius: 10,
        shadowColor: Colors.primary,
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 4,
    },
    addVehicleButtonText: {
        color: Colors.textLight,
        fontSize: 16,
        fontFamily: Fonts.SfProDisplay.Semibold,
    },
});

export default MyVehiclesScreen;
