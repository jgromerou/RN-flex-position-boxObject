import { StyleSheet, Text, View } from "react-native"

const PositionScreen = () => {
  return (
      <View style={styles.container}>
        <View style={styles.cajaVerde}></View>
        <View style={styles.cajaMorada}></View>
        <View style={styles.cajaNaranja}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
       flex: 1,
    //    justifyContent: 'center',
    //    alignItems: 'center',
       backgroundColor: '#28C4D9'
    },
    cajaMorada: {
        width: 100,
        height: 100,
        backgroundColor: '#5856D6',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        right: 0,
        top: 0
    },
    cajaNaranja: {
        width: 100,
        height: 100,
        backgroundColor: '#F0A23B',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        right: 0,
        bottom: 0
    },
    cajaVerde: {
        // width: 100,
        // height: 100,
        backgroundColor: 'green',
        borderWidth: 10,
        borderColor: 'white',

        //Es lo mismo que el absoluteFillObject
        // position: 'absolute',
        // bottom: 0,
        // left:0,
        // top:0,
        // right:0,
        ...StyleSheet.absoluteFillObject
    }
})

export default PositionScreen
