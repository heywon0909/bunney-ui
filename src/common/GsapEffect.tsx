import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { forwardRef, useRef } from 'react'
interface Props {
    children: React.ReactNode
    effect: 'pulse' | 'spin' | 'shake'
    targetRef?: React.RefObject<HTMLDivElement>
    vars?: unknown
}
export const GsapEffect = forwardRef(
    ({ children, effect, targetRef, vars }: Props, ref) => {
        const animation = useRef()

        useGSAP(() => {
            if (gsap.effects[effect]) {
                const t = gsap.effects[effect](targetRef?.current, vars)
                animation.current = t
            }
        }, [effect, targetRef, vars])

        useGSAP(() => {
            // forward the animation instance if a ref is passed
            if (typeof ref === 'function') {
                ref(animation.current)
            } else if (ref) {
                ref.current = animation.current
            }
        }, [ref])

        return <>{children}</>
    }
)
