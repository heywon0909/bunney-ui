import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import * as S from './styled'
import gsap from 'gsap'
import StartIcon from '/src/assets/Start.svg?react'
import { WholeBunney } from '@/common/styled'
export interface BunneyProps {
    color?: string
    earColor?: string
    eyeColor?: string
}
gsap.registerPlugin(useGSAP)
export const ColorBunney = ({ color, earColor, eyeColor }: BunneyProps) => {
    const boxRef = useRef<HTMLDivElement>(null)
    useGSAP(
        () => {
            // Target the two specific elements we have asigned the animate class
            gsap.to(boxRef.current, {
                rotation: 360,
                x: '100vw',
                xPercent: 0,
                // special properties
                duration: 2.5, // how long the animation lasts
                repeat: -1, // the number of repeats - this will play 3 times
                yoyo: true, // this will alternate back and forth on each repeat. Like a yoyo
            })
        },
        { scope: boxRef }
    ) //

    return (
        <WholeBunney ref={boxRef}>
            <S.EarWrapper>
                <S.Ear dir="left" earColor={earColor} />
                <S.Ear dir="right" earColor={earColor} />
            </S.EarWrapper>
            <S.FaceWrapper color={color}>
                <S.EyeWrapper>
                    <S.Eye eyeColor={eyeColor}>
                        <StartIcon
                            className="box"
                            ref={
                                boxRef as unknown as React.RefObject<SVGSVGElement>
                            }
                        />
                    </S.Eye>
                    <S.Eye eyeColor={eyeColor}>
                        <StartIcon
                            className="box"
                            ref={
                                boxRef as unknown as React.RefObject<SVGSVGElement>
                            }
                        />
                    </S.Eye>
                </S.EyeWrapper>
            </S.FaceWrapper>
        </WholeBunney>
    )
}
