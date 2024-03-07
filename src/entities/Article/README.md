## Сущность статьи

Описание:
Статья. Список статей.

#### Public api

- UI Components

`ArticleDetails` - Компонент с информацией о статье (детальный просмотр статьи)

`ArticleList` -  Компонент со списком статей

`ArticleListItem` -  Компонент кратким видом 1 статьи (для списка) и скелетонами

`ArticleCodeBlockComponent` - Компонент для отображения блока с кодом в детальном просмотре статьи

`ArticleImageBlockComponent` - Компонент для отображения изображения в детальном просмотре статьи

`ArticleTextBlockComponent`- Компонент вывода в детальном просмотре статьи

##### Model

- Types

`Article` - Тип, описывающий статью

`ArticleDetailsSchema` - Асинхронные типы для загрузки статьи

- Selectors

`getArticleDetailsData` - Селектор для получения информации о текущей открытой статье
`getArticleDetailsIsLoading` - Селектор для получения информации о загрузки статьи
`getArticleDetailsError` - Селектор для получения информации об ошибке в ходе загрузки

- Slice

`articleDetailsSlice` - Слайз для загрузки статьи (redux)

- Consts

`ArticleSortField` - Виды сортировок в списке статей
`ArticleBlockType` - Виды блоков информации в детальном просмотре статьи
`ArticleType` - Тематика статьи
`ArticleView` - Виды карточек в списке статей
