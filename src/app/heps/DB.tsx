//firabase
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../services/firebaseConfig";

//react
import { useEffect, useState } from "react";

//interface
import { Banner, Product, Store } from "./tsx";

const DB = () => {

    const [firestoreProducts, setFirestoreProducts] = useState<Product[]>([])
    const [firestoreBanners, setFirestoreBanner] = useState<Banner[]>([])
    const [firestoreStore, setFirestoreStore] = useState<Store[]>([])

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const handleFirestore = async () => {
            try {
                const queryProducts = await getDocs(collection(db, `products`));
                const queryBanner = await getDocs(collection(db, `banners`));
                const queryStore = await getDocs(collection(db, `store`));

                const allProducts: any = queryProducts.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                const allBanner: any = queryBanner.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                const allStore: any = queryStore.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

                setFirestoreProducts(allProducts)
                setFirestoreBanner(allBanner)
                setFirestoreStore(allStore)

                setIsLoading(false)
            } catch (error) {
                console.error('Error fetching cities:', error);
            }
        }
        handleFirestore()
    }, [])

    return {
        firestoreProducts, firestoreBanners, firestoreStore, isLoading, setIsLoading
    }
}

export default DB