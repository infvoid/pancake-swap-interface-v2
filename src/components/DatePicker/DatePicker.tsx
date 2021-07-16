import React from 'react'
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker'
import { Input, InputProps } from '@pancakeswap-libs/uikit'

import 'react-datepicker/dist/react-datepicker.css'

export interface DatePickerProps extends ReactDatePickerProps {
  inputProps?: InputProps
  showTimeSelect?: any
  showTimeSelectOnly?: any
  timeIntervals?: any
  timeCaption?: any
  dateFormat?: any
  name?: any
  onChange?: any
  selected?: any
  placeholderText?: any
}

const DatePicker: React.FC<DatePickerProps> = ({ inputProps = {}, ...props }) => {
  return (
    <ReactDatePicker customInput={<Input {...inputProps} />} portalId="reactDatePicker" dateFormat="PPP" {...props} />
  )
}

export default DatePicker
