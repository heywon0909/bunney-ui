
import { Bunney } from '@/common/Bunney'
import SmileIcon from '../../public/Smile.svg?react'
import * as S from './styled'

export interface SmileyBunneyProps {
    color?: string
}
export const SmileyBunney = ({ color }: SmileyBunneyProps) => {
    return (
        <S.WholeShape>
            <Bunney color={color} earColor={color} />
            <S.SmileWrapper>
                <SmileIcon />
            </S.SmileWrapper>
        </S.WholeShape>
    )
}
