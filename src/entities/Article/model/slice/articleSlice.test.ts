import { ArticleBLockType, ArticleType } from 'entities/Article/model/types/article';
import {
    fetchArticleById,
} from 'entities/Article/model/services/fetchArticleById/fetchArticleById';
import { ArticleDetailSchema } from '../types/articleDetailSchema';
import { articleDetailReducer, articleDetailActions } from './articleSlice';

describe('articleSlice.test', () => {
    test('test update article service pending', () => {
        const state: DeepPartial<ArticleDetailSchema> = {
            isLoading: false,
        };

        expect(articleDetailReducer(
            state as ArticleDetailSchema,
            fetchArticleById.pending,
        )).toEqual({
            isLoading: true,
            validateErrors: undefined,
        });
    });
});
