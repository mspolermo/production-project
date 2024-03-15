## Страница "Статья"

Описание:
Страница определенной статьи и логика подгрузки данных

#### Public api

- UI Components

`AdditionalInfoContainer` - Компонент с отображением автора статьи, возможности редактирования и количеством просмотров (только для редизайн версии)
`ArticleDetailsComments` - Компонент для создания и отображения комментариев
`ArticleDetailsPage` - Компонент для отображения статьи
`ArticleDetailsPageHeader` - Кнопка "Назад к списку", для возврата к списку статей (только для старого дизайна)
`DetailsContainer` - Контейнер для компонента с отображением статьи (только для редизайн версии)

##### Model

- Selectors

`getCanEditArticle` - Селектор для получения флага возможности редактировать статью для авторизированного пользователя
`getArticleCommentsIsLoading` - Селектор для получения статуса загрузки комментариев
`getArticleCommentsError` - Селектор для получения ошибки в ходе загрузки комментариев
`getArticleRecommendationsIsLoading` - Селектор для получения статуса загрузки рекоммендованных статей
`getArticleRecommendationsError` - Селектор для получения ошибки в ходе загрузки рекоммендованных статей

- Services

`addCommentForArticle` - АсинхФанк для добавления комментария к статье
`fetchArticleRecommendations` - АсинхФанк для загрузки рекоммендаций к статье
`fetchCommentsByArticleId` - АсинхФанк для загрузки комментариев к статье

- Slices

`articleDetailsPageReducer` - Комбинированный редьюсер для получения рекоммендаций и комментариев к статье 

- Types

`ArticleDetailsCommentsSchema` - Типизация для ассинхронной подгрузки комментариев
`ArticleDetailsRecommendationsSchema` - Типизация для ассинхронной подгрузки рекоммендаций к статье