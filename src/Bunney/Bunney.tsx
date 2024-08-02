import { BunneyProps as CommmonBunneyProps, Bunney as CommonBunney } from '@/common/Bunney'

export interface BunneyProps extends CommmonBunneyProps{}
export const Bunney = ({ color, earColor, eyeColor }: BunneyProps) => {
    return (
        <CommonBunney color={color} earColor={earColor} eyeColor={eyeColor} />
    )
}
