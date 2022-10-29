import * as React from 'react';
import { Text, View, StyleSheet, Image, Pressable } from 'react-native';
import { Themes } from '../assets/Themes/index.js';

export default function AuthButton(props) {
    return (
        <View>
            <Pressable 
              style={styles.button}
              onPressOut={props.press}
            >
                <Image 
                    style={styles.buttonLogo}
                    source={require('../assets/spotify-logo.png')}
                />
                <Text style={styles.buttonText}>
                    CONNECT WITH SPOTIFY
                </Text>
            </Pressable>
        </View>
    );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: Themes.colors.spotify,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 99999,
  },
  buttonLogo: {
    width: 24,
    height: 24,
    marginRight: 4,
  },
  buttonText: {
    color: Themes.colors.white,
    fontWeight: '800',
  },
});
