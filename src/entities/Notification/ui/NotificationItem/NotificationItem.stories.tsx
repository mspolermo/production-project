import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NotificationItem } from './NotificationItem';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'entities/Notification/NotificationItem',
    component: NotificationItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => (
    <NotificationItem {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    item:
        {
            id: '1',
            title: 'Уведомление',
            description: 'Произошло событие в приложении'
        },
};


export const NormalRedesigned = Template.bind({});
NormalRedesigned.args = {
    item:
        {
            id: '1',
            title: 'Уведомление',
            description: 'Произошло событие в приложении'
        },
};
NormalRedesigned.decorators = [NewDesignDecorator];
