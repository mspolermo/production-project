import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';
import { Text } from '@/shared/ui/redesigned/Text';
import { Text as TextDepricated } from '@/shared/ui/deprecated/Text';
import { Card } from '@/shared/ui/redesigned/Card';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ToggleFeatures } from '@/shared/lib/features';
import cls from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {
    className?: string;
}

const ArticleEditPage = memo((props: ArticleEditPageProps) => {
    const { className } = props;
    const { t } = useTranslation('article');
    const { id } = useParams<{ id: string }>();
    const isEdit = Boolean(id);
    const Redesigned = (
        <VStack gap="8" max>
            <Card padding="24" max>
                <Text
                    title={
                        isEdit
                            ? t('Редактирование статьи с ID = ') + id
                            : t('Создание новой статьи')
                    }
                />
            </Card>
            <Card padding="16" max>
                <Text text={t('Тело страницы')} />
            </Card>
        </VStack>
    );

    const Depricated = (
        <VStack gap="8" max>
            <TextDepricated
                title={
                    isEdit
                        ? t('Редактирование статьи с ID = ') + id
                        : t('Создание новой статьи')
                }
            />
            <TextDepricated title={t('Тело страницы')} />
        </VStack>
    );

    return (
        <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
            <ToggleFeatures
                feature="isAppRedesigned"
                on={Redesigned}
                off={Depricated}
            />
        </Page>
    );
});

export default ArticleEditPage;
