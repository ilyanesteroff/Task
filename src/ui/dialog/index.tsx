import React from 'react'
import { useSelector } from 'react-redux'
import { css, StyleSheet } from 'aphrodite'
import { getVehicles } from '../../redux'
// import Map from '../../components/Map'
import Content from './Content'
import Footer from './Footer'

const Dialog: React.FC = () => {
  const store = useSelector(getVehicles)

  console.log(store)

  const stylesheet = StyleSheet.create({
    container: {
      width: 600,
      borderRadius: 3,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: 100,
      backgroundColor: '#FFFFFF',
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.08), 0px 2px 14px rgba(0, 0, 0, 0.06)'
    }
  })

  return(
    <div className={css(stylesheet.container)}>
      <Content/>
      {/* <Map/> */}
      <Footer/>
    </div>
  )
}

export default Dialog
