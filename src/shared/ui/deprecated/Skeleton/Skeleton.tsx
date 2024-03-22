import React, { CSSProperties, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
    className?: string;
    height?: string | number;
    width?: string | number;
    border?: string;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */

/**
 * Скелетон (для загрузок)
 * @param className - проброс класса сверху
 * @param height - высота
 * @param width - ширина
 * @param border - сглаживание углов
*/

export const Skeleton = memo((props: SkeletonProps) => {
    const { className, height, width, border } = props;

    const styles: CSSProperties = {
        width,
        height,
        borderRadius: border,
    };

    return (
        <div
            className={classNames(cls.Skeleton, {}, [className])}
            style={styles}
        />
    );
});
