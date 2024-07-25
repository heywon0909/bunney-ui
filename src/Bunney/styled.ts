import styled from '@emotion/styled'

export const WholeBunney = styled.div`
    display: flex;
    flex-direction: column;
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
export const Ear = styled.div<{ dir: 'left' | 'right' }>`
    margin: 0;
    width: 46px;
    height: 80px;
    border-radius: 50%;
    background: linear-gradient(#7f21ab, #103ee2);
    transform: ${({ dir }) =>
        dir === 'right' ? 'rotate(54deg)' : 'rotate(306deg)'};
`
export const FaceWrapper = styled.div`
    margin: 0;
    width: 117px;
    height: 102px;
    background: linear-gradient(#3531ff, #cf5cc4);
    border-radius: 75%;
`

export const EyeWrapper = styled.div`
    position: relative;
    top: 50%;
    left: 30%;
    width: 44px;
    display: flex;
    justify-content: space-between;
`

export const Eye = styled.div`
    width: 9px;
    height: 10px;
    background: linear-gradient(#550098, #1c0032);
    border-radius: 5px;
    position: relative;
    display: inline-flex;
    padding-top: 2px;
`
