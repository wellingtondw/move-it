export default {
  border: {
    radius: '0.5px'
  },
  font: {
    primary: {
      family: 'Inter, sans-serif',
      normal: 400,
      medium: 500,
      bold: 600,
    },
    secondary: {
      family:  'Rajdhani, sans-serif',
      bold: 600,
    },
    sizes: {
      xxsmall: '0.8rem',
      xsmall: '1.6rem',
      small: '2.4rem',
      medium: '3.2rem',
      large: '4.0rem',
      xlarge: '4.8rem',
      xxlarge: '5.6rem'
    },
  },
  colors: {
    primary: '#5965E0',
    secondary: '#E83F5B',
    tertiary: '#4CD62B',
    white: '#FFFFFF',
    title: '#2E384D',
    text: '#666666',
    gray: '#DCDDE0',
    mainBg: '#F2F3F5'
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const