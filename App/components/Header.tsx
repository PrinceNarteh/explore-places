import { View, Text, Image, StyleSheet, TextInput } from "react-native";
import React from "react";
const logo = require("@/assets/images/logo.png");
const user = require("@/assets/images/placeholder.jpg");

export default function Header() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <View style={styles.searchContainer}>
        <TextInput placeholder="Search" style={styles.searchBar} />
      </View>
      <Image source={user} style={styles.userImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 5,
  },
  logo: {
    width: 50,
    height: 50,
  },
  searchContainer: {
    flex: 1,
  },
  searchBar: {
    height: 45,
    borderWidth: 1,
    padding: 4,
    borderRadius: 50,
    paddingLeft: 10,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
});
