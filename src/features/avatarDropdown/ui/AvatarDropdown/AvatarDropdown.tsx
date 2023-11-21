import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Dropdown } from '@/shared/ui/Popups';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    getUserAuthData, isUserAdmin, isUserManager, userActions,
} from '@/entities/User';
import { getRouteAdmin, getRouteProfile } from '@/shared/const/router';
import { Avatar } from '@/shared/ui/Avatar';

interface AvatarDropdownProps {
    className? : string;
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

    return (
        <Dropdown
            className={classNames('', {}, [className])}
            direction="bottom left"
            items={[
                ...(isAdminPanelAvailable ? [{
                    content: t('Администрирование'),
                    href: getRouteAdmin(),
                }] : []),
                {
                    content: t('Профиль'),
                    href: getRouteProfile(authData.id),
                },
                {
                    content: t('Выйти'),
                    onClick: onLogOut,
                },
            ]}
            trigger={<Avatar size={30} src={authData.avatar} />}
        />
    );
});
