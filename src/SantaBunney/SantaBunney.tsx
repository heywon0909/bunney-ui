import { Bunney, BunneyProps } from '@/common/Bunney'
import * as S from './styled'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'

gsap.registerPlugin(useGSAP)
export interface SantaBunneyProps extends BunneyProps {}
export const SantaBunney = ({
    color,
    earColor,
    eyeColor,
}: SantaBunneyProps) => {
    const container = useRef<HTMLDivElement>(null)
    const lipContainer = useRef<HTMLDivElement>(null)

    useGSAP(
        () => {
            var tl = gsap.timeline({
                defaults: { repeat: -1, ease: 'expo.out', yoyo: true },
            })

            tl.to(container.current, { rotation: -10 }) //child tweens will inherit the duration and from the parent timeline!
                .to(container.current, { rotation: 15 })
                .to(container.current, { rotation: -10 })
        },
        { scope: container }
    ) //

    useGSAP(
        () => {
            gsap.fromTo(
                lipContainer.current,
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
        { scope: lipContainer }
    ) //

    useGSAP
    return (
        <S.WholeBunney>
            <S.Hat ref={container}>
                <S.HatTop />
                <S.HatBottom />
            </S.Hat>
            <Bunney color={color} earColor={earColor} eyeColor={eyeColor} />
            <S.Curl>
                <S.Lip ref={lipContainer} />
            </S.Curl>
        </S.WholeBunney>
    )
}
