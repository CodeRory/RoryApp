import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Text,
} from "react-native";

import colors from "../config/colors";

function Card({ title, subTitle, image, avatar, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} source={image} />        
        <View>
        <View style={styles.sub}>
          <Image style={styles.avatar} source={avatar} />
            <View style={styles.detailsText}>
              <Text style={styles.title} numberOfLines={1}>
                {title}
              </Text>          
              <Text style={styles.subTitle} numberOfLines={2}>
                {subTitle}
              </Text>            
            </View>
          </View>        
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginTop: 20,
    marginLeft:20,

  }, 
  
  card: {
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsText: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  subTitle: {
    color: colors.medium,
    fontWeight: "bold",
  },
  sub: {
    display: 'flex',
    flexDirection: 'row',

  },
  title: {
    marginBottom: 7,
  },
});

export default Card;
