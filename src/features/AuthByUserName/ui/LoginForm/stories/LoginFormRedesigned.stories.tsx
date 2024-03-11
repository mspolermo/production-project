import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import LoginForm from '../LoginForm';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'features/AuthByUsername/LoginForm/Redesigned',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => (
    <LoginForm {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [
    StoreDecorator({
        loginForm: { username: '123', password: 'asd' },
    }),
    NewDesignDecorator
];

export const withError = Template.bind({});
withError.args = {};
withError.decorators = [
    StoreDecorator({
        loginForm: { username: '123', password: 'asd', error: 'ERROR' },
    }),
    NewDesignDecorator
];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [
    StoreDecorator({
        loginForm: { isLoading: true },
    }),
    NewDesignDecorator
];
