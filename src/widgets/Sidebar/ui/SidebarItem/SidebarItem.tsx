import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    AppLink as AppLinkDepricated,
    AppLinkTheme,
} from '@/shared/ui/deprecated/AppLink';
import { getUserAuthData } from '@/entities/User';
import { SidebarItemType } from '../../model/types/sidebar';
import cls from './SidebarItem.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Icon } from '@/shared/ui/redesigned/Icon';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation();
    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }
    const DepricatedSidebarItem = () => {
        return (
            <AppLinkDepricated
                theme={AppLinkTheme.SECONDARY}
                to={item.path}
                className={classNames(cls.item, { [cls.collapsed]: collapsed })}
            >
                <item.Icon className={cls.icon} />
                <span className={cls.link}>{t(item.text)}</span>
            </AppLinkDepricated>
        );
    };

    const RedesignedSidebarItem = () => {
        return (
            <AppLink
                to={item.path}
                className={classNames(cls.itemRedesigned, {
                    [cls.collapsedRedesigned]: collapsed,
                })}
                activeClassName={cls.active}
            >
                <Icon Svg={item.Icon} />
                <span className={cls.link}>{t(item.text)}</span>
            </AppLink>
        );
    };

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={<RedesignedSidebarItem />}
            off={<DepricatedSidebarItem />}
        />
    );
});
