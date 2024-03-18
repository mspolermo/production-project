import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Icon } from './Icon';
import UserIcon from '../../../assets/icons/user-filled.svg';

export default {
    title: 'shared/Icon/Deprecated',
    component: Icon,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    Svg: UserIcon,
    width: 50,
    height: 50
};

export const Inverted = Template.bind({});
Inverted.args = {
    Svg: UserIcon,
    width: 50,
    height: 50,
    inverted: true
};

