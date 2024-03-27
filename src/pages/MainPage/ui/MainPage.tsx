import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { Text } from '@/shared/ui/redesigned/Text';
import { Text as TextDepricated, TextSize } from '@/shared/ui/deprecated/Text';
import { Card } from '@/shared/ui/redesigned/Card';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Code } from '@/shared/ui/redesigned/Code';
import { ToggleFeatures } from '@/shared/lib/features';

const MainPage = () => {
    const { t } = useTranslation('main');

    const Redesigned = (
        <VStack gap="8" max>
            <Card padding="24" max>
                <Text title={t('Главная страница')} />
            </Card>
            <Card padding="16" max>
                <VStack gap="16" maxHeight max>
                    <Text text={t('Описание')} />
                    <Text title={t('Учетные записи:')} />
                    <Code max text={t('Роль администратора')} />
                    <Code max text={t('Роль пользователя')} />
                    <Code max text={t('Роль менеджера')} />
                </VStack>
            </Card>
        </VStack>
    );

    const Depricated = (
        <VStack gap="8" max>
            <TextDepricated title={t('Главная страница')} />
            <TextDepricated text={t('Описание')} />
            <TextDepricated title={t('Учетные записи:')} size={TextSize.S} />
            <Code max text={t('Роль администратора')} />
            <Code max text={t('Роль пользователя')} />
            <Code max text={t('Роль менеджера')} />
        </VStack>
    );

    return (
        <Page data-testid="MainPage">
            <ToggleFeatures
                feature="isAppRedesigned"
                on={Redesigned}
                off={Depricated}
            />
        </Page>
    );
};

export default MainPage;
