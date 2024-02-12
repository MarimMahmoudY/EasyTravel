import { ArrivalTerminalAirport } from "./arrivalTerminalAirport"
import { DepartureTerminalAirport } from "./departureTerminalAirport"
import { FlightAirline } from "./flightAirline"
import { FlightInfo } from "./flightInfo"
import { OperatedAirline } from "./operatedAirline"
import { SegmentDetails } from "./segmentDetails"

export interface FlightDto {
  departureOffset: number
  arrivalOffset: number
  isStopSegment: boolean
  deptTime: string
  landTime: string
  departureDate: string
  arrivalDate: string
  flightAirline: FlightAirline
  operatedAirline: OperatedAirline
  durationPerLeg: number
  departureTerminalAirport: DepartureTerminalAirport
  arrivalTerminalAirport: ArrivalTerminalAirport
  transitTime: string
  flightInfo: FlightInfo
  segmentDetails: SegmentDetails
  supplierRefID: any
}
