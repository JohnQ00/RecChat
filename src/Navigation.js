// @refresh reset
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { StyleSheet, Text, TextInput, View, YellowBox } from 'react-native';
import * as firebase from 'firebase';
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB9WYWNUmPkDCNk2It-gBnADIKPo6JKMyw",
  authDomain: "react-native-chat-862fd.firebaseapp.com",
  databaseURL: "https://react-native-chat-862fd.firebaseio.com",
  projectId: "react-native-chat-862fd",
  storageBucket: "react-native-chat-862fd.appspot.com",
  messagingSenderId: "601548103846",
  appId: "1:601548103846:web:874cf22222b4836cbd9467",
  measurementId: "G-4DD6FWT6H8"
};

if (firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
}

YellowBox.ignoreWarnings(['Setting a timer for a long period of time.']);

export default function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    readUser();
  }, []);

  async function readUser(){
    const user = await AsyncStorage.getItem('user')
    if (user){
      setUser(JSON.parse(user));
    }
  }
  if(!user) {
    return (
      <View style={styles.container}>
          <TextInput style={ styles.input } placeholder="Enter your name"/>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Here's your app.</Text>
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
    padding: 30,
  },
  input: {
      height: 50,
      width: '100%',
      borderWidth: 1,
      padding: 15,
      borderColor: 'gray',
  }
});
