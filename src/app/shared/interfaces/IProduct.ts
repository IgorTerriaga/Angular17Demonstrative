export interface Product {
    id: string;
    title: string;
}
export type ProductPayload = Omit<Product, 'id'>;