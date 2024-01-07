import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "../Components/Header";
import Categories from "../Components/Categories";

const Home = ({ setCategorySelected }) => {
  return (
    <View style={styles.container}>
      <Header title="Categories" />
      <Categories setCategorySelected={setCategorySelected} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
