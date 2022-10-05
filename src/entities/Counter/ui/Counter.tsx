import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { useTranslation } from 'react-i18next';
import { counterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector((state: StateSchema) => state.counter.value);

    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    const { t } = useTranslation();

    return (
        <div>
            <h1>
                {t('Значение = ')}
                {counterValue}
            </h1>
            <Button
                onClick={increment}
            >
                {t('увеличить')}
            </Button>
            <Button
                onClick={decrement}
            >
                {t('уменьшить')}
            </Button>
        </div>
    );
};
