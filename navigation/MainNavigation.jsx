// React Native Navigation
import { createStackNavigator } from '@react-navigation/stack';


// Screens
import HomeScreen from '@screens/Main/Home/HomeScreen';
import ProfileScreen from '@screens/Main/Profile/ProfileScreen';
import DriverScoresScreen from '@screens/Main/DriverScore/DriverScoresScreen';
import MainLayout from '@components/layouts/MainLayout/MainLayout';
import InsuranceScreen from '@screens/Main/Inscurance/InscuranceScreen';
import AchievementsScreen from '@screens/Main/Achievements/AchievementsScreen';
import MyVehiclesScreen from '@screens/Main/MyVehicles/MyVehiclesScreen';
import HelpCenterScreen from '@screens/Main/HelpCenter/HelpCenterScreen';
import PaymentMethodsScreen from '@screens/Main/PaymentMethods/PaymentMethodsScreen';
import PersonalInformationScreen from '@screens/Main/PersonalInformation/PersonalInformationScreen';
import NotificationsScreen from '@screens/Main/Notifications/NotificationsScreen';
import LanguageScreen from '@screens/Main/Language/LanguageScreen';
import DocumentsScreen from '@screens/Main/Documents/DocumentsScreen';
import ActivePoliciesScreen from '@screens/Main/ActivePolicies/ActivePoliciesScreen';
import LevelRankScreen from '@screens/Main/LevelRank/LevelRankScreen';

const Stack = createStackNavigator();

const MainNavigation = ({ route }) => {
    return (
        <MainLayout route={route}>
            <Stack.Navigator initialRouteName='language' screenOptions={{ headerShown: false }}>
                <Stack.Screen name="home" component={HomeScreen} />
                <Stack.Screen name="profile" component={ProfileScreen} />
                <Stack.Screen name='language' component={LanguageScreen} />
                <Stack.Screen name='levelrank' component={LevelRankScreen} />
                <Stack.Screen name="insurance" component={InsuranceScreen} />
                <Stack.Screen name='documents' component={DocumentsScreen} />
                <Stack.Screen name='helpcenter' component={HelpCenterScreen} />
                <Stack.Screen name="myvehicles" component={MyVehiclesScreen} />
                <Stack.Screen name="driverscore" component={DriverScoresScreen} />
                <Stack.Screen name="achievements" component={AchievementsScreen} />
                <Stack.Screen name='notifications' component={NotificationsScreen} />
                <Stack.Screen name="paymentmethods" component={PaymentMethodsScreen} />
                <Stack.Screen name='activepolicies' component={ActivePoliciesScreen} />
                <Stack.Screen name='personalinformation' component={PersonalInformationScreen} />
            </Stack.Navigator>
        </MainLayout>
    )
};

export default MainNavigation;