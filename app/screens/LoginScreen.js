import React from "react";
import { StyleSheet, Image, View } from "react-native";
import { Formik } from 'formik'
import * as Yup from "yup";

import AppTextInput from '../components/AppTextInput';
import AppForm from '../components/AppForm';
import AppFormField from '../components/AppFormField';
import SubmitButton from '../components/SubmitButton';


const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("This field"),
  password: Yup.string().required().min(8).label("Password"),
});

function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/rory.jpg")} />

      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Login" />
      </AppForm>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    borderRadius: 40,
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;