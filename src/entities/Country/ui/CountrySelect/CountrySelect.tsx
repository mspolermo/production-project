import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox } from 'shared/ui/Popups';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
    className? : string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}
const options = [
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Ukraine, content: Country.Ukraine },
];

export const CountrySelect = memo(({
    className, value, onChange, readonly,
}: CountrySelectProps) => {
    const { t } = useTranslation('profile');
    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <ListBox
            className={className}
            onChange={onChangeHandler}
            readonly={readonly}
            value={value}
            defaultValue={t('Укажите страну')}
            label={t('Укажите страну')}
            items={options}
        />
    );
});
