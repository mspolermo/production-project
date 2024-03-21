import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text} from './Text';

export default {
    title: 'shared/Text/Redesigned',
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
    align: 'center'
};

export const PrimaryRight = Template.bind({});
PrimaryRight.args = {
    title: 'Title lorem ipsum',
    text: 'Description description description description',
    align: 'right'
};

export const Accent = Template.bind({});
Accent.args = {
    title: 'Title lorem ipsum',
    text: 'Description description description description',
    variant: 'accent'
};


export const Error = Template.bind({});
Error.args = {
    title: 'Title lorem ipsum',
    text: 'Description description description description',
    variant: 'error'
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
    size: 'l'
};

export const SizeMBold = Template.bind({});
SizeMBold.args = {
    title: 'Title lorem ipsum',
    text: 'Description description description description',
    size: 'm',
    bold: true
};

export const SizeS = Template.bind({});
SizeS.args = {
    title: 'Title lorem ipsum',
    text: 'Description description description description',
    size: 's'
};
