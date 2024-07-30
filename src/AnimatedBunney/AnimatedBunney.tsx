import { WholeBunney } from '@/common/styled'
import * as S from './styled'
export interface BunneyProps {
    color?: string
    earColor?: string
    eyeColor?: string
}
export const AnimatedBunney = ({ color, earColor, eyeColor }: BunneyProps) => {
    return (
        <WholeBunney>
            <S.EarWrapper>
                <S.Ear dir="left" earColor={earColor} />
                <S.Ear dir="right" earColor={earColor} />
            </S.EarWrapper>
            <S.FaceWrapper color={color}>
                <S.EyeWrapper>
                    <S.Eye eyeColor={eyeColor}>
                        <StartIcon />
                    </S.Eye>
                    <S.Eye eyeColor={eyeColor}>
                        <StartIcon />
                    </S.Eye>
                </S.EyeWrapper>
            </S.FaceWrapper>
        </WholeBunney>
    )
}
