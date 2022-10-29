import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Themes } from '../assets/Themes/index.js';

export default function AuthButton(props) {
    return (
        <View style={styles.header}>
            <Image 
                style={styles.headerLogo}
                source={require('../assets/spotify-logo.png')}
            />
            <Text style={styles.headerText}>
                Your Top Songs
            </Text>

        </View>
    );
}
const styles = StyleSheet.create({
  header: {
    width: '100%',
    top: 0,
    backgroundColor: Themes.colors.background,
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerLogo: {
    width: 24,
    height: 24,
    marginRight: 4,
  },
  headerText: {
    color: Themes.colors.white,
    fontWeight: '800',
  },
});
