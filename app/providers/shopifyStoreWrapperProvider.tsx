'use client';

import { ReactNode } from 'react';

export function ShopifyStoreWrapperProvider({ children }: { children: ReactNode }) {
  return (
    <shopify-store
      store-domain={process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN}
      country="US"
      language="en"
      public-access-token={process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN}
    >
      {children}
    </shopify-store>
  );
}
