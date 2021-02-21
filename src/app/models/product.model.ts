export interface Product{
    id: number,
    name: string,
    primaryCat: string,
    secondaryCat: string,
    price: number,
    sale_price: number,
    sale: boolean,
    new: boolean,
    trend: boolean,
    description: string,
    text_id: string,
    imageUrl: string
}

export interface ProductState {
    products: Product[];
    loaded: boolean;
    loading: boolean;
}