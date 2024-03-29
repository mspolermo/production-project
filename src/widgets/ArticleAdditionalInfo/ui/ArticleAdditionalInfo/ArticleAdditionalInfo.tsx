import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { User } from '@/entities/User';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Text } from '@/shared/ui/redesigned/Text';
import { Button } from '@/shared/ui/redesigned/Button';

interface ArticleAdditionalInfoProps {
    className?: string;
    author: User;
    createdAt: string;
    views: number;
    onEdit: () => void;
    onBack: () => void;
    canEdit: boolean;
}

export const ArticleAdditionalInfo = memo(
    (props: ArticleAdditionalInfoProps) => {
        const { className, author, createdAt, views, onEdit, canEdit, onBack } =
            props;
        const { t } = useTranslation('article');

        return (
            <VStack gap="16" className={classNames('', {}, [className])}>
                <HStack gap="8">
                    <Avatar src={author.avatar} size={32} />
                    <Text text={author.username} bold />
                    <Text text={createdAt} />
                </HStack>
                {canEdit && (
                    <Button onClick={onEdit}>{t('Редактировать')}</Button>
                )}
                <Button onClick={onBack}>{t('Назад к списку')}</Button>
                <Text text={t('{{count}} просмотров', { count: views })} />
            </VStack>
        );
    },
);
