import { StyleSheet, SafeAreaView } from "react-native";
import { useSpotifyAuth } from "./utils";
import { Themes } from "./assets/Themes";
import AuthButton from "./components/button.js";
import Header from "./components/header.js";
import SongList from "./components/songList.js";
import { WebView } from "react-native-webview";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


function Home({ navigation }) {
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth();
  let counter = 1;
  for (let track of tracks) {
    track.key = counter;
    counter++
  }
  if (!token) {
    return (
      <SafeAreaView style={styles.container}>
        <AuthButton press={getSpotifyAuth}></AuthButton>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <SongList trackData={tracks} nav={navigation}></SongList>
    </SafeAreaView>
  );
}
function Preview({ route, navigation }) {
  return (
    <WebView
      source={{
        uri: route.params.url
      }}
    />
  )
}
function Details({ route, navigation }) {
  return (
    <WebView
      source={{
        uri: route.params.url
      }}
    />
  )
}


export default function App() {
  function LogoTitle() {
    return (
      <Header></Header>
    );
  }
  const Stack = createStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: Themes.colors.background,
            }
          }}
        >
          <Stack.Screen 
            name="Home" 
            component={Home} 
            options={{ headerTitle: () => <LogoTitle/> }}
          />
          <Stack.Screen
            name="Preview"
            component={Preview} 
            options={{headerStyle: {
              backgroundColor: Themes.colors.background
            }}}
          />
          <Stack.Screen
            name="Details"
            component={Details} 
            options={{headerStyle: {
              backgroundColor: Themes.colors.background
            }}}
          />

        </Stack.Navigator>
      </NavigationContainer>
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
