import {useTheme, Theme} from 'app/providers/ThemeProvider'
import {classNames} from 'shared/lib/helpers/classNames/classNames';
import cls from './LangSwitcher.module.scss';
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import {Button, ThemeButton} from "shared/ui/Button/Button";
import {useTranslation} from 'react-i18next';

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = ({className}: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button 
            theme={ThemeButton.CLEAR}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={toggle}
        >
            {t('Язык')}
        </Button>
    )
};