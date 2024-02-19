
import React from "react";
import styles from "./LatestOrders.module.css";
import { IOrder } from "../../../models/IOrder";
import { ApiService } from "../../../services/ApiService";
import OrderModal from "../../OrderModal/OrderModal";

interface ILatestOrdersProps {

}

const LatestOrders: React.FunctionComponent<ILatestOrdersProps> = (props: React.PropsWithChildren<ILatestOrdersProps>) => {
    const [orders, setOrders] = React.useState<IOrder[]>([])

    const [orderShown, setOrderShown] = React.useState<IOrder>(null);
    const [showModal, setShowModal] = React.useState<boolean>(false);

    React.useEffect(() => {
        getOrders();
    }, [])

    async function getOrders(): Promise<void> {
        const items = await ApiService.getLatestOrders();
        setOrders(items);
    }

    function showOrder(order: IOrder) {
        setOrderShown(order);
        setShowModal(true);
    }


    return (
        <>
            <div className={styles.latestOrdersContainer}>
                <div className={styles.ordersHeader}>
                    <p>SENESTE ORDRER</p>
                </div>
                <div className={styles.latestOrders}>
                    {orders?.map((order, i) => {
                        return <div className={styles.orderItem} style={i % 2 == 0 ? { backgroundColor: "white" } : {}}>
                            <p>{order.date}</p>
                            <p className={styles.orderId}>{order.id}</p>
                            <p className={styles.link} onClick={() => showOrder(order)}>Se ordre</p>
                            <p className={styles.link}>Genbestil</p>
                        </div>
                    })}


                </div>
            </div>

            {showModal &&
                <OrderModal order={orderShown} setShowModal={setShowModal} />
            }
        </>
    );
}

export default LatestOrders;