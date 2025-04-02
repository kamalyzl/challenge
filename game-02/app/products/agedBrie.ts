import { Product } from "./product";

export class AgedBrie extends Product {
  updateQuality(): void {
    if (this.quality < 50) {
      this.quality += 1;
    }
  }
}
