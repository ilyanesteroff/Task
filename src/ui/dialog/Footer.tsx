import React from 'react'
import { css, StyleSheet } from 'aphrodite'
import { useSelector, useDispatch } from 'react-redux'
import { getVehicles, initRouteGeneration } from '../../redux'
import { Button } from '../../components'

const Footer: React.FC = () => {
  const dispatch = useDispatch()
  const { selection } = useSelector(getVehicles)

  const stylesheet = StyleSheet.create({
    container: {
      width: '100%',
      paddingTop: 16,
      paddingLeft: 24,
      paddingRight: 24,
      paddingBottom: 16,
      backgroundColor: '#F4F4F4'
    },
    position: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end'
    }
  })

  const onClick = () => {
    dispatch(initRouteGeneration())
  }

  return(
    <footer className={css(stylesheet.container)}>
      <div className={css(stylesheet.position)}>
        <Button
          {...{onClick}}
          label="Generate"
          disabled={!selection.canGenerate || selection.isGenerating}
        />
      </div>
    </footer>
  )
}

export default Footer
