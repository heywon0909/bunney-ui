import * as S from './styled'
export interface LogoProps{
    color?: string;
    size?: number;
}
export const Logo = ({color,size}:LogoProps) => {
    return (
        <S.WholeBunney>
            <S.EarWrapper>
                <S.Ear dir="left" earColor={color} size={size} />
                <S.Ear dir="right" earColor={color} size={size}/>
            </S.EarWrapper>
            <S.FaceWrapper color={color} size={size} />
        </S.WholeBunney>
    )
}
