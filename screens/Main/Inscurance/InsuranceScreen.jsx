import React, { useState } from 'react';
import Colors from '@constants/Colors';
import Fonts from '@constants/Fonts';
import { Picker } from '@react-native-picker/picker';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Platform, StatusBar, Image, ActivityIndicator, Modal } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Ionicons } from '@expo/vector-icons';

const carBrands = {
  "bmw": {
    name: "BMW",
    models: [
      { label: "X1", value: "x1" },
      { label: "X3", value: "x3" },
      { label: "X5", value: "x5" },
      { label: "X7", value: "x7" },
      { label: "3 Series", value: "3series" },
      { label: "5 Series", value: "5series" },
      { label: "7 Series", value: "7series" },
      { label: "M3", value: "m3" },
      { label: "M5", value: "m5" }
    ]
  },
  "mercedes": {
    name: "Mercedes-Benz",
    models: [
      { label: "A-Class", value: "aclass" },
      { label: "C-Class", value: "cclass" },
      { label: "E-Class", value: "eclass" },
      { label: "S-Class", value: "sclass" },
      { label: "GLA", value: "gla" },
      { label: "GLC", value: "glc" },
      { label: "GLE", value: "gle" },
      { label: "GLS", value: "gls" }
    ]
  },
  "audi": {
    name: "Audi",
    models: [
      { label: "A3", value: "a3" },
      { label: "A4", value: "a4" },
      { label: "A6", value: "a6" },
      { label: "A8", value: "a8" },
      { label: "Q3", value: "q3" },
      { label: "Q5", value: "q5" },
      { label: "Q7", value: "q7" },
      { label: "Q8", value: "q8" }
    ]
  },
  "toyota": {
    name: "Toyota",
    models: [
      { label: "Corolla", value: "corolla" },
      { label: "Camry", value: "camry" },
      { label: "RAV4", value: "rav4" },
      { label: "Highlander", value: "highlander" },
      { label: "Land Cruiser", value: "landcruiser" },
      { label: "Prius", value: "prius" }
    ]
  },
  "honda": {
    name: "Honda",
    models: [
      { label: "Civic", value: "civic" },
      { label: "Accord", value: "accord" },
      { label: "CR-V", value: "crv" },
      { label: "HR-V", value: "hrv" },
      { label: "Pilot", value: "pilot" }
    ]
  },
  "volkswagen": {
    name: "Volkswagen",
    models: [
      { label: "Golf", value: "golf" },
      { label: "Passat", value: "passat" },
      { label: "Tiguan", value: "tiguan" },
      { label: "Touareg", value: "touareg" },
      { label: "Polo", value: "polo" }
    ]
  },
  "ford": {
    name: "Ford",
    models: [
      { label: "Focus", value: "focus" },
      { label: "Fiesta", value: "fiesta" },
      { label: "Mustang", value: "mustang" },
      { label: "Explorer", value: "explorer" },
      { label: "F-150", value: "f150" }
    ]
  },
  "hyundai": {
    name: "Hyundai",
    models: [
      { label: "Elantra", value: "elantra" },
      { label: "Sonata", value: "sonata" },
      { label: "Tucson", value: "tucson" },
      { label: "Santa Fe", value: "santafe" },
      { label: "Kona", value: "kona" }
    ]
  },
  "kia": {
    name: "Kia",
    models: [
      { label: "Rio", value: "rio" },
      { label: "Cerato", value: "cerato" },
      { label: "Sportage", value: "sportage" },
      { label: "Sorento", value: "sorento" },
      { label: "Optima", value: "optima" }
    ]
  }
};

