import { Product } from "../products/product";

export abstract class ProductFactory {
    abstract createProduct(name: string, sellIn: number, quality: number): Product;
}
