import { SparkleEye } from '@/common/SparkleEye'
import { RowWrapper } from '@/common/styled'
import { Logo } from '@/Logo'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import gsap from 'gsap'

gsap.registerPlugin(useGSAP)
export const BunneyLoading = () => {
    const bunneyArr = ['linear-gradient(#5653dd, #95d2ff)','linear-gradient(#5653dd, #95d2ff)','linear-gradient(#5653dd, #95d2ff)']
    const bunneys  = bunneyArr.map((v,i)=>({key:i,value:v}))
    const containers = useRef<Array<HTMLDivElement>>([]);


  
    useGSAP(() => {
        containers.current.map((v,i) => {
            gsap.fromTo(v,  {ease: "bounce.inOut", y: -12 * i },
            {yoyo:true,repeat:-1, duration: 0.5,y: -200}
        )    
        })
        
    },{scope:containers})


    return (
        <RowWrapper>
            {bunneys.map(({key,value}) => {
                return (
                    <div ref={el => {
                        if(el) containers.current.push(el)
                    }} key={key}>
                    <Logo color={value} size={9}>
                        <SparkleEye />
                    </Logo>
                    </div>    
                )
            })}
        </RowWrapper>    
    )
    
}