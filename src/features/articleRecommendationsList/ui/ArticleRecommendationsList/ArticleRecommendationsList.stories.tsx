import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Article, ArticleType } from '@/entities/Article';
import { ArticleRecommendationsList } from './ArticleRecommendationsList';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'features/ArticleRecommendationsList',
    component: ArticleRecommendationsList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleRecommendationsList>;

const Template: ComponentStory<typeof ArticleRecommendationsList> = (args) => (
    <ArticleRecommendationsList {...args} />
);

const article: Article = {
    id: '1',
    img: "https://teknotower.com/wp-content/uploads/2020/11/js.png",
    createdAt: '26.04.2022',
    views: 123,
    user: { id: '1', username: 'admin', "avatar": "https://img2.reactor.cc/pics/post/full/Bebop-Bebop-and-Rocksteady-TMNT-%D1%84%D1%8D%D0%BD%D0%B4%D0%BE%D0%BC%D1%8B-5457666.jpeg" },
    blocks: [],
    type: [ ArticleType.IT],
    title: 'Javascript news',
    subtitle: 'Что нового в JS за 2022 год?',
};

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/articles?_limit=3&_expand=user`,
            method: 'GET',
            status: 200,
            response: [
                { ...article, id: '1' },
                { ...article, id: '2' },
                { ...article, id: '3' },
            ],
        },
    ],
};

export const NormalRedesigned = Template.bind({});
NormalRedesigned.args = {};
NormalRedesigned.decorators = [StoreDecorator({}), NewDesignDecorator];
NormalRedesigned.parameters = {
    mockData: [
        {
            url: `${__API__}/articles?_limit=3&_expand=user`,
            method: 'GET',
            status: 200,
            response: [
                { ...article, id: '1' },
                { ...article, id: '2' },
                { ...article, id: '3' },
            ],
        },
    ],
};