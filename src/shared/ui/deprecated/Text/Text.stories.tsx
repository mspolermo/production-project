import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Text, TextAlign, TextSize, TextTheme } from './Text';

export default {
    title: 'shared/Text/Deprecated',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title lorem ipsum',
    text: 'Description description description description',
};

export const PrimaryCenter = Template.bind({});
PrimaryCenter.args = {
    title: 'Title lorem ipsum',
    text: 'Description description description description',
    align: TextAlign.CENTER
};

export const PrimaryRight = Template.bind({});
PrimaryRight.args = {
    title: 'Title lorem ipsum',
    text: 'Description description description description',
    align: TextAlign.RIGHT
};

export const Inverted = Template.bind({});
Inverted.args = {
    title: 'Title lorem ipsum',
    text: 'Description description description description',
    theme: TextTheme.INVERTED,
};


export const Error = Template.bind({});
Error.args = {
    title: 'Title lorem ipsum',
    text: 'Description description description description',
    theme: TextTheme.ERROR,
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: 'Title lorem ipsum',
};

export const onlyText = Template.bind({});
onlyText.args = {
    text: 'Description description description description',
};

export const SizeL = Template.bind({});
SizeL.args = {
    title: 'Title lorem ipsum',
    text: 'Description description description description',
    size: TextSize.L,
};

export const SizeM = Template.bind({});
SizeM.args = {
    title: 'Title lorem ipsum',
    text: 'Description description description description',
    size: TextSize.M,
};

export const SizeS = Template.bind({});
SizeS.args = {
    title: 'Title lorem ipsum',
    text: 'Description description description description',
    size: TextSize.S,
};
