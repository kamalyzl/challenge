import { Product } from "./product";

export class BackstagePass extends Product {
  updateQuality(): void {
    if (this.quality < 50) {
      this.quality += 1;
      if (this.sellIn < 11) {
        this.quality += 1;
      }
      if (this.sellIn < 6) {
        this.quality += 1;
      }
    }
  }
}
