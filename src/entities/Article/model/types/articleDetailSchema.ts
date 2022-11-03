import { Article } from '../types/article';

export interface ArticleDetailSchema {
    isLoading: boolean;
    error?: string;
    data?: Article;
}
