import { Ionicons } from "@expo/vector-icons";
import { colorTokens } from "@tamagui/themes";
import Drawer from "expo-router/drawer";

export default function Layout() {

  return (
    <Drawer screenOptions={{
        headerShown: true,
        drawerActiveTintColor: "#fff",
        drawerActiveBackgroundColor: colorTokens.dark.blue.blue7
    }}>
        <Drawer.Screen name="home" options={{
            title: 'Moviestar',
            drawerIcon: ({color, size}) => <Ionicons name='home' size={size} color={color} />,
        }} />
        <Drawer.Screen name="favorites" options={{
            title: 'Favorites',
            drawerIcon: ({color, size}) => <Ionicons name='star' size={size} color={color} />,
        }} />
        <Drawer.Screen name="index" options={{
            drawerItemStyle: { display: 'none' }
        }} />
    </Drawer>
  );
}
