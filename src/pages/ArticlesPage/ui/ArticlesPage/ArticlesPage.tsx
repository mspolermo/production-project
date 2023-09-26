/* eslint-disable max-len */
/* eslint-disable i18next/no-literal-string */
import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleList, ArticleView } from 'entities/Article';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className? : string;
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
    const { t } = useTranslation('article');
    return (
        <div className={classNames(cls.ArticlesPage, {}, [className])}>
            <ArticleList
                view={ArticleView.BIG}
                articles={[]}
            />
        </div>
    );
};

export default memo(ArticlesPage);
