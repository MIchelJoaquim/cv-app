/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
const foto = require('../assets/foto-perfil-michel.jpg');

const Resume = () => {
  return (
    <>
      <View style={styles.page}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#a9a9a9"
          networkActivityIndicatorVisible={true}
        />
        <View style={styles.header_container}>
          <Image source={foto} style={styles.foto} />
          <Text style={styles.name}>Michel J. Alexandre Joaquim</Text>
          <Text style={styles.position}>
            Desenvolvedor Web Fulstack & Mobile
          </Text>
          <Text style={{color: '#555'}}>
            Javascript | ReactJS | React Native | MySql | MongoDB
          </Text>
        </View>
        <View style={styles.cardContainer} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#E6E6E6',
    flex: 1,
    alignItems: 'center',
  },
  header_container: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  foto: {
    width: 250,
    height: 250,
    borderRadius: 125,
    borderColor: '#00C0CF',
    borderWidth: 1,
  },
  name: {
    textAlign: 'center',
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    margin: 10,
  },
  position: {
    color: '#939393',
    marginBottom: 10,
  },

  cardContainer: {
    width: '90%',
    marginTop: 30,
    paddingTop: 10,

    borderTopColor: '#939393',
    borderTopWidth: 2,
    flex: 1,
  },
});

export default Resume;
