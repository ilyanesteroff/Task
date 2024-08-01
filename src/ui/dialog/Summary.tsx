import React from 'react'
import { useSelector } from 'react-redux'
import { css, StyleSheet } from 'aphrodite'
import { convertMilliseconds } from '../../utils'
import { getVehicles } from '../../redux'
import { Label } from '../../components'

export const Summary: React.FC = () => {
  const { map } = useSelector(getVehicles)

  if(!map.data) return null
  
  const stylesheet = StyleSheet.create({
    container: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    section: {
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      width: 'calc(100% / 3)',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  })

  const fields = [
    { label: 'KM Driven', value: (map.data.drivingDistance / 1000).toString() },
    { label: 'Driving Time', value: convertMilliseconds(map.data.drivingTime) },
  ]

  return(
    <div className={css(stylesheet.container)}>
      {
        fields.map((f, i) => (
          <div 
            key={i}
            className={css(stylesheet.section)}
          >
            <div>
              <Label
                value={f.value}
              />
            </div>
            <div>
              <Label
                value={f.label}
              />
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Summary