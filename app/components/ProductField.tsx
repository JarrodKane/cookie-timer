import { type ShopifyProductFieldUnion, ShopifyProductFieldEnum } from '../enums';
import { ShopifyContextBlock } from './ShopifyContextBlock';

type ProductFieldProps = {
  field: ShopifyProductFieldUnion;
  handle: string;
};

export function ProductField({ field, handle }: ProductFieldProps) {
  let shopifyHtml: string | null = null;
  switch (field) {
    case ShopifyProductFieldEnum.Title: {
      shopifyHtml = `<shopify-data query="product.title"></shopify-data>`;
      break;
    }
    case ShopifyProductFieldEnum.Description: {
      shopifyHtml = `<shopify-data query="product.description"></shopify-data>`;
      break;
    }
    case ShopifyProductFieldEnum.Price: {
      shopifyHtml = `<shopify-money query="product.selectedOrFirstAvailableVariant.price"></shopify-money>`;
      break;
    }
    case ShopifyProductFieldEnum.Image: {
      shopifyHtml = `<shopify-media query="product.selectedOrFirstAvailableVariant.image"></shopify-media>`;
      break;
    }
    default: {
      shopifyHtml = null;
    }
  }

  if (!shopifyHtml) {
    return null;
  }

  return <ShopifyContextBlock type="product" handle={handle} templateHTML={shopifyHtml} />;
}
