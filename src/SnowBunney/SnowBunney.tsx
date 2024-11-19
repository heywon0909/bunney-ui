import * as S from './styled'
import { Logo } from '@/common/Logo'
import { SparkleEye } from '@/common/SparkleEye'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import gsap from 'gsap'

gsap.registerPlugin(useGSAP)
export const SnowBunney = () => {
    const container = useRef<HTMLDivElement>(null)
    useGSAP(
        () => {
            // Target the two specific elements we have asigned the animate class
            gsap.to("[data-animate='rotate-1']", {
                rotation: -360,
                repeat: -1,
                repeatDelay: 1,
                yoyo: true,
            })
            gsap.to("[data-animate='rotate-2']", {
                rotation: -360,
                repeat: -1,
                repeatDelay: 1,
                yoyo: true,
            })
        },
        { scope: container }
    ) //
    return (
        <S.WholeBunney ref={container}>
            <Logo size={7} color={'linear-gradient(#ffffff, #cccccc)'}>
                <SparkleEye />
            </Logo>
            <S.Body />
            <S.Arm data-animate="rotate-2" dir="left" />
            <S.RightArm data-animate="rotate-1" dir="right" />
        </S.WholeBunney>
    )
}
