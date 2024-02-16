import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    Button as ButtonDepricated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button/Button';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button } from '@/shared/ui/redesigned/Button';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toogle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    const DepricatedLangSwitcher = () => {
        return (
            <ButtonDepricated
                className={classNames('', {}, [className])}
                theme={ButtonTheme.CLEAR}
                onClick={toogle}
            >
                {t(short ? 'Короткий язык' : 'Язык')}
            </ButtonDepricated>
        );
    };

    const RedesignedLangSwitcher = () => {
        return (
            <Button variant="clear" onClick={toogle}>
                {t(short ? 'Короткий язык' : 'Язык')}
            </Button>
        );
    };

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={<RedesignedLangSwitcher />}
            off={<DepricatedLangSwitcher />}
        />
    );
});
