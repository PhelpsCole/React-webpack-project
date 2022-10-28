import { classNames, Mods } from 'shared/lib/classNames/classNames';
import React, { InputHTMLAttributes, memo } from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    readOnly?: boolean;
}

export const Input = memo((props : InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        readOnly,
        ...otherProps
    } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const mods: Mods = {
        [cls.readOnly]: readOnly,
    };

    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            {placeholder && (
                <div className={cls.placeholder}>
                    {`${placeholder}>`}
                </div>
            )}
            <div>
                <input
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    className={cls.input}
                    readOnly={readOnly}
                    {...otherProps}
                />
            </div>

        </div>
    );
});
