import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { AdditionalInfoContainer } from './AdditionalInfoContainer';

export default {
    title: 'pages/ArticleDetailsPage/AdditionalInfoContainer',
    component: AdditionalInfoContainer,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoreDecorator(
        {
            articleDetails: {
                data: {
                    views: 3123,
                    createdAt: '12/12/12',
                    user: {
                        id: '0',
                        username: 'admin',
                        avatar: ''
                    }
                }
            }
        }
    )],
} as ComponentMeta<typeof AdditionalInfoContainer>;

const Template: ComponentStory<typeof AdditionalInfoContainer> = () => <AdditionalInfoContainer />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [NewDesignDecorator];