interface Props {
    className?: string
    anim: string
    children: React.ReactNode
}
export const Box = ({ children, className, anim }: Props) => {
    return (
        <div className={'box ' + className} data-animate={anim}>
            {children}
        </div>
    )
}
