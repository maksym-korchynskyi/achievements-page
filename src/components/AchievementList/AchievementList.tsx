'use client';

import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

import styles from './AchievementList.module.scss';
import { Achievement } from '@/types/Achievement';
import { AchievementCard } from '../AchievementCard';

interface Props {
  achievements: Achievement[];
}

export const AchievementList: React.FC<Props> = ({ achievements }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    slidesToScroll: 'auto',
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [slideCount, setSlideCount] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const updateDots = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setSlideCount(emblaApi.scrollSnapList().length);
    };

    emblaApi.on('select', updateDots);
    emblaApi.on('reInit', updateDots);
    updateDots();

    return () => {
      emblaApi.off('select', updateDots);
      emblaApi.off('reInit', updateDots);
    };
  }, [emblaApi]);

  return (
    <div className={styles['achievement-list-wrapper']}>
      <div className={styles['embla']} ref={emblaRef}>
        <div className={styles['embla__container']}>
          {achievements.map(achievement => (
            <div key={achievement.id} className={styles['embla__slide']}>
              <AchievementCard achievement={achievement} />
            </div>
          ))}
        </div>
      </div>

      {slideCount > 1 && (
        <div className={styles['embla__dots']}>
          {Array.from({ length: slideCount }).map((_, index) => (
            <button
              key={index}
              className={clsx(styles['embla__dot'], {
                [styles['embla__dot--selected']]: index === selectedIndex,
              })}
              onClick={() => emblaApi?.scrollTo(index)}
              type="button"
            />
          ))}
        </div>
      )}
    </div>
  );
};
