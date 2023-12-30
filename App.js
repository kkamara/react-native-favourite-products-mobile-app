import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, } from 'react-native'
import ProductListing from "./screens/productListing"
import Favourites from "./screens/favourites"
import ProductDetails from "./screens/productDetails"
import { NavigationContainer, } from "@react-navigation/native"
import { createNativeStackNavigator, } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="productListing" component={ProductListing} />
          <Stack.Screen name="productDetails" component={ProductDetails} />
          <Stack.Screen name="favourites" component={Favourites} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
