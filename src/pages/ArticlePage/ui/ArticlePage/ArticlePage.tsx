import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleList } from 'entities/Article';

interface ArticlePageProps {
    className?: string;
}

const ArticlePage = ({ className }: ArticlePageProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames('', {}, [className])}>
            <ArticleList articles={[]} />
        </div>
    );
};

export default memo(ArticlePage);
