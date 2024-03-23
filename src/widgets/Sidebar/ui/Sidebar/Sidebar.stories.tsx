import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Sidebar } from './Sidebar';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'widgets/Sidebar',
    component: Sidebar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator]
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => (
    <div style={{height: '100vh'}}>
       <Sidebar {...args} /> 
    </div>
    
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
    StoreDecorator({
        user: { authData: {} },
    }),
];

export const NormalRedesigned = Template.bind({});
NormalRedesigned.args = {};
NormalRedesigned.decorators = [
    StoreDecorator({
        user: { authData: {} },
    }),
    NewDesignDecorator
];

export const NoAuth = Template.bind({});
NoAuth.args = {};
NoAuth.decorators = [
    StoreDecorator({
        user: {},
    }),
];

export const NoAuthRedesigned = Template.bind({});
NoAuthRedesigned.args = {};
NoAuthRedesigned.decorators = [
    StoreDecorator({
        user: {},
    }),
    NewDesignDecorator
];