const InsuranceScreen = ({ navigation }) => {
  const [carBrand, setCarBrand] = useState('');
  const [carModel, setCarModel] = useState('');
  const [year, setYear] = useState(new Date());
  const [kilometers, setKilometers] = useState('');
  const [condition, setCondition] = useState('new');
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [loading, setLoading] = useState(false);
  const [calculationResult, setCalculationResult] = useState(null);
  const [showResultModal, setShowResultModal] = useState(false);
  const [error, setError] = useState(null);

  const fetchInsuranceCalculation = async (formData) => {
    setLoading(true);
    setError(null);

    try {
      const conditionMap = {
        'new': 'yeni',
        'secondhand': 'eski',
        'damaged': 'çok hasarlı'
      };

      const brandApiNameMap = {
        'bmw': 'BMW',
        'mercedes': 'Mercedes',
        'audi': 'Audi', 
        'toyota': 'Toyota',
        'honda': 'Honda',
        'volkswagen': 'Volkswagen',
        'ford': 'Ford',
        'hyundai': 'Hyundai',
        'kia': 'Kia'
      };

      const estimatedPrice = 30000;

      const requestData = {
        year: formData.year,
        condition: conditionMap[formData.condition],
        brand: brandApiNameMap[formData.carBrand] || formData.carBrand,
        model: formData.carModel,
        mileage: parseInt(formData.kilometers) || 0,
        price: estimatedPrice
      };

      const response = await fetch('http://10.10.103.179:3500/api/user/misc/calculate-insurance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData)
      });

      const result = await response.json();

      console.log('====================================');
      console.log({result});
      console.log('====================================');

      if (!result.success) {
        throw new Error(result.message || 'Failed to calculate insurance');
      }

      setCalculationResult(result.data);
      setShowResultModal(true);
    } catch (err) {
      setError(err.message || 'An error occurred while calculating insurance');
      console.error('Insurance calculation error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = () => {
    const formData = {
      carBrand,
      carModel,
      year: year.getFullYear(),
      kilometers,
      condition
    };
    console.log('Form submitted:', formData);

    if (!carBrand || !carModel || !kilometers) {
      setError('Please fill in all required fields');
      return;
    }

    fetchInsuranceCalculation(formData);
  };

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || year;
    setShowDatePicker(Platform.OS === 'ios');
    setYear(currentDate);
  };

  const handleContinue = () => {
    setShowResultModal(false);
  };

  const handleCancel = () => {
    setShowResultModal(false);
  };

  return (
    <View style={styles.pageContainer}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.primary} />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Insurance Calculator</Text>
      </View>

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <View style={styles.cardIconContainer}>
            <Ionicons name="car" size={30} color={Colors.primary} />
          </View>
          <Text style={styles.cardTitle}>Car Details</Text>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Car Brand</Text>
            <View style={styles.inputContainer}>
              <Picker
                selectedValue={carBrand}
                style={styles.picker}
                onValueChange={(itemValue) => {
                  setCarBrand(itemValue);
                  setCarModel('');
                }}
              >
                <Picker.Item label="Select brand" value="" />
                {Object.entries(carBrands).map(([key, brand]) => (
                  <Picker.Item key={key} label={brand.name} value={key} />
                ))}
              </Picker>
            </View>
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Car Model</Text>
            <View style={styles.inputContainer}>
              <Picker
                selectedValue={carModel}
                style={styles.picker}
                onValueChange={(itemValue) => setCarModel(itemValue)}
                enabled={carBrand !== ''}
              >
                <Picker.Item label={carBrand ? "Select model" : "Select brand first"} value="" />
                {carBrand && carBrands[carBrand].models.map((model, index) => (
                  <Picker.Item key={index} label={model.label} value={model.value} />
                ))}
              </Picker>
            </View>
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Production Year</Text>
            <TouchableOpacity
              style={styles.inputContainer}
              onPress={() => setShowDatePicker(true)}
            >
              <View style={styles.dateContainer}>
                <Text style={styles.dateText}>{year.getFullYear()}</Text>
                <Ionicons name="calendar-outline" size={20} color={Colors.textMuted} />
              </View>
            </TouchableOpacity>
            {showDatePicker && (
              <DateTimePicker
                value={year}
                mode="date"
                display="default"
                onChange={onChangeDate}
                maximumDate={new Date()}
                minimumDate={new Date(1950, 0, 1)}
              />
            )}
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Kilometers</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                value={kilometers}
                onChangeText={setKilometers}
                placeholder="Enter kilometers"
                keyboardType="numeric"
                placeholderTextColor={Colors.textMuted}
              />
            </View>
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Condition</Text>
            <View style={styles.conditionSelector}>
              {[
                { label: "New", value: "new", icon: "star" },
                { label: "Second Hand", value: "secondhand", icon: "repeat" },
                { label: "Damaged", value: "damaged", icon: "warning" }
              ].map(item => (
                <TouchableOpacity
                  key={item.value}
                  style={[
                    styles.conditionOption,
                    condition === item.value && styles.conditionOptionSelected
                  ]}
                  onPress={() => setCondition(item.value)}
                >
                  <Ionicons
                    name={item.icon}
                    size={22}
                    color={condition === item.value ? Colors.textLight : Colors.textPrimary}
                  />
                  <Text style={[
                    styles.conditionText,
                    condition === item.value && styles.conditionTextSelected
                  ]}>
                    {item.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>

        {error && (
          <View style={styles.errorContainer}>
            <Ionicons name="alert-circle" size={20} color={Colors.error} />
            <Text style={styles.errorText}>{error}</Text>
          </View>
        )}

        <TouchableOpacity
          style={[styles.submitButton, loading && styles.submitButtonDisabled]}
          onPress={handleSubmit}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator size="small" color={Colors.textLight} />
          ) : (
            <>
              <Text style={styles.submitButtonText}>Calculate Insurance</Text>
              <Ionicons name="arrow-forward" size={22} color={Colors.textLight} />
            </>
          )}
        </TouchableOpacity>

        <View style={styles.note}>
          <Ionicons name="information-circle-outline" size={18} color={Colors.textMuted} />
          <Text style={styles.noteText}>
            The calculation is based on current market rates and may vary.
          </Text>
        </View>
      </ScrollView>

      <Modal
        visible={showResultModal}
        transparent={true}
        animationType="fade"
        onRequestClose={handleCancel}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <Ionicons name="checkmark-circle" size={40} color={Colors.success} />
              <Text style={styles.modalTitle}>Insurance Estimate</Text>
            </View>

            <View style={styles.resultContainer}>
              <View style={styles.resultItem}>
                <Text style={styles.resultLabel}>Insurance Price:</Text>
                <Text style={styles.resultValue}>
                  AZN{calculationResult?.insurancePrice?.toFixed(2) || '0.00'}
                </Text>
              </View>

              <View style={styles.resultItem}>
                <Text style={styles.resultLabel}>Monthly Payment:</Text>
                <Text style={styles.resultValue}>
                  AZN{calculationResult?.monthlyPayment?.toFixed(2) || '0.00'}/month
                </Text>
              </View>
            </View>

            <Text style={styles.modalQuestion}>Would you like to continue with this insurance plan?</Text>

            <View style={styles.modalButtonsContainer}>
              <TouchableOpacity style={styles.modalButtonCancel} onPress={handleCancel}>
                <Text style={styles.modalButtonCancelText}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.modalButtonContinue} onPress={handleContinue}>
                <Text style={styles.modalButtonContinueText}>Continue</Text>
                <Ionicons name="arrow-forward" size={18} color={Colors.textLight} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    paddingBottom: 100,
    backgroundColor: Colors.background,
  },
  header: {
    backgroundColor: Colors.primary,
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
    paddingBottom: 15,
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerTitle: {
    fontFamily: Fonts.SfProDisplay.Bold,
    fontSize: 22,
    color: Colors.textLight,
  },
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    backgroundColor: Colors.textLight,
    borderRadius: 12,
    padding: 20,
    marginTop: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  cardIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  cardTitle: {
    fontFamily: Fonts.SfProDisplay.Bold,
    fontSize: 20,
    color: Colors.textPrimary,
    marginBottom: 20,
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontFamily: Fonts.SfProDisplay.Medium,
    fontSize: 16,
    color: Colors.textSecondary,
    marginBottom: 8,
  },
  inputContainer: {
    backgroundColor: Colors.background,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    height: 54,
    justifyContent: 'center',
    overflow: 'hidden',
  },
  input: {
    fontFamily: Fonts.SfProDisplay.Regular,
    fontSize: 16,
    color: Colors.textPrimary,
    paddingHorizontal: 16,
    height: 54,
  },
  picker: {
    height: 54,
    width: '100%',
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  dateText: {
    fontFamily: Fonts.SfProDisplay.Regular,
    fontSize: 16,
    color: Colors.textPrimary,
  },
  conditionSelector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  conditionOption: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 10,
    marginHorizontal: 4,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  conditionOptionSelected: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  conditionText: {
    fontFamily: Fonts.SfProDisplay.Medium,
    fontSize: 14,
    color: Colors.textPrimary,
    marginTop: 5,
    textAlign: 'center',
  },
  conditionTextSelected: {
    color: Colors.textLight,
  },
  submitButton: {
    backgroundColor: Colors.primary,
    borderRadius: 12,
    height: 56,
    marginTop: 24,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  submitButtonText: {
    fontFamily: Fonts.SfProDisplay.Bold,
    fontSize: 18,
    color: Colors.textLight,
    marginRight: 8,
  },
  note: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
    paddingHorizontal: 10,
  },
  noteText: {
    fontFamily: Fonts.SfProDisplay.Regular,
    fontSize: 14,
    color: Colors.textMuted,
    marginLeft: 6,
    flex: 1,
  },
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.errorLight,
    padding: 12,
    borderRadius: 8,
    marginTop: 12,
  },
  errorText: {
    fontFamily: Fonts.SfProDisplay.Medium,
    fontSize: 14,
    color: Colors.error,
    marginLeft: 8,
    flex: 1,
  },
  submitButtonDisabled: {
    backgroundColor: Colors.primaryLight,
    shadowOpacity: 0.1,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContainer: {
    backgroundColor: Colors.textLight,
    borderRadius: 16,
    padding: 24,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalHeader: {
    alignItems: 'center',
    marginBottom: 24,
  },
  modalTitle: {
    fontFamily: Fonts.SfProDisplay.Bold,
    fontSize: 24,
    color: Colors.textPrimary,
    marginTop: 12,
  },
  resultContainer: {
    backgroundColor: Colors.background,
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  resultItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  resultLabel: {
    fontFamily: Fonts.SfProDisplay.Medium,
    fontSize: 16,
    color: Colors.textSecondary,
  },
  resultValue: {
    fontFamily: Fonts.SfProDisplay.Bold,
    fontSize: 18,
    color: Colors.primary,
  },
  modalQuestion: {
    fontFamily: Fonts.SfProDisplay.Medium,
    fontSize: 16,
    color: Colors.textPrimary,
    textAlign: 'center',
    marginBottom: 24,
  },
  modalButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalButtonCancel: {
    flex: 1,
    paddingVertical: 12,
    marginRight: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.textMuted,
    alignItems: 'center',
  },
  modalButtonCancelText: {
    fontFamily: Fonts.SfProDisplay.Medium,
    fontSize: 16,
    color: Colors.textSecondary,
  },
  modalButtonContinue: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    marginLeft: 8,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalButtonContinueText: {
    fontFamily: Fonts.SfProDisplay.Medium,
    fontSize: 16,
    color: Colors.textLight,
    marginRight: 8,
  },
});

export default InsuranceScreen;
