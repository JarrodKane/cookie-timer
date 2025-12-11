'use client';

import {
  ShopifyCollectionTimesEnum,
  ShopifyCollectionTimesUnion,
} from '@app/enums';
import { useState } from 'react';

export function useTime() {

  // Todo: move into helper
  function getTimeSlotForDate(date: Date): ShopifyCollectionTimesEnum {
    const hour = date.getHours();

    if (hour >= 4 && hour < 6) return ShopifyCollectionTimesEnum.EarlyMorning;
    if (hour >= 6 && hour < 10) return ShopifyCollectionTimesEnum.Morning;
    if (hour >= 10 && hour < 12) return ShopifyCollectionTimesEnum.Brunch;
    if (hour >= 12 && hour < 14) return ShopifyCollectionTimesEnum.Lunch;
    if (hour >= 14 && hour < 16) return ShopifyCollectionTimesEnum.EarlyAfternoon;
    if (hour >= 16 && hour < 18) return ShopifyCollectionTimesEnum.Afternoon;
    if (hour >= 18 && hour < 20) return ShopifyCollectionTimesEnum.EarlyEvening;
    if (hour >= 20 && hour < 22) return ShopifyCollectionTimesEnum.Evening;
    if (hour >= 22 && hour < 24) return ShopifyCollectionTimesEnum.Night;
    if (hour >= 0 && hour < 2) return ShopifyCollectionTimesEnum.LateNight;

    return ShopifyCollectionTimesEnum.AfterHours; // 2–4
  }

  const [time, setTime] = useState<ShopifyCollectionTimesUnion>(() =>
    getTimeSlotForDate(new Date())
  );



  return { time, setTime };
}