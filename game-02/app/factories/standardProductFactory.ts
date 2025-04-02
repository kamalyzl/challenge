import { Product } from "../products/product";
import { StandardProduct } from "../products/standardProduct";
import { ProductFactory } from "./productFactory";

 

export class StandardProductFactory extends ProductFactory {
  createProduct(name: string, sellIn: number, quality: number): Product {
    return new StandardProduct(name, sellIn, quality);
  }
}
