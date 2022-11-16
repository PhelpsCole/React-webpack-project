import { useTranslation } from 'react-i18next';
import { memo, useState } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { classNames } from 'shared/lib/classNames/classNames';

interface MainPageProps {
    className?: string;
}

const MainPage = memo(({ className } : MainPageProps) => {
    const { t } = useTranslation();
    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <div className={classNames('', {}, [className])}>
            <Text
                title={t('Главная страница')}
                text={t('Вступительный текст')}
            />
        </div>
    );
});

export default MainPage;
