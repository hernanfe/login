import React, {Component} from 'react'
import {View, StatusBar,Text,Image} from 'react-native'
import * as Animatable from 'react-native-animatable'
import { imageBackgroundStyle} from '@styles/General'

export default class SplashScreen extends Component{
    goToScreen(routeName) {
        this.props.navigation.navigate(routeName)
    }

    componentDidMount() {
        setTimeout( () => {
             this.goToScreen('Login')
         },5000,this);
         console.log("did mount ok");
    }

    render(){
        return(
            // <View style= {imageBackgroundStyle.image}>
            // <View >
            //      <StatusBar translucent backgroundColor='rgb(0,0,0,0,2)'/>
            //      <Animatable.image
            //         animation="pulse"
            //         easing="easing-out"
            //          iterationCount="infinite"
            //          style={{
            //              width: 200,
            //              height:200,
            //              margin:100,
            //          }}
            //          source={require('@recursos/images/mini.png')}
            //     />
            //  </View>
            <React.Fragment>
                <StatusBar barStyle="dark-content" backgroundColor={'transparent'} translucent={true} />
                <Image source={require('@recursos/images/logo-icon.png')}></Image>
            </React.Fragment>            
        )
    }
}