import React from 'react';
import { View , Text , StyleSheet , ImageBackground } from 'react-native';
import SpecButton from '../components/SpecButton';

const SplashPage = () => {
    return (
        <View>
            <ImageBackground source={ require('../assets/splashpage.jpg') } style={styles.backgroundImg}>

                <View style={styles.container}>
                    <Text style={styles.title}>EUSL KUPPIYA</Text>
                    <Text style={styles.subtitle}> all studies  materials in digital platform.</Text>
                    <SpecButton label="GET STARTED" onPress={this.launch}/>
                </View>
            </ImageBackground>
        </View>
      )
}

launch = () => { 
     alert('Test Login');
}

const styles = StyleSheet.create({
    backgroundImg:{
        width:'100%' ,
        height:'100%'
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',

    },
    subtitle:{
        fontSize:12,
        color:'#D3D3D3',
        marginBottom: 20
    },
    container:{
        width:'100%',
        padding:20,
        alignItems: "stretch",
        position: 'absolute',
        bottom:2
    }
});

export default SplashPage;