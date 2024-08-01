
export enum RouteType {
  ROUTE = 'route',
  STOP = 'stop'
}

export interface UnitAPIResponse {
  unit_id: number
  number: string
}

export interface RouteAPIResponse {
  routes: {
    avg_speed: number
    distance: number
    type: RouteType
    end?: {
      address: string
      time: string
      lat: number
      lng: number
    }
    start: {
      address: string
      time: string
      lat: number
      lng: number
    }
  }[]
  unit_id: number
}

export interface Fleet {
  unitId: number
  carNumber: string
}

export interface Location { 
  lat: number
  lng: number 
}

export enum Position {
  START = 'start',
  END = 'end'
}
