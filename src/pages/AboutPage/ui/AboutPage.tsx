import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { Text } from '@/shared/ui/redesigned/Text';
import { Text as TextDepricated } from '@/shared/ui/deprecated/Text';
import { Card } from '@/shared/ui/redesigned/Card';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ToggleFeatures } from '@/shared/lib/features';

const AboutPage = () => {
    const { t } = useTranslation('about');

    const Redesigned = (
        <VStack gap="8" max>
            <Card padding="24" max>
                <Text title={t('О сайте')} />
            </Card>
            <Card padding="16" max>
                <VStack gap="16" maxHeight max>
                    <Text text={t('Описание')} />
                    <Text text={t('Мультиязычность')} />
                    <Text text={t('Дополнение')} />
                </VStack>
            </Card>
        </VStack>
    );

    const Depricated = (
        <VStack gap="8" max>
            <TextDepricated title={t('Главная страница')} />
            <TextDepricated text={t('Описание')} />
            <TextDepricated text={t('Мультиязычность')} />
            <TextDepricated text={t('Дополнение')} />
        </VStack>
    );
    return (
        <Page data-testid="AboutPage">
            <ToggleFeatures
                feature="isAppRedesigned"
                on={Redesigned}
                off={Depricated}
            />
        </Page>
    );
};

export default AboutPage;
