import React from 'react';
import {Linking, StyleSheet, TouchableHighlight, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const SocialNetwork = () => {
  const handleSocialNetwork = async (url: string) => {
    try {
      await Linking.openURL(url);
    } catch (error) {
      console.log('ERROR linked', error);
    }
  };

  const color = '#222222';
  return (
    <>
      <View style={styles.socialNetwork}>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#999"
          onPress={async () =>
            handleSocialNetwork('https://github.com/MIchelJoaquim')
          }>
          <Icon name="github" size={20} color={color} />
        </TouchableHighlight>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#999"
          onPress={async () =>
            handleSocialNetwork('https://www.linkedin.com/in/michel-joaquim/')
          }>
          <Icon name="linkedin" size={20} color={color} />
        </TouchableHighlight>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#999"
          onPress={() => handleSocialNetwork('tel:+244925257716')}>
          <Icon name="phone" size={20} color={color} />
        </TouchableHighlight>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  socialNetwork: {
    width: '60%',
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default SocialNetwork;
