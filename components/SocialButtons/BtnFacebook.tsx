import React from 'react';
import { Text, Image }from 'react-native'
import { Pressable } from './styles';

const BtnFacebook: React.FC = () => {
  return (
    <Pressable style={{borderRadius:16, width: 325, height: 78, backgroundColor:'#fbfbfb', alignItems: 'center', justifyContent: 'center', marginTop: 28}}>
        <Image
        style={{
            resizeMode: 'contain',
            height: 30,
            width: 30,
            display: 'flex',
            position: 'absolute',
            left: 25,
            top: 22,
          }} source={require('../../assets/facebook.png')}
        />
        <Text style={{fontSize: 20, color: '#0063EC', marginLeft: 20, fontFamily:'Poppins_700Bold'}}>Entrar com Facebook</Text>              
    </Pressable>
  );
}

export {BtnFacebook};