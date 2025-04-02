import { AgedBrieFactory } from "./factories/agedBrieFactory";
import { BackstagePassFactory } from "./factories/backstagePassFactory";
import { StandardProductFactory } from "./factories/standardProductFactory";
import { SulfurasFactory } from "./factories/sulfurasFactory";
import { AgedBrie } from "./products/agedBrie";
import { BackstagePass } from "./products/backstagePass";
import { Product } from "./products/product";

export class GildedRose {
    items: Array<Product>;
    factories: { [key: string]: any };

    constructor(items = [] as Array<Product>) {
        this.items = items;
        this.factories = {
            "Aged Brie": new AgedBrieFactory(),
            "Backstage passes to a TAFKAL80ETC concert": new BackstagePassFactory(),
            "Sulfuras, Hand of Ragnaros": new SulfurasFactory(),
            "default": new StandardProductFactory()
        }
    }

    updateQuality() {
        for (let item of this.items) {
            item.updateSellIn();
            item.updateQuality();

            if (item.sellIn < 0) {
                this.handleExpiredItem(item);
            }
        }

        console.log(this.items);
        return this.items;
    }


    private handleExpiredItem(item: Product) {
        if (item instanceof AgedBrie) {
            this.updateQuality();
        } else if (item instanceof BackstagePass) {
            item.quality = 0;
        } else {
            this.updateQuality();
        }
    }
}
