import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { Text } from '@/shared/ui/redesigned/Text';
import { Text as TextDepricated } from '@/shared/ui/deprecated/Text';
import { Card } from '@/shared/ui/redesigned/Card';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ToggleFeatures } from '@/shared/lib/features';

const AdminPanelPage = () => {
    const { t } = useTranslation('admin');

    const Redesigned = (
        <VStack gap="8" max>
            <Card padding="24" max>
                <Text title={t('Админ панель')} />
            </Card>
            <Card padding="16" max>
                <Text text={t('Тело страницы')} />
            </Card>
        </VStack>
    );

    const Depricated = (
        <VStack gap="8" max>
            <TextDepricated title={t('Главная страница')} />
            <TextDepricated title={t('Тело страницы')} />
        </VStack>
    );

    return (
        <Page data-testid="AdminPanelPage">
            <ToggleFeatures
                feature="isAppRedesigned"
                on={Redesigned}
                off={Depricated}
            />
        </Page>
    );
};

export default AdminPanelPage;
