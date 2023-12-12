import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CommentList } from './CommentList';

export default {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => (
    <CommentList {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    comments: [
        {
            id: '1',
            text: 'hello world',
            user: { id: '1', username: 'Vasya' },
        },
        {
            id: '2',
            text: 'bye world',
            user: { id: '2', username: 'John Dog' },
        },
    ],
};

export const Loading = Template.bind({});
Loading.args = {
    comments: [],
    isLoading: true,
};
