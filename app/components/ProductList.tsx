'use client';

import { ShopifyCollectionTimesUnion, ShopifyProductFieldEnum } from '@app/enums';
import { getProductFieldHTML } from '../utils';
import { ShopifyContextList } from './shopify/ShopifyContextList';

export function ProductList({ collection }: { collection: ShopifyCollectionTimesUnion }) {
  const title = getProductFieldHTML(ShopifyProductFieldEnum.Title);
  const price = getProductFieldHTML(ShopifyProductFieldEnum.Price);
  const image = getProductFieldHTML(ShopifyProductFieldEnum.Image);

  const itemTemplate = `
    <article class="space-y-2">
      ${image ?? ''}
      ${title ?? ''}
      ${price ?? ''}
      <shopify-add-to-cart-button class="inline-flex items-center justify-center rounded-md bg-primary px-3 py-2 text-primary-foreground hover:bg-primary/90 transition">
        Add to cart
      </shopify-add-to-cart-button>
    </article>
  `;

  return (
    <div>
      {collection}
      <ShopifyContextList templateHTML={itemTemplate} collection={collection} first={12} />
    </div>
  );
}
