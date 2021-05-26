import { Component, OnInit } from '@angular/core';

import {Flight} from '../model/flight';
import { FlightsService } from 'src/app/service/flights.service';
import { SelectItem } from 'primeng/api';

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
    // cities1: SelectItem[];

  // cities2: [];

  // selectedCities1: [];

  // selectedCities2: [];
  cities1: SelectItem[];

  cities2: SelectItem[];

  selectedCities1: SelectItem[];

  selectedCities2: SelectItem[];

  constructor(private flightService: FlightsService) {
    this.cities1 = [
      {label:'New York', value:{id:1, name: 'New York', code: 'NY'}},
      {label:'Rome', value:{id:2, name: 'Rome', code: 'RM'}},
      {label:'London', value:{id:3, name: 'London', code: 'LDN'}},
      {label:'Istanbul', value:{id:4, name: 'Istanbul', code: 'IST'}},
      {label:'Paris', value:{id:5, name: 'Paris', code: 'PRS'}}
    ];
  }

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
