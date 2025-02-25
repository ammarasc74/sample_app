import {createTheme} from '@shopify/restyle';

const palette = {
  //Black
  primaryBlack: '#19171A',

  //Red
  primaryRed: '#99000A',

  //White
  primaryWhite: '#fff',
  //White
  primaryBlue: 'blue',

  transparent: 'transparent',
};

const theme = createTheme({
  colors: {
    background: palette.primaryWhite,
    black: palette.primaryBlack,
    red: palette.primaryRed,
    white: palette.primaryWhite,
    blue: palette.primaryBlue,
  },
  spacing: {
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 30,
    xxl: 40,
    xxxl: 62,
    null: 0,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  buttonVariants: {
    defaults: {
      height: 48,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
      width: '100%',
    },

    disabled: {
      backgroundColor: 'buttonDisabledBackground',
    },
  },
  textVariants: {
    defaults: {},
    header: {
      fontSize: 32,
      fontFamily: 'Montserrat-Bold',
      lineHeight: 40,
      textAlign: 'center',
      color: 'black',
      fontWeight: '700',
    },

    subHeader: {
      fontSize: 26,
      fontFamily: 'Montserrat-Regular',
      lineHeight: 34,
      textAlign: 'center',
      color: 'black',
    },

    content: {
      fontSize: 18,
      fontFamily: 'Montserrat-Light',
      lineHeight: 26,
      textAlign: 'center',
      color: 'black',
    },
    link: {
      fontSize: 18,
      fontFamily: 'Montserrat-Light',
      lineHeight: 26,
      textAlign: 'center',
      textDecorationLine: 'underline',
      color: 'blue',
    },
  },

  boxVariants: {
    avatarBox: {
      width: 160,
      height: 160,
      borderRadius: 160,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      borderWidth: 1,
      borderColor: 'avatarBoxBorderColor',
      backgroundColor: 'avatarBoxBackground',
      position: 'relative',
      overflow: 'hidden',
    },
    iconInputWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
    },
    avatarUserChat: {
      width: 48,
      height: 48,
      borderRadius: 48,
      overflow: 'hidden',
      borderWidth: 1,
      borderColor: 'avatarBoxBorderColor',
    },
  },
});

export type Theme = typeof theme;
export default theme;
