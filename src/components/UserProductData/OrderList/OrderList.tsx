import React from "react";
import styles from "./OrderList.module.css";
import { IBeer } from "../../../models/IBeer";



interface IOrderListProps {
    beers: IBeer[];
    favoriteProductIDs: number[];
    toggleFavorite: (productID: number) => void;
}

const OrderList: React.FunctionComponent<IOrderListProps> = (props: React.PropsWithChildren<IOrderListProps>) => {
    const [showAll, setShowAll] = React.useState<boolean>(false);

    const totalLiters = React.useMemo(() => {
        let liters = 0;
        for (let i = 0; i < props.beers.length; i++) {
            liters += props.beers[i].volume.value;
        }
        return liters;
    }, [props.beers])


    function toggleShowAll() {
        setShowAll(!showAll);
    }

    return (
        <div className={styles.ordersListContainer}>
            <div>
                <p>BESTILLINGSLISTE</p>
            </div>
            <div className={styles.ordersList} style={showAll ? {} : { maxHeight: "260px", overflow: "hidden" }}>
                <div className={styles.ordersHeader}>
                    <p>{props.beers.length} Produkter</p>
                    <p>{totalLiters} Liter</p>
                </div>
                {props.beers?.map((beer, i) => {
                    return <div className={styles.listItem} style={i % 2 === 0 ? { backgroundColor: "white" } : {}}>
                        <div className={styles.imageContainer}>
                            <img draggable={false} src={beer.imageUrl} alt="Img not found"></img>
                            <div className={styles.favoriteBtn} onClick={() => props.toggleFavorite(beer.id)}>

                                {props.favoriteProductIDs?.indexOf(beer.id) === -1 &&
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181" /></svg>}
                                {props.favoriteProductIDs?.indexOf(beer.id) !== -1 &&
                                    <svg className={styles.favoriteItem} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27z" /></svg>
                                }

                            </div>
                        </div>
                        <div className={styles.productInfo}>
                            <p>{beer.name}</p>
                            <p>{beer.tagline}</p>
                        </div>
                        <div>
                            <p>{beer.firstBrewed}</p>
                        </div>
                        <div>
                            <p>{beer.volume.value}</p>
                        </div>
                        <div>
                            <p>{beer.volume.unit}</p>
                        </div>
                    </div>
                })}

                <div className={styles.showAllBtn} onClick={toggleShowAll}>
                    <p>{showAll ? "Skjul" : "Vis alle"}</p>
                </div>
            </div>
        </div>
    );
}

export default OrderList;