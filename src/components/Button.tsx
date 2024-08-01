import React from 'react'
import { css, StyleSheet } from 'aphrodite'

export interface ButtonProps {
  label: string
  loading?: boolean
  disabled?: boolean
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

export const Button: React.FC<ButtonProps> = ({ label, loading, disabled,onClick }) => {
  const stylesheet = StyleSheet.create({
    container: {
      paddingTop: 10,
      borderRadius: 3,
      paddingLeft: 16,
      paddingRight: 16,
      paddingBottom: 10,
      backgroundColor: '#98CA02',
      ':disabled': {
        backgroundColor: '#7b9f0f'
      }
    },
    text: {
      color: '#FFFFFF', 
      textTransform: 'uppercase',
    }
  })

  return(
    <button
      {...{onClick}}
      disabled={disabled || loading}
      className={css(stylesheet.container)}
    >
      <span className={css(stylesheet.text)}>
        {label}
      </span>
    </button>
  )
}

export default Button