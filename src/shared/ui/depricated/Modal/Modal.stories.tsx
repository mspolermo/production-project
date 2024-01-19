import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Est ab deserunt optio porro dolore corporis non molestias dicta,
        minima ipsam expedita, ipsa explicabo laudantium velit sapiente`,
};

// export const Dark = Template.bind({});
// Dark.args = {
//     isOpen: true,
//     children: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//         Est ab deserunt optio porro dolore corporis non molestias dicta,
//         minima ipsam expedita, ipsa explicabo laudantium velit sapiente`,
// };
// Dark.decorators = [ThemeDecorator(Theme.DARK)];
