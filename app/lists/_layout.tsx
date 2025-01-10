import { Tabs } from "expo-router";
import React from "react";

const TabLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{ title: "Items", headerShown: false }}
      />
      <Tabs.Screen name="about" options={{ title: "Items Details" }} />
    </Tabs>
  );
};

export default TabLayout;
