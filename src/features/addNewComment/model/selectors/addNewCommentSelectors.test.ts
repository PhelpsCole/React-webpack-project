import { StateSchema } from 'app/providers/StoreProvider';
import { getAddNewCommentError, getAddNewCommentText } from './addNewCommentSelectors';

describe('getAddNewCommentText.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            addNewComment: {
                text: 'some comment text',
            },
        };
        expect(getAddNewCommentText(state as StateSchema)).toEqual('some comment text');
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getAddNewCommentText(state as StateSchema)).toEqual(undefined);
    });
});

describe('getAddNewCommentError.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            addNewComment: {
                error: 'error',
            },
        };
        expect(getAddNewCommentError(state as StateSchema)).toEqual('error');
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getAddNewCommentError(state as StateSchema)).toEqual(undefined);
    });
});
