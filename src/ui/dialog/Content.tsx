import React from 'react'
import { css, StyleSheet } from 'aphrodite'
import VehicleNumber from './VehicleNumber'
import { Label } from '../../components'
import Summary from './Summary'
import Period from './Period'

const Content: React.FC = () => {
  const stylesheet = StyleSheet.create({
    container: {
      width: 600,
      borderRadius: 3,
      marginLeft: 'auto',
      marginRight: 'auto',
      backgroundColor: '#FFFFFF',
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.08), 0px 2px 14px rgba(0, 0, 0, 0.06)'
    },
    position: {
      paddingTop: 32,
      paddingLeft: 24,
      paddingRight: 24,
      paddingBottom: 32,
    },
    title: { marginBottom: 32 },
    section: { marginBottom: 16 },
  })

  return(
    <div className={css(stylesheet.container)}>
      <div className={css(stylesheet.position)}>
        <div className={css(stylesheet.title)}>
          <Label
            value="Route Report"
            style={{ size: 24 }}
          />
        </div>
        <div className={css(stylesheet.section)}>
          <VehicleNumber/>
        </div>
        <div className={css(stylesheet.section)}>
          <Period/>
        </div>
        <div className={css(stylesheet.section)}>
          <Summary/>
        </div>
      </div>
    </div>
  )
}

export default Content
