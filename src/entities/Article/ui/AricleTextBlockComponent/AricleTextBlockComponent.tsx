import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './AricleTextBlockComponent.module.scss';

interface AricleTextBlockComponentProps {
    className? : string;
}

export const AricleTextBlockComponent = ({ className }: AricleTextBlockComponentProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.AricleTextBlockComponent, {}, [className])}>

        </div>
    );
};
