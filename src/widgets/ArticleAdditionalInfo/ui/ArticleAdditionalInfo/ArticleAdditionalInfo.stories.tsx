import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';


import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { ArticleAdditionalInfo } from './ArticleAdditionalInfo';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const data = {
    createdAt: '12/12/12',
    views: 123,
    author: {
        id: '0',
        username: 'mspolermo',
        avatar: '',
    }
};

export default {
    title: 'widgets/ArticleAdditionalInfo',
    component: ArticleAdditionalInfo,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        RouterDecorator,
        StoreDecorator({})
    ]
} as ComponentMeta<typeof ArticleAdditionalInfo>;

const Template: ComponentStory<typeof ArticleAdditionalInfo> = (args) => (
    <ArticleAdditionalInfo {...args} />
);

export const Normal = Template.bind({});
Normal.args = data;
Normal.decorators = [NewDesignDecorator]
