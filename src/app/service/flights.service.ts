import { Injectable } from '@angular/core';
import { Flight } from "../model/flight";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable()
export class FlightsService {
  
  private MYFLIGHTS: Flight[] = [
    {"flightNumber" : "FS1298142534574", "origin": "LAX", "destination" : "LHR", "arrival": "AX", "status": "ontime", "rangenumber":"AAAtoZZZZZ", "statusOf": "displaytime", "rangenumberOf":"11111toZZZZZ", "Business": "Yes", "Economy":"NormalRange", "BusinessPlus": "YesSeat", "EconomyPlus":"NormalSeat", },
    {"flightNumber" : "FS1201172635673", "origin": "LAX", "destination" : "LHR", "arrival": "AX", "status": "ontime", "rangenumber":"AAAtoZZZZZ", "statusOf": "displaytime", "rangenumberOf":"11111toZZZZZ", "Business": "Yes", "Economy":"NormalRange", "BusinessPlus": "YesSeat", "EconomyPlus":"NormalSeat", },
    {"flightNumber" : "FS12981737388", "origin": "LAX", "destination" : "LHR", "arrival": "AX", "status": "ontime", "rangenumber":"AAAtoZZZZZ", "statusOf": "displaytime", "rangenumberOf":"11111toZZZZZ", "Business": "Yes", "Economy":"NormalRange", "BusinessPlus": "YesSeat", "EconomyPlus":"NormalSeat", },
    {"flightNumber" : "FS12018857558", "origin": "LAX", "destination" : "LHR", "arrival": "AX", "status": "ontime", "rangenumber":"AAAtoZZZZZ", "statusOf": "displaytime", "rangenumberOf":"11111toZZZZZ", "Business": "Yes", "Economy":"NormalRange", "BusinessPlus": "YesSeat", "EconomyPlus":"NormalSeat", },
    {"flightNumber" : "FS129885768575", "origin": "LAX", "destination" : "LHR", "arrival": "AX", "status": "ontime", "rangenumber":"AAAtoZZZZZ", "statusOf": "displaytime", "rangenumberOf":"11111toZZZZZ", "Business": "Yes", "Economy":"NormalRange", "BusinessPlus": "YesSeat", "EconomyPlus":"NormalSeat", },
    {"flightNumber" : "FS1201857575857", "origin": "LAX", "destination" : "LHR", "arrival": "AX", "status": "ontime", "rangenumber":"AAAtoZZZZZ", "statusOf": "displaytime", "rangenumberOf":"11111toZZZZZ", "Business": "Yes", "Economy":"NormalRange", "BusinessPlus": "YesSeat", "EconomyPlus":"NormalSeat", },
    {"flightNumber" : "FS12984875758", "origin": "LAX", "destination" : "LHR", "arrival": "AX", "status": "ontime", "rangenumber":"AAAtoZZZZZ", "statusOf": "displaytime", "rangenumberOf":"11111toZZZZZ", "Business": "Yes", "Economy":"NormalRange", "BusinessPlus": "YesSeat", "EconomyPlus":"NormalSeat", },
    {"flightNumber" : "FS12013754647", "origin": "LAX", "destination" : "LHR", "arrival": "AX", "status": "ontime", "rangenumber":"AAAtoZZZZZ", "statusOf": "displaytime", "rangenumberOf":"11111toZZZZZ", "Business": "Yes", "Economy":"NormalRange", "BusinessPlus": "YesSeat", "EconomyPlus":"NormalSeat", },
    {"flightNumber" : "FS129804857", "origin": "LAX", "destination" : "LHR", "arrival": "AX", "status": "ontime", "rangenumber":"AAAtoZZZZZ", "statusOf": "displaytime", "rangenumberOf":"11111toZZZZZ", "Business": "Yes", "Economy":"NormalRange", "BusinessPlus": "YesSeat", "EconomyPlus":"NormalSeat", },
    {"flightNumber" : "FS120109587576", "origin": "LAX", "destination" : "LHR", "arrival": "AX", "status": "ontime", "rangenumber":"AAAtoZZZZZ", "statusOf": "displaytime", "rangenumberOf":"11111toZZZZZ", "Business": "Yes", "Economy":"NormalRange", "BusinessPlus": "YesSeat", "EconomyPlus":"NormalSeat", },
    {"flightNumber" : "FS1298045875765", "origin": "LAX", "destination" : "LHR", "arrival": "AX", "status": "ontime", "rangenumber":"AAAtoZZZZZ", "statusOf": "displaytime", "rangenumberOf":"11111toZZZZZ", "Business": "Yes", "Economy":"NormalRange", "BusinessPlus": "YesSeat", "EconomyPlus":"NormalSeat", },
    {"flightNumber" : "FS12018576564647", "origin": "LAX", "destination" : "LHR", "arrival": "AX", "status": "ontime", "rangenumber":"AAAtoZZZZZ", "statusOf": "displaytime", "rangenumberOf":"11111toZZZZZ", "Business": "Yes", "Economy":"NormalRange", "BusinessPlus": "YesSeat", "EconomyPlus":"NormalSeat", },
    {"flightNumber" : "FS1298857756464", "origin": "LAX", "destination" : "LHR", "arrival": "AX", "status": "ontime", "rangenumber":"AAAtoZZZZZ", "statusOf": "displaytime", "rangenumberOf":"11111toZZZZZ", "Business": "Yes", "Economy":"NormalRange", "BusinessPlus": "YesSeat", "EconomyPlus":"NormalSeat", },
    {"flightNumber" : "FS120189576447", "origin": "LAX", "destination" : "LHR", "arrival": "AX", "status": "ontime", "rangenumber":"AAAtoZZZZZ", "statusOf": "displaytime", "rangenumberOf":"11111toZZZZZ", "Business": "Yes", "Economy":"NormalRange", "BusinessPlus": "YesSeat", "EconomyPlus":"NormalSeat", },
    {"flightNumber" : "FS129887767877", "origin": "LAX", "destination" : "LHR", "arrival": "AX", "status": "ontime", "rangenumber":"AAAtoZZZZZ", "statusOf": "displaytime", "rangenumberOf":"11111toZZZZZ", "Business": "Yes", "Economy":"NormalRange", "BusinessPlus": "YesSeat", "EconomyPlus":"NormalSeat", },
    {"flightNumber" : "FS12019587564664", "origin": "LAX", "destination" : "LHR", "arrival": "AX", "status": "ontime", "rangenumber":"AAAtoZZZZZ", "statusOf": "displaytime", "rangenumberOf":"11111toZZZZZ", "Business": "Yes", "Economy":"NormalRange", "BusinessPlus": "YesSeat", "EconomyPlus":"NormalSeat", },
    {"flightNumber" : "FS12988595875757", "origin": "LAX", "destination" : "LHR", "arrival": "AX", "status": "ontime", "rangenumber":"AAAtoZZZZZ", "statusOf": "displaytime", "rangenumberOf":"11111toZZZZZ", "Business": "Yes", "Economy":"NormalRange", "BusinessPlus": "YesSeat", "EconomyPlus":"NormalSeat", },
    {"flightNumber" : "FS1201857745646", "origin": "LAX", "destination" : "LHR", "arrival": "AX", "status": "ontime", "rangenumber":"AAAtoZZZZZ", "statusOf": "displaytime", "rangenumberOf":"11111toZZZZZ", "Business": "Yes", "Economy":"NormalRange", "BusinessPlus": "YesSeat", "EconomyPlus":"NormalSeat", },
    {"flightNumber" : "FS129887574646", "origin": "LAX", "destination" : "LHR", "arrival": "AX", "status": "ontime", "rangenumber":"AAAtoZZZZZ", "statusOf": "displaytime", "rangenumberOf":"11111toZZZZZ", "Business": "Yes", "Economy":"NormalRange", "BusinessPlus": "YesSeat", "EconomyPlus":"NormalSeat", },
    {"flightNumber" : "FS1201984876456464747", "origin": "LAX", "destination" : "LHR", "arrival": "AX", "status": "ontime", "rangenumber":"AAAtoZZZZZ", "statusOf": "displaytime", "rangenumberOf":"11111toZZZZZ", "Business": "Yes", "Economy":"NormalRange", "BusinessPlus": "YesSeat", "EconomyPlus":"NormalSeat", },
  ];

  constructor(private http: HttpClient) { }

  // to test with local mock data
  public getFlightsMockData() : Flight[]{
    return this.MYFLIGHTS;
  }

  // to test with service api 
  public getFlightsData() : Observable<Flight[]>{
    let url = "http://localhost:8080/flights";
    return this.http.get<Flight[]>(url);
  }
}