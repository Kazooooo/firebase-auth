import React from "react";
import { StyleSheet, View, Keyboard, TouchableWithoutFeedback } from "react-native";
import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";

export default class App extends React.Component {
  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <SignUpForm />
          <SignInForm />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
