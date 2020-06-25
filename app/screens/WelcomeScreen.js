import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

import MyButton from "../components/MyButton";
import colors from "../config/colors";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={1}
      style={styles.background}
      source={require("../assets/Welcome2.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/rory.jpg")} />
        <Text style={styles.tagline}>CodeRory Instruments</Text>
        <Text style={styles.subTagline}>Join now and sell your old instruments. Buy another one!</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <MyButton
          title="Login"
          onPress={() => navigation.navigate('Login')} 
        />
        <MyButton
          title="Register"
          color="secondary"
          onPress={() => navigation.navigate('Register')} 
        />
        <MyButton
          title="Continue without an account"
          color='tomato'
          onPress={() => navigation.navigate('Products')} 
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    
    
    width: "100%",
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
    color: 'whitesmoke',
  },
  subTagline: {
    marginRight: '20%',
    marginLeft: '20%',
    textAlign: 'center',
    color: 'whitesmoke',

  }
});

export default WelcomeScreen;
