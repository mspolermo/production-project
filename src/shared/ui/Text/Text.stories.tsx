import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Text, TextSize, TextTheme } from './Text';

export default {
    title: 'shared/Text',
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

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Title lorem ipsum',
    text: 'Description description description description',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
    title: 'Title lorem ipsum',
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
    text: 'Description description description description',
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

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
