import React, { useState } from "react";
import { StyleSheet, TextInput, View, Pressable, Text } from "react-native";
import { Colors } from "../Global/Colors";
import { AntDesign, Entypo } from "@expo/vector-icons";

const Search = ({ setKeyword }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const search = () => {
    const expression = /.*[0-9].*/;
    if (expression.test(input)) {
      setError("No Debe Contener Numeros");
    } else {
      setKeyword(input);
      setError("");
    }
  };

  const removeItem = () => {
    setInput("");
    setError("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <TextInput
          style={styles.input}
          placeholder="Buscar Producto"
          value={input}
          onChangeText={(text) => setInput(text)}
        />
        <Pressable onPress={search}>
          <AntDesign name="search1" color="black" size={25} />
        </Pressable>
        <Pressable onPress={removeItem}>
          <Entypo name="circle-with-cross" color="black" size={25} />
        </Pressable>
      </View>
      {error ? <Text>{error}</Text> : null}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: Colors.blue1,
  },
  containerInput: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  input: {
    backgroundColor: Colors.blue3,
    flex: 1,
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    margin: 10,
  },
});
