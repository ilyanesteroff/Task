import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UnitAPIResponse, RouteAPIResponse, Location, RouteType } from "../types";
import { fleetLoad, getVehicles, loadMap } from '../redux';
import { API_KEY } from '../constants';
import { formatDate } from '../utils';
import { useAPI } from '.';

export const useVehicles = () => {
  const dispatch = useDispatch();
  const { selection } = useSelector(getVehicles)

  const { API } = useAPI()

  const fetchingUnits = useRef(false)
  const generatingRoute = useRef(false)
  
  useEffect(() => {
    if(!fetchingUnits.current) {
      fetchingUnits.current = true

      const params = new URLSearchParams()

      params.set('key', API_KEY)

      API({ path: '/unit/list.json', params, method: 'GET' }).then((res) => {
        const fleet = res.data.data.units.map((u: UnitAPIResponse) => ({ unitId: u.unit_id, carNumber: u.number }))
  
        dispatch(fleetLoad(fleet))
      })
    }
  }, [])

  useEffect(() => {
    if(selection.isGenerating && !generatingRoute.current) {
      generatingRoute.current = true

      const params = new URLSearchParams()
      
      params.set('key', API_KEY)
      params.set('from', formatDate(selection.dates.start!))
      params.set('till', formatDate(selection.dates.end!))
      params.set('unit_id', selection.vehicle!)
      params.set('include', 'decoded_route')

      API({ path: '/route/list.json', params, method: 'GET' }).then((res) => {
        const data = res.data.data.units[0] as RouteAPIResponse

        let drivingTime = 0
        let drivingDistance = 0
        let center: Location
        let start: Location
        let end: Location
        
        start = { lng: data.routes[0].start.lng, lat: data.routes[0].start.lat }
        end = { lng: data.routes[data.routes.length - 1].start.lng, lat: data.routes[data.routes.length - 1].start.lat }
        center = { lng: (start.lng + end.lng) / 2, lat: (start.lat + end.lat) / 2 }
        
        data.routes.forEach((d) => {
          if (d.type === RouteType.ROUTE) {
            if (d.end) drivingTime += new Date(d.end.time).getTime() - new Date(d.start.time).getTime() 
            if (d.distance) drivingDistance += d.distance 
          }
        })

        dispatch(loadMap({ center, data: { drivingDistance, drivingTime }, markers: { start, end } }))
        generatingRoute.current = false
      })
    }
  }, [selection.isGenerating])
}