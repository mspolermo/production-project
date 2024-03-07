// виды сортировок в списке статей
export enum ArticleSortField {
    VIEWS = 'views',
    TITLE = 'title',
    CREATED = 'createdAt',
}

// виды блоков информации в детальном просмотре статьи
export enum ArticleBlockType {
    CODE = 'CODE',
    IMAGE = 'IMAGE',
    TEXT = 'TEXT',
}

// тематика статьи
export enum ArticleType {
    ALL = 'ALL',
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    ECONOMICS = 'ECONOMICS',
}
// виды карточек в списке статей
export enum ArticleView {
    BIG = 'BIG',
    SMALL = 'SMALL',
}
