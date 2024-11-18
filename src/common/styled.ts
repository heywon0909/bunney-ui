import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const ColumnWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const RowWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`

export const WholeBunney = styled(ColumnWrapper)`
    justify-content: center;
    align-items: center;
    gap: 0;
    position: relative;
`

export const Face = css`
    margin: 0;
    border-radius: 75%;
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
export const EyeWrapper = styled.div<{ width?: number }>`
    position: relative;
    top: 50%;
    left: 30%;
    width: ${({ width }) => (width ? width + 'px' : '46px')};
    display: flex;
    justify-content: space-between;
`

export const Eye = styled.div<{ eyeColor?: string; height?: number }>`
    width: 9px;
    height: ${({ height }) => (height ? height + 'px' : '10px')};
    background: ${({ eyeColor }) =>
        eyeColor ? eyeColor : 'linear-gradient(#550098, #1c0032)'};
    border-radius: 5px;
    position: relative;
    display: inline-flex;
    justify-content: center;
    padding-top: 2px;
`
export const Mac = styled.div<{ size?: number }>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${({ size }) => (size ? size * 19 + 'px' : '139px')};
    height: ${({ size }) => (size ? size * 12 + 'px' : '82px')};
    background: linear-gradient(
        #cecece 9%,
        #ebebeb 41%,
        #eeeded 65%,
        #d2cfcf 100%
    );
`
