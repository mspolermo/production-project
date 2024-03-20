import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AppLink } from './AppLink';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'shared/AppLink/Redesigned',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
    decorators: [RouterDecorator, NewDesignDecorator]
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => (
    <AppLink {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
    variant: 'primary'
};

export const Red = Template.bind({});
Red.args = {
    children: 'Text',
    variant: 'red'
};

