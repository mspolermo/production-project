import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Overlay.module.scss';

/**
 * Компонент-подложка-задний фон для модального окна
 * @param className - проброс класса сверху
 * @param onClick - функция для закрытия
*/

interface OverlayProps {
    className?: string;
    onClick?: () => void;
}

export const Overlay = memo((props: OverlayProps) => {
    const { className, onClick } = props;

    return (
        <div
            onClick={onClick}
            className={classNames(cls.Overlay, {}, [className])}
        />
    );
});
