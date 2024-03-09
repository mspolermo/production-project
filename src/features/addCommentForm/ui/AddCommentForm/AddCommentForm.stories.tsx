import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { action } from '@storybook/addon-actions';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import AddCommentForm from './AddCommentForm';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'features/AddCommentForm',
    component: AddCommentForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AddCommentForm>;

const Template: ComponentStory<typeof AddCommentForm> = (args) => (
    <AddCommentForm {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    onSendComment: action('onSendComment'),
};
Normal.decorators = [StoreDecorator({})];

export const NormalRedesigned = Template.bind({});
NormalRedesigned.args = {
    onSendComment: action('onSendComment'),
};
NormalRedesigned.decorators = [StoreDecorator({}), NewDesignDecorator];

