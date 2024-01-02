import { View, Text, StyleSheet, } from "react-native"


export default function FavouriteItem({
    title,
    reason,
}) {
    return (
        <View style={styles.favouriteItemContainer}>
            <Text style={styles.text}>{title}</Text>
            <Text style={styles.text}>{reason}</Text>
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