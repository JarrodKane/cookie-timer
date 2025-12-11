'use client';

import { Header, ProductList } from '@app/components';
import { useTime } from '../hooks';

// Broke this down into a client component in-case we wanted to SSR other details in the home page
// Right now it's not really needed since there's not much that we SSR
export function HomeClient() {
  const { time, setTime } = useTime();

  return (
    <>
      <Header time={time} setTime={setTime} />
      <main className="mx-auto max-w-3xl pt-24 pb-32 px-6 sm:px-16">
        <h1>Shop</h1>
        <div className="mt-8 space-y-10">
          <ProductList collection={time} />
        </div>
      </main>
    </>
  );
}
