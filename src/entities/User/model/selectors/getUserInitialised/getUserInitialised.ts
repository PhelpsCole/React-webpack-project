import { StateSchema } from 'app/providers/StoreProvider';

export const getUserInitialised = (state: StateSchema) => state.user._initialised;
