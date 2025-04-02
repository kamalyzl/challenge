import { AgedBrie } from "../products/agedBrie";
import { Product } from "../products/product";
import { ProductFactory } from "./productFactory";

export class AgedBrieFactory extends ProductFactory {
  createProduct(name: string, sellIn: number, quality: number): Product {
    return new AgedBrie(name, sellIn, quality);
  }
}
