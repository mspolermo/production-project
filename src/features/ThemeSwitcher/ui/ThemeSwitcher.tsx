import React, { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Theme } from '@/shared/const/theme';
import LightIcon from '@/shared/assets/icons/theme-light.svg';
import DarkIcon from '@/shared/assets/icons/theme-dark.svg';
import { Button, ButtonTheme } from '@/shared/ui/depricated/Button';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { saveJsonSettings } from '@/entities/User';
import { Icon } from '@/shared/ui/depricated/Icon';

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

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames('', {}, [className])}
            onClick={onToogleHandler}
        >
            {theme === Theme.DARK ? (
                <Icon Svg={DarkIcon} width={40} height={40} />
            ) : (
                <Icon Svg={LightIcon} width={40} height={40} />
            )}
        </Button>
    );
});
