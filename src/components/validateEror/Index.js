import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { styles } from './Style'

export const ValidateError = ({error}) => {
    return (
        <View style = {styles.wrapper}>
            <Text style = {styles.txtError}>{error}</Text>
        </View>
    )
}
 
