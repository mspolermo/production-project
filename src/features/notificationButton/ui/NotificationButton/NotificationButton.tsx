import React, { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Icon as IconDepricated } from '@/shared/ui/depricated/Icon';
import NotificationIconDepricated from '@/shared/assets/icons/notification-20-20.svg';
import NotificationIcon from '@/shared/assets/icons/notification.svg';
import { Popover as PopoverDepricated } from '@/shared/ui/depricated/Popups';
import { Button as ButtonDepricated, ButtonTheme } from '@/shared/ui/depricated/Button';
import { NotificationList } from '@/entities/Notification';
import { Drawer } from '@/shared/ui/depricated/Drawer';
import cls from './NotificationButton.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Popover } from '@/shared/ui/redesigned/Popups';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;
    const [isOpen, setIsOpen] = useState(false);

    const onOpenDrawer = useCallback(() => {
        setIsOpen(true);
    }, []);

    const onCloseDrawer = useCallback(() => {
        setIsOpen(false);
    }, []);

    const trigger = (
        <ToggleFeatures 
            feature='isAppRedesigned'
            on={
                <Icon Svg={NotificationIcon} clickable onClick={onOpenDrawer}/>
            }
            off={
                <ButtonDepricated onClick={onOpenDrawer} theme={ButtonTheme.CLEAR}>
                    <IconDepricated Svg={NotificationIconDepricated} inverted />
                </ButtonDepricated>
            }
        />
    );

    return (
        <div>
            <BrowserView>
            <ToggleFeatures 
            feature='isAppRedesigned'
            on={
                <Popover
                className={classNames(cls.NotificationButton, {}, [
                    className,
                ])}
                direction="bottom left"
                trigger={trigger}
            >
                <NotificationList className={cls.notifications} />
            </Popover>
            }
            off={
                <PopoverDepricated
                    className={classNames(cls.NotificationButton, {}, [
                        className,
                    ])}
                    direction="bottom left"
                    trigger={trigger}
                >
                    <NotificationList className={cls.notifications} />
                </PopoverDepricated>
            }
        />
            </BrowserView>
            <MobileView>
                {trigger}
                <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                    <NotificationList />
                </Drawer>
            </MobileView>
        </div>
    );
});
