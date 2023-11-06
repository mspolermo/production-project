import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { validateProfileData } from './validateProfileData';
import { ValidateProfileError } from '../../consts/consts';

const data = {
    username: 'admin',
    age: 29,
    country: Country.Russia,
    lastname: 'lastname',
    first: 'firstname',
    city: 'Moscow',
    currency: Currency.RUB,
    avatar: '',
};

describe('validateProfileData.test', () => {
    test('success ', async () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });
    test('without first and last name ', async () => {
        const result = validateProfileData({ ...data, first: '', lastname: '' });

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });
    test('incorrect age', async () => {
        const result = validateProfileData({ ...data, age: undefined });

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_AGE]);
    });
    test('incorrect country', async () => {
        const result = validateProfileData({ ...data, country: undefined });

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_COUNTRY]);
    });
    test('incorrect all', async () => {
        const result = validateProfileData({});

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_USER_AGE,
            ValidateProfileError.INCORRECT_USER_COUNTRY,
        ]);
    });
});
