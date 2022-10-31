import { Suspense, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInitialised, userActions } from 'entities/User';
import { AppRouter } from './providers/router';

const App = () => {
    const dispatch = useDispatch();
    const initialised = useSelector((getUserInitialised));

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);
    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    {initialised && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
};

export default App;
