'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ProductField } from '@app/components';
import { ShopifyProductFieldEnum } from '@app/enums';

export function ProductCard({ handle }: { handle: string }) {
  return (
    <Card className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <CardHeader>
        <CardTitle>
          <ProductField field={ShopifyProductFieldEnum.Title} handle={handle} />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ProductField field={ShopifyProductFieldEnum.Image} handle={handle} />
        <ProductField field={ShopifyProductFieldEnum.Description} handle={handle} />
      </CardContent>
      <CardFooter className="flex justify-end">
        {/* TODO: Add to cart function */}
        <Button variant="outline">Add to Cart</Button>
      </CardFooter>
    </Card>
  );
}
