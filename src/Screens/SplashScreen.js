// ----- import react
import React from 'react'
import { StyleSheet, Text, Image, View } from 'react-native'

// ----- Main Component
const SplashScreen = ({ navigation }) => {

    // ----- React Hooks
    React.useEffect(() => {
        setTimeout(function () {
            navigation.navigate('Onboarding_food')
        }, 1500)

        return () => {
        }
    })
    // ----- Main View
    return (
        <View style={styles.Container}>
            <Image style={styles.Imagesize} source={require("../Assets/Splash_Screen.png")} />
        </View>
    )
}

export default SplashScreen

// ----- Stylesheets
const styles = StyleSheet.create({
    Container: {
        flex: 1
    },
    Imagesize: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover'
    }
})