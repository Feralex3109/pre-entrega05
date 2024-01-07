import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../Global/Colors";

const Header = ({ title = "Producto" }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.blue2,
    width: "100%",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30,
  },
  text: {
    fontSize: 25,
    color: Colors.white,
  },
});
