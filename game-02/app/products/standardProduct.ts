import { Product } from "./product";

export class StandardProduct extends Product {
    updateQuality(): void {
        if (this.quality > 0) {
            this.quality -= 1;
        }
    }
}
