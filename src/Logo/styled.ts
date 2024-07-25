import styled from '@emotion/styled'
import { ColumnWrapper, Face } from '../common/styled'

export const WholeBunney = styled(ColumnWrapper)`
    justify-content: center;
    align-items: center;
    gap: 0;
    position: relative;
`

export const EarWrapper = styled.div`
    display: flex;
    position: absolute;
    top: -39%;
`
export const Ear = styled.div<{
    dir: 'left' | 'right'
    earColor?: string
    size?: number
}>`
    margin: 0;
    width: ${({ size }) => (size ? size * 4 + 'px' : '46px')};
    height: ${({ size }) => (size ? size * 8 + 'px' : '80px')};
    border-radius: 50%;
    background: ${({ earColor }) =>
        earColor ? earColor : 'linear-gradient(#7f21ab, #103ee2)'};
    transform: ${({ dir }) =>
        dir === 'right' ? 'rotate(54deg)' : 'rotate(306deg)'};
`
export const FaceWrapper = styled.div<{ color?: string; size?: number }>`
    ${Face};
    width: ${({ size }) => (size ? 13 * size + 'px' : '117px')};
    height: ${({ size }) => (size ? 11 * size + 'px' : '102px')};
    background: ${({ color }) =>
        color ? color : 'linear-gradient(#3531ff, #cf5cc4)'};
`
