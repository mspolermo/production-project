import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Icon } from './Icon';
import UserIcon from '../../../assets/icons/user-filled.svg';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'shared/Icon/Redesigned',
    component: Icon,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [NewDesignDecorator]
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    Svg: UserIcon,
    width: 50,
    height: 50
};

export const Clickable = Template.bind({});
Clickable.args = {
    Svg: UserIcon,
    width: 50,
    height: 50,
    clickable: true,
    onClick: () => console.log('')
};

