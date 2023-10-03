import React from 'react'
import { View, StyleSheet } from 'react-native';

export const TareasSceen = () => {
  return (
    <View style={styles.container}>
            <View style= {styles.cajaMorada} />
            <View style= {styles.cajaNaranja} />
            <View style= {styles.cajaCeleste} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28425B'
    },
    cajaMorada: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5856D6'
    },
    cajaNaranja: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#F0A23B'
    },
    cajaCeleste: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#28C4D9'
    }
})