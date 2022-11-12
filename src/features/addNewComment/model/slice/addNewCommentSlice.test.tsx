import { AddNewCommentSchema } from '../types/addNewComment';
import { addNewCommentActions, addNewCommentReducer } from './addNewCommentSlice';

describe('addNewComment.test', () => {
    test('test set text', () => {
        const state: DeepPartial<AddNewCommentSchema> = { text: '123' };
        expect(addNewCommentReducer(
            state as AddNewCommentSchema,
            addNewCommentActions.setText('123123'),
        )).toEqual({ username: '123123' });
    });
});
