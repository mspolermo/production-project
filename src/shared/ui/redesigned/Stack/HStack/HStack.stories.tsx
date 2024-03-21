import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { HStack } from './HStack';

export default {
    title: 'shared/Stack/HStack',
    component: HStack,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof HStack>;

const Template: ComponentStory<typeof HStack> = (args) => <HStack {...args} />;

export const Gap0 = Template.bind({});
Gap0.args = {
    children: (
        <>
            <div>first</div>
            <div>second</div>
            <div>third</div>
            <div>fourth</div>
        </>
    ),
};

export const Gap4 = Template.bind({});
Gap4.args = {
    gap: '4',
    children: (
        <>
            <div>first</div>
            <div>second</div>
            <div>third</div>
            <div>fourth</div>
        </>
    ),
};

export const Gap8 = Template.bind({});
Gap8.args = {
    gap: '8',
    children: (
        <>
            <div>first</div>
            <div>second</div>
            <div>third</div>
            <div>fourth</div>
        </>
    ),
};

export const Gap16 = Template.bind({});
Gap16.args = {
    gap: '16',
    children: (
        <>
            <div>first</div>
            <div>second</div>
            <div>third</div>
            <div>fourth</div>
        </>
    ),
};

export const Gap32 = Template.bind({});
Gap32.args = {
    gap: '32',
    children: (
        <>
            <div>first</div>
            <div>second</div>
            <div>third</div>
            <div>fourth</div>
        </>
    ),
};
