import React from 'react';
import { View , Text , StyleSheet , ImageBackground , Image } from 'react-native';
import SpecButton from '../components/SpecButton';
import TextBox from '../components/TextBox';
import TextInput from 'react-native-textinput-with-icons';



const MenuPage = () => {
    return (
        <View>
            
            <ImageBackground source={ require('../assets/menupage.jpg') } style={styles.backgroundImg}>

            <View style={styles.layout}>
                <View style={styles.boxes}>
                    
                    <Text style={styles.title}>WELCOME</Text>
                    <TextBox/>
                    <TextBox/>
                    <TextBox/>


                    <TextInput
        label="Name"
        // RTL must used when label in arabic ex: label="اللغة العربيه"
        leftIcon="thumbsup"
        leftIconType="oct"
        rippleColor="blue"
        rightIcon="react"
        rightIconType="material"
        value={name}
        refrance={(refrance) => {
            this.input = refrance;
        }}
        onChangeText={name => this.setState({ name })}
      />


                </View>
            </View>
            </ImageBackground>
        </View>
      )
}

gohome = () => { 
    alert('Test Menupage');
}

const styles = StyleSheet.create({
   backgroundImg:{
       width:'100%' ,
       height:'100%',
   },
   layout:{
        width:'100%' ,
        height:'100%',
        justifyContent: 'center'
   },
   title:{
       fontSize: 30,
       fontWeight: 'bold',
       letterSpacing: 0.25,
       color: 'white',
       alignSelf: 'center',
       marginVertical:10

   },
   boxes:{
        backgroundColor: 'rgba(0,0,0,0.5)',
        flex: 0.5,
        marginHorizontal:50,
        borderRadius:20,
   }
});

export default MenuPage;