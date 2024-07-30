import { WholeBunney } from '@/common/styled'
import * as S from './styled'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import StartIcon from '../../public/Start.svg?react'
// import { Box } from '@/common/Box'
export interface BunneyProps {
    color?: string
    earColor?: string
    eyeColor?: string
}
gsap.registerPlugin(useGSAP)
export const AnimatedBunney = ({ color, earColor, eyeColor }: BunneyProps) => {
    const container = useRef<HTMLDivElement>(null)

    useGSAP(
        () => {
            // Target the two specific elements we have asigned the animate class
            gsap.to("[data-animate='rotate-1']", {
                rotation: 40,
                repeat: -1,
                repeatDelay: 1,
                yoyo: true,
            })
            gsap.to("[data-animate='rotate-2']", {
                rotation: -40,
                repeat: -1,
                repeatDelay: 1,
                yoyo: true,
            })
        },
        { scope: container }
    ) //

    return (
        <WholeBunney>
            <S.EarWrapper ref={container}>
                <S.Ear dir="left" earColor={earColor} data-animate="rotate-2" />
                <S.Ear
                    dir="right"
                    earColor={earColor}
                    data-animate="rotate-1"
                />
            </S.EarWrapper>
            <S.FaceWrapper color={color}>
                <S.EyeWrapper>
                    <S.Eye eyeColor={eyeColor}>
                        <StartIcon className="box" />
                    </S.Eye>
                    <S.Eye eyeColor={eyeColor}>
                        <StartIcon className="box" />
                    </S.Eye>
                </S.EyeWrapper>
            </S.FaceWrapper>
        </WholeBunney>
    )
}
