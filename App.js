/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  TouchableOpacity,
  Image
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);


const ActionBarImage = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Image
        source={{
          uri:
            'app/images/login-ima.png',
        }}
        style={{
          width: 40,
          height: 40,
          borderRadius: 40 / 2,
          marginLeft: 15,
        }}
      />
    </View>
  );
};

const App: () => React$Node = () => {
  return (
    <>
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
        <View style={styles.bottomView}>
            <AppButton style={styles.button} title="Ingresar"></AppButton>
        </View>
      </View>
    </>
  );
};

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
    backgroundColor: "#924E7D",
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
});

export default App;
