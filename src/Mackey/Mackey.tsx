import {Mackey as CommonMackey,MackeyProps as MackeyCommonProps} from '@/common/Mackey'
export interface MackeyProps extends MackeyCommonProps{
}
export const Mackey = ({size,color}:MackeyProps) => {
    return (
        <CommonMackey size={size} color={color} />
    )
}