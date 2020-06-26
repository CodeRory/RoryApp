import React, { useState } from "react";
import { SafeAreaView, View, FlatList, StyleSheet, Text, Image, TouchableWithoutFeedback } from 'react-native';
import Constants from 'expo-constants';
import { TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Swipeable from 'react-native-gesture-handler/Swipeable';


import colors from '../config/colors';

const initialMessages = [
  {
    id: '1',
    title: 'Marta Ricci',
    price: 'Is your guitar still available?',
    avatar: require('../assets/avatar6.png'),
  },
  {
    id: '2',
    title: 'Miguel García',
    price: 'Would you accept 500 bucks?',
    avatar: require('../assets/avatar7.png'),
  },
  {
    id: '3',
    title: 'Fredrika Larsson',
    price: 'Could you send me more photos?',
    avatar: require('../assets/avatar8.png'),
  },
 
];

function Item({ title, price }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
    </View>
  );
}

function ListItemDeleteAction({ onPress }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons name='trash-can' size={35} color={colors.white} />
            </View>        
        </TouchableWithoutFeedback>
    )
} 

/* function ListItemSeparator() {
    return (
        <View style={styles.separator} />
    )
} */

export default function MyAccount({ navigation }) {
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = (message) => {
        // Delete the message from messages
        setMessages(messages.filter((m) => m.id !== message.id));
      };
  
  
  
    return (
    <View style={styles.container} >
      <FlatList
            /* ItemSeparatorComponent={ListItemSeparator} */
            data={messages}
            keyExtractor={(message) => message.id.toString()}
            renderItem={({ item }) =>         
                (<Swipeable style={styles.containerSwipeable} renderRightActions={() => (
                    <ListItemDeleteAction onPress={() => handleDelete(item)} />
                        )}>
                        <TouchableOpacity onPress={() => console.log('hey')} style={styles.productInfo}> 
                            <View style={styles.avatarAndText}>
                                <Image style={styles.avatar} source={item.avatar}/>  
                                <Item title={item.title} price={item.price}  />                          
                            </View>               
                            <View style={styles.containerIcons}>
                                <MaterialCommunityIcons 
                                color={colors.medium}                        
                                name='chevron-left' 
                                size={25} 
                                style={styles.chevron}
                                />
                                <MaterialCommunityIcons 
                                color={colors.medium}                        
                                name='trash-can' 
                                size={25} 
                                style={styles.chevron}
                                />
                            </View>
                        </TouchableOpacity>
                    </Swipeable>)
            }
            refreshing={refreshing}
            onRefresh={() => {
                setMessages([
                    {
                    id: '2',
                    title: 'Miguel García',
                    price: 'Would you accept 500 bucks?',
                    avatar: require('../assets/avatar7.png'),
                    },
                ]);
                }}
        /> 
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 25,
    height: 50,
    width: 50,
    marginTop: 18, 

  },
  avatarAndText: {
    display: 'flex',
    flexDirection: 'row',
  },

  chevron: {
      alignSelf: 'center',

  },
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: colors.white,
    display: 'flex',
    flexDirection: 'row',
    
  },
  containerIcons: {
    display: 'flex',
    flexDirection: 'row',

  },

  containerSwipeable: {


  },
  
  item: {    
    padding: 20,
  },
  price: {
      color: colors.medium,
      marginLeft: 2,

  },
  productInfo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 25,
    marginRight: 25,

  },
  separator: {
    width: '100%', 
    height: 1, 
    backgroundColor: colors.medium,
},
  title: {
    fontSize: 18,
    color: colors.black,
  },
});