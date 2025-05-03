import { useFonts } from 'expo-font';

// Navigation
import AppNavigation from 'navigation/AppNavigation';

import { store } from '@redux/store';

import { Provider } from 'react-redux';

export default function App() {

  const [loaded, error] = useFonts({
    "SFProDisplay-Black": require("./assets/fonts/SF-Pro-Display-Black.otf"),
    "SFProDisplay-Bold": require("./assets/fonts/SF-Pro-Display-Bold.otf"),
    "SFProDisplay-Heavy": require("./assets/fonts/SF-Pro-Display-Heavy.otf"),
    "SFProDisplay-Light": require("./assets/fonts/SF-Pro-Display-Light.otf"),
    "SFProDisplay-Medium": require("./assets/fonts/SF-Pro-Display-Medium.otf"),
    "SFProDisplay-Regular": require("./assets/fonts/SF-Pro-Display-Regular.otf"),
    "SFProDisplay-Semibold": require("./assets/fonts/SF-Pro-Display-Semibold.otf"),
    "SFProDisplay-Thin": require("./assets/fonts/SF-Pro-Display-Thin.otf"),
    "SFProDisplay-Ultralight": require("./assets/fonts/SF-Pro-Display-Ultralight.otf"),
  })

  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}


