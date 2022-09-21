import {useTheme, Theme} from 'app/providers/ThemeProvider'
import {classNames} from 'shared/lib/helpers/classNames/classNames';
import cls from './Button.module.scss';
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import {ButtonHTMLAttributes, FC} from 'react'

export enum ThemeButton {
    CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        ...otherProps
    } = props;

    return (
        <button
            className={classNames(cls.Button, {[cls[theme]]: true}, [className])}
            {...otherProps}
        >
            {children}
        </button>
    );
};