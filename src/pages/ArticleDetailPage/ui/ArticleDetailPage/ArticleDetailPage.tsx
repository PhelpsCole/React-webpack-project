import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';

interface ArticleDetailPageProps {
    className?: string;
}

const ArticleDetailPage = ({ className }: ArticleDetailPageProps) => {
    const { t } = useTranslation('articles');
    return (
        <div className={classNames('', {}, [className])}>
            {t('ARTICLE DETAILS')}
        </div>
    );
};

export default memo(ArticleDetailPage);
