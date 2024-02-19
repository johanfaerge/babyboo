import React from "react";
import styles from "./OrderModal.module.css"
import { IOrder } from "../../models/IOrder";



interface IOrderModalProps {
    order: IOrder;
    setShowModal: (show: boolean) => void
}

const OrderModal: React.FunctionComponent<IOrderModalProps> = (props: React.PropsWithChildren<IOrderModalProps>) => {


    return (
        <div className={styles.background} onClick={() => props.setShowModal(false)}>
            <div className={styles.modal} onClick={e => e.stopPropagation()}>
                <div className={styles.ordersHeader}>
                    <p>{props.order.date}</p>
                </div>
                <div className={styles.orderProducts}>
                    {props.order.products.map((product) => {
                        return <div className={styles.productInfo}>
                            <p>ID: {product.productID}</p>
                            <p>Mængde: {product.amount}</p>
                            <p>Rabat: {product.discount}</p>
                            <p>Pris: {product.price}</p>
                        </div>
                    })}
                </div>
            </div>
        </div>
    );
}

export default OrderModal;
