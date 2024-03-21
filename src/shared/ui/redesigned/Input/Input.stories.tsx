import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Input } from './Input';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { Icon } from '../Icon';
import SearchIcon from '@/shared/assets/icons/search.svg';

export default {
    title: 'shared/Input/Redesigned',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [NewDesignDecorator]
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    placeholder: 'Type text',
    value: '123123',
};

export const SizeS = Template.bind({});
SizeS.args = {
    placeholder: 'Type text',
    value: '123123',
    size: 's'
};

export const SizeL = Template.bind({});
SizeL.args = {
    placeholder: 'Type text',
    value: '123123',
    size: 'l'
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
    placeholder: 'Type text',
    value: '123123',
    readonly: true
};

export const WithLeftAddon = Template.bind({});
WithLeftAddon.args = {
    placeholder: 'Поиск',
    addonLeft: <Icon Svg={SearchIcon} />
};

export const WithRightAddon = Template.bind({});
WithRightAddon.args = {
    placeholder: 'Поиск',
    addonRight: <Icon Svg={SearchIcon} />
};