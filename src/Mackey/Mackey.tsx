import { Logo } from '../Logo';
import * as S from './styled'
export interface MackeyProps{
    size?: number;
    color?: string;
}
export const Mackey = ({size,color}:MackeyProps) => {
    return (
        <S.Mac size={size}>
            <Logo size={size ? size / 7 : 1.35} color={color || 'linear-gradient(#ff001f 19%,#e511aa 52%,#c03eed 98%)'} />
        </S.Mac>
    )
}