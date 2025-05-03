import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "@screens/Auth/SignInScreen";
import ForgotPassword from "@screens/Auth/ForgotPassword";

const Stack = createStackNavigator();

const AuthNavigation = () => {
    return (
        <Stack.Navigator initialRouteName='sign-in' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="sign-in" component={SignInScreen} />
            <Stack.Screen name="forgot-password" component={ForgotPassword} />
        </Stack.Navigator>
    )
};

export default AuthNavigation