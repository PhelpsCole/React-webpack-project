import { useTranslation } from 'react-i18next';
import { memo, useState } from 'react';
import { Text } from 'shared/ui/Text/Text';

const MainPage = memo(() => {
    const { t } = useTranslation();
    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <Text
            title={t('Главная страница')}
            text={t('Вступительный текст')}
        />
    );
});

export default MainPage;
