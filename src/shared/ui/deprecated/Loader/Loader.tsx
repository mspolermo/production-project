import React from 'react';
import './Loader.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

interface LoaderProps {
    className?: string;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */

/**
 * Анимированный лоадер
 * @param className - проброс класса сверху
*/

export const Loader = ({ className }: LoaderProps) => (
    <div className={classNames('lds-ellipsis', {}, [className])}>
        <div />
        <div />
        <div />
        <div />
    </div>
);
