import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { TextTheme, Text } from 'shared/ui/Text/Text';
import { getLoginError } from 'features/AuthByUsername/model/selectors/getLoginError/getLoginError';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    getLoginPassword,
} from '../../model/selectors/getLoginPassword/getLoginPassword';
import {
    getLoginIsLoading,
} from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const error = useSelector(getLoginError);
    const isLoading = useSelector(getLoginIsLoading);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [onSuccess, dispatch, username, password]);
    return (
        <DynamicModuleLoader
            reducers={initialReducers}
            removeAfterUnmount
        >
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <Text title={t('?????????? ??????????????????????')} />
                {error && <Text text={t('???????????????? ?????????? ?????? ????????????')} theme={TextTheme.ERROR} />}

                <Input
                    type="text"
                    className={cls.input}
                    placeholder={t('?????????????? ??????????')}
                    onChange={onChangeUsername}
                    value={username}
                />
                <Input
                    type="text"
                    className={cls.input}
                    placeholder={t('?????????????? ????????????')}
                    onChange={onChangePassword}
                    value={password}
                />
                <Button
                    className={cls.loginBtn}
                    theme={ButtonTheme.OUTLINE}
                    onClick={onLoginClick}
                    disabled={isLoading}
                >
                    {t('??????????')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default LoginForm;
