import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import millisToMinutesAndSeconds from '../utils/millisToMinutesAndSeconds.js'

export default function Song(props) {
    //PROPS
    //index, album img, album title, song title, artist, duration
    return (
        <View style={styles.songContainer}>
                <View style={styles.indexNumberWrapper}>
                    <Text style={styles.indexNumber}>
                        {props.track.key}
                    </Text>
                </View>
                <Image 
                    source={{uri: props.track.album.images[1].url}}
                    style={styles.albumImage}
                />
                <View style={styles.nameContainer}>
                    <Text style={styles.songTitle} numberOfLines={1}>
                        {props.track.name}
                    </Text>
                    <Text style={styles.artistName} numberOfLines={1}>
                        {props.track.artists[0].name}
                    </Text>
                </View>
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
  indexNumber: {
    color: 'rgba(255,255,255, 0.7)',
    fontSize: 12,
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
