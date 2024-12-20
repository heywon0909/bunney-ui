import { CSSProperties } from 'react'
import * as S from './styled'
import StartIcon from '/src/assets/Start.svg?react'
import { WholeBunney } from '@/common/styled'

export interface BunneyProps {
    color?: string
    earColor?: string
    eyeColor?: string
    styles?: CSSProperties
}
export const Bunney = ({ color, earColor, eyeColor, styles }: BunneyProps) => {
    return (
        <WholeBunney>
            <S.EarWrapper>
                <S.Ear dir="left" earColor={earColor} />
                <S.Ear dir="right" earColor={earColor} />
            </S.EarWrapper>
            <S.FaceWrapper color={color} style={styles}>
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
