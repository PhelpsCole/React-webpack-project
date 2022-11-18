import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConf } from 'app/providers/StoreProvider';
import { getArticlesInited } from 'pages/ArticlePage/module/selectors/articlesPageSelectors';
import { articlesPageAction } from '../../slice/articlePageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<
    void,
    void,
    ThunkConf<string>
    >(
        'articlesPage/initArticlesPage',
        async (_, thunkApi) => {
            const { getState, dispatch } = thunkApi;
            const isInited = getArticlesInited(getState());

            if (!isInited) {
                dispatch(articlesPageAction.initialState());
                dispatch(fetchArticlesList({
                    page: 1,
                }));
            }
        },
    );
