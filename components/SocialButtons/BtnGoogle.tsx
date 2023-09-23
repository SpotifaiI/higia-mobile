import React from 'react';
import { Text, Image }from 'react-native'
import { Pressable } from './styles';

const BtnGoogle: React.FC = () => {
  return (
    <Pressable style={{borderRadius:16, width: 325, height: 78, backgroundColor:'#fbfbfb', alignItems: 'center', justifyContent: 'center', marginTop: 28}}>
        <Image
        style={{
            resizeMode: 'contain',
            height: 30,
            width: 30,
            display: 'flex',
            position: 'absolute',
            left: 30,
            top: 22,
          }} source={require('../../assets/google.png')}
        />
        <Text style={{fontSize: 20, color: '#333', marginLeft: 15, fontFamily:'Poppins_700Bold'}}>Entrar com Google</Text>              
    </Pressable>
  );
}

export {BtnGoogle};