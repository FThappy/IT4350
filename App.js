
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import Login from './App/Screens/Login';
import Signin from "./App/Screens/Signin";
import { MainStack } from "./App/Components/StackNavigation";


const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    raleway: require("./assets/Fonts/Raleway-Regular.ttf"),
    raleway_bold : require("./assets/Fonts/Raleway-SemiBold.ttf")
  });
  if (!fontsLoaded) {
    // Font chưa tải xong, bạn có thể trả về một chỉ báo tải hoặc null
    return null;
  }
  return (
    <View style={styles.container}>
      <StatusBar />
      <NavigationContainer>
        <MainStack/>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
