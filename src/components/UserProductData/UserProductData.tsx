import React from "react";
import LatestOrders from "./LatestOrders/LatestOrders";
import OrderList from "./OrderList/OrderList";
import styles from "./UserProductData.module.css"
import { IBeer } from "../../models/IBeer";
import { ApiService } from "../../services/ApiService";
import FavoriteProducts from "./FavoriteProducts/FavoriteProducts";
import { IOrderItem } from "../../models/IOrder";



interface IUserProductDataProps {

}

const UserProductData: React.FunctionComponent<IUserProductDataProps> = (props: React.PropsWithChildren) => {
    const [beers, setBeers] = React.useState<IBeer[]>([]);

    const [favoriteProductIDs, setFavoriteProductIDs] = React.useState<number[]>([]);


    React.useEffect(() => {
        getBeers();
    }, [])


    async function getBeers(): Promise<void> {
        const items = await ApiService.getBeers();
        setBeers(items);
    }


    function toggleFavorite(productID: number) {
        if (favoriteProductIDs.indexOf(productID) === -1) {
            let newList = [...favoriteProductIDs];
            newList.push(productID);
            setFavoriteProductIDs(newList);
        } else {
            let newList = [...favoriteProductIDs].filter(id => id !== productID);
            setFavoriteProductIDs(newList);
        }
    }



    return (
        <>
            <div className={styles.modulesContainer}>
                <OrderList beers={beers} favoriteProductIDs={favoriteProductIDs} toggleFavorite={toggleFavorite} />
                <LatestOrders />
                <FavoriteProducts products={beers} favoriteProductIDs={favoriteProductIDs} setFavoriteProductIDs={setFavoriteProductIDs}/>
            </div>
        </>
    );
}

export default UserProductData;