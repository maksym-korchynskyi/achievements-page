'use client';

import clsx from 'clsx';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import arrowDown from '@/assets/icons/icon-arrow-down.svg';

import styles from './Dropdown.module.scss';
import Image from 'next/image';

type Props = {
  defaultValue: number;
  options: [null | number, string][];
  onChange: (value: null | number) => void;
};

export const Dropdown: React.FC<Props> = ({
  options,
  defaultValue,
  onChange,
}) => {
  const [isOpened, setIsOpened] = useState(false);
  const [selected, setSelected] = useState(options[defaultValue][1]);

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpened) {
      return;
    }

    const handleDocumentClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpened(false);
      }
    };

    const handleDocumentTouch = (event: TouchEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpened(false);
      }
    };

    document.addEventListener('click', handleDocumentClick);
    document.addEventListener('touchstart', handleDocumentTouch);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
      document.removeEventListener('touchstart', handleDocumentTouch);
    };
  }, [isOpened]);

  const handleOptionChanged = useCallback(
    (value: null | number, text: string) => {
      setSelected(text);
      onChange(value);
    },
    [onChange],
  );

  return (
    <div
      ref={dropdownRef}
      onClick={() => setIsOpened(prev => !prev)}
      className={clsx(styles.dropdown, {
        [styles['dropdown--opened']]: isOpened,
      })}
    >
      <div className={styles['dropdown__selected-option']}>{selected}</div>

      <div className={styles['dropdown__arrow']}>
        <Image {...arrowDown} alt="arrow-down" />
      </div>

      <div className={styles.dropdown__options}>
        {options.map(([value, text]) => (
          <div
            key={value}
            onClick={() => handleOptionChanged(value, text)}
            className={styles.dropdown__option}
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};
