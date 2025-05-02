// Navigation
import { navigationRef } from "navigation/AppNavigation";

export const navigateTo = (to, data = null) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(to, data);
  }
};

export const navigateBack = () => {
  if (navigationRef.isReady()) {
    navigationRef.goBack();
  }
};

export const navigateReset = (to, params = {}, index = 0) => {
  if (navigationRef.isReady()) {
    navigationRef.reset({
      index,
      routes: [
        {
          name: to,
          params,
        },
      ],
    });
  }
};
