import {createTheme} from '@shopify/restyle';

const palette = {
  //Black
  primaryBlack: '#19171A',

  //Red
  primaryRed: '#99000A',

  //White
  primaryWhite: '#fff',

  transparent: 'transparent',
};

const theme = createTheme({
  colors: {
    background: palette.primaryWhite,
    black: palette.primaryBlack,
    red: palette.primaryRed,
    white: palette.primaryWhite,
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

    buttonLabel: {
      fontSize: 18,
      fontFamily: 'Montserrat-Regular',
      color: 'defaultTextColor',
    },
    buttonWhiteLabel: {
      fontSize: 18,
      fontFamily: 'Montserrat-Regular',
      color: 'buttonWhitePrimaryText',
    },
    outlinedButtonLabel: {
      fontSize: 18,
      fontFamily: 'Montserrat-Regular',
      color: 'buttonRedPrimaryBackground',
    },
    header: {
      fontSize: 22,
      fontFamily: 'Montserrat-Bold',
      lineHeight: 20,
      textAlign: 'center',
      color: 'black',
    },

    subHeader: {
      fontSize: 20,
      fontFamily: 'Montserrat',
      // fontFamily: 'Montserrat-Regular',
      lineHeight: 24,
      textAlign: 'center',
      color: 'black',
    },

    content: {
      fontSize: 20,
      fontFamily: 'Montserrat-Light',
      lineHeight: 24,
      textAlign: 'center',
      color: 'black',
    },
    codeInputText: {
      fontFamily: 'Montserrat',
      fontWeight: '500',
      width: 42,
      height: 51,
      lineHeight: 49,
      fontSize: 32,
      // borderBottomWidth: 1,
      // borderBottomColor: 'buttonDisabledBackground',
      textAlign: 'center',
      color: 'black',
    },
    divider: {
      width: '100%',
      backgroundColor: 'divider',
      height: 1,
      marginVertical: 'm',
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
