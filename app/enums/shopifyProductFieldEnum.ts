export enum ShopifyProductFieldEnum {
  Title = 'title',
  Description = 'description',
  Price = 'price',
  Image = 'image',
}

export type ShopifyProductFieldUnion =
  | ShopifyProductFieldEnum.Title
  | ShopifyProductFieldEnum.Description
  | ShopifyProductFieldEnum.Price
  | ShopifyProductFieldEnum.Image;