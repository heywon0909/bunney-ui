
import * as S from './styled'
import { Bunney } from '../Bunney';
import { Mackey } from '../Mackey';
import { BunneyProps } from '../Bunney/Bunney';
import { MackeyProps } from '../Mackey/Mackey';

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