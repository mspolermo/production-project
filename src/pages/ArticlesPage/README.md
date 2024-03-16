## Страница "Список статей"

Описание:
Список статей с "бесконечной" лентой, фльтрами, сортировкой и поиском

#### Public api

- UI Components

`ArticleInfiniteList` - Постепенная подгрузка следующей партии статей
`ArticlesPage` - Компонент списка статей
`ArticlesPageFilters` - Фильтры статей (старый дизайн)
`FiltersContainer` - Фильтры статей (новый дизайн)
`ViewSelectorContainer` - Компонент для смены вида отображения статей

##### Model

- Selectors

`articlesPageSelector` - Селекторы для получения данных


- Services

`fetchArticlesList` - Асинх Фанк для загрузки списка статей
`fetchNextArticlesPage` - Асинх фанк для подгрузки следующей порции статей
`initArticlesPage` - Фильтры,сортировка, поиск

- Slices

`getArticles` - Слайз для получения статей

- Types

`ArticlesPageSchema` - Типизация компонента
