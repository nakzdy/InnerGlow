import { Ionicons } from "@expo/vector-icons"
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
    screenOptions={{
      headerShown: false,
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
      name="search"
      options={{
        title: "search",
        tabBarIcon: ({ color, size}) => (
          <Ionicons name="search-outline" size={size} color={color} />
        ),
      }}
      />
      <Tabs.Screen
      name="create"
      options={{
        title: "create",
        tabBarIcon: ({ color, size}) => (
          <Ionicons name="add-outline" size={size} color={color} />
        ),
      }}
      />
      <Tabs.Screen
      name="messages"
      options={{
        title: "messages",
        tabBarIcon: ({ color, size}) => (
          <Ionicons name="chatbubble-ellipses-outline" size={size} color={color} />
        ),
      }}
      />
      <Tabs.Screen
      name="profile"
      options={{
        title: "profile",
        tabBarIcon: ({ color, size}) => (
          <Ionicons name="person-outline" size={size} color={color} />
        ),
      }}
      />
    </Tabs>
  )
}