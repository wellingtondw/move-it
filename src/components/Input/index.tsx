import * as S from './styles'

import Button from 'components/Button'
import { InputHTMLAttributes } from 'react'

export type InputProps = {
  icon: React.ReactNode
} & InputHTMLAttributes<HTMLInputElement>

const Input = ({ icon, ...props }: InputProps) => {
  return (
    <S.Wrapper>
      <S.Input {...props}/>

      {!!icon && (
        <Button icon={icon}/>
      )}
    </S.Wrapper>
  )
}

export default Input