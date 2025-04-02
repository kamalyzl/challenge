import { BackstagePass } from "../products/backstagePass";
import { Product } from "../products/product";
import { ProductFactory } from "./productFactory";

export class BackstagePassFactory extends ProductFactory {
    createProduct(name: string, sellIn: number, quality: number): Product {
        return new BackstagePass(name, sellIn, quality);
    }
}
