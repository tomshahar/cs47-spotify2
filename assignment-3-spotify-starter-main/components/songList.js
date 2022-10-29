import * as React from 'react';
import { View, FlatList } from 'react-native';
import Song from "../components/song.js";


export default function SongList(props) {
    return (
        <View>
            <FlatList
                data={props.trackData}
                renderItem={({ item }) => (
                    <Song
                        track={item}
                    />
                )}
            />
        </View>
    );
}
