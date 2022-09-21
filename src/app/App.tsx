import "./styles/index.scss";
import {useTheme} from 'app/providers/ThemeProvider'
import {classNames} from 'shared/lib/helpers/classNames/classNames'
import {AppRouter} from './providers/router'
import {Navbar} from 'widgets/Navbar'
import {ThemeSwitcher} from 'shared/ui/ThemeSwitcher'

const App = () => {
    const {theme} = useTheme()
    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <AppRouter />
        </div>
    );
};

export default App;