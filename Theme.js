import { createTheme } from '@mui/material/styles';

import { teal } from '@mui/material/colors';

const lighterColor = teal[50];
const mediumColor = teal[100];
const strongerColor = teal[200]


const theme = createTheme({
  palette:{
    primary: teal,
    secondary: {
      main: lighterColor
    },
    background: mediumColor
  },
  components: {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          backgroundColor: lighterColor,
          "&.Mui-selected": {
            "&.Mui-focusVisible": { backgroundColor: mediumColor },
            backgroundColor: strongerColor
          },
          "&.Mui-focusVisible": {
            backgroundColor: mediumColor
          },
          "&&:hover": {
            backgroundColor: mediumColor
          }
        },
      }
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          backgroundColor: lighterColor
        }
      }
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: 5,
          "&:last-child": {
            paddingBottom: 1,
          } 
        }
      }
    }
  }
})


export default theme;