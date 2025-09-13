import { Ionicons } from "@expo/vector-icons"
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
    screenOptions={{
      tabBarActiveTintColor: "#d14d72",
      tabBarStyle: {
        borderTopWidth: 1,
        borderTopColor: "black",
        height: 90,
        paddingBottom: 30,
        paddingTop: 10,
      },
      tabBarLabelStyle: {
        fontSize: 12,
        fontWeight: "600",
      }
    }}
    >
      <Tabs.Screen
      name="home"
      options={{
        title: "Home",
        tabBarIcon: ({ color, size}) => (
          <Ionicons name="home-outline" size={size} color={color} />
        ),
      }}
      />
      <Tabs.Screen
      name="InnerGlow"
      options={{
        title: "InnerGlow",
        tabBarIcon: ({ color, size}) => (
          <Ionicons name="star-outline" size={size} color={color} />
        ),
      }}
      />
      <Tabs.Screen
      name="settings"
      options={{
        title: "settings",
        tabBarIcon: ({ color, size}) => (
          <Ionicons name="settings-outline" size={size} color={color} />
        ),
      }}
      />
    </Tabs>
  )
}