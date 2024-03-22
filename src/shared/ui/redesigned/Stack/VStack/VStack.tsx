import { Flex, FlexProps } from '../Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction'>;

/**
 * Компонент-обертка для вертикального позиционирования элементов
 * @param className - проброс класса сверху
 * @param children - содержимое стека
 * @param justify 
 * @param align
 * @param gap - отступ (4/8/16/32)
 * @param max - полная ширина?
 * @param maxHeight - полная высота?
*/

export const VStack = (props: VStackProps) => {
    const { align = 'start' } = props;
    return <Flex direction="column" align={align} {...props} />;
};
