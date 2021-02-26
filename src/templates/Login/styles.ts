import styled, { css } from 'styled-components'
import * as InputStyles from 'components/Input/styles'

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.primary};
    position: relative;

    ${InputStyles.Wrapper} {
      width: 420px;
    }
  `}
`

export const ImageBackground = styled.img`
  width: 50%;
  padding-right: 8rem;
  height: 100vh;
  top: 8rem;
`

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 50%;
    padding: ${theme.spacings.small};
  `}

`