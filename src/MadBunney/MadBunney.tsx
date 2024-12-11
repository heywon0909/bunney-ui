import { RowWrapper } from '@/common/styled'
import { Logo } from '@/Logo'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import gsap from 'gsap'
import { NarrowedEyes } from '@/common/NarrowedEyes'

gsap.registerPlugin(useGSAP)
export interface MadBunneyProps {
    count: number
    color?: string
}
export const MadBunney = ({ count, color }: MadBunneyProps) => {
    const bunneys = Array.from({ length: count }).map((_v, i) => ({
        key: i,
        value: color || 'linear-gradient(to top, #ff0844 0%, #ffb199 100%)',
    }))

    const containers = useRef<Array<HTMLDivElement>>([])

    useGSAP(
        () => {
            containers.current?.map((v, i) => {
                gsap.fromTo(
                    v,
                    { ease: 'bounce.inOut', y: 1 + i, stagger: 0.2 },
                    { yoyo: true, repeat: -1, duration: 0.28, y: -200 }
                )
            })
        },
        { scope: containers }
    )

    return (
        <RowWrapper>
            {bunneys.map(({ key, value }) => {
                return (
                    <div
                        ref={(el) => {
                            if (el) containers.current?.push(el)
                        }}
                        key={key}
                    >
                        <Logo color={value} size={7}>
                            <NarrowedEyes />
                        </Logo>
                    </div>
                )
            })}
        </RowWrapper>
    )
}
