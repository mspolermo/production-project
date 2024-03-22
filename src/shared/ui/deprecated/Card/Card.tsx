import React, { HTMLAttributes, ReactNode, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

export enum CardTheme {
    NORMAL = 'normal',
    OUTLINED = 'outlined',
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    theme?: CardTheme;
    max?: boolean;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */

/**
 * Карточка
 * @param className - проброс класса сверху
 * @param children - Содержимое карточки
 * @param theme - Тема карточки. Отвечает за визуал
 * @param max - Флаг, делающий карту максимальной ширины
*/

export const Card = memo((props: CardProps) => {
    const {
        className,
        children,
        theme = CardTheme.NORMAL,
        max,
        ...otherProps
    } = props;
    return (
        <div
            className={classNames(cls.Card, { [cls.max]: max }, [
                className,
                cls[theme],
            ])}
            {...otherProps}
        >
            {children}
        </div>
    );
});
