import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { LoginModal } from './LoginModal';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'features/AuthByUsername/LoginMidal',
    component: LoginModal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginModal>;

const Template: ComponentStory<typeof LoginModal> = (args) => (
    <LoginModal {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true
};
Primary.decorators = [
    StoreDecorator({
        loginForm: { username: '123', password: 'asd' },
    }),
];

export const PrimaryRedesigned = Template.bind({});
PrimaryRedesigned.args = {
    isOpen: true
};
PrimaryRedesigned.decorators = [
    StoreDecorator({
        loginForm: { username: '123', password: 'asd' },
    }),
    NewDesignDecorator
];
