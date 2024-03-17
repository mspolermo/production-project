/* eslint-disable no-restricted-globals */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button as ButtonDepricated} from '@/shared/ui/deprecated/Button';
import cls from './ErrorPage.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text as TextDepricated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { Button } from '@/shared/ui/redesigned/Button';

interface ErrorPageProps {
    className?: string;
}

export const ErrorPage = ({ className }: ErrorPageProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        location.reload();
    };

    return (
        <div className={classNames(cls.ErrorPage, {}, [className])}>
            <ToggleFeatures
                feature='isAppRedesigned'
                on={
                    <>
                        <Text text={t('Произошла непредвиденная ошибка')} />
                        <Button onClick={reloadPage}>{t('Обновить страницу')}</Button>
                    </>
                }
                off={
                    <>
                        <TextDepricated text={t('Произошла непредвиденная ошибка')} />
                        <ButtonDepricated onClick={reloadPage}>{t('Обновить страницу')}</ButtonDepricated>
                    </>
                }
            />

        </div>
    );
};
