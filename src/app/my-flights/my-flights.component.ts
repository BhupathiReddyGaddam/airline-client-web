import { Component, OnInit } from '@angular/core';

import {Flight} from '../model/flight';
import { FlightsService } from 'src/app/service/flights.service';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-my-flights',
  templateUrl: './my-flights.component.html',
  styleUrls: ['./my-flights.component.scss']
})
export class MyFlightsComponent implements OnInit {
  public flights : Flight[];

  constructor(private flightService: FlightsService) {}

  public cities: City[] = [
    {name: 'New York', code: 'NY'},
    {name: 'Rome', code: 'RM'},
    {name: 'London', code: 'LDN'},
    {name: 'Istanbul', code: 'IST'},
    {name: 'Paris', code: 'PRS'},
    {name: 'Tel Aviv', code: 'TLV'},
    {name: 'Jerusalem', code: 'JSM'}
  ];

  public selectedCity: City;

  ngOnInit() {
    this.flights = this.flightService.getFlightsMockData();
    //this.getFlightsData();
  }

  // get the data from backend service api
  private getFlightsData() {
    this.flightService.getFlightsData().subscribe(data => {
      this.flights = data;
    });
  }
}
