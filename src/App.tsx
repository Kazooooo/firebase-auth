import React from "react";
import { StyleSheet, View, Keyboard, TouchableWithoutFeedback } from "react-native";
import firebase from "firebase";
import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";
import { FIREBASE_CONFIG } from "./constants/secure/firebase";

export default class App extends React.Component {
  componentDidMount() {
    firebase.initializeApp(FIREBASE_CONFIG);
  }

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
