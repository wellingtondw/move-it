import styled, { css } from 'styled-components'
import * as InputStyles from 'components/Input/styles'

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100vh;
    background-color: ${theme.colors.primary};
    padding:  50px;

    ${InputStyles.Wrapper} {
      width: 420px;
    }
  `}
`
