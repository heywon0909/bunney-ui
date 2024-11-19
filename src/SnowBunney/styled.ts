import { ColumnWrapper } from '@/common/styled'
import styled from '@emotion/styled'

export const WholeBunney = styled(ColumnWrapper)`
    justify-content: center;
    align-items: center;
    gap: 0;
    position: relative;
`

export const Body = styled.div`
    position: absolute;
    width: 144px;
    height: 120px;
    background: linear-gradient(#ffffff, #cccccc);
    border-radius: 9rem;
    top: 85%;
`

export const Arm = styled.div`
    width: 30px;
    height: 4px;
    transform: rotate(45deg);
    background: #45302d;
    position: absolute;
    top: 129%;
    left: -45px;
`
export const RightArm = styled.div`
    width: 30px;
    height: 4px;
    transform: rotate(145deg);
    background: #45302d;
    position: absolute;
    top: 129%;
    left: 110px;
`
