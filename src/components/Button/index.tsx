import React, { ButtonHTMLAttributes } from "react"
import * as S from './styles'

export type ButtonProps = {
  icon?: React.ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ icon, children, ...props }: ButtonProps) => (
  <S.Button {...props}>
    {!!icon && <S.Icon>{icon}</S.Icon>}
    {children}
  </S.Button>
)

export default Button