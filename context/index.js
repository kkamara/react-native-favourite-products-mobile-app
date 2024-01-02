import { createContext, useEffect, useState, } from "react"

export const Context = createContext(null)

const ProductContext = ({children}) => {
    const [products, setProducts] = useState([])

    const [loading, setLoading] = useState(false)

    const [favouriteItems, setFavouriteItems] = useState([])

    const addToFavourites = (productId, reason) => {
        let copyFavouriteItems = [...favouriteItems]
        const index = copyFavouriteItems.findIndex(
            item => item.id === productId
        )
        if (index === -1) {
            const getCurrentProductItem = products.find(
                item => item.id === productId
            )
            copyFavouriteItems.push({
                title: getCurrentProductItem.title,
                id: productId,
                reason,
            })
        } else {
            copyFavouriteItems[index] = {
                ...copyFavouriteItems[index],
                reason,
            }
        }
        setFavouriteItems(copyFavouriteItems)
    }

    useEffect(() => {
        setLoading(true)
        async function getProductsFromApi() {
            const apiRes = await fetch("https://dummyjson.com/products")
            const finalResult = await apiRes.json()
            if (finalResult) {
                // setTimeout(() => {
                //     setLoading(false)
                // }, 2000)
                setProducts(finalResult.products)
                setLoading(false)
            }
        }

        getProductsFromApi()
    }, [])

    const handleRemoveFavourites = (currentId) => {
        let copyFavouriteItems = [...favouriteItems]
        copyFavouriteItems = copyFavouriteItems.filter(
            (item) => item.id !== currentId
        )
        setFavouriteItems(copyFavouriteItems)
    }

    return <Context.Provider value={{ 
        products,
        loading,
        addToFavourites,
        favouriteItems,
        handleRemoveFavourites,
    }}>
        {children}
    </Context.Provider>
}

export default ProductContext