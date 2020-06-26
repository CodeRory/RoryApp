import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'



import colors from '../config/colors'

export default function AppTextInput({ icon, placeholder, ...otherProps }) {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons name={icon}
                                             size={20}
                                             color={colors.medium}
                                             style={styles.icon} 
            />}
            <TextInput sytle={styles.text}>{placeholder} </TextInput>
            <MaterialCommunityIcons 
                name='chevron-down'
                size={20}
                color={colors.medium}
            />
           
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        width: '100%',
        padding: 15,
        marginVertical: 10,
    },
    icon: {
        marginRight: 10,
    },
    text: {
        flex: 1,
        fontSize: 18, 
        color: colors.dark,
    }

})
