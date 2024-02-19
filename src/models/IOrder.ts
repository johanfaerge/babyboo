import { IBeer } from "./IBeer";



export interface IOrder {
    id: number,
    date: string;
    products: IOrderItem[];
}

export interface IOrderItem {
    productID: number,
    amount: number,
    price: number,
    discount: number
}