import { lighten } from "../utils/colorUtils";

export { ThemeProvider } from "styled-components";

const toggleColors = {
  toggleBg: "#D1D4D5",
  disabledToggleBg: "#ECEDED",
  inactiveDisabledToggle: lighten("#8D9599", 10),
  inactiveDisabledBorderToggle: lighten("#8D9599", 10)
};

export const cobaltColors = {
  blue: "#0072CE",
  green: "#59C067",
  red: "#FC4C02",
  yellow: "#FAB64A",
  white: "white",
  gray: "#727A80",
  lightGray: "#BCC0C3",
  mediumGray: "#C9CDCE",
  darkGray: "#515C61",
  black: "#303E47",
  placeholderGray: "#727A80",
  secondaryDisabled: "#ECEDED",
  disabledBackground: "#ECEFF2",
  disabledBorder: "#A3AAAD",
  disabledText: "#A3AAAD",
  lightBackground: "#F5F7F8",

  primary: "#0072CE",
  primaryDark: "#004ABF",
  primaryLight: "#7EB7E6",
  primaryExtraLight: "#EDF5FD",
  success: "#59C067",
  successDark: "#00A254",
  successLight: "#7EDEB6",
  successExtraLight: "#E8FCF0",
  danger: "#FC4C02",
  dangerDark: "#CC3602",
  dangerLight: "#FDA47F",
  dangerExtraLight: "#FCEFF0",
  warning: "#FAB64A",
  warningDark: "#E29823",
  warningLight: "#FCDAA3",
  warningExtraLight: "#FAF0E0",
  secondary: "#A7ADB1",
  secondaryDark: "#888F93",
  secondaryLight: "#D2D5D7",
  secondaryExtraLight: "#ECEFF2"
};

