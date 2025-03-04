import styled from 'styled-components';

type Props = {
  /** this dictates what the button will do  */
  onClick(e: React.MouseEvent<HTMLElement>): void;
  /**
   * Select Button Style
   *
   * @default 'default'
   **/
  btnStyle: string;
  /**
   * Select Button Size
   *
   * @default 'md'
   **/
  btnSize: string;
  /**
   * Specify if the button is disabled
   *
   * @default false
   **/
  disabled?: boolean;
  /**
   * Specify if the button is selected
   *
   * @default false
   **/
  selected?: boolean;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};

const SPaginationButton = styled.button`
  background: ${(props: Props) =>
    props.selected
      ? props.theme.pagination.selectedBackground
      : props.theme.pagination.background}
  border: 1px solid ${(props: Props) => props.theme.pagination.borderColor};
  padding: ${(props: Props) =>
    props.theme.table.pagination.button.padding[props.btnSize]}
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) => props.theme.common[props.btnSize].fontSize}
  font-weight: ${(props: Props) =>
    props.theme.table.pagination.button.fontWeight};
  color: ${(props: Props) => props.theme.pagination.text};
  outline: none;
  &:hover {
    background: ${(props: Props) => props.theme.pagination.hoverBackground};
    border: 1px solid ${(props: Props) =>
      props.theme.pagination.hoverBorderColor};
    cursor: pointer;
  }
  &:disabled {
    background: ${(props: Props) => props.theme.pagination.disabledBackground}
    border: 1px solid ${(props: Props) =>
      props.theme.pagination.disabledBorderColor}
    cursor: not-allowed;
  }
  &[data-selected] {
    border: 1px solid ${(props: Props) =>
      props.theme.styles['primary'].borderColor};
    color: ${(props: Props) => props.theme.styles['primary'].text};
    font-weight: ${(props: Props) =>
      props.theme.table.pagination.button.fontWeightSelected};
  }
`;

export default SPaginationButton;
