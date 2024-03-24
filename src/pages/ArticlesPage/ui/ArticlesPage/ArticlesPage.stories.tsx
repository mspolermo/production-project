import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import ArticlesPage from './ArticlesPage';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { Article, ArticleBlockType, ArticleSortField, ArticleType, ArticleView } from '@/entities/Article';

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
        "blocks": [
            {
                "id": "1",
                "type": "TEXT",
                "title": "Заголовок этого блока",
                "paragraphs": [
                    "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
                    "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
                    "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"
                ]
            }
        ],
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
        "blocks": [
            {
                "id": "1",
                "type": "TEXT",
                "title": "Заголовок этого блока",
                "paragraphs": [
                    "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
                    "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
                    "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"
                ]
            }
        ],
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
        "blocks": [
            {
                "id": "1",
                "type": "TEXT",
                "title": "Заголовок этого блока",
                "paragraphs": [
                    "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
                    "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
                    "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"
                ]
            }
        ],
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
        "blocks": [
            {
                "id": "1",
                "type": "TEXT",
                "title": "Заголовок этого блока",
                "paragraphs": [
                    "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
                    "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
                    "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"
                ]
            }
        ],
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
const article: Article = {
    id: '1',
    title: 'Javascript news',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    createdAt: '26.02.2022',
    type: [ArticleType.IT],
    user: {
        id: '1',
        username: 'mspolermo',
    },
    blocks: [
        {
            id: '1',
            type: ArticleBlockType.TEXT,
            title: 'Заголовок этого блока',
            paragraphs: [
                'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
            ],
        },
        {
            id: '4',
            type: ArticleBlockType.CODE,
            code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
        },
        {
            id: '5',
            type: ArticleBlockType.TEXT,
            title: 'Заголовок этого блока',
            paragraphs: [
                'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
            ],
        },
    ],
};

export default {
    title: 'pages/ArticlesPage/ArticlesPage',
    component: ArticlesPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator, StoreDecorator({})],
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = (args) => (
    <ArticlesPage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};

export const NormalRedesigned = Template.bind({});
NormalRedesigned.args = {
};
NormalRedesigned.decorators = [
    NewDesignDecorator
]
NormalRedesigned.parameters = {
    mockData: [
        {
            url: `${__API__}/articles?_expand=user&_limit=4&_page=1&_sort=createdAt&_order=asc&q=&type=IT`,
            method: 'GET',
            status: 200,
            response: articles,
        },
    ],
};
