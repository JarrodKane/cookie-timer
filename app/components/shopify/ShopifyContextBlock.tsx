'use client';

import { useEffect, useRef } from 'react';

type ShopifyContextType = 'product' | 'collection' | 'cart';

interface ShopifyContextBlockProps {
  handle?: string;
  templateHTML: string;
  type: ShopifyContextType;
}

// Client-only insertion; Shopify components will manage their own Shadow DOM.
// Client-only insertion of <shopify-context> + <template>
// - Avoid SSR hydration mismatches
// - Keep <template> content intact
// - Shopify Web Components will attach/manage their own Shadow DOM after registration.
export function ShopifyContextBlock({ type, handle, templateHTML }: ShopifyContextBlockProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.innerHTML = `
      <shopify-context type="${type}" ${handle ? `handle="${handle}"` : ''}>
        <template>
          ${templateHTML}
        </template>
      </shopify-context>
    `;
  }, [type, handle, templateHTML]);

  return <div ref={ref} suppressHydrationWarning />;
}
