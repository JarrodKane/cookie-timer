import 'react';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'shopify-store': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'store-domain'?: string;
        'country'?: string;
        'language'?: string;
        'access-token'?: string;
      };
      'shopify-context': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        type?: 'product' | 'collection' | 'cart';
        handle?: string;
      };
      'shopify-data': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        query?: string;
      };
      'shopify-product': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        handle?: string;
      };
      'shopify-product-card': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'shopify-product-image': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'shopify-product-title': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'shopify-product-price': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'shopify-collection-products': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'shopify-cart': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'shopify-add-to-cart-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}