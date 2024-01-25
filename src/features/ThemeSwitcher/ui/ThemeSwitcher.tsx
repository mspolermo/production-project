import React, { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Theme } from '@/shared/const/theme';
import LightIcon from '@/shared/assets/icons/theme-light.svg';
import DarkIcon from '@/shared/assets/icons/theme-dark.svg';
import ThemeIcon from '@/shared/assets/icons/theme.svg';
import { Button, ButtonTheme } from '@/shared/ui/depricated/Button';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { saveJsonSettings } from '@/entities/User';
import { Icon as IconDepricated } from '@/shared/ui/depricated/Icon';
import { ToggleFeatures } from '@/shared/lib/features';
import { Icon } from '@/shared/ui/redesigned/Icon';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toogleTheme } = useTheme();
    const dispatch = useAppDispatch();

    const onToogleHandler = useCallback(() => {
        toogleTheme((newTheme) => {
            console.log(`Тема сменилась на ${newTheme}`);
            dispatch(saveJsonSettings({ theme: newTheme }));
        });
    }, [dispatch, toogleTheme]);

    const DepricatedThemeSwitcher = () => {
        return (
            <Button
                theme={ButtonTheme.CLEAR}
                className={classNames('', {}, [className])}
                onClick={onToogleHandler}
            >
                {theme === Theme.DARK ? (
                    <IconDepricated Svg={DarkIcon} width={40} height={40} />
                ) : (
                    <IconDepricated Svg={LightIcon} width={40} height={40} />
                )}
            </Button>
        );
    };

    const RedesignedThemeSwitcher = () => {
        return (
            <Icon
                Svg={ThemeIcon}
                clickable
                onClick={onToogleHandler}
            />
        );
    };

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={<RedesignedThemeSwitcher />}
            off={<DepricatedThemeSwitcher/>}
        />
    );
});
