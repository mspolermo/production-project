import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleSortSelector } from './ArticleSortSelector';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { ArticleSortField } from '@/entities/Article';

export default {
    title: 'features/ArticleList/ArticleSortSelector',
    component: ArticleSortSelector,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleSortSelector>;

const Template: ComponentStory<typeof ArticleSortSelector> = (args) => (
    <ArticleSortSelector {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};

export const NormalRedesigned = Template.bind({});
NormalRedesigned.args = {
    sort: ArticleSortField.CREATED,
    order: 'asc'
};
NormalRedesigned.decorators = [NewDesignDecorator]
