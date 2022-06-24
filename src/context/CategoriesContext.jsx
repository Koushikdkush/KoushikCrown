import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.jsx";
import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.jsx";
export const CategoriesContext = createContext({
    categoriesMap: {},

})

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setcategoriesMap] = useState([])

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments()
            // console.log(categoryMap)
            setcategoriesMap(categoryMap)
        }
        getCategoriesMap()
    }, [])


    const value = { categoriesMap }
    return (
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
}