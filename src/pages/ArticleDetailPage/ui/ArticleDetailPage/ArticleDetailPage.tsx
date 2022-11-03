import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';

interface ArticleDetailPageProps {
    className?: string;
}

const ArticleDetailPage = ({ className }: ArticleDetailPageProps) => {
    const { t } = useTranslation('articles');
    const { id } = useParams<{ id: string }>();
    if (!id) {
        return (
            <div className={classNames('', {}, [className])}>
                {t('Статья не найдена')}
            </div>
        );
    }
    return (
        <div className={classNames('', {}, [className])}>
            <ArticleDetails id={id} />
        </div>
    );
};

export default memo(ArticleDetailPage);
