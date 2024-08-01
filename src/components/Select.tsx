import React from 'react'
import Selector from 'react-select'

export interface SelectProps {
  placeholder: string
  disabled?: boolean
  selected?: string
  entries: {
    id: string
    label: string
  }[]
  onSelect(id: string): void
}

export const Select: React.FC<SelectProps> = ({ placeholder, disabled, selected, entries, onSelect }) => {
  return(
    <div>
      <Selector
        value={selected}
        {...{placeholder}}
        isDisabled={disabled}
        onChange={(v: any) => onSelect(v.value)}
        options={entries.map((e) => ({ label: e.label, value: e.id })) as any}
      />
    </div>
  )
}

export default Select