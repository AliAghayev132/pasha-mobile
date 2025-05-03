import { View } from "react-native";
import BottomTabs from "./BottomTabs/BottomTabs";

const routes = {
    "home": ["home"],
    "profile": ["profile"],
    "insurance": ["insurance"],
}


const findRoute = (route) => {
    let currentRoute = "home";
    for (let i in routes) {
        if (routes[i].includes(route)) {
            currentRoute = i;
        }
    }

    return currentRoute;
}

const MainLayout = ({ children, route }) => {
    const currentRoute = findRoute(route);

    return (
        <View style={{ flex: 1 }}>
            {children}
            <BottomTabs route={currentRoute} />
        </View>
    );
};

export default MainLayout;