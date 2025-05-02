import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { View, Text, StatusBar } from "react-native";

const HomeScreen = () => {

    const navigation = useNavigation();

    return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
    </View>
};

export default HomeScreen;