import { ShopifyProductFieldEnum } from '@app/enums';

/**
 * Helper: returns HTML string for a Shopify product field to be used inside a <template>.
 * Use the returned string with ShopifyContextBlock.templateHTML.
 *
 * Notes:
 * - Use product.featuredMedia for shopify-media (expects Media), not variant.image (Image).
 * - Pass className to style the element with Tailwind/shadcn classes.
 */
export function getProductFieldHTML(
  field: ShopifyProductFieldEnum,
): string | null {

  switch (field) {
    case ShopifyProductFieldEnum.Title: {
      return `<shopify-data query="product.title"></shopify-data>`;
    }
    case ShopifyProductFieldEnum.Description: {
      return `<shopify-data query="product.description"></shopify-data>`;
    }
    case ShopifyProductFieldEnum.Price: {
      return `<shopify-money query="product.selectedOrFirstAvailableVariant.price"></shopify-money>`;
    }
    case ShopifyProductFieldEnum.Image: {
      return `<shopify-media query="product.selectedOrFirstAvailableVariant.image"></shopify-media>`;
    }
    default:
      return null;
  }
}