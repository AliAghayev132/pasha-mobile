// React Native Navigation
import { createStackNavigator } from '@react-navigation/stack';


// Screens
import HomeScreen from '@screens/Main/Home/HomeScreen';
import MainLayout from '@components/layouts/MainLayout/MainLayout';
import InsuranceScreen from '@screens/Main/Inscurance/InscuranceScreen';


const Stack = createStackNavigator();

const MainNavigation = ({ route }) => {
    return (
        <MainLayout route={route}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="home" component={HomeScreen} />
                <Stack.Screen name="insurance" component={InsuranceScreen} />
            </Stack.Navigator>
        </MainLayout>
    )
};

export default MainNavigation;