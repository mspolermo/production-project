import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CommentCard } from './CommentCard';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator';

export default {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator]
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => (
    <CommentCard {...args} />
);
const normalArgs = {
    comment: {
        id: '1',
        text: 'hello world',
        user: { id: '1', username: 'Vasya' },
    },
};

export const Normal = Template.bind({});
Normal.args = normalArgs;

export const NormalRedesigned = Template.bind({});
NormalRedesigned.args = normalArgs;
NormalRedesigned.decorators = [NewDesignDecorator];

export const Loading = Template.bind({});
Loading.args = {
    comment: {
        id: '1',
        text: 'hello world',
        user: { id: '1', username: 'Vasya' },
    },
    isLoading: true,
};

export const LoadingRedesigned = Template.bind({});
LoadingRedesigned.args = {
    comment: {
        id: '1',
        text: 'hello world',
        user: { id: '1', username: 'Vasya' },
    },
    isLoading: true,
};
LoadingRedesigned.decorators = [NewDesignDecorator];