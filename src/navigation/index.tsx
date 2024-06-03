import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { isReadyRef, navigationRef } from "react-navigation-helpers";
import { SCREENS, SCREENSTYPES } from "../../shared/constants";

import HomeNav from "./HomeNav";
import { RootStackParamList } from "../../shared/types";

const Stack = createNativeStackNavigator<RootStackParamList>();

interface RootNavigationProps {
  initialRouteName: keyof SCREENSTYPES;
}

export function RootNavigator({
  initialRouteName,
}: RootNavigationProps): JSX.Element {
  return (
    <Stack.Navigator
      initialRouteName={initialRouteName as any}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={SCREENS.HomeNav} component={HomeNav} />
    </Stack.Navigator>
  );
}

export default function Navigation(): JSX.Element {
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}
    >
      {/* <AfterNavigationIntitializer /> */}
      <RootNavigator initialRouteName={SCREENS.HomeNav} />
    </NavigationContainer>
  );
}
