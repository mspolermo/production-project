import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ArticleRating from './ArticleRating';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

const mockDefault = [
    {
        url: `${__API__}/article-ratings?userId=1&articleId=2`,
        method: 'GET',
        status: 200,
        response: [
            {
                rate: 3,
            },
        ],
    },
];

export default {
    title: 'features/Article/ArticleRating',
    component: ArticleRating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleRating>;

const Template: ComponentStory<typeof ArticleRating> = (args) => (
    <ArticleRating {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    articleId: '1',
};
Normal.decorators = [
    StoreDecorator({
        user: {
            authData: { id: '1' },
        },
    }),
];
Normal.parameters = {
    mockData: mockDefault
};

export const NormalRedesigned = Template.bind({});
NormalRedesigned.args = {
    articleId: '1',
};
NormalRedesigned.decorators = [
    StoreDecorator({
        user: {
            authData: { id: '1' },
        },
    }),
    NewDesignDecorator
];
NormalRedesigned.parameters = {
    mockData: mockDefault,
};

export const WithoutRate = Template.bind({});
WithoutRate.args = {
    articleId: '1',
};
WithoutRate.decorators = [
    StoreDecorator({
        user: {
            authData: { id: '1' },
        },
    }),
];
WithoutRate.parameters = {
    mockData: [
        {
            url: `${__API__}/article-ratings?userId=1&articleId=1`,
            method: 'GET',
            status: 200,
            response: [],
        },
    ],
};

export const WithoutRateRedesigned = Template.bind({});
WithoutRateRedesigned.args = {
    articleId: '1',
};
WithoutRateRedesigned.decorators = [
    StoreDecorator({
        user: {
            authData: { id: '1' },
        },
    }),
    NewDesignDecorator
];
WithoutRateRedesigned.parameters = {
    mockData: [
        {
            url: `${__API__}/article-ratings?userId=1&articleId=1`,
            method: 'GET',
            status: 200,
            response: [],
        },
    ],
};
