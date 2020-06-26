import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Card from '../components/Card';

import colors from "../config/colors";

import routes from '../navigation/routes';

const listings = [
  {
    id: '1',
    title: 'Acoustic guitar of 1991',
    price: '900$',
    image: require('../assets/product1.jpg'),
    avatar: require('../assets/avatar1.jpg'),
    name: 'Ross Geller',
    subTitle: '5 Deals'
  },
  {
    id: '2',
    title: 'Big electric guitar',
    price: '3500$',
    image: require('../assets/product2.jpg'),
    avatar: require('../assets/avatar2.png'),
    name: 'Lisa Simpson',
    subTitle: '2 Deals'
  },
  {
    id: '3',
    title: 'Pre-owned piano',
    price: '2750$',
    image: require('../assets/product3.jpg'),
    avatar: require('../assets/avatar3.jpg'),
    name: 'Yeni Li',
    subTitle: '10 Deals'
  },
  {
    id: '4',
    title: 'Two cymbals and one snare',
    price: '780$',
    image: require('../assets/product4.jpg'),
    avatar: require('../assets/avatar4.jpg'),
    name: 'Jurgen Klopp',
    subTitle: '1 Deals'
  },
  {
    id: '5',
    title: 'My old sax',
    price: '1250$',
    image: require('../assets/product5.jpg'),
    avatar: require('../assets/avatar5.png'),
    name: 'Miles Davis',
    subTitle: '6 Deals'
  },
];

function ProductsScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
            avatar={item.avatar}
            onPress={() => navigation.navigate(routes.PRODUCTS_DETAILS, item)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ProductsScreen;









/* 
    

export default function ProductsScreen({ navigation, onPress1, onPress2 }) {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={listings}
        keyExtractor={item => item.id}
        renderItem={({ item }) => 
        
        (<React.Fragment>
            <Image style={styles.image} source={item.image}/>
            <View style={styles.productInfo}>
              <TouchableOpacity onPress={onPress1}>
                  <Item title={item.title} price={item.price}  />  
              </TouchableOpacity>
              <TouchableOpacity onPress={()=> navigation.navigate('ProductsScreenDetails', item)}>
                <Image style={styles.avatar} source={item.avatar}/>               
              </TouchableOpacity>
            </View>
        </React.Fragment>)
        
        }
      /> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginTop: 23,

  },
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: colors.white,
  },
  image:{
      overflow: 'hidden',
      height: 180,
      width: '100%',
      
  },
  item: {
    
    padding: 20,
    marginVertical: 8,
  },
  price: {
      color: colors.medium,
      marginLeft: 2,

  },
  productInfo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginLeft: -16,

  },
  title: {
    fontSize: 18,
    color: colors.black,
  },
}); */