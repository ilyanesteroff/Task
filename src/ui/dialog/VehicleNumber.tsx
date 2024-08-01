import React from 'react'
import { css } from 'aphrodite'
import { useSelector, useDispatch } from 'react-redux'
import { getVehicles, selectVehicle } from '../../redux'
import { useDialogFieldSection } from '../../hooks'
import { Label, Select } from '../../components'

export const VehicleNumber: React.FC = () => {
  const dispatch = useDispatch();
  const { selection, fleet } = useSelector(getVehicles)

  const style = useDialogFieldSection()

  return(
    <div className={css(style.container)}>
      <div className={css(style.label)}>
        <Label
          value="Vehicle Number"
          style={{ required: true }}
        />
      </div>
      <div className={css(style.control)}>
        <Select
          entries={fleet ? fleet.map((f) => ({label: f.carNumber, id: f.unitId.toString()})) : []}
          onSelect={(id) => dispatch(selectVehicle(id))}
          disabled={selection.isGenerating}
          placeholder="Select Vehicle"
        />
      </div>
    </div>
  )
}

export default VehicleNumber