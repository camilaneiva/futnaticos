export const theme = {
  typography: {
    caption: {
      fontSize: '10px',
      lineHeight: '14px'
    },
    body1: {
      fontSize: '12px',
      lineHeight: '16px'
    },
    subtitle: {
      fontSize: '14px',
      lineHeight: '20px'
    },
    title: {
      fontSize: '18px',
      lineHeight: '24px'
    },
    highlight: {
      fontSize: '24px',
      lineHeight: '32px'
    }
  },
  spacing: (size) => {
    return size * 4 + 'px'
  }
}
