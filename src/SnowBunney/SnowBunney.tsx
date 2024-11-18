import { Bunney } from '@/common/Bunney'
import * as S from './styled'

export const SnowBunney = () => {
    return (
        <S.WholeBunney>
            <Bunney
                color={'linear-gradient(#ffffff, #cccccc)'}
                earColor={'linear-gradient(#ffffff, #cccccc)'}
                eyeColor="linear-gradient(#d268fb, #1c0032)"
            />
            <S.Body />
            <S.Arm />
            <S.RightArm />
        </S.WholeBunney>
    )
}
