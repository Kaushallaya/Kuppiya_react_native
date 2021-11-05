import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";

function TextBox(props) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="placeholder"
        placeholderTextColor="rgba(121,119,119,1)"
        style={styles.placeholder}
        
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 233,
    height: 10,
    alignSelf: "center",
    marginTop:40
  },
  placeholder: {
    fontFamily: "roboto-regular",
    color: "rgba(222,207,207,1)",
    height: 40,
    width: 233,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 15,
    paddingLeft:20,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.28,
    shadowRadius: 0
  }
});

export default TextBox;
