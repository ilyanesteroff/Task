import React from 'react'
import DatePicker from 'react-date-picker';
import { css, StyleSheet } from 'aphrodite'
import { Label } from '../components'

import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

export interface DateInputProps {
  value: any
  label: string
  disabled?: boolean
  onChange(d: number | null): void
}

export const DateInput: React.FC<DateInputProps> = ({ label, disabled, onChange, value }) => {
  const stylesheet = StyleSheet.create({
    label: {
      marginBottom: 5
    }
  })

  return(
    <div>
      <div className={css(stylesheet.label)}>
        <Label
          value={label}
        />
      </div>
      <DatePicker 
        {...{value, disabled}}
        onChange={(v) => {
          const val = v as Date | null
          onChange(!!val ? (v as Date).getTime() : null)
        }}
      />
    </div>
  )
}

export default DateInput