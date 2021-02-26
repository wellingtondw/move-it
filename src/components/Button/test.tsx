import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { RightArrowAlt } from '@styled-icons/boxicons-regular/RightArrowAlt'

import Button from '.'

describe('<Button />', () => {
  it('should render the button correctly', () => {
    const { container } = renderWithTheme(<Button>Move it</Button>)

    expect(
      screen.getByRole('button', { name: /move it/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render with icon', () => {
    renderWithTheme(<Button icon={<RightArrowAlt data-testid={'icon'}/>}>Move it</Button>)

    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })
})