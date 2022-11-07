import * as React from 'react';
import { Text, View, StyleSheet, Image, Pressable } from 'react-native';
import millisToMinutesAndSeconds from '../utils/millisToMinutesAndSeconds.js'
import { Ionicons } from '@expo/vector-icons';
import Themes from '../assets/Themes/themes.js';


export default function Song(props) {
    //PROPS
    //index, album img, album title, song title, artist, duration
    console.log(props);
    return (
        <View style={styles.songContainer}>
                <View style={styles.playButtonWrapper}>
                    <Pressable 
                      onPress={(e) => {
                        e.stopPropagation();
                        props.nav.navigate('Preview', {
                          url: props.track.preview_url,
                        });
                      }}
                    >
                      <Ionicons name="play-circle" size={24} color={Themes.colors.spotify} />
                    </Pressable>
                </View>
                  <Image 
                      source={{uri: props.track.album.images[1].url}}
                      style={styles.albumImage}
                  />
                  <Pressable 
                    style={styles.nameContainer}
                    onPress={(e) => {
                      e.stopPropagation();
                      props.nav.navigate('Details', {
                        url: props.track.external_urls.spotify,
                      });
                    }}
                  >
                      <Text style={styles.songTitle} numberOfLines={1}>
                          {props.track.name}
                      </Text>
                      <Text style={styles.artistName} numberOfLines={1}>
                          {props.track.artists[0].name}
                      </Text>
                  </Pressable>
                  <Text style={styles.albumName} numberOfLines={1}>
                      {props.track.album.name}
                  </Text>
                  <Text style={styles.duration}>
                      {millisToMinutesAndSeconds(props.track.duration_ms)}
                  </Text>
        </View>
    );
}
const styles = StyleSheet.create({
  playButtonWrapper: {
    marginRight: 8,
  },
  songContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 4,
    paddingLeft: 4,
    paddingRight: 4,
    color: 'white',
  },
  albumImage: {
    width: 48,
    height: 48,
  },
  nameContainer: {
    marginLeft: 8,
  },
  songTitle: {
    color: 'white',
    fontSize: 12,
    width: 125,
  },
  artistName: {
    color: 'rgba(255,255,255, 0.7)',
    fontSize: 12,
    width: '80%',
    width: 125,
  },
  indexNumberWrapper: {
    marginRight: 4,
    width: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  albumName: {
    color: 'white',
    margin: 8,
    marginTop: 0,
    marginBottom: 0,
    fontSize: 12,
    width: 100,

  },
  duration: {
    color: 'white',
    fontSize: 12,
  },
  songContainerLeft: {
    flexDirection: 'row',
    width: '60%',
  },
  songContainerRight: {
    flexDirection: 'row',
    width: '40%',
  }
});
