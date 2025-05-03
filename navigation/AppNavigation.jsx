// Navigations
import MainNavigation from "./MainNavigation";
// import AuthNavigation from "./AuthNavigation";

// React Native Navigation
import { NavigationContainer, createNavigationContainerRef } from "@react-navigation/native";

// React Hooks
import { useState, useEffect } from "react";
import AuthNavigation from "./AuthNavigation";
import ModalProvider from "@contexts/ModalProvider";

export const navigationRef = createNavigationContainerRef();


const AppNavigation = () => {
    // const test = true;

    const [routeName, setRouteName] = useState('home');


    useEffect(() => {
        const unsubscribe = navigationRef.addListener('state', () => {
            const currentRoute = navigationRef.getCurrentRoute();
            if (currentRoute?.name) {
                setRouteName(currentRoute.name);
            }
        });
        return unsubscribe;
    }, []);



    return <ModalProvider>
        <NavigationContainer ref={navigationRef}>
            <MainNavigation route={routeName} />
            {/* <AuthNavigation /> */}
            {/* {
            test ? <MainNavigation /> : <MainNavigation />
        } */}
        </NavigationContainer>
    </ModalProvider>
};

export default AppNavigation;