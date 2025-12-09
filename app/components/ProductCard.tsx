'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ProductField } from '@app/components';
import { ShopifyProductFieldEnum } from '@app/enums';

export function ProductCard({ handle }: { handle: string }) {
  return (
    <Card className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 space-y-3">
      <CardHeader className="p-0">
        <CardTitle className="text-lg font-semibold">
          <ProductField field={ShopifyProductFieldEnum.Title} handle={handle} />
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0 space-y-3">
        <div className="aspect-square w-full overflow-hidden rounded-md bg-muted">
          <ProductField field={ShopifyProductFieldEnum.Image} handle={handle} />
        </div>
        <div className="text-sm text-muted-foreground">
          <ProductField field={ShopifyProductFieldEnum.Price} handle={handle} />
        </div>
        <div className="text-sm text-muted-foreground">
          <ProductField field={ShopifyProductFieldEnum.Description} handle={handle} />
        </div>
      </CardContent>
      <CardFooter className="p-0 pt-3">
        <Button
          className="inline-flex items-center justify-center rounded-md bg-primary px-3 py-2 text-primary-foreground hover:bg-primary/90 transition"
          variant="default"
        >
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  );
}
