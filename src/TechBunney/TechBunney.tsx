
import { Mackey, MackeyProps } from '@/common/Mackey';
import * as S from './styled'

import { Bunney, BunneyProps } from '@/common/Bunney';

export interface TechBunneyProps extends BunneyProps,MackeyProps{

}
export const TechBunney = ({size,color,earColor,eyeColor}:TechBunneyProps) => {
    return (
        <S.TechWrapper>
            <Bunney color={color} earColor={earColor} eyeColor={eyeColor}/>
            <S.MacWrapper>
                <Mackey size={size}/>
            </S.MacWrapper>
        </S.TechWrapper>
    )
}