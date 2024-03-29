import { useTranslation } from 'react-i18next';
import { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { Text as TextDeprecated} from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { ToggleFeatures, getFeatureFlag, updateFeatureFlag } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from '@/entities/User';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { useForceUpdate } from '@/shared/lib/render/forceUpdate';

interface UiDesignSwitcherProps {
    className?: string;
}

export const UiDesignSwitcher = memo((props: UiDesignSwitcherProps) => {
    const { className } = props;
    const { t } = useTranslation('settings');
    const isAppRedesigned = getFeatureFlag('isAppRedesigned');
    const dispatch = useAppDispatch();
    const authData = useSelector(getUserAuthData);
    const [isLoading, setIsLoading] = useState(false);
    const forceUpdate = useForceUpdate();

    const items = [
        {
            content: t('Новый'),
            value: 'new',
        },
        {
            content: t('Старый'),
            value: 'old',
        },
    ];

    const onChange = async (value: string) => {
        if (authData) {
            setIsLoading(true);
            await dispatch(
                updateFeatureFlag({
                    userId: authData.id,
                    newFeatures: {
                        isAppRedesigned: value === 'new',
                    },
                }),
            ).unwrap();
            setIsLoading(false);
            forceUpdate();
        }
    };

    return (
        <ToggleFeatures 
            feature='isAppRedesigned'
            on={
                <HStack>
                    <Text text={t('Вариант интерфейса')} />
                    {isLoading ? (
                        <Skeleton width={100} height={40} />
                    ) : (
                        <ListBox
                            onChange={onChange}
                            items={items}
                            value={isAppRedesigned ? 'new' : 'old'}
                            className={className}
                        />
                    )}
                </HStack>
            }
            off={
                <HStack>
                    <TextDeprecated text={t('Вариант интерфейса')} />
                    {isLoading ? (
                        <SkeletonDeprecated width={100} height={40} />
                    ) : (
                        <ListBoxDeprecated
                            onChange={onChange}
                            items={items}
                            value={isAppRedesigned ? t('Новый') : t('Старый')}
                            className={className}
                        />
                    )}
                </HStack>
            }
        />
    );
});
