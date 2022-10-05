import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'entities/Counter';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <div>
            <BugButton />
            <Counter />
            {t('Главная страница')}
        </div>
    );
};

export default MainPage;
