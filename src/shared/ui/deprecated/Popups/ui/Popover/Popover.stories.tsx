import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Popover } from './Popover';
import { Button, ButtonTheme } from '../../../Button';
import { Icon } from '../../../Icon';
import Info from '@/shared/assets/icons/Info.svg'

const trigger = (
    <Button
        onClick={() => console.log('')}
        theme={ButtonTheme.CLEAR}
    >
        <Icon Svg={Info} inverted />
    </Button>
);

const menu = (
    <>
        <div>first</div>
        <div>second</div>
        <div>third</div>
        <div>fourth</div>
    </>
);

export default {
    title: 'shared/Popover/Deprecated',
    component: Popover,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => (
            <div style={{ padding: 150 }}>
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => (
    <Popover {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    trigger,
    children: menu
};

export const topLeft = Template.bind({});
topLeft.args = {
    direction: 'top left',
    trigger,
    children: menu
};

export const topRight = Template.bind({});
topRight.args = {
    direction: 'top right',
    trigger,
    children: menu
};

export const bottomLeft = Template.bind({});
bottomLeft.args = {
    direction: 'bottom left',
    trigger,
    children: menu
};

export const bottomRight = Template.bind({});
bottomRight.args = {
    direction: 'bottom right',
    trigger,
    children: menu
};
