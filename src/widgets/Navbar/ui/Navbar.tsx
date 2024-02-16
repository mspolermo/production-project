/* eslint-disable react/prop-types */
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { LoginModal } from '@/features/AuthByUserName';
import { getUserAuthData } from '@/entities/User';
import { Text, TextTheme } from '@/shared/ui/deprecated/Text';
import { AppLink, AppLinkTheme } from '@/shared/ui/deprecated/AppLink';
import { getRouteArticleCreate } from '@/shared/const/router';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { NotificationButton } from '@/features/notificationButton';
import { AvatarDropdown } from '@/features/avatarDropdown';
import cls from './Navbar.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const OldNavbar: React.FC<{ auth: boolean }> = ({ auth }) => {
        if (auth) {
            return (
                <header className={classNames(cls.Navbar, {}, [className])}>
                    <Text
                        className={cls.appName}
                        title={t('FSD App')}
                        theme={TextTheme.INVERTED}
                    />
                    <AppLink
                        to={getRouteArticleCreate()}
                        theme={AppLinkTheme.SECONDARY}
                        className={cls.createBtn}
                    >
                        {t('Создать статью')}
                    </AppLink>
                    <HStack gap="16" className={cls.actions}>
                        <NotificationButton />
                        <AvatarDropdown />
                    </HStack>
                </header>
            );
        }
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <Button
                    theme={ButtonTheme.CLEAR_INVERTED}
                    className={cls.links}
                    onClick={onShowModal}
                >
                    {t('Войти')}
                </Button>
                {isAuthModal && (
                    <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
                )}
            </header>
        );
    };

    const RedesignedNavbar: React.FC<{ auth: boolean }> = ({ auth }) => {
        if (auth) {
            return (
                <header
                    className={classNames(cls.NavbarRedesigned, {}, [
                        className,
                    ])}
                >
                    <HStack gap="16" className={cls.actions}>
                        <NotificationButton />
                        <AvatarDropdown />
                    </HStack>
                </header>
            );
        }
        return (
            <header
                className={classNames(cls.NavbarRedesigned, {}, [className])}
            >
                <Button
                    theme={ButtonTheme.CLEAR_INVERTED}
                    className={cls.links}
                    onClick={onShowModal}
                >
                    {t('Войти')}
                </Button>
                {isAuthModal && (
                    <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
                )}
            </header>
        );
    };

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={<RedesignedNavbar auth={Boolean(authData)} />}
            off={<OldNavbar auth={Boolean(authData)} />}
        />
    );
});
