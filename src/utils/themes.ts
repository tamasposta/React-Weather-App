export type Theme = {
    colors: {
      body: string
      blockbg: string
      whitetp: string
      white: string
    }

    breakpoints: {
      xxlarge: string
      extralarge: string
      large: string
      medium: string
    }
  }

  export type ThemePropsType = {
    theme: Theme
  }
  
  export const theme: Theme = {
    colors: {
      body: 'linear-gradient(#2dd6fc, #4342ca)',
      blockbg: 'rgba(30, 50, 150, 0.6)',
      whitetp: 'rgba(255, 255, 255, 0.2)',
      white: 'rgb(255, 255, 255)'
    },
  
    breakpoints: {
        xxlarge: '1448px',
        extralarge: '1035px',
        large: '900px',
        medium: '768px'
    }
  }