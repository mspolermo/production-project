import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AvatarDropdown } from './AvatarDropdown';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { VStack } from '@/shared/ui/redesigned/Stack';

const mockUser = {
    authData: {
        "id": "1",
        "username": "admin",
        "avatar": "https://img2.reactor.cc/pics/post/full/Bebop-Bebop-and-Rocksteady-TMNT-%D1%84%D1%8D%D0%BD%D0%B4%D0%BE%D0%BC%D1%8B-5457666.jpeg"
    },
    _inited: true
};

export default {
    title: 'features/AvatarDropdown',
    component: AvatarDropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AvatarDropdown>;

const Template: ComponentStory<typeof AvatarDropdown> = (args) => (
    <VStack max maxHeight justify='center' align='center'>
    <AvatarDropdown {...args} />
    </VStack>
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({user: mockUser})];

export const NormalRedesigned = Template.bind({});
NormalRedesigned.args = {};
NormalRedesigned.decorators = [StoreDecorator({
    user: mockUser
}), NewDesignDecorator];
