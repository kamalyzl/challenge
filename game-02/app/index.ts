import { GildedRose } from "./gilded-rose";
import { AgedBrie } from "./products/agedBrie";
import { BackstagePass } from "./products/backstagePass";
import { StandardProduct } from "./products/standardProduct";
import { Sulfuras } from "./products/sulfuras";

const items = [
    new AgedBrie("Aged Brie", 200, 20),
    new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 9, 9),
    new Sulfuras("Sulfuras, Hand of Ragnaros", 200, 80),
    new StandardProduct("standard 1", 10, 10),
    new StandardProduct("standard 2", 9, 7),
    new StandardProduct("standard 3", 3, 1),
];

const gildedRose = new GildedRose(items);
gildedRose.updateQuality();
