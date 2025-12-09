import { type ShopifyProductFieldUnion } from '../enums';
import { getProductFieldHTML } from '../utils';
import { ShopifyContextBlock } from './ShopifyContextBlock';

type ProductFieldProps = {
  field: ShopifyProductFieldUnion;
  handle: string;
};

export function ProductField({ field, handle }: ProductFieldProps) {
  const shopifyHtml = getProductFieldHTML(field);

  if (!shopifyHtml) {
    return null;
  }

  return <ShopifyContextBlock type="product" handle={handle} templateHTML={shopifyHtml} />;
}
