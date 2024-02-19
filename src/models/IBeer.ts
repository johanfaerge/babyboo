


export interface IBeer {
    id: number,
    name: string,
    tagline: string,
	firstBrewed: string,
    description: string,
	imageUrl: string,
	volume: { value: number, unit: string },
	ingredients: { malt: IMalt[], hops: IHops[] }
}


interface IMalt {
    name: string,
    amount: {value: number, unit: string}
}

interface IHops {
    name: string,
    amount: {value: number, unit: string}
    add: string,
    attribute: string
}
