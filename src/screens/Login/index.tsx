import React from "react";
import { SafeAreaView, View } from "react-native";
import { Card, TextInput, Button } from "react-native-paper";
import { loginStyle } from "./styles";

export default function Login() {
  return (
    <SafeAreaView style={loginStyle.content}>
      <View style={loginStyle.view}>
        <Card>
          <Card.Title title="Delivery" titleStyle={loginStyle.cardTitle}></Card.Title>
          <Card.Content>
            <TextInput label="Email" keyboardType="email-address" mode="outlined"></TextInput>
            <TextInput outlineColor="black" label="Password" secureTextEntry={true} mode="outlined"></TextInput>
            <Button uppercase={false}>Forgot email/password</Button>
            <Button mode="contained" style={loginStyle.cardButton}>Login</Button>
            <Button mode="outlined" style={loginStyle.cardButton}>Register</Button>
          </Card.Content>
        </Card>
        </View> 
    </SafeAreaView>
  )
}