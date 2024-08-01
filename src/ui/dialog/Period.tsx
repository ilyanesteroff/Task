import React from 'react'
import { css, StyleSheet } from 'aphrodite'
import { useSelector, useDispatch } from 'react-redux'
import { getVehicles, selectDate } from '../../redux'
import { useDialogFieldSection } from '../../hooks'
import { Label, DateInput } from '../../components'
import { Position } from '../../types'

export const Period: React.FC = () => {
  const dispatch = useDispatch();
  const { selection } = useSelector(getVehicles)

  const style = useDialogFieldSection()
  
  const additionalStyle = StyleSheet.create({
    container: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    input: {
      flexShrink: 0,
      width: 'calc(50% - 6px)',
    }
  })

  const fields = [
    { label: 'From', value: selection.dates.start, date: Position.START },
    { label: 'To', value: selection.dates.end, date: Position.END },
  ]

  return(
    <div className={css(style.container)}>
      <div className={css(style.label)}>
        <Label value="Period" />
      </div>
      <div className={css(style.control)}>
        <div className={css(additionalStyle.container)}>
          {
            fields.map((f, i) => (
              <div 
                key={i}
                className={css(additionalStyle.input)}
              >
                <DateInput
                  label={f.label}
                  value={f.value}
                  disabled={selection.isGenerating}
                  onChange={(value) => dispatch(selectDate({ value, date: f.date }))}
                />  
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Period