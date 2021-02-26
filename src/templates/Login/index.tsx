import * as S from './styles'

import { RightArrowAlt } from '@styled-icons/boxicons-regular/RightArrowAlt'
import Input  from 'components/Input'

const Login = () => {
  return (
    <S.Container>    
      <S.ImageBackground src='images/move-bg.svg' />
       
      <S.Wrapper>
        <Input placeholder='Digite seu username' icon={<RightArrowAlt />}/>
      </S.Wrapper>
    </S.Container>
  )
}

export default Login