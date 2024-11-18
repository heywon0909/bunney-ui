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
export const Ear = styled.div<{ dir: 'left' | 'right'; earColor?: string }>`
    margin: 0;
    width: 46px;
    height: 80px;
    border-radius: 50%;
    background: ${({ earColor }) =>
        earColor ? earColor : 'linear-gradient(#7f21ab, #103ee2)'};
    transform: ${({ dir }) =>
        dir === 'right' ? 'rotate(54deg)' : 'rotate(306deg)'};
    z-index: ${({ dir }) => dir === 'left' && 1};
`
export const FaceWrapper = styled.div<{ color?: string }>`
    ${Face};
    width: 117px;
    height: 102px;
    background: ${({ color }) =>
        color ? color : 'linear-gradient(#3531ff, #cf5cc4)'};
`

export const EyeWrapper = styled.div`
    position: relative;
    top: 50%;
    left: 30%;
    width: 46px;
    display: flex;
    justify-content: space-between;
`

export const Eye = styled.div<{ eyeColor?: string }>`
    min-width: 9px;
    min-height: 10px;
    background: ${({ eyeColor }) =>
        eyeColor ? eyeColor : 'linear-gradient(#550098, #1c0032)'};
    border-radius: 5px;
    position: relative;
    display: inline-flex;
    justify-content: center;
    padding-top: 2px;
`
