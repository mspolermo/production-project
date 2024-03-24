import { HTMLAttributes, memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

export type CardVariant = 'normal' | 'outlined' | 'light';
export type CardPadding = '0' | '8' | '16' | '24';
export type CardBorder = 'round' | 'normalBorder' | 'partial';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    variant?: CardVariant;
    max?: boolean;
    padding?: CardPadding;
    border?: CardBorder;
    // todo удалить, дубликат max
    fullWidth?: boolean;
    fullHeight?: boolean;
}

/**
 * Карточка
 * @param className - проброс класса сверху
 * @param children - Содержимое карточки
 * @param variant - Тема карточки. Отвечает за визуал
 * @param max - Флаг, делающий карту максимальной ширины
 * @param padding - Размер внутренних отступов
 * @param border - Округление углов
 * @param fullWidth - Флаг, делающий карту максимальной ширины
 * @param fullHeight - Флаг, делающий карту максимальной высоты
*/

const mapPaddingToClass: Record<CardPadding, string> = {
    '0': 'gap_0',
    '8': 'gap_8',
    '16': 'gap_16',
    '24': 'gap_24',
};

export const Card = memo((props: CardProps) => {
    const {
        className,
        children,
        variant = 'normal',
        max,
        padding = '8',
        border = 'normalBorder',
        fullWidth,
        fullHeight,
        ...otherProps
    } = props;

    const paddingClass = mapPaddingToClass[padding];

    return (
        <div
            className={classNames(
                cls.Card,
                {
                    [cls.max]: max,
                    [cls.fullHeight]: fullHeight,
                    [cls.fullWidth]: fullWidth,
                },
                [className, cls[variant], cls[paddingClass], cls[border]],
            )}
            {...otherProps}
        >
            {children}
        </div>
    );
});
