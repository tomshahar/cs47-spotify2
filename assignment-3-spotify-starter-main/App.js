import { StyleSheet, SafeAreaView } from "react-native";
import { useSpotifyAuth } from "./utils";
import { Themes } from "./assets/Themes";
import AuthButton from "./components/button.js";
import Header from "./components/header.js";
import SongList from "./components/songList.js";

export default function App() {
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth();
  
  //add keys to tracks
  let counter = 1;
  for (let track of tracks) {
    track.key = counter;
    counter++
  }
  //conditionally render AuthButton or Songlist
  if (!token) {
    return (
      <SafeAreaView style={styles.container}>
        <AuthButton press={getSpotifyAuth}></AuthButton>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <Header></Header>
      <SongList trackData={tracks}></SongList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
