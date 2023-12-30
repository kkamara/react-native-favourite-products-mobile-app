import { View, Text, } from "react-native"
import { useRoute, useScrollToTop, } from "@react-navigation/native"
import { useEffect, useState } from "react"

export default function ProductDetails() {
    const route = useRoute()
    const productId = route.params.productId

    const [loading, setLoading] = useState(false)
    const [productDetailsData, setProductDetailsData] = useState([])

    useEffect(() => {
        setLoading(true)
        async function getDataFromApi() {
            const apiRes = await fetch(`https://dummyjson.com/products/${productId}`)
            const finalResult = await apiRes.json()

            if (finalResult) {
                setLoading(false)
                setProductDetailsData(finalResult)
            }
        }

        getDataFromApi()
    }, [])

    console.log(productDetailsData)

    return (
        <View>
            <Text>ProductDetails</Text>
        </View>
    )
}