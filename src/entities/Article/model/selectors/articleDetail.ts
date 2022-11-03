import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleDetailData = (state: StateSchema) => state.articleDetail?.data;
export const getArticleDetailIsLoading = (state: StateSchema) => state.articleDetail?.isLoading
    || false;
export const getArticleDetailError = (state: StateSchema) => state.articleDetail?.error;
