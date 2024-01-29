import React, { memo, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LangSwitcher } from '@/features/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/depricated/Button';
import { VStack } from '@/shared/ui/redesigned/Stack';
import cls from './Sidebar.module.scss';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { ToggleFeatures } from '@/shared/lib/features';
import { AppLogo } from '@/shared/ui/redesigned/AppLogo';
import { Icon } from '@/shared/ui/redesigned/Icon';
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const { t } = useTranslation();
    const [collapsed, setCollapsed] = useState(false);
    const sidebarItemsList = useSelector(getSidebarItems);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const itemsList = useMemo(
        () =>
            sidebarItemsList.map((item) => (
                <SidebarItem
                    key={item.path}
                    item={item}
                    collapsed={collapsed}
                />
            )),
        [collapsed, sidebarItemsList],
    );

    const DepricatedSidebar = () => {
        return (
            <aside
                data-testid="sidebar"
                className={classNames(
                    cls.Sidebar,
                    { [cls.collapsed]: collapsed },
                    [className],
                )}
            >
                <Button
                    data-testid="sidebar-toggle"
                    type="button"
                    className={cls.collapseBtn}
                    theme={ButtonTheme.BACKGROUND_INVERTED}
                    size={ButtonSize.L}
                    square
                    onClick={onToggle}
                >
                    {collapsed ? '>' : '<'}
                </Button>
                <VStack role="navigation" gap="8" className={cls.items}>
                    {itemsList}
                </VStack>
                <div className={cls.switchers}>
                    <ThemeSwitcher />
                    <LangSwitcher short={collapsed} className={cls.lang} />
                </div>
            </aside>
        );
    };

    const RedesignedSidebar = () => {
        return (
            <aside
                data-testid="sidebar"
                className={classNames(
                    cls.SidebarRedesigned,
                    { [cls.collapsedRedesigned]: collapsed },
                    [className],
                )}
            >
                <AppLogo className={cls.appLogo} size={collapsed ? 30 : 50} />
                <VStack role="navigation" gap="8" className={cls.items}>
                    {itemsList}
                </VStack>
                <Icon
                    Svg={ArrowIcon}
                    clickable
                    data-testid="sidebar-toggle"
                    className={cls.collapseBtn}
                    onClick={onToggle}
                />
                <div className={cls.switchers}>
                    <ThemeSwitcher />
                    <LangSwitcher short={collapsed} className={cls.lang} />
                </div>
            </aside>
        );
    };

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={<RedesignedSidebar />}
            off={<DepricatedSidebar />}
        />
    );
});
