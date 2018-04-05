import React from "react";
import { View } from "react-native";
import { FormLabel, FormInput, Button } from "react-native-elements";
import axios from "axios";
import firebase from "firebase";
import { ROOT_URL } from "../constants/secure/urls";

interface SignInFormState {
  readonly phone: string;
  readonly code: string;
}

export default class SignInForm extends React.Component<{}, SignInFormState> {
  readonly state: SignInFormState = { phone: "", code: "" };

  private handleChangePhoneText = (phone: string) => this.setState({ phone });
  private handleChangeCodeText = (code: string) => this.setState({ code });

  private handleSubmit = async () => {
    try {
      const { data } = await axios.post(`${ROOT_URL}/verifyOneTimePassword`, {
        phone: this.state.phone,
        code: this.state.code,
      });

      firebase.auth().signInWithCustomToken(data.token);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <View>
        <View style={{ marginBottom: 10 }}>
          <FormLabel>Enter Phone Number</FormLabel>
          <FormInput
            keyboardType="numeric"
            value={this.state.phone}
            onChangeText={this.handleChangePhoneText}
          />
          <FormLabel>Enter Code</FormLabel>
          <FormInput
            keyboardType="numeric"
            value={this.state.code}
            onChangeText={this.handleChangeCodeText}
          />
        </View>
        <Button title="Submit" onPress={this.handleSubmit} />
      </View>
    );
  }
}
