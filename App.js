import { StatusBar } from "expo-status-bar"
import { StyleSheet, View, } from "react-native"
import ProductListing from "./screens/productListing"
import Favourites from "./screens/favourites"
import ProductDetails from "./screens/productDetails"
import { NavigationContainer, } from "@react-navigation/native"
import { createNativeStackNavigator, } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import ProductContext from "./context"

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

function BottomTabs() {
  return (
    <ProductContext>
      <Tab.Navigator>
        <Tab.Screen options={{
          title: "Product List",
        }} name="productListing" component={ProductListing} />
        <Tab.Screen options={{
          title: "Favourites",
        }} name="favourites" component={Favourites} />
      </Tab.Navigator>
    </ProductContext>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#fff",
            },
            contentStyle: {
              backgroundColor: "#220577dd",
            },
          }}
        >
          <Stack.Screen options={{
            headerShown: false,
          }} name="bottomtabs" component={BottomTabs} />
          <Stack.Screen options={{
            title: "Product Details",
          }} name="productDetails" component={ProductDetails} />
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
