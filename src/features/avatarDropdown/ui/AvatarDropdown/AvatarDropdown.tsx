import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Dropdown as DropdownDepricated } from '@/shared/ui/deprecated/Popups';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    getUserAuthData,
    isUserAdmin,
    isUserManager,
    userActions,
} from '@/entities/User';
import {
    getRouteAdmin,
    getRouteProfile,
    getRouteSettings,
} from '@/shared/const/router';
import { Avatar as AvatarDepricated } from '@/shared/ui/deprecated/Avatar';
import { ToggleFeatures } from '@/shared/lib/features';
import { Dropdown } from '@/shared/ui/redesigned/Popups';
import { Avatar } from '@/shared/ui/redesigned/Avatar';

interface AvatarDropdownProps {
    className?: string;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const authData = useSelector(getUserAuthData);
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const isAdminPanelAvailable = isAdmin || isManager;

    const onLogOut = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (!authData) {
        return null;
    }

    const items = [
        ...(isAdminPanelAvailable
            ? [
                  {
                      content: t('Администрирование'),
                      href: getRouteAdmin(),
                  },
              ]
            : []),
        {
            content: t('Настройки'),
            href: getRouteSettings(),
        },
        {
            content: t('Профиль'),
            href: getRouteProfile(authData.id),
        },
        {
            content: t('Выйти'),
            onClick: onLogOut,
        },
    ];

    const DeprocatedAvatarDropdown = () => {
        return (
            <DropdownDepricated
                className={classNames('', {}, [className])}
                direction="bottom left"
                items={items}
                trigger={
                    <AvatarDepricated
                        fallbackInverted
                        size={30}
                        src={authData.avatar}
                    />
                }
            />
        );
    };

    const RedesignedAvatarDropdown = () => {
        return (
            <Dropdown
                className={classNames('', {}, [className])}
                direction="bottom left"
                items={items}
                trigger={<Avatar size={40} src={authData.avatar} />}
            />
        );
    };

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={<RedesignedAvatarDropdown />}
            off={<DeprocatedAvatarDropdown />}
        />
    );
});
