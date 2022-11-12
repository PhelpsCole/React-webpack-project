import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { ThunkConf } from 'app/providers/StoreProvider';
import { getArticleDetailData } from 'entities/Article';
import { Comment } from 'entities/Comment';
import {
    fetchCommentsByArticleId,
} from '../../services/fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addNewCommentArticle = createAsyncThunk<
    Comment,
    string,
    ThunkConf<string>
    >(
        'articleDetail/addNewCommentArticle',
        async (text, thunkAPI) => {
            const {
                extra,
                dispatch,
                rejectWithValue,
                getState,
            } = thunkAPI;

            const userData = getUserAuthData(getState());
            const article = getArticleDetailData(getState());

            if (!userData || !text || !article) {
                rejectWithValue('error');
            }

            try {
                const response = await extra.api.post<Comment>('/comments', {
                    articleId: article?.id,
                    userId: userData?.id,
                    text,
                });
                if (!response.data) {
                    throw new Error();
                }

                dispatch(fetchCommentsByArticleId(article?.id));

                return response.data;
            } catch (e) {
                return rejectWithValue('error');
            }
        },
    );
