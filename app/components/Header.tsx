import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { SHOPIFY_COLLECTION_TIMES, ShopifyCollectionTimesUnion } from '@app/enums';

type HeaderProps = {
  time: ShopifyCollectionTimesUnion;
  setTime: (value: ShopifyCollectionTimesUnion) => void;
};

function labelFromSlug(slug: string) {
  return slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

export function Header({ time, setTime }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center gap-2 border-b bg-white/80 backdrop-blur px-4 dark:bg-black/80">
      <Select value={time} onValueChange={(value) => setTime(value as ShopifyCollectionTimesUnion)}>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Time Of Day" />
        </SelectTrigger>
        <SelectContent>
          {SHOPIFY_COLLECTION_TIMES.map((slug) => (
            <SelectItem key={slug} value={slug}>
              {labelFromSlug(slug)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </header>
  );
}
