//firabase
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../services/firebaseConfig";

//react
import { useEffect, useState } from "react";

//interface
import { Product, Store } from "./tsx";

const DB = () => {

    const [firestoreProducts, setFirestoreProducts] = useState<Product[]>([])
    const [firestoreStore, setFirestoreStore] = useState<Store[]>([])

    useEffect(() => {
        const handleFirestore = async () => {
            try {
                const queryProducts = await getDocs(collection(db, `products`));
                const queryStore = await getDocs(collection(db, `store`));

                const allProducts: any = queryProducts.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                const allStore: any = queryStore.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

                setFirestoreProducts(allProducts)
                setFirestoreStore(allStore)

            } catch (error) {
                console.error('Error fetching cities:', error);
            }
        }
        handleFirestore()
    }, [])

    return {
        firestoreProducts, firestoreStore
    }
}

export default DB