import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Card } from './Card';
import { Text } from '../Text/Text';

export default {
    title: 'shared/Card/Redesigned',
    component: Card,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    children: <Text title="test" text="text text" />,
};

export const Outlined = Template.bind({});
Outlined.args = {
    children: <Text title="test" text="text text" />,
    variant: 'outlined'
};

export const Light = Template.bind({});
Light.args = {
    children: <Text title="test" text="text text" />,
    variant: 'light'
};

export const NormalWithoutPadding = Template.bind({});
NormalWithoutPadding.args = {
    children: <Text title="test" text="text text" />,
    padding: '0'
};

export const NormalPaddigng16 = Template.bind({});
NormalPaddigng16.args = {
    children: <Text title="test" text="text text" />,
    padding: '16'
};

export const NormalPaddigng24 = Template.bind({});
NormalPaddigng24.args = {
    children: <Text title="test" text="text text" />,
    padding: '24'
};

export const NormalBorderRound = Template.bind({});
NormalBorderRound.args = {
    children: <Text title="test" text="text text" />,
    border: 'round'
};

export const NormalBorderPartial = Template.bind({});
NormalBorderPartial.args = {
    children: <Text title="test" text="text text" />,
    border: 'partial'
};