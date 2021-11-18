import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

export default function App() {
  
  const [nome, setNome] = useState('');
  
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Primeiro Aplicativo</Text>
     <TextInput style={styles.campo} value={nome} placeholder="Digite seu nome"
     onChangeText={(nome)=> SetNome(nome)}/>
      <StatusBar style="auto" />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo:{
    fontFamily:'Comic Sans MS',
    fontSize: 30,
    textAlign: 'center',
    marginTop:25
  },

  campo:{
    backgroundColor: '#121212',
    borderRadius: 10,
    fontSize: 23,
    color: '#FFF',
    margin: 10,
    padding:10
  },
  botao:{
    backgroundColor:'#41AEF4',
   alignItems: 'center',
   justifyContent: 'center',
   margin: 15,
   padding:10
  },
  TextBotao:{
    fontSize:25,
    color:'#FFF'
  }
});
