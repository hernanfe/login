import React, {Component, useState} from 'react'
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    Alert
  } from 'react-native';
import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';
import {GoogleSigninButton, GoogleSignin} from 'react-native-google-signin';

if (Platform.OS === 'android') {
  GoogleSignin.configure({
    forceCodeForRefreshToken: true,
  })
} else {
  GoogleSignin.configure({
    webClientId: '634118146916-pbijebscui9f7rqvhisoknabaakg8is3.apps.googleusercontent.com',
    forceCodeForRefreshToken: true,
    iosClientId: '634118146916-pbijebscui9f7rqvhisoknabaakg8is3.apps.googleusercontent.com'
  })
}  

const AppButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
 );

// const [state,setState] = useState (null);

 
 export default class LoginScreen extends Component{
   
    constructor(props){
      super(props)
      this.state  = {
        usergoogleinfo: null
      }
    }

    callFun= () =>{
      Alert.alert("clicked");
    }
  
    signIn = async() => {
      try {
        //await GoogleSignin.hasplayservices()
        // const userinfo = await GoogleSignin.signIn();
        // Alert.alert(userinfo);
        await GoogleSignin.signIn()
        .then((user) => {
          console.log(user);
         this.setState({
          usergoogleinfo : user
             //loaded : true
         });
        Alert.alert(JSON.stringify(user));
        //this.setState({user: user});
        })
        .catch((err) => {
          Alert.alert('WRONG SIGNIN', JSON.stringify(err));
        });
      } catch (error) {
        Alert.alert(JSON.stringify(error.message));
      }
    }
  
    signOut = async () => {
      try {
        await GoogleSignin.revokeAccess();
        await GoogleSignin.signOut();
        this.setState(null); // Remember to remove the user from your app's state as well
        Alert.alert("La sesión se cerró");
      } catch (error) {
        console.error(error);
      }
    };
  
    render(){
        return(
            <View style={styles.body}>
            <View style={styles.top}>
              <Image style={styles.stretch} source={require('@recursos/images/login-ima.png')}></Image>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionDescription}>
                <Text style={styles.highlight}>Correo</Text>
              </Text>
            </View>
            <View style={styles.sectionContainer}>
                <TextInput placeholder="Correo electrónico" style={styles.input} ></TextInput>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionDescription}>
                <Text style={styles.highlight}>Contraseña</Text>
              </Text>
            </View>
            <View style={styles.sectionContainer}>
                <TextInput placeholder="Contraseña" style={styles.input} ></TextInput>
            </View>
            <View style={styles.sectionContainer}>
                <Text style={styles.textLogin}>Aún no tiene cuenta? <Text style={styles.textLoginColor}>Regístrese</Text></Text>
            </View>
            <View style={styles.sectionContainer}>
                <Text style={styles.textLogin}>Inicie sesión con</Text>
            </View>
            <View style={styles.arraysocial}>
                {/* <Imgface/> */}
                {/* <Facebook/> */}
                <TouchableOpacity activeOpacity={0.5} onPress={this.callFun}>
                  <Image  style={styles.social} source={require('@recursos/images/facebook.png')}></Image>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} onPress={this.callFun}>
                  <Image  style={styles.social} source={require('@recursos/images/twitter.png')}></Image>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} onPress={this.signIn}>
                  <Image  style={styles.social} source={require('@recursos/images/google.png')}></Image>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} onPress={this.callFun}>
                  <Image  style={styles.social} source={require('@recursos/images/microsoft.png')}></Image>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} onPress={this.callFun}>
                  <Image  style={styles.social} source={require('@recursos/images/linkedin.png')}></Image>
                </TouchableOpacity>
            </View>
            <View style={styles.bottomView}>
                <AppButton style={styles.button} title="Ingresar" onPress={this.signOut}></AppButton>
            </View>
          </View>
        )
    }
}

const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: Colors.lighter,
    },
    engine: {
      position: 'absolute',
      right: 0,
    },
    body: {
      flex: 1,
      backgroundColor: Colors.white,
      justifyContent: 'center'
    },
    sectionContainer: {
      marginTop: 0,
      //paddingHorizontal: 24,
      padding: 0
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: Colors.black,
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
      color: Colors.dark,
    },
    highlight: {
      fontWeight: '700',
      fontSize:12
    },
    footer: {
      color: Colors.dark,
      fontSize: 12,
      fontWeight: '600',
      padding: 4,
      paddingRight: 12,
      textAlign: 'right',
    },
    input: {
      margin: 0,
      height: 35,
      borderBottomColor: '#7a42f4',
      //fontFamily: 'Arial',
      fontSize: 14,
      borderBottomWidth: 1,
      padding: 5
    },
    bottomView:{
      width: '100%', 
      height: 50, 
      //backgroundColor: '#FF9800', 
      justifyContent: 'center', 
      alignItems: 'center',
      position: 'absolute',
      bottom: 0
    },  
    button:{
      width: '100%', 
      height: 50, 
      backgroundColor: '#FFF', 
      justifyContent: 'center', 
      alignItems: 'center',
      position: 'absolute',
      bottom: 0
    },  
    appButtonContainer: {
      width: '100%', 
      elevation: 8,
      backgroundColor: "#7D367D", //"#924E7D",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12
    },
    appButtonText: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      //textTransform: "uppercase"
    },
    top:{
      width: '100%', 
      height: 150, 
      backgroundColor: '#FFF', 
      justifyContent: 'center', 
      alignItems: 'center',
      position: 'absolute',
      top: 5
    },  
    stretch: {
      width: 150,
      height: 150,
      resizeMode: 'stretch',
    },
    textLogin: {
        width: '100%', 
        textAlign: 'center',
        fontSize:12
    },
    textLoginColor: {
        width: '100%', 
        textAlign: 'center',
        color: "#924E7D",
        fontSize:12
    },
    social: {
      width: 22,
      height: 22,
      borderRadius: 100, //25/2,
      backgroundColor: "#7D367D",
      padding:18,
      margin:0.5
      //resizeMode: 'stretch',
    },
    arraysocial: {
      flexDirection: 'row',
      justifyContent: 'center',
    }
  }); 