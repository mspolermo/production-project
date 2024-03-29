import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import avatar from '@/shared/assets/test/storybook.jpg';
import { ProfileCard } from '../ProfileCard';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'entities/ProfileCard/Redesigned',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
    <ProfileCard {...args} />
);

const primaryArgs = {
    data: {
        username: 'admin',
        age: 22,
        country: Country.Ukraine,
        lastname: 'ulbi tv',
        first: 'asd',
        city: 'asf',
        currency: Currency.USD,
        avatar,
    },
};


export const Primary = Template.bind({});
Primary.args = primaryArgs;
Primary.decorators = [NewDesignDecorator, ThemeDecorator(Theme.DARK)];

export const withError = Template.bind({});
withError.args = {
    error: 'true',
};
withError.decorators = [NewDesignDecorator];

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
Loading.decorators = [NewDesignDecorator];