export const cobaltTheme = {
  colors: cobaltColors,
  borders: {
    radius: "1px",
    radiusSm: "3.2px",
    radiusLg: "4.8px",
    width: "1px"
  },
  styles: {
    primary: {
      borderColor: cobaltColors.primary,
      flood: cobaltColors.primary,
      disabledFlood: cobaltColors.primaryLight,
      lightFlood: cobaltColors.primaryLight,
      hoverlightFlood: cobaltColors.primaryLight,
      text: cobaltColors.primary,
      reverseText: cobaltColors.white,
      hoverFlood: cobaltColors.primaryDark,
      selectedFlood: cobaltColors.primaryDark,
      badgeBackground: cobaltColors.primary,
      badgeColor: cobaltColors.white,
      alertColor: cobaltColors.white,
      alertBackground: cobaltColors.primary,
      light: {
        alertBackground: cobaltColors.primaryExtraLight,
        alertColor: cobaltColors.black
      }
    },
    secondary: {
      borderColor: cobaltColors.secondary,
      alertColor: cobaltColors.white,
      alertBackground: cobaltColors.secondary,
      light: {
        alertBackground: cobaltColors.secondaryExtraLight,
        alertColor: cobaltColors.black
      }
    },
    danger: {
      borderColor: cobaltColors.danger,
      flood: cobaltColors.danger,
      disabledFlood: cobaltColors.dangerLight,
      lightFlood: cobaltColors.dangerLight,
      hoverlightFlood: cobaltColors.dangerLight,
      text: cobaltColors.danger,
      reverseText: cobaltColors.white,
      hoverFlood: cobaltColors.dangerDark,
      selectedFlood: cobaltColors.dangerDark,
      badgeBackground: cobaltColors.danger,
      badgeColor: cobaltColors.white,
      alertColor: cobaltColors.white,
      alertBackground: cobaltColors.danger,
      light: {
        alertBackground: cobaltColors.dangerExtraLight,
        alertColor: cobaltColors.black
      }
    },
    warning: {
      borderColor: cobaltColors.warning,
      flood: cobaltColors.warning,
      disabledFlood: cobaltColors.warningLight,
      lightFlood: cobaltColors.warningLight,
      hoverlightFlood: cobaltColors.warningLight,
      text: cobaltColors.warning,
      reverseText: cobaltColors.white,
      hoverFlood: cobaltColors.warningDark,
      selectedFlood: cobaltColors.warningDark,
      badgeBackground: cobaltColors.warning,
      badgeColor: cobaltColors.white,
      alertColor: cobaltColors.white,
      alertBackground: cobaltColors.warning,
      light: {
        alertBackground: cobaltColors.warningExtraLight,
        alertColor: cobaltColors.black
      }
    },
    success: {
      borderColor: cobaltColors.success,
      flood: cobaltColors.success,
      disabledFlood: cobaltColors.successLight,
      lightFlood: cobaltColors.successLight,
      hoverlightFlood: cobaltColors.successLight,
      text: cobaltColors.success,
      reverseText: cobaltColors.white,
      hoverFlood: cobaltColors.successDark,
      selectedFlood: cobaltColors.successDark,
      badgeBackground: cobaltColors.success,
      badgeColor: cobaltColors.white,
      alertColor: cobaltColors.white,
      alertBackground: cobaltColors.success,
      light: {
        alertBackground: cobaltColors.successExtraLight,
        alertColor: cobaltColors.black
      }
    },
    default: {
      borderColor: cobaltColors.secondary,
      flood: cobaltColors.secondary,
      disabledFlood: cobaltColors.secondaryLight,
      lightFlood: cobaltColors.secondaryLight,
      hoverlightFlood: cobaltColors.secondaryLight,
      text: cobaltColors.primary,
      reverseText: cobaltColors.white,
      hoverFlood: cobaltColors.secondaryDark,
      selectedFlood: cobaltColors.secondaryDark,
      badgeBackground: cobaltColors.secondary,
      badgeColor: cobaltColors.black,
      alertColor: cobaltColors.black,
      alertBackground: cobaltColors.secondary
    }
  },
  pagination: {
    text: cobaltColors.black,
    fontWeight: "normal",
    background: cobaltColors.white,
    borderColor: cobaltColors.white,
    activeText: cobaltColors.blue,
    activeFontWeight: "bold",
    activeBackground: cobaltColors.white,
    activeBorderColor: cobaltColors.blue,
    disabledText: cobaltColors.gray,
    disabledBackground: cobaltColors.white,
    disabledBorderColor: cobaltColors.white,
    hoverBackground: cobaltColors.white,
    hoverBorderColor: cobaltColors.white,
    borderRadius: "1px",
    button: {
      disabledText: cobaltColors.disabledText,
      fontWeight: "normal",
      fontWeightSelected: "bold",
      padding: {
        sm: "3px 6px",
        md: "4px 8px",
        lg: "5px 10px"
      },
      nextPrevious: {
        fontWeight: "bold"
      }
    }
  },
  typography: {
    fontFamily: 'Gilroy, "Open Sans", arial, sans-serif',
    secondaryFontFamily: '',
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '18px',
    color: cobaltColors.black,
    headline: {
      fontWeight: '300',
      fontSize: '27px',
      lineHeight: '125%',
    },
    sectionHeader: {
      fontWeight: '500',
      fontSize: '16px',
      borderWidth: '1px',
      borderColor: '#8D9599',
      borderStyle: 'solid',
    },
    display: {
      fontWeight: '400',
      fontSize: '22px',
      lineHeight: '25px',
    },
    title: {
      fontWeight: '700',
      fontSize: '18px',
      lineHeight: '22px',
    },
    subTitle: {
      fontWeight: '300',
      fontSize: '18px',
      lineHeight: '135%',
    },
    caption: {
      fontWeight: '300',
      fontSize: '12px',
    },
    subHeading: {
      fontWeight: '500',
      fontSize: '16px',
    },
    link: {
      fontWeight: '500',
      fontSize: '14px',
      color: cobaltColors.blue,
      textDecoration: 'none',
      visited: {
        color: lighten(cobaltColors.blue, 40),
        textDecoration: 'underline',
      },
      hover: {
        color: cobaltColors.blue,
        textDecoration: 'underline',
      },
    },
    digits: {
      fontWeight: '700',
      fontSize: '18px',
    },
    tooltip: {
      background: cobaltColors.primary,
      borderRadius: '1px',
    },
    popover: {
      background: cobaltColors.white,
      color: cobaltColors.black,
      borderRadius: '1px',
      borderColor: cobaltColors.lightGray,
    },
    pre: {
      background: cobaltColors.lightBackground,
      fontFamily: '"Roboto Mono", Courier, monospace',
      fontSize: '100%',
      lineHeight: '100%',
    },
    code: {
      background: cobaltColors.lightBackground,
      fontFamily:
        '"Roboto Mono", Consolas, "Andale Mono", "DejaVu Sans Mono", monospace',
      fontSize: '95%',
      lineHeight: '140%',
    },
  },
  input: {
    background: cobaltColors.white,
    borderColor: cobaltColors.secondary,
    color: cobaltColors.darkGray,
    padding: "6px 12px",
    placeholderColor: cobaltColors.placeholderGray,
    disabled: {
      background: cobaltColors.disabledBackground,
      borderColor: cobaltColors.disabledBorder
    }
  },
  inputGroup: {
    root: {
      display: "flex",
      flexWrap: "wrap"
    }
  },
  radioButton: {
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: cobaltColors.secondary,
    disabledText: cobaltColors.disabledText,
    unselectedColor: cobaltColors.white,
    sm: {
      size: "6px"
    },
    md: {
      size: "10px"
    },
    lg: {
      size: "14px"
    }
  },
  checkbox: {
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: cobaltColors.secondary,
    disabledText: cobaltColors.disabledText,
    unselectedColor: cobaltColors.white,
    sm: {
      size: "6px"
    },
    md: {
      size: "10px"
    },
    lg: {
      size: "14px"
    }
  },
  toggle: {
    background: {
      inactiveColor: toggleColors.toggleBg,
      inactiveBorderColor: toggleColors.toggleBg,
      activeColor: toggleColors.toggleBg,
      activeBorderColor: toggleColors.toggleBg,
      disabled: toggleColors.disabledToggleBg,
      disabledBorderColor: toggleColors.disabledToggleBg
    },
    inactiveColor: cobaltColors.secondary,
    inactiveBorderColor: cobaltColors.secondary,
    activeColor: cobaltColors.primary,
    activeBorderColor: cobaltColors.primary,
    activeDisabledColor: cobaltColors.primaryLight,
    activeDisabledBorderColor: cobaltColors.primaryLight,
    inactiveDisabledColor: toggleColors.inactiveDisabledToggle,
    inactiveDisabledBorderColor: toggleColors.inactiveDisabledToggle,
    sm: {
      toggleSize: "20px",
      toggleOffsetTop: "-3px",
      toggleOffsetLeft: "0px",
      activeOffset: "0px",
      backgroundHeight: "15px",
      backgroundWidth: "35px"
    },
    md: {
      toggleSize: "25px",
      toggleOffsetTop: "-5px",
      toggleOffsetLeft: "0px",
      activeOffset: "0px",
      backgroundHeight: "15px",
      backgroundWidth: "45px"
    },
    lg: {
      toggleSize: "30px",
      toggleOffsetTop: "-5px",
      toggleOffsetLeft: "0px",
      activeOffset: "0px",
      backgroundHeight: "20px",
      backgroundWidth: "55px"
    }
  },
  label: {
    padding: "9px 8px"
  },
  modal: {
    header: {
      minHeight: '0',
      backgroundColor: cobaltColors.lightBackground,
      borderColor: cobaltColors.lightGray,
      padding: '16px 16px',
      fontSize: '16px',
      color: cobaltColors.black
    },
    body: {
      minHeight: '0',
      backgroundColor: cobaltColors.lightBackground,
      borderBottom: cobaltColors.lightGray,
      padding: '8px 16px',
      color: cobaltColors.black

    },
    footer: {
      minHeight: '0',
      backgroundColor: cobaltColors.lightBackground,
      borderColor: cobaltColors.lightGray,
      padding: '8px 16px',
    },
    sm: {
      width: '300px',
    },
    md: {
      width: '745px',
    },
    lg: {
      width: '1220px',
    },
  },
  textarea: {
    background: cobaltColors.white,
    backgroundDisabled: cobaltColors.secondaryExtraLight,
    borderColor: cobaltColors.secondary,
    color: cobaltColors.black,
    padding: "6px 12px",
    placeholderColor: cobaltColors.placeholderGray,
    disabled: {
      background: cobaltColors.disabledBackground,
      borderColor: cobaltColors.secondaryLight
    }
  },
  panel: {
    header: {
      padding: "14px 16px 14px 30px"
    },
    body: {
      padding: "30px 30px"
    },
    borderWidth: "1px"
  },
  badge: {
    borderRadius: "4px",
    fontSize: "15px",
    padding: "4px 3px 3px",
    sm: {
      borderRadius: "4px",
      fontSize: "12px",
      padding: "4px 3px 3px"
    },
    md: {
      borderRadius: "4px",
      fontSize: "15px",
      padding: "4px 3px 3px"
    },
    lg: {
      borderRadius: "4px",
      fontSize: "18px",
      padding: "4px 3px 3px"
    }
  },
  alert: {
    borderRadius: "1px",
    fontSize: "14px",
    padding: "8px 16px",
    fontWeight: "bold",
    lineHeight: "18px"
  },
  popover: {
    borderColor: cobaltColors.lightGray,
    background: cobaltColors.white,
    withArrowDistance: 10,
    withoutArrowDistance: 3
  },
  common: {
    sm: {
      borderRadius: "1px",
      fontSize: "11px",
      padding: "4px 8px",
      tableCellPadding: "5px 0",
      inputIconSize: "14px"
    },
    md: {
      borderRadius: "1px",
      fontSize: "14px",
      padding: "8px 14px",
      tableCellPadding: "9px 0",
      inputIconSize: "20px"
    },
    lg: {
      borderRadius: "1px",
      fontSize: "16px",
      padding: "10px 16px",
      tableCellPadding: "11px 0",
      inputIconSize: "24px"
    }
  },
  validation: {
    borderColor: "red",
    errorTextColor: cobaltColors.placeholderGray,
    fontSize: "11px",
    padding: "4px"
  },
  table: {
    fontSize: "14px",
    header: {
      borderBottomColor: cobaltColors.darkGray,
      color: cobaltColors.black,
      fontWeight: "normal"
    },
    row: {
      borderBottomColor: cobaltColors.mediumGray,
      hoverColor: cobaltColors.mediumGray
    },
    pagination: {
      padding: "4px 0",
      button: {
        disabledText: cobaltColors.disabledText,
        fontWeight: "normal",
        fontWeightSelected: "bold",
        padding: {
          sm: "3px 6px",
          md: "4px 8px",
          lg: "5px 10px"
        },
        nextPrevious: {
          fontWeight: "regular"
        }
      }
    }
  },
  datepicker: {
    sm: {
      margins: {
        dayPickerWraper: "16px 0",
        dayPickerMonth: "16px 16px auto",
        dayPickerCaption: "4.8px auto 32px"
      },
      btnPrev: {
        left: "32px"
      },
      btnNext: {
        right: "35.2px"
      }
    },
    md: {
      margins: {
        dayPickerWraper: "24px 0",
        dayPickerMonth: "16px 24px auto",
        dayPickerCaption: "4.8px auto 48px"
      },
      btnPrev: {
        left: "48px"
      },
      btnNext: {
        right: "51.2px"
      }
    },
    lg: {
      margins: {
        dayPickerWraper: "24px 0",
        dayPickerMonth: "16px 24px auto",
        dayPickerCaption: "4.8px auto 48px"
      },
      btnPrev: {
        left: "48px"
      },
      btnNext: {
        right: "51.2px"
      }
    }
  },
  tabs: {
    borderRadius: "0px",
    fontSize: "14px"
  },
  copyToClipboard: {
    fontFamily: "monospace",
    fontSize: "14px",
    color: cobaltColors.primary,
    copiedColor: cobaltColors.placeholderGray,
    padding: "16px",
    button: {
      textTransform: "uppercase",
      height: "20px",
      fontWeight: "600",
      primaryColor: cobaltColors.blue,
      successColor: cobaltColors.green,
      margin: "0 4px"
    }
  },
  navbar: {
    height: "64px",
    background: cobaltColors.white,
    padding: "0 45px ",
    borderTop: "",
    borderBottom: "",
    color: cobaltColors.black
  }
};
