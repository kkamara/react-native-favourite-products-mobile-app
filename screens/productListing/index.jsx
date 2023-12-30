import { useContext, } from "react"
import { 
    View, 
    Text, 
    ActivityIndicator,
    StyleSheet,
    FlatList,
} from "react-native"
import { Context, } from "../../context"


export default function ProductListing() {
    const { loading, products, } = useContext(Context)

    if (loading) {
        return (
            <ActivityIndicator style={styles.loader} color={"red"} size={"large"} />
        )
    }

    return (
        <View>
            <FlatList
                data={products}
                renderItem={(itemData) => <Text>
                    {itemData.item.title}
                </Text>}
                keyExtractor={(itemData) => itemData.id}
                numColumns={2}
            />
            <Text>ProductListing</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    loader: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
})