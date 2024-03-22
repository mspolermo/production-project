import { Flex, FlexProps } from '../Flex/Flex';

type HStackProps = Omit<FlexProps, 'direction'>;

/**
 * Компонент-обертка для горизонтального позиционирования элементов
 * @param className - проброс класса сверху
 * @param children - содержимое стека
 * @param justify 
 * @param align
 * @param gap - отступ (4/8/16/32)
 * @param max - полная ширина?
 * @param maxHeight - полная высота?
*/

export const HStack = (props: HStackProps) => {
    return <Flex direction="row" {...props} />;
};
