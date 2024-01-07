import React from "react";
import { View, Text, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";

const Screen1 = ({ navigation }) => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const incrementCounter = () => {
    dispatch({ type: "INCREMENT" });
  };

  return (
    <View>
      <Text>Counter: {counter}</Text>
      <Button title="Increment" onPress={incrementCounter} />
    </View>
  );
};

export default Screen1;
