import * as S from './styled'
export interface LogoProps{
    color?: string;
    size?: number;
    children?: React.ReactNode;
}
export const Logo = ({color,size,children}:LogoProps) => {
    return (
        <S.WholeBunney>
            <S.EarWrapper>
                <S.Ear dir="left" earColor={color} size={size} />
                <S.Ear dir="right" earColor={color} size={size}/>
            </S.EarWrapper>
            <S.FaceWrapper color={color} size={size} >
                {children}
            </S.FaceWrapper>
        </S.WholeBunney>
    )
}
