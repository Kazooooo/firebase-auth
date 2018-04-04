import React from "react";
import { View } from "react-native";
import { FormLabel, FormInput, Button } from "react-native-elements";
import axios from "axios";
import { ROOT_URL } from "../constants/secure/urls";

interface SignUpFormState {
  readonly phone: string;
}

export default class SignUpForm extends React.Component<{}, SignUpFormState> {
  readonly state: SignUpFormState = { phone: "" };

  private handleChangeText = (phone: string) => this.setState({ phone });

  private handleSubmit = async () => {
    try {
      await axios.post(`${ROOT_URL}/createUser`, {
        phone: this.state.phone,
      });
      await axios.post(`${ROOT_URL}/requestOneTimePassword`, {
        phone: this.state.phone,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <View>
        <View style={{ marginBottom: 10 }}>
          <FormLabel>Enter Phone Number</FormLabel>
          <FormInput value={this.state.phone} onChangeText={this.handleChangeText} />
        </View>
        <Button title="Submit" onPress={this.handleSubmit} />
      </View>
    );
  }
}
