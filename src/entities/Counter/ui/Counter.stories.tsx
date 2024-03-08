import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Counter } from './Counter';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'entities/Counter',
    component: Counter,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Counter>;

const Template: ComponentStory<typeof Counter> = () => (
    <Counter />
);

export const Normal = Template.bind({});
Normal.decorators = [
    StoreDecorator({}),
];
