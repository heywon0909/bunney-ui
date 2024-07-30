import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const ColumnWrapper = styled.div`
    display: flex;
    flex-direction: column;
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

export const Eye = styled.div<{ eyeColor?: string }>`
    width: 9px;
    height: 10px;
    background: ${({ eyeColor }) =>
        eyeColor ? eyeColor : 'linear-gradient(#550098, #1c0032)'};
    border-radius: 5px;
    position: relative;
    display: inline-flex;
    padding-top: 2px;
`
