import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithTheme } from 'utils/tests/helpers'
import { RightArrowAlt } from '@styled-icons/boxicons-regular/RightArrowAlt'

import Input from '.'

describe('<Input />', () => {
  it('should render correctly', () => {
    const {container} = renderWithTheme(<Input placeholder='move it'/>)

    expect(screen.getByPlaceholderText('move it')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render with button', () => {
    renderWithTheme(<Input  icon={<RightArrowAlt />}/>)

    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('changes value when typing', async () => {
    const onInput = jest.fn()
    renderWithTheme(<Input onInput={onInput} />)

    const input = screen.getByRole('textbox')
    const text = 'This is my new text'

    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(onInput).toHaveBeenCalledTimes(text.length)
    })
    expect(onInput).toHaveBeenCalledWith(text)
  })

  it('Is accessible by tab', () => {
    renderWithTheme(<Input />)

    const input = screen.getByRole('textbox')
    expect(document.body).toHaveFocus()

    userEvent.tab()
    expect(input).toHaveFocus()
  })
})
