import { classNames } from 'shared/lib/helpers/classNames/classNames';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };
    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <h1>{t('Произошла непредвиденная ошибка')}</h1>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                onClick={reloadPage}
            >
                {t('Обновить страницу')}
            </Button>
        </div>
    );
};
