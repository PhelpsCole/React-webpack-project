import { classNames } from 'shared/lib/helpers/classNames/classNames';
import './Loader.scss';

interface LoaderProps {
    className?: string;
}

export const Loader = ({ className }: LoaderProps) => (
    <div className={classNames('lds-hourglass', {}, [className])} />
);
