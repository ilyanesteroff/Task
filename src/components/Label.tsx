import React from 'react'
import { css, CSSPropertiesComplete, StyleSheet } from 'aphrodite'

export interface LabelProps {
  value: string
  style?: {
    size?: number
    color?: string
    required?: boolean
    weight?: CSSPropertiesComplete['fontWeight']
  }
}

export const Label: React.FC<LabelProps> = ({ value, style = {} }) => {
  if(!style.color) style.color = '#384045'
  if(!style.weight) style.weight = 400
  if(!style.size) style.size = 14
  
  const stylesheet = StyleSheet.create({
    container: {
      fontSize: style.size,
      fontWeight: style.weight,
      lineHeight: `${style.size + 5}px`
    },
    text: {
      color: style.color
    },
    requred: {
      color: '#FF4141',
      fontSize: style.size,
      lineHeight: `${style.size + 5}px`
    }
  })

  return(
    <div className={css(stylesheet.container)}>
      <span className={css(stylesheet.text)}>{value}</span>
      {style.required && <span className={css(stylesheet.requred)}>*</span>}
    </div>
  )
}

export default Label