import styled from '@emotion/styled'

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
