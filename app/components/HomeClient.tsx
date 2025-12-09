'use client';

import { Header, ProductCard, ProductList } from '@app/components';
import { ShopifyCollectionTimesEnum, ShopifyCollectionTimesUnion } from '@app/enums';
import Image from 'next/image';
import { useState } from 'react';

// Broke this down into a client component in-case we wanted to SSR other details in the home page
// Right now it's not really needed since there's not much that we SSR
export function HomeClient() {
  const [time, setTime] = useState<ShopifyCollectionTimesUnion>(ShopifyCollectionTimesEnum.AfterHours);

  return (
    <>
      <Header time={time} setTime={setTime} />
      <main className="mx-auto max-w-3xl pt-24 pb-32 px-6 sm:px-16">
        <Image className="dark:invert" src="/next.svg" alt="Next.js logo" width={100} height={20} priority />
        <shopify-context type={'product'} handle="wireless-earbuds">
          {/* Problem here is I always get shopify-context: the context must contain a template element */}
          <shopify-data query="product.title"></shopify-data>
        </shopify-context>
        <div className="mt-8 space-y-10">
          <ProductCard handle="wireless-earbuds" />
          <ProductList collection={ShopifyCollectionTimesEnum.AfterHours} />
        </div>
      </main>
    </>
  );
}
