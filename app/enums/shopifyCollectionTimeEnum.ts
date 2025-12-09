export enum ShopifyCollectionTimesEnum {
  EarlyMorning = 'early-morning',
  Morning = 'morning',
  Brunch = 'brunch',
  Lunch = 'lunch',
  EarlyAfternoon = 'early-afternoon',
  Afternoon = 'afternoon',
  EarlyEvening = 'early-evening',
  Evening = 'evening',
  Night = 'night',
  LateNight = 'late-night',
  AfterHours = 'after-hours',
}

export const SHOPIFY_COLLECTION_TIMES = Object.values(ShopifyCollectionTimesEnum) as readonly string[];
export type ShopifyCollectionTimesUnion = (typeof SHOPIFY_COLLECTION_TIMES)[number];