import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleInfiniteList } from './ArticleInfiniteList';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { ArticleView } from '@/entities/Article';

const articles = [
    {
        "id": "11",
        "title": "Kotlin news",
        "subtitle": "Что нового в JS за 2022 год?",
        "img": "https://blog.jetbrains.com/wp-content/uploads/2022/07/Banners-for-KotlinConf23-announcement-KotlinConf-is-back_Twitter-Blog-2560h1200.png",
        "views": 1022,
        "createdAt": "10.02.2022",
        "userId": "1",
        "type": [
            "IT"
        ],
        "blocks": [],
        "user": {
            "id": "1",
            "username": "admin",
            "password": "123",
            "roles": [
                "ADMIN"
            ],
            "features": {
                "isArticleRatingEnabled": true,
                "isCounterEnabled": true,
                "isAppRedesigned": true
            },
            "jsonSettings": {
                "isArticlePageWasOpened": true,
                "theme": "app_orange_theme"
            },
            "avatar": "https://img2.reactor.cc/pics/post/full/Bebop-Bebop-and-Rocksteady-TMNT-%D1%84%D1%8D%D0%BD%D0%B4%D0%BE%D0%BC%D1%8B-5457666.jpeg"
        }
    },
    {
        "id": "14",
        "title": "Python news",
        "subtitle": "Что нового в JS за 2022 год?",
        "img": "https://itfuture.online/wp-content/uploads/2020/11/python-kartynka-.jpg",
        "views": 1022,
        "createdAt": "14.03.2022",
        "userId": "1",
        "type": [
            "IT"
        ],
        "blocks": [],
        "user": {
            "id": "1",
            "username": "admin",
            "password": "123",
            "roles": [
                "ADMIN"
            ],
            "features": {
                "isArticleRatingEnabled": true,
                "isCounterEnabled": true,
                "isAppRedesigned": true
            },
            "jsonSettings": {
                "isArticlePageWasOpened": true,
                "theme": "app_orange_theme"
            },
            "avatar": "https://img2.reactor.cc/pics/post/full/Bebop-Bebop-and-Rocksteady-TMNT-%D1%84%D1%8D%D0%BD%D0%B4%D0%BE%D0%BC%D1%8B-5457666.jpeg"
        }
    },
    {
        "id": "7",
        "title": "Ruby news",
        "subtitle": "Что нового в JS за 2022 год?",
        "img": "https://res.cloudinary.com/practicaldev/image/fetch/s--oqV3akcU--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/pgnw91fs7tpxn0wyeqh2.jpg",
        "views": 100,
        "createdAt": "21.02.2022",
        "userId": "1",
        "type": [
            "IT"
        ],
        "blocks": [],
        "user": {
            "id": "1",
            "username": "admin",
            "password": "123",
            "roles": [
                "ADMIN"
            ],
            "features": {
                "isArticleRatingEnabled": true,
                "isCounterEnabled": true,
                "isAppRedesigned": true
            },
            "jsonSettings": {
                "isArticlePageWasOpened": true,
                "theme": "app_orange_theme"
            },
            "avatar": "https://img2.reactor.cc/pics/post/full/Bebop-Bebop-and-Rocksteady-TMNT-%D1%84%D1%8D%D0%BD%D0%B4%D0%BE%D0%BC%D1%8B-5457666.jpeg"
        }
    },
    {
        "id": "4",
        "title": "Scala news",
        "subtitle": "Что нового в Scala за 2021 год?",
        "img": "https://www.osp.ru/FileStorage/DOCUMENTS_ILLUSTRATIONS/13187971/original.jpg",
        "views": 10222,
        "createdAt": "24.01.2022",
        "userId": "1",
        "type": [
            "IT"
        ],
        "blocks": [],
        "user": {
            "id": "1",
            "username": "admin",
            "password": "123",
            "roles": [
                "ADMIN"
            ],
            "features": {
                "isArticleRatingEnabled": true,
                "isCounterEnabled": true,
                "isAppRedesigned": true
            },
            "jsonSettings": {
                "isArticlePageWasOpened": true,
                "theme": "app_orange_theme"
            },
            "avatar": "https://img2.reactor.cc/pics/post/full/Bebop-Bebop-and-Rocksteady-TMNT-%D1%84%D1%8D%D0%BD%D0%B4%D0%BE%D0%BC%D1%8B-5457666.jpeg"
        }
    }
]

export default {
    title: 'pages/ArticlesPage/ArticleInfiniteList',
    component: ArticleInfiniteList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoreDecorator({})],
} as ComponentMeta<typeof ArticleInfiniteList>;

const Template: ComponentStory<typeof ArticleInfiniteList> = (args) => (
    <ArticleInfiniteList {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};

export const NormalRedesigned = Template.bind({});
NormalRedesigned.args = {};
NormalRedesigned.decorators = [NewDesignDecorator, StoreDecorator({
    user: {
        authData: { id: '1' },
    },
    articlesPage: {
        view: ArticleView.BIG
    }
})]
NormalRedesigned.parameters = {
    mockData: [
        {
            url: `${__API__}/articles`,
            method: 'GET',
            status: 200,
            response: articles,
        },
    ],
};