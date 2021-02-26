import * as S from './styles'

import Button from 'components/Button'
import { InputHTMLAttributes, useState } from 'react'

export type InputProps = {
  icon?: React.ReactNode
  initialValue?: string
  onInput?: (value: string) => void
} & InputHTMLAttributes<HTMLInputElement>

const Input = ({ icon, initialValue = '', onInput,...props }: InputProps) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)  
    
    !!onInput && onInput(newValue)
  }

  return (
    <S.Wrapper>
      <S.Input {...props} onChange={onChange} value={value}/>
      {!!icon && (
        <Button icon={icon}/>
      )}
    </S.Wrapper>
  )
}

export default Input