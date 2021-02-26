import * as S from './styles'

import { RightArrowAlt } from '@styled-icons/boxicons-regular/RightArrowAlt'
import Input  from 'components/Input'

const Login = () => {
  return (
    <S.Container>
    
    <Input placeholder='Digite seu username' icon={<RightArrowAlt />}/>
    </S.Container>
  )
}

export default Login