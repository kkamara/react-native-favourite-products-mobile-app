import { View, Text, StyleSheet, Pressable, } from "react-native"


export default function FavouriteItem({
    title,
    reason,
    handleRemoveFavourites,
    id,
}) {
    return (
        <View style={styles.favouriteItemContainer}>
            <Pressable onPress={() => handleRemoveFavourites(id)}>
                <Text style={styles.text}>{title}</Text>
                <Text style={styles.text}>{reason}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    favouriteItemContainer: {
        borderWidth: 1,
        padding: 10,
        backgroundColor: "#0f0782",
        marginBottom: 10,
    },
    text: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
        paddingBottom: 10,
    },
})