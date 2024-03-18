import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Input } from './Input';

export default {
    title: 'shared/Input/Deprecated',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    placeholder: 'Type text',
    value: '123123',
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
    placeholder: 'Type text',
    value: '123123',
    readonly: true
};