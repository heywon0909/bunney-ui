import * as S from './styled'
import StartIcon from '../../public/Start.svg?react'
export const Bunney = () => {
    return (
        <S.WholeBunney>
            <S.EarWrapper>
                <S.Ear dir="left" />
                <S.Ear dir="right" />
            </S.EarWrapper>
            <S.FaceWrapper>
                <S.EyeWrapper>
                    <S.Eye>
                        <StartIcon />
                    </S.Eye>
                    <S.Eye>
                        <StartIcon />
                    </S.Eye>
                </S.EyeWrapper>
            </S.FaceWrapper>
        </S.WholeBunney>
    )
}
