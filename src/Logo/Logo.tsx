import {Logo as LogoCommon,LogoProps as LogoCommonProps} from '@/common/Logo'
export interface LogoProps extends LogoCommonProps{

}
export const Logo = ({color,size}:LogoProps) => {
    return (
        <LogoCommon color={color} size={size}/>
    )
}
