import { lighten, darken } from '../utils/colorUtils';

export { ThemeProvider } from 'styled-components';

export const defaultColors = {
  white: '#ffffff',
  black: '#000000',
  highlight400: '#E8EEFD',
  highlight200: '#E8EEFD',
  drk800: '#303E47',
  drk600: '#687279',
  drk400: '#A7ADB1',
  drk200: '#C6CACC',
  lt800: '#DADCDE',
  lt600: '#E6E8EA',
  lt400: '#F0F2F4',
  lt200: '#F5F7F8',
  primary: '#167BE0',
  primaryHover: darken('#167BE0', 25),
  primaryFaded: lighten('#167BE0', 25),
  primaryBackground: lighten('#167BE0', 50),
  success: '#59C067',
  successHover: darken('#59C067', 25),
  successFaded: lighten('#59C067', 25),
  successBackground: lighten('#59C067', 50),
  danger: '#D93945',
  dangerHover: darken('#D93945', 25),
  dangerFaded: lighten('#D93945', 25),
  dangerBackground: lighten('#D93945', 50),
  warning: '#FD984E',
  warningHover: darken('#FD984E', 25),
  warningFaded: lighten('#FD984E', 25),
  warningBackground: lighten('#FD984E', 50),
  secondary: '#727A80',
  secondaryHover: darken('#727A80', 25),
  secondaryFaded: lighten('#727A80', 25),
  secondaryBackground: lighten('#727A80', 50),
};

