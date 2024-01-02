import { useContext } from "react"
import { View, Text, StyleSheet, FlatList, } from "react-native"
import { Context } from "../../context"
import FavouriteItem from "../../components/favouriteItem"


export default function Favourites() {
    const { favouriteItems, handleRemoveFavourites, } = useContext(Context)

    if (!favouriteItems.length) {
        return (
            <View style={styles.noFavourites}>
                <Text style={styles.noFavouritesText}>No favourites found.</Text>
            </View>
        )
    }

    return (
        <View style={styles.favouriteMainContainer}>
            <FlatList
                data={favouriteItems}
                renderItem={(itemData) => <FavouriteItem
                    title={itemData.item.title}
                    reason={itemData.item.reason}
                    handleRemoveFavourites={handleRemoveFavourites}
                    id={itemData.item.id}
                />}
                keyExtractor={itemData => itemData.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    favouriteMainContainer: {
        paddingHorizontal: 16,
        paddingVertical: 30,
    },
    noFavourites: {
        padding: 20,
        alignItems: "center",
    },
    noFavouritesText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000"
    },
})