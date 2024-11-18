import { ColumnWrapper } from '@/common/styled'
import styled from '@emotion/styled'

export const Hat = styled.div`
    width: 0px;
    height: 0px;
    border-bottom: calc(39px * 1.732) solid #ff0000;
    border-left: 41px solid transparent;
    border-right: 40px solid transparent;
    z-index: 1000;
    position: relative;
`
export const HatTop = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 1rem;
    background: #f5eded;
    position: absolute;
    top: -5%;
`
export const HatBottom = styled.div`
    width: 84px;
    height: 20px;
    background: #f5eded;
    position: absolute;
    top: 48px;
    left: -41px;
    border-radius: 0.2rem;
`
export const WholeBunney = styled(ColumnWrapper)`
    justify-content: center;
    align-items: center;
    gap: 0;
    position: relative;
`

export const Lip = styled.div`
    width: 20px;
    height: 10px;
    background: red;
    position: absolute;
    left: 40%;
    top: 10%;
    border-radius: 0.3rem;
`
export const Curl = styled.div`
    position: relative;
    height: 70px;
    top: -31px;
    width: 108px;
    background-color: #f5eded;
    clip-path: polygon(
        50% 0%,
        /* 위 중앙 */ 100% 0%,
        /* 위 오른쪽 */ 100% 70%,
        /* 오른쪽 중간 */ 90% 75%,
        95% 85%,
        85% 90%,
        90% 95%,
        80% 100%,
        70% 95%,
        60% 100%,
        50% 95%,
        40% 100%,
        30% 95%,
        20% 100%,
        10% 95%,
        15% 90%,
        5% 85%,
        10% 75%,
        0% 70%,
        /* 왼쪽 중간 */ 0% 0%,
        /* 위 왼쪽 */ 50% 0% /* 위 중앙으로 돌아오기 */
    );
    -webkit-clip-path: polygon(
        50% 0%,
        100% 0%,
        100% 70%,
        90% 75%,
        95% 85%,
        85% 90%,
        90% 95%,
        80% 100%,
        70% 95%,
        60% 100%,
        50% 95%,
        40% 100%,
        30% 95%,
        20% 100%,
        10% 95%,
        15% 90%,
        5% 85%,
        10% 75%,
        0% 70%,
        0% 0%,
        50% 0%
    );
`
