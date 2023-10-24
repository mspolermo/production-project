import { Profile } from 'entities/Profile/model/types/profile';

export enum ValidateProfileError {
    NO_DATA = 'NO_DATA',
    SERVER_ERROR = 'SERVER_ERROR',
    INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
    INCORRECT_USER_AGE = 'INCORRECT_USER_AGE',
    INCORRECT_USER_COUNTRY = 'INCORRECT_USER_COUNTRY'
}

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
    validateErrors?: ValidateProfileError[];
}
