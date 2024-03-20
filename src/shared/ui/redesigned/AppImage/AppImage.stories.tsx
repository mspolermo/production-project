import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AppImage } from './AppImage';

export default {
    title: 'shared/AppImage',
    component: AppImage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AppImage>;

const Template: ComponentStory<typeof AppImage> = (args) => <AppImage {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    src: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    alt: 'image',
    width: '100px',
    height: '100px'
};

export const withoutImg = Template.bind({});
withoutImg.args = {};