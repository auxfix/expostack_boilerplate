import { Ionicons } from "@expo/vector-icons";
import Drawer from "expo-router/drawer";
import { useTheme } from "tamagui";

export default function Layout() {
    const theme = useTheme();


  return (
    <Drawer screenOptions={{
        headerShown: false,
        drawerActiveTintColor: '#fff',
        drawerActiveBackgroundColor: theme.blue8.get()
    }}>
        <Drawer.Screen name="home" options={{
            title: 'Moviestar',
            drawerIcon: ({color, size}) => <Ionicons name='home' size={size} color={color} />,
        }} />
        <Drawer.Screen name="favorites" options={{
            title: 'Favorites',
            drawerIcon: ({color, size}) => <Ionicons name='star' size={size} color={color} />,
        }} />
    </Drawer>
  );
}
