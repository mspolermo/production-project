import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button} from './Button';

export default {
    title: 'shared/Button/Redesigned',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    variant: 'clear',
};

export const Filled = Template.bind({});
Filled.args = {
    children: 'Text',
    variant: 'filled',
};

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
    children: 'Text',
    size: 'l',
};

export const OutlineRed = Template.bind({});
OutlineRed.args = {
    children: 'Text',
    color: 'error',
};

export const Square = Template.bind({});
Square.args = {
    children: '>',
    square: true,
};

export const SquareSizeM = Template.bind({});
SquareSizeM.args = {
    children: '>',
    square: true,
    size: 'm'
};

export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
    children: '>',
    square: true,
    size: 'xl',
};

export const Disabled = Template.bind({});
Disabled.args = {
    children: 'Disabled',
    disabled: true,
};
