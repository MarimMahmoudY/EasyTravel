import { Component, OnInit } from '@angular/core';
import { Flights } from 'src/app/interfaces/flights';
import { FlightsService } from 'src/app/services/flights.service';

@Component({
  selector: 'app-flight-result',
  templateUrl: './flight-result.component.html',
  styleUrls: ['./flight-result.component.scss']
})
export class FlightResultComponent implements OnInit {

  airItineraries:any[]=[] //____“airItineraries” -> “allJourney” -> “flights” -> “flightDTO”
  airlines:any[]=[] //---------------filter component
  searchCriteria:any[]=[]
  cabinClasses:any[]=[]
  EgyCities:string[]=["Cairo"]
  OutEgy:string[]=["Kuwit"]
  flights:Flights[]=[]

  from:any=""
  to:any=""
  date:any
  loaded:boolean=false


  r=[1]

  constructor(private service:FlightsService){}

  ngOnInit():void{
    //this.getAirLines()
  }

  getAirLines(){
    this.service.getAllAirLines().subscribe((res:any)=>{

      this.airItineraries=res.airItineraries
      this.airlines=res.airlines
      this.searchCriteria=res.searchCriteria
      this.cabinClasses=res.cabinClasses
    },error=>{
        alert("Error")
      })
  }
  getSearchItems(){
    this.service.getAllAirLines().subscribe((res:any)=>{
      this.airItineraries=res.airItineraries
    },error=>{
        alert("Error")
      })
  }
//---------------------------------------------
  fromCity(from:any){
    this.from=from.target.value
  }
  toCity(to:any){
    this.to=to.target.value
  }
  getDate(date:any){
    this.date=date.target.value
  }
//----------------------------------------------
  getSearchResult(){
    //console.log(this.to, this.from,this.date)
    this.service.getAllAirLines().subscribe((res:any)=>{
      this.airItineraries=res.airItineraries
      this.flights=this.airItineraries[0].allJourney.flights
      console.log(this.flights)
    },error=>{
        alert("Error")
      })
    this.loaded=true
  }
}
