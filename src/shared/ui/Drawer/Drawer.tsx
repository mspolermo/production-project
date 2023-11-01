import React, { ReactNode, memo } from 'react';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import cls from './Drawer.module.scss';
import { Portal } from '../Portal/Portal';
import { Overlay } from '../Overlay/Overlay';

interface DrawerProps {
    className? : string;
    children: ReactNode;
    isOpen?: boolean;
    onCLose?: () => void;
}

export const Drawer = memo((props: DrawerProps) => {
    const {
        className, children, onCLose, isOpen,
    } = props;
    const { theme } = useTheme();

    const mods: Mods = {
        [cls.opened]: isOpen,
    };

    return (
        <Portal>
            <div className={classNames(cls.Drawer, mods, [className, theme, 'app_drawer'])}>
                <Overlay onClick={onCLose} />
                <div className={cls.content}>
                    {children}
                </div>
            </div>
        </Portal>
    );
});
