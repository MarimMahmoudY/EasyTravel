import { FlightAirline2 } from "./flightAirline2"
import { FlightDto } from "./flightDTO"

export interface Flights {
  flightDTO: FlightDto[]
  flightAirline: FlightAirline2
  elapsedTime: number
  stopsNum: number
}
