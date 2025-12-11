'use client';

import { Card } from '@/components/ui/card';
import { ShopifyCollectionTimesUnion } from '@app/enums';
import { ShopifyContextBlock } from './ShopifyContextBlock';

interface ShopifyContextListProps {
  collection: ShopifyCollectionTimesUnion;
  templateHTML: string;
  first?: number;
}

export function ShopifyContextList({ first, collection, templateHTML }: ShopifyContextListProps) {
  const html = `
    <shopify-list-context type="product" query="collection.products"  first="${first}">
      <template>
        ${templateHTML}
      </template>
    </shopify-list-context>
  `;

  return (
    <Card className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ShopifyContextBlock type="collection" handle={collection} templateHTML={html} />
      </div>
    </Card>
  );
}
