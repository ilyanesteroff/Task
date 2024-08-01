import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Fleet, Position, Location } from '../../types';
import { validateTimestamps } from '../../utils'

export interface VehiclesState {
  fleet: Fleet[] | null
  selection: {
    canGenerate: boolean
    isGenerating: boolean
    vehicle: string | null
    dates: {
      [key in Position]: number | null
    }
  }
  map: {
    center: Location | null
    markers: {
      [key in Position]: Location
    } | null
    data: {
      drivingTime: number
      drivingDistance: number
    } | null
  }
}

const today = new Date().getTime()
const initialState: VehiclesState = {
  fleet: null,
  selection: {
    vehicle: null, 
    canGenerate: false,
    isGenerating: false,
    dates: { start: today - (1000 * 60 * 60 *  24), end: today }
  },
  map: {
    data: null,
    center: null,
    markers: null
  }
}

export const vehicleSlice = createSlice({
  name: 'vehicles', initialState,
  reducers: {
    fleetLoad: (state, action: PayloadAction<Fleet[]>) => {
      state.fleet = action.payload
    },
    selectVehicle: (state, action: PayloadAction<string>) => {
      state.selection.vehicle = action.payload
      const isValidTimeInterval = validateTimestamps(state.selection.dates.start, state.selection.dates.end, (31 * 24 * 60 * 60 * 1000))
      state.selection.canGenerate = isValidTimeInterval && !!state.selection.vehicle
      if (state.map.data) state.map = initialState.map
    },
    selectDate: (state, action: PayloadAction<{ value: number | null, date: Position }>) => {
      state.selection.dates[action.payload.date] = action.payload.value
      const isValidTimeInterval = validateTimestamps(state.selection.dates.start, state.selection.dates.end, (31 * 24 * 60 * 60 * 1000))
      state.selection.canGenerate = isValidTimeInterval && !!state.selection.vehicle
      if (state.map.data) state.map = initialState.map
    },
    initRouteGeneration: (state) => {
      state.selection.isGenerating = true
    },
    loadMap: (state, action: PayloadAction<VehiclesState['map']>) => {
      state.map = action.payload
      state.selection.isGenerating = false
    }
  }
})

export const { fleetLoad, selectDate, selectVehicle, initRouteGeneration, loadMap } = vehicleSlice.actions