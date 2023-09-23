import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { ArticleTextBlock } from '../../model/types/article';
import cls from './AricleTextBlockComponent.module.scss';

interface AricleTextBlockComponentProps {
    className? : string;
    block: ArticleTextBlock;
}

export const AricleTextBlockComponent = memo((props: AricleTextBlockComponentProps) => {
    const { t } = useTranslation();
    const { className, block } = props;
    return (
        <div className={classNames(cls.AricleTextBlockComponent, {}, [className])}>
            {block.title && (
                <Text title={block.title} className={cls.title} />
            )}
            {block.paragraphs.map((paragraph) => (
                <Text key={paragraph} text={paragraph} className={cls.paragraph} />
            ))}
        </div>
    );
});
