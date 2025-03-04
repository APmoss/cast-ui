import * as React from 'react';
import uuid from 'uuid';
import ErrorMessage from '../Typography/ErrorMessage/index';
import styled, { ThemeProvider } from 'styled-components';
import { SingleDatePicker, SingleDatePickerShape } from 'react-dates';
import { Moment } from 'moment';
import { Themes } from '../themes';

type momentDate = Moment | null;
type pickerSize = 'sm' | 'md' | 'lg';
type pickerStyle =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger';
type focusInput = boolean | null;
type focused = { focused: focusInput };

export interface Props extends SingleDatePickerShape {
  /**
   * Set className
   *
   * @default ''
   **/
  className: string;
  /**
   * The ID of the control
   *
   * @default null
   **/
  wrapperId?: string;
  /**
   * Select DatePicker Size
   *
   * @default 'md'
   **/
  datePickerSize?: pickerSize;
  /**
   * Select DatePicker style.
   *
   * @default 'primary'
   **/
  datePickerStyle?: pickerStyle;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
  /**
   * Specify whether the control is currently invalid
   *
   * @default false
   **/
  invalid?: boolean;
  /**
   * Provide the text that is displayed when the control is in an invalid state
   */
  invalidText?: string;
  /**
   * Color of the invalid text
   *
   * @default ''
   **/
  invalidTextColor?: string;
}

type State = {
  focused: focusInput;
  date: momentDate;
};

const SWrapperComponent = styled.div<Partial<Props>>`
  font-family: ${(props: Partial<Props>) => props.theme.typography.fontFamily};
  font-size: ${(props: Partial<Props>) =>
    props.theme.common[props.datePickerSize!].fontSize}
  color: ${(props: Partial<Props>) =>
    props.theme.styles[props.datePickerStyle!].text};
  input {
    box-sizing: border-box;
    padding: ${(props: Partial<Props>) =>
      props.theme.common[props.datePickerSize!].padding}
    border-radius: ${(props: Partial<Props>) =>
      props.theme.common[props.datePickerSize!].borderRadius};
  }
  .DateRangePickerInput, .SingleDatePickerInput {
    border: ${(props: Partial<Props>) => props.theme.input.border};
  }
  .SingleDatePickerInput {
    background: ${(props: Partial<Props>) => props.theme.colors.white};
    display: flex;
  }
  .DateInput {
    width: 110px;
  }
  .DateInput_input {
    line-height: ${(props: Partial<Props>) =>
      `${parseInt(props.theme.common[props.datePickerSize!].fontSize, 10) +
        1}px`};
    font-size: ${(props: Partial<Props>) =>
      `${parseInt(props.theme.common[props.datePickerSize!].fontSize, 10) +
        1}px`};
    height: 100%;
  }
  .SingleDatePicker_picker {
    z-index: ${(props: Partial<Props>) => props.theme.datepicker.zIndex};
  }
  DateRangePickerInput_arrow_svg {
    height: ${(props: Partial<Props>) =>
      `${parseInt(props.theme.common[props.datePickerSize!].fontSize, 10) +
        2}px`};
    width: ${(props: Partial<Props>) =>
      `${parseInt(props.theme.common[props.datePickerSize!].fontSize, 10) +
        2}px`};
  }
  .DateInput_input__small {
    line-height: unset;
    padding: 11px 11px 9px;
  }
  .DateInput_input__focused {
    border-bottom-color: transparent;
  }
  .DayPickerKeyboardShortcuts_show__bottomRight::before {
    border-right: 33px solid ${(props: Partial<Props>) =>
      props.theme.styles[props.datePickerStyle!].borderColor};
  }
  .CalendarDay__selected {
    background: ${(props: Partial<Props>) =>
      props.theme.styles[props.datePickerStyle!].borderColor};
    border-color: ${(props: Partial<Props>) =>
      props.theme.styles[props.datePickerStyle!].borderColor};
  }
`;

export class DatePicker extends React.PureComponent<Props> {
  static defaultProps = {
    className: '',
    id: uuid.v4(),
    wrapperId: uuid.v4(),
    datePickerSize: 'md',
    datePickerStyle: 'primary',
    date: null,
    focused: null,
    onDateChange: null,
    onFocusChange: null,
    invalid: false,
    invalidText: '',
    invalidTextColor: '',
    theme: Themes.defaultTheme,
  };

  state: State = {
    focused: null,
    date: null,
  };

  onDateChange = (event: momentDate) =>
    this.props.onDateChange instanceof Function
      ? this.props.onDateChange(event)
      : this.setState(
          {
            date: event,
          },
          () => console.log(event),
        );

  onFocusChange = (input: focused) =>
    this.props.onFocusChange instanceof Function
      ? this.props.onFocusChange(input)
      : this.setState(
          {
            focused: input.focused,
          },
          () => console.log(input),
        );

  render() {
    const {
      theme,
      className,
      id,
      wrapperId,
      datePickerSize,
      datePickerStyle,

      date,
      focused,
      onDateChange,
      onFocusChange,

      /**
       * override sizes from react-dates
       */
      small,
      regular,
      block,
      invalid,
      invalidText,
      invalidTextColor,
      ...props
    } = this.props;
    const errorId = invalid ? `${id}-error-msg` : '';
    return (
      <ThemeProvider theme={theme}>
        <SWrapperComponent
          id={wrapperId!}
          className={className}
          datePickerSize={datePickerSize}
          datePickerStyle={datePickerStyle}
          data-invalid={invalid ? '' : undefined}
          aria-invalid={invalid ? true : undefined}
          aria-describedby={errorId}
        >
          <SingleDatePicker
            id={id!}
            date={date || this.state.date}
            focused={!!focused || !!this.state.focused}
            onFocusChange={this.onFocusChange}
            onDateChange={this.onDateChange}
            showDefaultInputIcon={true}
            numberOfMonths={1}
            {...props}
          />
          {invalid && (
            <ErrorMessage
              id={errorId}
              message={invalidText || ''}
              textColor={invalidTextColor || ''}
            />
          )}
        </SWrapperComponent>
      </ThemeProvider>
    );
  }
}
