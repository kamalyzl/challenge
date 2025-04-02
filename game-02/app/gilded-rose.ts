export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    private sulfuras: string = "Sulfuras, Hand of Ragnaros";
    private agedBrie: string = "Aged Brie";
    private backstage: string = "Backstage passes to a TAFKAL80ETC concert";

    private maxQuality: number = 50;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        for (let item of this.items) {
            this.updateProductSellIn(item);
            this.UpdateProductQuality(item);

            if (item.sellIn < 0) {
                this.handleExpiredItem(item);
            }
        }

        console.log(this.items);
        return this.items;
    }

    private UpdateProductQuality(item: Item) {
        if (!this.currentProducts(item)) {
            this.decreaseQuantity(item);
        } else if (item.name === this.backstage) {
            this.handleBackstagePasses(item)
        } else {
            this.incrementQuality(item);
        }
    }

    private handleBackstagePasses(item: Item) {
        this.incrementQuality(item);

        if (item.sellIn < 11) {
            this.incrementQuality(item);
        }
        if (item.sellIn < 6) {
            this.incrementQuality(item);
        }
    }

    private incrementQuality(item: Item) {
        if (item.quality < this.maxQuality) {
            item.quality += 1
        }
    }

    private decreaseQuantity(item: Item) {
        if (item.quality > 0 && item.name !== this.sulfuras) {
            item.quality -= 1;
        }
    }

    private currentProducts(item: Item) {
        return item.name == this.agedBrie || item.name == this.backstage || item.name == this.sulfuras
    }

    private updateProductSellIn(item: Item) {
        if (item.name !== this.sulfuras) {
            item.sellIn -= 1;
        }
    }

    private handleExpiredItem(item: Item) {
        if (item.name === this.agedBrie) {
            this.incrementQuality(item);
        } else if (item.name === this.backstage) {
            item.quality = 0;
        } else {
            this.decreaseQuantity(item);
        }
    }
}

var objs = new GildedRose([{ name: "Aged Brie", sellIn: 200, quality: 20 },
{ name: "Aged Brie", sellIn: 9, quality: 9 },
{ name: "Sulfuras, Hand of Ragnaros", sellIn: 200, quality: 80 },
{ name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 200, quality: 20 },
{ name: "RANDOM", sellIn: 200, quality: 40 },
{ name: "RANDOM 2", sellIn: 9, quality: 9 },
{ name: "RANDOM 3", sellIn: 20, quality: 0 }]);

objs.updateQuality();
