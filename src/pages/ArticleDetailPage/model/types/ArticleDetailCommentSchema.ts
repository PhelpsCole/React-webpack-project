import { Comment } from 'entities/Comment';
import { EntityState } from '@reduxjs/toolkit';

export interface ArticleDetailCommentSchema extends EntityState<Comment> {
    isLoading?: boolean;
    error?: string;
}
