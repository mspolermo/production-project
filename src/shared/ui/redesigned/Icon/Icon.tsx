import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

/**
 * Компонент для добавления иконок/ иконок как кнопок с действием
 * @param className - проброс класса сверху
 * @param Svg - ипортированная иконка
 * @param clickable - иконка-кнопка?
 * @param onClick -выполняемая функция для иконки-кнопки
*/

type SvgProps = Omit<React.SVGProps<SVGSVGElement>, 'onClick'>

interface IconBaseProps extends SvgProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

interface NonClickableIconProps extends IconBaseProps {
    clickable?: false;
}

interface clickableIconProps extends IconBaseProps {
    clickable?: true;
    onClick: () => void;
}

type IconProps = NonClickableIconProps | clickableIconProps;

export const Icon = memo((props: IconProps) => {
    const { className, Svg, width = 32, height = 32, clickable, ...otherProps } = props;

    const icon = (<Svg
        className={classNames(cls.Icon, {}, [
            className,
        ])}
        width={width}
        height={height}
        {...otherProps}
        onClick={undefined}
    />);

    if (clickable) {
        return (
            <button
                type='button'
                className={cls.button}
                onClick={props.onClick}
                style={{height, width}}
            >
                {icon}
            </button>
        )
    }

    return icon;
});
