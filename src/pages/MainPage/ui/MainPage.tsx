/* eslint-disable i18next/no-literal-string */
import { BugButton } from 'app/providers/ErrorBoundary';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

const MainPage = () => {
    const { t } = useTranslation('main');
    const [value, setValue] = useState('');

    const onCHange = (val: string) => {
        setValue(val);
    };

    return (
        <div>
            {t('Главная страница')}
            <BugButton />
        </div>
    );
};

export default MainPage;
