import React from "react";
import styles from "./FavoriteProducts.module.css"
import { IBeer } from "../../../models/IBeer";



interface IFavoriteProductsProps {
    favoriteProductIDs: number[];
    setFavoriteProductIDs: React.Dispatch<React.SetStateAction<number[]>>
    products: IBeer[];
}

const FavoriteProducts: React.FunctionComponent<IFavoriteProductsProps> = (props: React.PropsWithChildren<IFavoriteProductsProps>) => {
    const [editing, setEditing] = React.useState<boolean>(false);

    function getProductByID(id: number) {
        for (let i = 0; i < props.products.length; i++) {
            if (props.products[i].id === id) {
                return props.products[i]
            }
        }
        return null;
    }

    function toggleEditing() {
        setEditing(!editing);
    }

    function addToOrderslist(id: number) {
        // do nothing.
        // For this project, the orderslist is only used to display all the beers from the api.
        // if i worked with orders, this function should add another beer of this type to the current order.
    }

    function removeFavorite(productID: number) {
        props.setFavoriteProductIDs(prev => prev.filter(id => id !== productID))
    }

    return (
        <div className={styles.favoriteProductsContainer}>
            <div className={styles.ordersHeader}>
                <p>FAVORITPRODUKTER</p>
                <p onClick={toggleEditing}>{editing ? "Afbryd" : "Rediger"}</p>
            </div>
            <div className={styles.favoriteProducts}>
                {props.favoriteProductIDs?.map((productID) => {
                    let product = getProductByID(productID);

                    return <div className={styles.listItem}>
                        <div className={styles.imageContainer}>
                            <img src={product?.imageUrl} alt="Image not found" />
                        </div>
                        <div>
                            <p>{product?.name}</p>
                            <p>{product?.firstBrewed}</p>
                        </div>
                        <div>
                            <div className={styles.editBtn} style={editing ? {backgroundColor: "darkred"} : {}} onClick={editing ? () => removeFavorite(productID) : () => addToOrderslist(productID)}>
                                <p>{editing ? "-" : "Add"}</p>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    );
}

export default FavoriteProducts;