import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import TabNavigation from "./app/navigation/TabNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
