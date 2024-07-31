import { WholeBunney } from '@/common/styled'
import * as S from './styled'
import { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import StartIcon from '../../public/Start.svg?react'
import { GsapEffect } from '@/common/GsapEffect'

export interface BunneyProps {
    color?: string
    earColor?: string
    eyeColor?: string
}
gsap.registerPlugin(useGSAP)

export const AnimatedBunney = ({ color, earColor, eyeColor }: BunneyProps) => {
    const container = useRef<HTMLDivElement>(null)
    const boxRef = useRef<HTMLDivElement>(null)

    const [effect] = useState<'pulse' | 'shake' | 'spin'>('pulse')

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

    gsap.registerEffect({
        name: 'pulse',
        effect(targets: gsap.TweenTarget) {
            return gsap.fromTo(
                targets,
                {
                    scale: 1,
                },
                {
                    scale: 1.4,
                    repeat: -1,
                    ease: 'bounce',
                    yoyoEase: 'power3',
                    yoyo: true,
                    repeatDelay: 1,
                }
            )
        },
    })
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
                    <GsapEffect targetRef={boxRef} effect={effect}>
                        <S.Eye eyeColor={eyeColor} ref={boxRef}>
                            <StartIcon
                                className="box"
                                ref={
                                    boxRef as unknown as React.RefObject<SVGSVGElement>
                                }
                            />
                        </S.Eye>
                    </GsapEffect>
                    <GsapEffect targetRef={boxRef} effect={effect}>
                        <S.Eye eyeColor={eyeColor} ref={boxRef}>
                            <StartIcon
                                className="box"
                                ref={
                                    boxRef as unknown as React.RefObject<SVGSVGElement>
                                }
                            />
                        </S.Eye>
                    </GsapEffect>
                </S.EyeWrapper>
            </S.FaceWrapper>
        </WholeBunney>
    )
}
