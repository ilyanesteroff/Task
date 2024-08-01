import React from 'react'
import { css, StyleSheet } from 'aphrodite'
import { Logo } from '../assets'

const Header: React.FC= () => {
  const stylesheet = StyleSheet.create({
    container: {
      height: 80,
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  })

  return(
    <div className={css(stylesheet.container)}>
      <Logo/>
    </div>
  )
}

export default Header