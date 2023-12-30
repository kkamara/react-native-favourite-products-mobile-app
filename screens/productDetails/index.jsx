import { View, Text, ActivityIndicator, } from "react-native"
import { useRoute, } from "@react-navigation/native"
import { useEffect, useState, } from "react"
import ProductDetailsItem from "../../components/productDetailsItem"

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

    if (loading) {
        return (
            <ActivityIndicator size="large" color="red" />
        )
    }

    console.log(productDetailsData)

    return (
        <View>
            <ProductDetailsItem productDetailsData={productDetailsData} />
        </View>
    )
}