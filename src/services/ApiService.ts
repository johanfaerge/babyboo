
import { IBeer } from "../models/IBeer";
import { IOrder, IOrderItem } from "../models/IOrder";

export class ApiService {


    public static async getBeers(): Promise<IBeer[]> {
        // return [];
        const response = await fetch("https://api.punkapi.com/v2/beers");
        // const response = await fetch("https://api.punkapi.com/v2/beers?ids=1|2|3|4|5");
        const data: any[] = await response.json();

        const beers: IBeer[] = data.map(item => {
            return {
                id: item.id,
                name: item.name,
                tagline: item.tagline,
                firstBrewed: item.first_brewed,
                description: item.description,
                imageUrl: item.image_url,
                volume: item.volume,
                ingredients: item.ingredients
            } as IBeer
        })

        console.log(beers)

        return beers;
    }



    // A function to create some fictive orders.
    public static getLatestOrders(): IOrder[] {
        return [
            {
                id: 4134534,
                date: "14-02-2024",
                products: [
                    {
                        productID: 1,
                        amount: 2,
                        discount: 0,
                        price: 125
                    },
                    {
                        productID: 4,
                        amount: 5,
                        discount: 0,
                        price: 220
                    },
                ]
            },
            {
                id: 4134535,
                date: "17-02-2024",
                products: [
                    {
                        productID: 4,
                        amount: 3,
                        discount: 10,
                        price: 300
                    },
                    {
                        productID: 3,
                        amount: 1,
                        discount: 0,
                        price: 100
                    },
                ]
            },
        ];
    }

}