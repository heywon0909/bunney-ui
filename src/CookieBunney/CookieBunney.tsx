import { Bunney } from '@/common/Bunney'
import * as S from './styled'

export const CookieBunney = () => {
    return (
        <S.WholeBunney>
            <Bunney
                color={'linear-gradient(#bf8055, #ffd1b2)'}
                earColor={'linear-gradient(#67320e, #ffd1b2)'}
                eyeColor={'#171717'}
                styles={{
                    boxShadow:
                        'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
                    border: '1px solid #daa37d',
                }}
            />
        </S.WholeBunney>
    )
}
