## Фича с формой изменения профиля

Описание:

#### Public api

- UI Components

`EditableProfileCard` - Компонент редактируемой карточки профиля
`EditableProfileCardHeader` - Шапка редактируемой карточки профиля

##### Model

- Consts

`ValidateProfileError` - Серверная валидация для полей профиля

- Selectors

`getProfileData` - Селектор для получения данных о возможности редактировать и пр
`getProfileError` - Селектор для получения ошибки при загрузке данных
`getProfileForm` - Селектор для получения данных профиля
`getProfileIsLoading` - Селектор для получения загрузки
`getProfileValidateErrors` - Селектор для получения ошибок валидации
`getProfileReadonly` - Селектор для получения ридонли (возможность редактировать)

- Services

`fetchProfileData` - Асинх фанк для загрузки данных профиля
`updateProfileData` - Асинх фанк для обновления данных профиля
`validateProfileData` - Функция клиентской валидации для редактирования полей профиля

- Slice 

`profileSlice` - Слайз карточки профиля

- Types

`ProfileSchema` - Типизация карточки профиля