
export abstract class Product {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name: string, sellIn: number, quality: number) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }

    abstract updateQuality(): void;

    updateSellIn(): void {
        if (this.name !== "Sulfuras, Hand of Ragnaros") {
            this.sellIn -= 1;
        }
    }
}

/**Abstraemos información compartida y métodos que los productos deben implementar */
