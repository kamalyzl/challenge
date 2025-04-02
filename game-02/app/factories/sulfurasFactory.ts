import { Product } from "../products/product";
import { Sulfuras } from "../products/sulfuras";
import { ProductFactory } from "./productFactory";

export class SulfurasFactory extends ProductFactory {
    createProduct(name: string, sellIn: number, quality: number): Product {
        return new Sulfuras(name, sellIn, quality);
    }
}
