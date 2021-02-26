import styled, { css } from 'styled-components'

export const Button = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: ${theme.colors.blue};
    border: none;
    outline: none;
    cursor: pointer;

    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.secondaryText};
    }

  `}
`

export const Icon = styled.div`
${({ theme }) => css`
    width: ${theme.spacings.large};
    height:  ${theme.spacings.large};

    & > svg {
      width: 100%;
      color: ${theme.colors.white};
    }
  `}
`