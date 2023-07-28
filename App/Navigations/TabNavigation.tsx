import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { RootTabParamList } from "../../types/navigation";
import Home from "../Screens/Home";
import Search from "../Screens/Search";
import Profile from "../Screens/Profile";
import Fav from "../Screens/Fav";

const Tab = createBottomTabNavigator<RootTabParamList>();

const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Fav" component={Fav} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
