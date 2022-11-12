import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { profileReducer } from 'entities/Profile';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailReducer } from 'entities/Article/model/slice/articleSlice';
import { addNewCommentReducer } from 'features/addNewComment/model/slice/addNewCommentSlice';
import {
    articleDetailCommentReducer,
} from 'pages/ArticleDetailPage/model/slices/articleDetailCommentSlice';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetail: articleDetailReducer,
    addNewComment: addNewCommentReducer,
    articleDetailComments: articleDetailCommentReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList,
) => (StoryComponent: Story) => (
    <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
    >
        <StoryComponent />
    </StoreProvider>
);
