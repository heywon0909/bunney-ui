import gsap from 'gsap'
import * as S from './styled'
import StartIcon from '/src/assets/Start.svg?react'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'

gsap.registerPlugin(useGSAP)
export const NarrowedEyes = () => {
    const rightContainer = useRef<HTMLDivElement>(null)
    const leftContainer = useRef<HTMLDivElement>(null)
    useGSAP(
        () => {
            gsap.fromTo(
                rightContainer.current,
                {
                    duration: 1,
                    stagger: 0.3,
                    scale: 1,
                },
                {
                    duration: 1,
                    stagger: 0.2,
                    yoyo: true,
                    repeatDelay: 2,
                    repeat: -1,
                    scaleY: 0.1,
                }
            )
            // Target the two specific elements we have asigned the animate class
        },
        { scope: rightContainer }
    ) //
    useGSAP(
        () => {
            gsap.fromTo(
                leftContainer.current,
                {
                    duration: 1,
                    stagger: 0.3,
                    scale: 1,
                },
                {
                    duration: 1,
                    stagger: 0.2,
                    yoyo: true,
                    repeatDelay: 2,
                    repeat: -1,
                    scaleY: 0.1,
                }
            )
            // Target the two specific elements we have asigned the animate class
        },
        { scope: leftContainer }
    ) //

    return (
        <S.EyeWrapper width={38}>
            <S.Eye ref={rightContainer} height={10} eyeColor="blue">
                <StartIcon width={100 + 'px'} />
            </S.Eye>
            <S.Eye ref={leftContainer} height={10} eyeColor="blue">
                <StartIcon />
            </S.Eye>
        </S.EyeWrapper>
    )
}
