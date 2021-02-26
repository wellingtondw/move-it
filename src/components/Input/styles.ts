import styled, { css } from 'styled-components'
import * as ButtonStyles from 'components/Button/styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    height: 8rem;

    ${ButtonStyles.Button} {
      width: 8rem;
      border-radius: 0 ${theme.border.radius} ${theme.border.radius} 0;
    }
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;
    background: linear-gradient(90deg, #4953B8 0%, rgba(73, 83, 184, 0.2) 100%);
    border-radius: ${theme.border.radius} 0 0 ${theme.border.radius};
    font-size: ${theme.font.sizes.small};
    padding-left: ${theme.spacings.small};
    color: ${theme.colors.secondaryText};
    border: none;
    outline: none;

    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.secondaryText};
    }

    &::placeholder {
      color: ${theme.colors.secondaryText};
    }
  `}
`