export const defaultTheme = {
  name: 'Default',
  colors: defaultColors,
  borders: {
    radius: '1px',
    radiusSm: '.2rem',
    radiusLg: '.3rem',
    width: '1px',
  },
  styles: {
    primary: {
      borderColor: defaultColors.primary,
      flood: defaultColors.primary,
      disabledFlood: defaultColors.primaryFaded,
      lightFlood: defaultColors.primaryFaded,
      hoverlightFlood: defaultColors.primaryFaded,
      text: defaultColors.primary,
      reverseText: defaultColors.white,
      hoverFlood: defaultColors.primaryHover,
      selectedFlood: defaultColors.primaryHover,
      badgeBackground: defaultColors.primary,
      badgeColor: defaultColors.white,
      alertColor: defaultColors.white,
      alertBackground: defaultColors.primary,
      light: {
        alertBackground: defaultColors.primaryFaded,
        alertColor: defaultColors.black,
        badgeBackground: defaultColors.primaryFaded,
        badgeColor: defaultColors.black,
      },
      cardTopBorderColor: defaultColors.primary,
    },
    secondary: {
      borderColor: defaultColors.secondary,
      flood: defaultColors.secondary,
      disabledFlood: defaultColors.secondaryFaded,
      lightFlood: defaultColors.secondaryFaded,
      hoverlightFlood: defaultColors.secondaryFaded,
      text: defaultColors.primary,
      reverseText: defaultColors.white,
      hoverFlood: defaultColors.secondaryHover,
      selectedFlood: defaultColors.secondaryHover,
      badgeBackground: defaultColors.secondary,
      badgeColor: defaultColors.black,
      alertColor: defaultColors.black,
      alertBackground: defaultColors.secondary,
      light: {
        alertBackground: defaultColors.secondaryFaded,
        alertColor: defaultColors.black,
        badgeBackground: defaultColors.secondaryFaded,
        badgeColor: defaultColors.black,
      },
      cardTopBorderColor: defaultColors.secondary,
    },
    danger: {
      borderColor: defaultColors.danger,
      flood: defaultColors.danger,
      disabledFlood: defaultColors.dangerFaded,
      lightFlood: defaultColors.dangerFaded,
      hoverlightFlood: defaultColors.dangerFaded,
      text: defaultColors.danger,
      reverseText: defaultColors.white,
      hoverFlood: defaultColors.dangerHover,
      selectedFlood: defaultColors.dangerHover,
      badgeBackground: defaultColors.danger,
      badgeColor: defaultColors.white,
      alertColor: defaultColors.white,
      alertBackground: defaultColors.danger,
      light: {
        alertBackground: defaultColors.dangerFaded,
        alertColor: defaultColors.black,
        badgeBackground: defaultColors.dangerFaded,
        badgeColor: defaultColors.black,
      },
      cardTopBorderColor: defaultColors.danger,
    },
    warning: {
      borderColor: defaultColors.warning,
      flood: defaultColors.warning,
      disabledFlood: defaultColors.warningFaded,
      lightFlood: defaultColors.warningFaded,
      hoverlightFlood: defaultColors.warningFaded,
      text: defaultColors.warning,
      reverseText: defaultColors.white,
      hoverFlood: defaultColors.warningHover,
      selectedFlood: defaultColors.warningHover,
      badgeBackground: defaultColors.warning,
      badgeColor: defaultColors.white,
      alertColor: defaultColors.white,
      alertBackground: defaultColors.warning,
      light: {
        alertBackground: defaultColors.warningFaded,
        alertColor: defaultColors.black,
        badgeBackground: defaultColors.warningFaded,
        badgeColor: defaultColors.black,
      },
      cardTopBorderColor: defaultColors.warning,
    },
    success: {
      borderColor: defaultColors.success,
      flood: defaultColors.success,
      disabledFlood: defaultColors.successFaded,
      lightFlood: defaultColors.successFaded,
      hoverlightFlood: defaultColors.successFaded,
      text: defaultColors.success,
      reverseText: defaultColors.white,
      hoverFlood: defaultColors.successHover,
      selectedFlood: defaultColors.successHover,
      badgeBackground: defaultColors.success,
      badgeColor: defaultColors.white,
      alertColor: defaultColors.white,
      alertBackground: defaultColors.success,
      light: {
        alertBackground: defaultColors.successFaded,
        alertColor: defaultColors.black,
        badgeBackground: defaultColors.successFaded,
        badgeColor: defaultColors.black,
      },
      cardTopBorderColor: defaultColors.success,
    },
  },
  pagination: {
    text: defaultColors.black,
    fontWeight: 'normal',
    background: defaultColors.white,
    borderColor: defaultColors.white,
    activeText: defaultColors.primary,
    activeFontWeight: 'bold',
    activeBackground: defaultColors.white,
    activeBorderColor: defaultColors.primary,
    disabledText: defaultColors.secondary,
    disabledBackground: defaultColors.white,
    disabledBorderColor: defaultColors.white,
    hoverBackground: defaultColors.white,
    hoverBorderColor: defaultColors.white,
    borderRadius: '1px',
    button: {
      disabledText: defaultColors.lt600,
      fontWeight: 'normal',
      fontWeightSelected: 'bold',
      padding: {
        sm: '3px 6px',
        md: '4px 8px',
        lg: '5px 10px',
      },
      nextPrevious: {
        fontWeight: 'bold',
      },
    },
  },
  body: {
    fontFamily: 'Roboto, "Open Sans", arial, sans-serif',
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '160%',
    color: defaultColors.primary,
    backgroundColor: defaultColors.white,
  },
  button: {
    outlineBackgroundColor: 'none',
  },
  typography: {
    fontFamily: 'Roboto, "Open Sans", arial, sans-serif',
    secondaryFontFamily: '',
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '160%',
    color: defaultColors.primary,
    caption: {
      fontWeight: '300',
      fontSize: '12px',
      lineHeight: '18px',
    },
    code: {
      background: defaultColors.lt200,
      fontFamily:
        '"Roboto Mono", Consolas, "Andale Mono", "DejaVu Sans Mono", monospace',
      fontSize: '95%',
      lineHeight: '140%',
    },
    digits: {
      fontWeight: '700',
      fontSize: '18px',
    },
    display: {
      fontWeight: '400',
      fontSize: '37px',
      lineHeight: '120%',
    },
    headline: {
      fontWeight: '300',
      fontSize: '27px',
      lineHeight: '125%',
    },
    link: {
      fontWeight: '500',
      fontSize: '14px',
      color: defaultColors.primary,
      textDecoration: 'none',
      visited: {
        color: lighten(defaultColors.primary, 40),
        textDecoration: 'underline',
      },
      hover: {
        color: defaultColors.primary,
        textDecoration: 'underline',
      },
    },
    pre: {
      background: defaultColors.lt200,
      fontFamily: '"Roboto Mono", Courier, monospace',
      fontSize: '100%',
      lineHeight: '100%',
    },
    sectionHeader: {
      fontWeight: '500',
      fontSize: '16px',
      borderWidth: '1px',
      borderColor: '#8D9599',
      borderStyle: 'solid',
    },
    subHeading: {
      fontWeight: '500',
      fontSize: '16px',
    },
    subTitle: {
      fontWeight: '300',
      fontSize: '18px',
      lineHeight: '135%',
    },
    title: {
      fontWeight: '500',
      fontSize: '20px',
      lineHeight: '130%',
    },
  },
  input: {
    background: defaultColors.white,
    border: `1px solid ${defaultColors.secondary}`,
    color: defaultColors.secondaryHover,
    padding: '.375rem .75rem',
    placeholderColor: defaultColors.drk400,
    disabled: {
      background: defaultColors.lt600,
      border: `1px solid ${defaultColors.lt600}`,
    },
  },
  inputGroup: {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      color: defaultColors.primary,
    },
    label: {
      padding: '8px 16px 8px 0',
      fontWeight: 500,
    },
  },
  radioButton: {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: defaultColors.secondary,
    disabledText: defaultColors.lt600,
    unselectedColor: defaultColors.white,
    stackedSpacing: '10px',
    inlineSpacing: '20px',
    sm: {
      size: '6px',
    },
    md: {
      size: '10px',
    },
    lg: {
      size: '14px',
    },
  },
  checkbox: {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: defaultColors.secondary,
    disabledText: defaultColors.lt600,
    unselectedColor: defaultColors.white,
    stackedSpacing: '19px',
    inlineSpacing: '20px',
    sm: {
      size: '6px',
    },
    md: {
      size: '10px',
    },
    lg: {
      size: '14px',
    },
  },
  toggle: {
    background: {
      inactiveColor: defaultColors.lt800,
      inactiveBorderColor: defaultColors.lt800,
      activeColor: defaultColors.lt800,
      activeBorderColor: defaultColors.lt800,
      disabled: defaultColors.lt400,
      disabledBorderColor: defaultColors.lt400,
    },
    inactiveColor: defaultColors.secondary,
    inactiveBorderColor: defaultColors.secondary,
    activeColor: defaultColors.primary,
    activeBorderColor: defaultColors.primary,
    activeDisabledColor: defaultColors.primaryFaded,
    activeDisabledBorderColor: defaultColors.primaryFaded,
    inactiveDisabledColor: defaultColors.drk200,
    inactiveDisabledBorderColor: defaultColors.drk200,
    sm: {
      toggleSize: '20px',
      toggleOffsetTop: '-3px',
      toggleOffsetLeft: '0px',
      activeOffset: '0px',
      backgroundHeight: '15px',
      backgroundWidth: '35px',
    },
    md: {
      toggleSize: '25px',
      toggleOffsetTop: '-5px',
      toggleOffsetLeft: '0px',
      activeOffset: '0px',
      backgroundHeight: '15px',
      backgroundWidth: '45px',
    },
    lg: {
      toggleSize: '30px',
      toggleOffsetTop: '-5px',
      toggleOffsetLeft: '0px',
      activeOffset: '0px',
      backgroundHeight: '20px',
      backgroundWidth: '55px',
    },
  },
  label: {
    padding: '9px 8px',
  },
  modal: {
    header: {
      minHeight: '0',
      backgroundColor: defaultColors.lt200,
      borderColor: defaultColors.secondaryFaded,
      padding: '16px 16px',
      fontSize: '16px',
    },
    body: {
      minHeight: '0',
      backgroundColor: defaultColors.lt200,
      borderBottom: defaultColors.secondaryFaded,
      padding: '8px 16px',
    },
    footer: {
      minHeight: '0',
      backgroundColor: defaultColors.lt200,
      borderColor: defaultColors.secondaryFaded,
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
    background: defaultColors.white,
    backgroundDisabled: defaultColors.secondaryFaded,
    borderColor: defaultColors.secondary,
    color: defaultColors.secondaryHover,
    padding: '.375rem .75rem',
    placeholderColor: defaultColors.drk400,
    disabled: {
      background: defaultColors.lt600,
      borderColor: defaultColors.drk400,
    },
  },
  panel: {
    header: {
      padding: '14px 16px 14px 30px',
    },
    body: {
      padding: '30px 30px',
    },
    borderWidth: '1px',
    bodyBackgroundColor: defaultColors.lt200,
    bodyBorderColor: defaultColors.secondaryFaded,
    headerColor: defaultColors.primary,
    headerBackgroundColor: defaultColors.white,
    headerBorderColor: defaultColors.secondaryFaded,
  },
  badge: {
    borderRadius: '10px',
    fontSize: '10px',
    padding: '4px 10px',
    sm: {
      borderRadius: '10px',
      fontSize: '10px',
      padding: '4px 10px',
    },
    md: {
      borderRadius: '12px',
      fontSize: '12px',
      padding: '4px 10px',
    },
    lg: {
      borderRadius: '14px',
      fontSize: '14px',
      padding: '4px 10px',
    },
  },
  alert: {
    borderRadius: '0px',
    fontSize: '14px',
    display: 'block',
    padding: '8px 16px',
    fontWeight: 'bold',
    lineHeight: '18px',
  },
  card: {
    borderRadius: '2px',
    borderColor: defaultColors.lt800,
    fontSize: '14px',
    padding: '8px 16px',
    background: defaultColors.white,
    boxShadow: '0 2px 4px rgba(0,0,0,.075) !important;',
    highlightAllBorderWidth: '1px',
    highlightedBorderWidth: '5px',
  },
  popover: {
    withArrowDistance: 10,
    withoutArrowDistance: 9,
    background: defaultColors.white,
    color: defaultColors.black,
    borderRadius: '1px',
    borderColor: defaultColors.secondaryFaded,
    boxShadow: `0 0 5px ${defaultColors.secondaryFaded}`,
  },
  tooltip: {
    background: defaultColors.primary,
    borderRadius: '1px',
  },
  common: {
    sm: {
      borderRadius: '1px',
      fontSize: '11px',
      padding: '4px 8px',
      tableCellPadding: '5px 0',
      inputIconSize: '14px',
    },
    md: {
      borderRadius: '1px',
      fontSize: '14px',
      padding: '8px 14px',
      tableCellPadding: '9px 0',
      inputIconSize: '20px',
    },
    lg: {
      borderRadius: '1px',
      fontSize: '16px',
      padding: '10px 16px',
      tableCellPadding: '11px 0',
      inputIconSize: '24px',
    },
  },
  validation: {
    borderColor: defaultColors.danger,
    color: defaultColors.drk400,
    fontSize: '11px',
    fontStyle: 'italic',
    padding: '4px',
  },
  table: {
    fontSize: '14px',
    header: {
      borderBottomColor: defaultColors.secondaryHover,
      color: defaultColors.primary,
      fontWeight: 'normal',
    },
    row: {
      borderBottomColor: defaultColors.secondaryFaded,
      hoverColor: defaultColors.secondaryFaded,
    },
    pagination: {
      padding: '4px 0',
      button: {
        disabledText: defaultColors.lt600,
        fontWeight: 'normal',
        fontWeightSelected: 'bold',
        padding: {
          sm: '3px 6px',
          md: '4px 8px',
          lg: '5px 10px',
        },
        nextPrevious: {
          fontWeight: 'bold',
        },
      },
    },
  },
  datepicker: {
    position: 'absolute',
    zIndex: 99,
    sm: {
      margins: {
        dayPickerWraper: '1rem 0',
        dayPickerMonth: '1rem 1rem auto',
        dayPickerCaption: '.3rem auto 2rem',
      },
      btnPrev: {
        left: '2rem',
      },
      btnNext: {
        right: '2.2rem',
      },
    },
    md: {
      margins: {
        dayPickerWraper: '1.5rem 0',
        dayPickerMonth: '1rem 1.5rem auto',
        dayPickerCaption: '.3rem auto 3rem',
      },
      btnPrev: {
        left: '3rem',
      },
      btnNext: {
        right: '3.2rem',
      },
    },
    lg: {
      margins: {
        dayPickerWraper: '1.5rem 0',
        dayPickerMonth: '1rem 1.5rem auto',
        dayPickerCaption: '.3rem auto 3rem',
      },
      btnPrev: {
        left: '3rem',
      },
      btnNext: {
        right: '3.2rem',
      },
    },
  },
  tabs: {
    borderRadius: '0px',
    fontSize: '14px',
  },
  copyToClipboard: {
    fontFamily: 'monospace',
    fontSize: '14px',
    color: defaultColors.primary,
    background: defaultColors.lt200,
    copiedColor: defaultColors.drk400,
    padding: '16px',
    button: {
      textTransform: 'uppercase',
      height: '20px',
      fontWeight: '600',
      primaryColor: defaultColors.primary,
      successColor: defaultColors.success,
      margin: '0 4px',
    },
  },
  navbar: {
    height: '60px',
    background: defaultColors.white,
    padding: '0 32px ',
    borderTop: '',
    borderBottom: '',
    color: defaultColors.primary,
  },
  tabnav: {
    background: lighten(defaultColors.primary, 45),
    padding: '0 32px ',
    borderTop: '',
    borderBottom: '',
    color: defaultColors.primary,
    tab: {
      padding: '4px 0 8px',
      margin: '0 56px 0 0',
      color: 'inherit',
      fontWeight: 'inherit',
      cursor: 'pointer',
      background: 'transparent',
      opacity: '1',
      bottomBorderWidth: '0',
      bottomBorderColor: 'transparent',
      transition: 'opacity 0.15s',
      iconColor: defaultColors.primary,
    },
    activetab: {
      color: defaultColors.primary,
      fontWeight: 700,
      cursor: 'pointer',
      background: 'transparent',
      opacity: '1',
      bottomBorderWidth: '4px',
      bottomBorderColor: defaultColors.primary,
      iconColor: defaultColors.primary,
    },
    tabDropdown: {
      color: defaultColors.primary,
      background: defaultColors.white,
      padding: '8px 16px',
      hoverColor: defaultColors.primary,
      hoverBackground: defaultColors.lt200,
    },
  },
  sidenav: {
    fontSize: '14px',
    color: defaultColors.primary,
    height: '',
    width: '50px',
    openWidth: '220px',
    background: defaultColors.lt200,
    padding: '',
    margin: '',
    zIndex: 5,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 'auto',
    borderLeft: '',
    borderRight: `1px solid ${defaultColors.lt800}`,
    transition: 'min-width 0.15s',
    secondaryNavbar: {
      width: '0px',
      openWidth: '170px',
      background: defaultColors.white,
      padding: '80px 0 16px',
      margin: '',
      zIndex: 4,
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 'auto',
      borderLeft: '',
      borderRight: `1px solid ${defaultColors.lt800}`,
      transition: 'left 0.15s',
    },
    nav: {
      padding: '',
      margin: '',
    },
    toggle: {
      height: '80px',
      cursor: 'pointer',
      padding: '0 12px',
      borderBottom: `1px solid ${defaultColors.lt800}`,
      display: 'grid',
    },
    navItem: {
      color: 'inherit',
      fontWeight: 'inherit',
      cursor: 'pointer',
      background: 'transparent',
      opacity: '1',
      leftBorderWidth: '0',
      leftBorderColor: 'transparent',
      topNavBorderBottom: `1px solid ${defaultColors.lt800}`,
      bottonNavBorderBottom: '',
      transition: 'opacity 0.15s',
    },
    activenavItem: {
      color: defaultColors.primary,
      fontWeight: 700,
      cursor: 'pointer',
      background: defaultColors.white,
      opacity: '1',
      leftBorderWidth: '4px',
      leftBorderColor: defaultColors.primary,
      topNavBorderBottom: `1px solid ${defaultColors.lt800}`,
      bottonNavBorderBottom: '',
    },
    activeSecnavItem: {
      color: defaultColors.primary,
      fontWeight: 700,
      background: defaultColors.lt200,
    },
    itemToggle: {
      position: 'absolute',
      right: '0',
      background: defaultColors.lt200,
      height: '100%',
      width: '30px',
      display: 'flex',
    },
    navIcon: {
      padding: '8px 0 8px 12px',
    },
    navText: {
      padding: '8px 0 8px 12px',
    },
  },
  spinner: {
    backgroundColor: defaultColors.secondaryFaded,
    borderColor: defaultColors.primary,
  },
  itemContainer: {
    borderColor: defaultColors.secondaryFaded,
  },
  draggable: {
    borderColor: defaultColors.secondaryFaded,
  },
  select: {
    dropdownColor: defaultColors.primary,
    optionBackgroundColor: defaultColors.secondaryFaded,
    hoverOptionBackgroundColor: defaultColors.primaryFaded,
    borderColor: defaultColors.secondaryFaded,
  },
};
